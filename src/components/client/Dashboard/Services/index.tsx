"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useAPI from "@/hooks/useAPI";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import Divider from "@/components/client/global/Divider";
import ServicesComp from "./ServicesComp";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";
import servicesConfig from "./config";
import { ServicesProps } from "../../Services/Main/services";

import styles from "./style.module.scss";

const { formData, submitHandler } = servicesConfig;

export default function Main() {
    const [services, setServices] = useState<ServicesProps[]>([]);
    const [currentService, setCurrentService] = useState<ServicesProps | null>(
        null
    );
    const [mode, setMode] = useState<"add" | "edit">("add");

    const { response, apiRequest } = useAPI({
        url: APIUrlsConstants.service,
    });

    useEffect(() => {
        setServices(response?.data);
    }, [response]);

    const handleEdit = (service: any) => {
        setCurrentService({
            ...service,
            subServices: service?.subServices
                .map((service: any) => service.text)
                .join(" ، "),
        });
        setMode("edit");
    };

    const fetchAndSetServices = async () => {
        const response: any = await apiRequest({
            url: APIUrlsConstants.service,
        });
        setServices(response?.data);
    };

    const handleDelete = async (id: string) => {
        await APIConfig.delete(`${APIUrlsConstants.service}/${id}`).then(
            async (response) => {
                toast.success(response?.data?.message, {
                    rtl: false,
                });
                await fetchAndSetServices();
            }
        );
    };

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({ ...data });
        if (response?.success) {
            await fetchAndSetServices();
            setCurrentService(null);
            setMode("add");
            return response;
        } else {
            return null;
        }
    };
    return (
        <div className={styles.services}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={currentService || {}}
                id={currentService?._id}
                blogsPage
            />
            <Divider />
            <ServicesComp
                data={services}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useAPI from "@/hooks/useAPI";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import Divider from "@/components/client/global/Divider";
import SectionTitle from "@/components/client/global/SectionTitle";
import PartnerCards from "../../Home/Partners/Cards";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

import partnersConfig from "./config";

import { PartnerProps } from "../../Home/Partners/partners";

import styles from "./style.module.scss";

const { formData, submitHandler } = partnersConfig;

export default function Main() {
    const [partners, setPartners] = useState<PartnerProps[]>([]);
    const [currentPartner, setCurrentPartner] = useState<PartnerProps | null>(
        null
    );
    const [mode, setMode] = useState<"add" | "edit">("add");

    const { response, loading, apiRequest } = useAPI({
        url: APIUrlsConstants.partner,
    });

    useEffect(() => {
        setPartners(response?.data);
    }, [response]);

    const handleEdit = (partner: any) => {
        setCurrentPartner(partner);
        setMode("edit");
    };

    const fetchAndSetPartners = async () => {
        const response: any = await apiRequest({
            url: APIUrlsConstants.partner,
        });
        setPartners(response?.data);
    };

    const handleDelete = async (id: string) => {
        await APIConfig.delete(`${APIUrlsConstants.partner}/${id}`).then(
            async (response) => {
                toast.success(response?.data?.message, {
                    rtl: false,
                });
                await fetchAndSetPartners();
            }
        );
    };

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({ ...data, files: data?.image });
        if (response?.success) {
            await fetchAndSetPartners();
            setCurrentPartner(null);
            setMode("add");
            return response;
        } else {
            return null;
        }
    };
    return (
        <div className={styles.partners}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={currentPartner || { name: "", url: "" }}
                id={currentPartner?._id}
            />
            <Divider />
            <SectionTitle title="العملاء" enableAOS={false} />
            <PartnerCards
                inDashboard={true}
                data={partners}
                loading={loading}
                handleDelete={handleDelete}
            />
        </div>
    );
}

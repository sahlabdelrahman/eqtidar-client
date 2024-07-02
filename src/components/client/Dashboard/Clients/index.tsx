"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useAPI from "@/hooks/useAPI";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import Divider from "@/components/client/global/Divider";
import SectionTitle from "@/components/client/global/SectionTitle";
import ClientCards from "../../Home/Clients/Cards";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";
import clientsConfig from "./config";
import { ClientProps } from "../../Home/Clients/clients";

import styles from "./style.module.scss";

const { formData, submitHandler } = clientsConfig;

export default function Main() {
    const [clients, setClients] = useState<ClientProps[]>([]);
    const [currentClient, setCurrentClient] = useState<ClientProps | null>(
        null
    );
    const [mode, setMode] = useState<"add" | "edit">("add");

    const { response, loading, apiRequest } = useAPI({
        url: APIUrlsConstants.client,
    });

    useEffect(() => {
        setClients(response?.data);
    }, [response]);

    const handleEdit = (client: any) => {
        setCurrentClient(client);
        setMode("edit");
    };

    const fetchAndSetClients = async () => {
        const response: any = await apiRequest({
            url: APIUrlsConstants.client,
        });
        setClients(response?.data);
    };

    const handleDelete = async (id: string) => {
        await APIConfig.delete(`${APIUrlsConstants.client}/${id}`).then(
            async (response) => {
                toast.success(response?.data?.message, {
                    rtl: false,
                });
                await fetchAndSetClients();
            }
        );
    };

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({ ...data, files: data?.image });
        if (response?.success) {
            await fetchAndSetClients();
            setCurrentClient(null);
            setMode("add");
            return response;
        } else {
            return null;
        }
    };
    return (
        <div className={styles.clients}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={currentClient || { name: "", url: "" }}
                id={currentClient?._id}
            />
            <Divider />
            <SectionTitle title="العملاء" enableAOS={false} />
            <ClientCards
                inDashboard={true}
                data={clients}
                loading={loading}
                handleDelete={handleDelete}
            />
        </div>
    );
}

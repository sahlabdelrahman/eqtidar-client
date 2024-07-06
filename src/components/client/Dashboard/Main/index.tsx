"use client";

import { useEffect, useState } from "react";

import useAPI from "@/hooks/useAPI";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import { APIUrlsConstants } from "@/utils/API/constants";
import infoConfig from "./config";

import styles from "./style.module.scss";

const { formData, submitHandler } = infoConfig;

export default function Main() {
    const [info, setInfo] = useState({});

    const { response } = useAPI({
        url: APIUrlsConstants.info,
    });

    useEffect(() => {
        if (response?.data) {
            setInfo({
                ...response.data,
                message: response.data.bannerText.message.text,
                vision: response.data.bannerText.vision.text,
                values: response.data.bannerText.values.text,
                whoWeAre: response.data.whoWeAre.text,
                // Flatten achievements information for form fields
                clients: response.data.achievements.clients,
                employees: response.data.achievements.employees,
                inProgressProjects:
                    response.data.achievements.inProgressProjects,
                completedProjects: response.data.achievements.completedProjects,
                // Flatten contact information for form fields
                mobile: response.data.contact.mobile.text,
                whatsapp: response.data.contact.whatsapp.url,
                email: response.data.contact.email.text,
                location: response.data.contact.location.text,
                // Social media links
                linkedin: response.data.socialMedia.linkedin,
                x: response.data.socialMedia.x,
                instagram: response.data.socialMedia.instagram,
                snapchat: response.data.socialMedia.snapchat,
            });
        }
    }, [response]);

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({ ...data });
        if (response?.success) {
            window.location.reload();
            return response;
        } else {
            return null;
        }
    };
    return (
        <div className={styles.info}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={info}
            />
        </div>
    );
}

"use client";
import { useAppSelector } from "@/store";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import Divider from "../../global/Divider";

import infoConfig from "./config";

import styles from "./style.module.scss";

const { formData, submitHandlerForEmail, submitHandlerForPassword } =
    infoConfig;

export default function Main() {
    const user = useAppSelector((state) => state.auth.user);
    const handleFormSubmitEmail = async (data: any) => {
        const response = await submitHandlerForEmail({ ...data });
        if (response?.success) {
            return response;
        } else {
            return null;
        }
    };

    const handleFormSubmitPassword = async (data: any) => {
        const response = await submitHandlerForPassword({
            ...data,
            userId: user?.id,
        });
        if (response?.success) {
            return response;
        } else {
            return null;
        }
    };

    return (
        <div className={styles.info}>
            <DynamicForm
                formData={{
                    fields: formData?.fields?.[0],
                    submitText: formData?.submitText,
                }}
                submitHandler={handleFormSubmitEmail}
                defaultValues={{}}
            />
            <Divider />
            <DynamicForm
                formData={{
                    fields: formData?.fields?.[1],
                    submitText: formData?.submitText,
                }}
                submitHandler={handleFormSubmitPassword}
                defaultValues={{}}
            />
        </div>
    );
}

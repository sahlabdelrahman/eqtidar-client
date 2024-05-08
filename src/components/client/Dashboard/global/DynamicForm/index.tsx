"use client";

import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Input } from "@/components/client/global/Input";
import Button from "@/components/client/global/Button";
import ButtonSpinner from "@/components/client/global/ButtonSpinner";

import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import styles from "./style.module.scss";

const DynamicForm: FC<DynamicFormComponentProps> = ({
    formData,
    initialValues,
}) => {
    const { fields, success } = formData;

    const [loading, setLoading] = useState<boolean>(false);

    const methods = useForm({ defaultValues: initialValues });

    const onSubmit = methods.handleSubmit(async (data) => {
        setLoading(true);

        setTimeout(() => {
            methods.reset();
            toast.success(success?.message);
        }, 1000);

        // await API({
        //     endpoint: "contactUs",
        //     method: "POST",
        //     data: data,
        //     params: { orgId: 4 },
        // })
        //     .then(() => {
        //         methods.reset();
        //         toast.success(
        //             "Thank you for contacting us! We will get back to you soon."
        //         );
        //     })
        //     .catch((error) => {
        //         toast.error(error.data.response.message);
        //     });

        setLoading(false);
    });
    return (
        <FormProvider {...methods}>
            <form
                className={styles.dynamicForm}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                noValidate
                autoComplete="off"
            >
                <div className={styles.fields}>
                    {fields?.map((field) => (
                        <Input key={field?.id} {...field} />
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        type="submit"
                        name="submitForm"
                        aria-label="Submit form"
                        disabled={loading}
                        isLoading={loading}
                        LoadingIndicator={<ButtonSpinner />}
                        onClick={() => {}}
                    >
                        {formData?.submitText || "إرسال"}
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default DynamicForm;

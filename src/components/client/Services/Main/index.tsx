"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Section from "@/components/client/global/Section";

import ButtonSpinner from "@/components/client/global/ButtonSpinner";
import Button from "@/components/client/global/Button";
import { Input } from "@/components/client/global/Input";
import { SelectInput } from "../../global/Select";
import CheckboxInput from "../../global/Checkbox";

import styles from "./style.module.scss";

import { ServicesDataProps } from "@/types/componentProps";

import servicesConfig from "@/components/client/Home/Services/config";

const { fields, buttonText, successMessage } = servicesConfig;

export default function Main({ data }: { data: ServicesDataProps }) {
    const [loading, setLoading] = useState(false);

    const methods = useForm();

    const onSubmit = methods.handleSubmit(async (data) => {
        setLoading(true);

        setTimeout(() => {
            methods.reset();
            toast.success(successMessage);
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
        <main className={styles.main}>
            <Section title={data?.text}>
                <div className={styles.container}>
                    <ul className={styles.subServices}>
                        {data?.subServices?.map((subService, index) => (
                            <li
                                key={subService?.id}
                                className={styles.subService}
                            >
                                <span className={styles.bullet}>
                                    {index + 1}
                                </span>
                                {subService?.text}
                            </li>
                        ))}
                    </ul>
                    <FormProvider {...methods}>
                        <form
                            className={styles.form}
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            {fields?.map((field) => {
                                if (field.type === "select") {
                                    return (
                                        <SelectInput
                                            key={field?.id}
                                            {...field}
                                            value={data?.subServices?.[0]?.text}
                                            options={data?.subServices}
                                        />
                                    );
                                } else if (field.type === "checkbox") {
                                    return (
                                        <CheckboxInput
                                            key={field?.id}
                                            {...field}
                                        />
                                    );
                                } else {
                                    return <Input key={field?.id} {...field} />;
                                }
                            })}

                            <div className={styles.buttonContainer}>
                                <Button
                                    type="submit"
                                    name="submitContactUsForm"
                                    aria-label="Submit contact us form"
                                    disabled={loading}
                                    isLoading={loading}
                                    LoadingIndicator={<ButtonSpinner />}
                                    onClick={() => {}}
                                >
                                    {buttonText}
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </Section>
        </main>
    );
}

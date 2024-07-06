"use client";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Aos from "aos";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";

import ButtonSpinner from "@/components/client/global/ButtonSpinner";
import Button from "@/components/client/global/Button";
import { Input } from "@/components/client/global/Input";
import { SelectInput } from "../../global/Select";
import CheckboxInput from "../../global/Checkbox";

import servicesConfig from "@/components/client/Home/Services/config";
import { ServicesProps } from "./services";
import APIConfig from "@/utils/API";

import styles from "./style.module.scss";
import { APIUrlsConstants } from "@/utils/API/constants";

const { fields, buttonText, successMessage } = servicesConfig;

export default function Main({ data }: { data: ServicesProps[] }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    const methods = useForm();

    const onSubmit = methods.handleSubmit(async (data) => {
        setLoading(true);
        APIConfig.post(APIUrlsConstants.contact, {
            ...data,
            contactWay: data?.contactWay?.join(" ، "),
        })
            .then(() => {
                methods.reset();
                toast.success(successMessage);
            })
            .finally(() => {
                setLoading(false);
            });
    });
    return (
        <main className={styles.main}>
            <Section title={"خدماتنا"}>
                {!data || data?.length === 0 ? (
                    <EmptySection />
                ) : (
                    <div className={styles.container}>
                        <ul className={styles.services}>
                            {data?.map(({ _id: id, text, subServices }) => (
                                <li
                                    key={id}
                                    className={styles.service}
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    <p className={styles.serviceText}>{text}</p>
                                    <ul className={styles.subServices}>
                                        {subServices?.map(
                                            (subService, index) => (
                                                <li
                                                    key={subService?._id}
                                                    className={
                                                        styles.subService
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles.bullet
                                                        }
                                                    >
                                                        {index + 1}
                                                    </span>
                                                    <p
                                                        className={
                                                            styles.subServiceText
                                                        }
                                                    >
                                                        {subService?.text}
                                                    </p>
                                                </li>
                                            )
                                        )}
                                    </ul>
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
                                                value={
                                                    data?.[0]?.subServices[0]
                                                        ?.text
                                                }
                                                options={data || []}
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
                                        return (
                                            <Input key={field?.id} {...field} />
                                        );
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
                )}
            </Section>
        </main>
    );
}

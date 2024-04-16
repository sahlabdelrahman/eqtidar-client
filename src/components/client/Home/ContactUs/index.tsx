"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Section from "@/components/client/global/Section";

import ButtonSpinner from "@/components/client/global/ButtonSpinner";
import Button from "@/components/client/global/Button";
import { Input } from "@/components/client/global/Input";

import styles from "./style.module.scss";

import contactUsConfig from "./config";

const { title, sectionId, fields, buttonText, successMessage } =
    contactUsConfig;

function ContactUs() {
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
        <Section title={title} sectionId={sectionId}>
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
                    {fields?.map((field) => (
                        <Input key={field?.id} {...field} />
                    ))}

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
        </Section>
    );
}

export default ContactUs;

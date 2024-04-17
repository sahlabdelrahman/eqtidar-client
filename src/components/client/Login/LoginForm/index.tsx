"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import ButtonSpinner from "@/components/client/global/ButtonSpinner";
import Button from "@/components/client/global/Button";
import { Input } from "@/components/client/global/Input";

import styles from "./style.module.scss";

import loginFormConfig from "./config";

const { title, description, fields, buttonText, successMessage } =
    loginFormConfig;

function LoginForm() {
    const [loading, setLoading] = useState(false);

    const methods = useForm();

    const onSubmit = methods.handleSubmit(async (data) => {
        setLoading(true);

        setTimeout(() => {
            methods.reset();
            toast.success(successMessage);
        }, 1000);

        setLoading(false);
    });

    return (
        <section className={styles.loginForm}>
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
                    <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        <h2 className={styles.description}>{description}</h2>
                    </div>
                    {fields?.map((field) => (
                        <Input key={field?.id} {...field} />
                    ))}

                    <div className={styles.buttonContainer}>
                        <Button
                            type="submit"
                            name="submitLoginForm"
                            aria-label="Submit login form"
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
        </section>
    );
}

export default LoginForm;

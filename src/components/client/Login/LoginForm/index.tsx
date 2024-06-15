"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { setAuthState } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store";

import ButtonSpinner from "@/components/client/global/ButtonSpinner";
import Button from "@/components/client/global/Button";
import { Input } from "@/components/client/global/Input";

import AuthService from "@/services/auth.service";

import styles from "./style.module.scss";

import loginFormConfig from "./config";

const {
    title,
    description,
    fields,
    buttonText,
    successMessage,
    redirectSuccessPath,
} = loginFormConfig;

function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const methods = useForm();

    const onSubmit = methods.handleSubmit(async (data) => {
        setLoading(true);
        const { email, password } = data;
        AuthService.login({ email, password })
            .then((res) => {
                router.push(redirectSuccessPath);
                toast.success(successMessage);

                dispatch(
                    setAuthState({
                        user: { ...res?.data?.data },
                        isLoggedIn: true,
                    })
                );
            })
            .finally(() => setLoading(false));
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
                    method="POST"
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

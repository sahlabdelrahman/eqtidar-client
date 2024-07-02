"use client";

import { FC, useEffect, useState } from "react";
import {
    FormProvider,
    useForm,
    SubmitHandler,
    UseFormReturn,
} from "react-hook-form";
import { toast } from "react-toastify";

import { Input } from "@/components/client/global/Input";
import { ImageUpload } from "@/components/client/global/ImageUpload";
import { SelectInput } from "@/components/client/global/Select";
import Button from "@/components/client/global/Button";
import ButtonSpinner from "@/components/client/global/ButtonSpinner";

import {
    DynamicFormComponentProps,
    Field,
} from "@/types/dashboard/componentProps";

import styles from "./style.module.scss";

interface DynamicFormProps extends DynamicFormComponentProps {
    defaultValues?: Record<string, any>;
    id?: string; // ID for editing
}

const Fields = ({ fields }: { fields: Field[] }) => {
    return (
        <div className={styles.fields}>
            {fields?.map((field) => {
                switch (field.type) {
                    case "select":
                        return (
                            <SelectInput
                                key={field?.id}
                                {...field}
                                options={field?.options || []}
                            />
                        );
                    case "image":
                        return <ImageUpload key={field?.id} {...field} />;
                    default:
                        return <Input key={field?.id} {...field} />;
                }
            })}
        </div>
    );
};

const DynamicForm: FC<DynamicFormProps> = ({
    formData,
    submitHandler,
    defaultValues,
    id,
}) => {
    const { fields } = formData;

    const [loading, setLoading] = useState<boolean>(false);

    const methods: UseFormReturn = useForm({ defaultValues });

    useEffect(() => {
        if (defaultValues) {
            methods.reset(defaultValues);
        }
    }, [defaultValues, methods, methods.reset]);

    const onSubmit: SubmitHandler<any> = async (data) => {
        setLoading(true);
        const response = await submitHandler({ data, id });
        if (response) {
            toast.success(response?.message, {
                rtl: false,
            });
            methods.reset();
        }

        setLoading(false);
    };

    return (
        <FormProvider {...methods}>
            <form
                className={styles.dynamicForm}
                onSubmit={methods.handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
            >
                <Fields fields={fields} />
                <div className={styles.buttonContainer}>
                    <Button
                        type="submit"
                        name="submitForm"
                        aria-label="Submit form"
                        disabled={loading}
                        isLoading={loading}
                        LoadingIndicator={<ButtonSpinner />}
                    >
                        {formData?.submitText || "إرسال"}
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default DynamicForm;

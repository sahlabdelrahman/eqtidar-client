import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import ControlsOverlay from "../ControlsOverlay";

import APIConfig from "@/utils/API";

import styles from "./style.module.scss";

interface ImageUploadProps {
    name: string;
    label: string;
    id: string;
    validation?: any;
}

const findInputError = (errors: any, name: string): any => {
    const filtered = Object.keys(errors)
        .filter((key) => key.includes(name))
        .reduce((cur, key) => {
            return Object.assign(cur, { error: errors[key] });
        }, {});
    return filtered;
};

const isFormInvalid = (err: any) => {
    return Object.keys(err).length > 0;
};

export const ImageUpload: FC<ImageUploadProps> = ({
    name,
    label,
    id,
    validation,
}) => {
    const {
        register,
        formState: { errors },
        setValue,
        reset,
        getValues,
    } = useFormContext();

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedFileData, setUploadedFileData] = useState<any | null>(null);

    const inputErrors = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    const handleImageChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file && validateFile(file)) {
            setUploading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            try {
                const formData = new FormData();
                formData.append("files", file);
                const response = await APIConfig.post("/upload", formData, {
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.total) {
                            const progress = Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            );
                            setUploadProgress(progress);
                        }
                    },
                    headers: { "Content-Type": "multipart/form-data" },
                });
                const uploadedData = response?.data?.data?.[0];
                setUploadedFileData(uploadedData);
                setValue("image", uploadedData);
                setUploading(false);
                setUploadProgress(0);
            } catch (error) {
                console.error("Error uploading file", error);
                setUploading(false);
                setUploadProgress(0);
            }
        }
    };

    const validateFile = (file: File) => {
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (file.size > maxSize) {
            toast.error("يجب أن يكون حجم الملف أقل من 5 ميجا بايت.");
            return false;
        }
        return true;
    };

    const handleDeleteImage = async () => {
        try {
            await APIConfig.delete("/upload", {
                data: {
                    url: uploadedFileData?.url,
                    blurUrl: uploadedFileData?.blurUrl,
                },
            });
            setImagePreview(null);
            setUploadedFileData(null);
            setValue(name, null);
        } catch (error) {
            console.error("Error deleting file", error);
        }
    };

    useEffect(() => {
        if (!getValues("image")) {
            setImagePreview(null);
            setUploadedFileData(null);
        }
    }, [getValues("image")]);

    return (
        <div className={styles.inputComponent}>
            <div className={styles.labelAndError}>
                <label htmlFor={id}>{label}</label>
                <AnimatePresence initial={false}>
                    {isInvalid && (
                        <InputError
                            message={inputErrors?.error?.message}
                            key={inputErrors?.error?.message}
                        />
                    )}
                </AnimatePresence>
            </div>
            <input
                id={id}
                type="file"
                accept="image/jpeg, image/jpg, image/png, image/webp, image/gif"
                {...register(name, validation)}
                onChange={handleImageChange}
            />
            {uploading && (
                <div className={styles.uploadProgress}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${uploadProgress}%` }}
                    ></div>
                    <span className={styles.progressPercentage}>
                        {uploadProgress}%
                    </span>
                </div>
            )}
            {imagePreview && (
                <div className={styles.imagePreviewContainer}>
                    <ControlsOverlay handleDelete={handleDeleteImage} />
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className={styles.imagePreview}
                    />
                </div>
            )}
        </div>
    );
};

const InputError: React.FC<{ message: string }> = ({ message }) => {
    return (
        <motion.p className={styles.inputError} {...framer_error}>
            {message}
        </motion.p>
    );
};

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
};

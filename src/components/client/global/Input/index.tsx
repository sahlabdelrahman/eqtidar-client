import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import {
    InputComponentProps,
    InputErrorComponentProps,
} from "@/types/componentProps";

import styles from "./style.module.scss";

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

export const Input: React.FC<InputComponentProps> = ({
    name,
    label,
    type,
    id,
    placeholder,
    validation,
    multiline,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const inputErrors = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

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
            {multiline ? (
                <textarea
                    id={id}
                    aria-label={placeholder}
                    placeholder={placeholder}
                    {...register(name, validation)}
                    rows={10}
                ></textarea>
            ) : (
                <input
                    id={id}
                    type={type ? type : "text"}
                    aria-label={placeholder}
                    placeholder={placeholder}
                    {...register(name, validation)}
                    min={0}
                />
            )}
        </div>
    );
};

const InputError: React.FC<InputErrorComponentProps> = ({ message }) => {
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

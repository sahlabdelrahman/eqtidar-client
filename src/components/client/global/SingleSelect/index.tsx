import { FC } from "react";
import { FormControl, Select } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import {
    InputErrorComponentProps,
    SingleSelectComponentProps,
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

export const SingleSelectInput: React.FC<SingleSelectComponentProps> = ({
    name,
    label,
    id,
    value,
    validation,
    options,
}) => {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext();

    const inputErrors = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    return (
        <div className={styles.inputComponent}>
            <div className={styles.labelAndError}>
                <label htmlFor={id}>{label}</label>
                <AnimatePresence mode="wait" initial={false}>
                    {isInvalid && (
                        <InputError
                            message={inputErrors.error.message}
                            key={inputErrors.error.message}
                        />
                    )}
                </AnimatePresence>
            </div>
            <FormControl className="select">
                <Controller
                    name={name}
                    control={control}
                    defaultValue={value ?? ""}
                    render={({ field }) => (
                        <Select
                            {...field}
                            {...register(name, validation)}
                            native
                        >
                            {options?.map((option) => (
                                <option
                                    key={option?.value}
                                    value={option?.value}
                                >
                                    {option?.text}
                                </option>
                            ))}
                        </Select>
                    )}
                />
            </FormControl>
        </div>
    );
};

export const InputError: FC<InputErrorComponentProps> = ({ message }) => {
    return (
        <motion.p className={styles.inputError} {...framer_error}>
            {message}
        </motion.p>
    );
};

export const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
};

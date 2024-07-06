import { FC } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import {
    InputErrorComponentProps,
    CheckboxComponentProps,
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

const CheckboxInput: FC<CheckboxComponentProps> = ({
    name,
    label,
    id,
    options,
    validation,
}) => {
    const {
        control,
        formState: { errors },
        setValue,
        getValues,
    } = useFormContext();

    const inputErrors = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    const handleCheckboxChange = (field: any, value: string) => {
        const currentValues = getValues(name) || [];
        const newValues = currentValues.includes(value)
            ? currentValues.filter((val: string) => val !== value)
            : [...currentValues, value];
        setValue(name, newValues);
        field.onChange(newValues);
    };

    return (
        <div
            className={styles.inputComponent}
            data-aos="fade-up"
            data-aos-duration="500"
        >
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
            <FormGroup>
                {options &&
                    options.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            control={
                                <Controller
                                    name={name}
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            {...field}
                                            {...validation}
                                            id={id + "_" + option.value}
                                            checked={(
                                                field.value || []
                                            ).includes(option.value)}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    field,
                                                    option.value
                                                )
                                            }
                                        />
                                    )}
                                />
                            }
                            label={
                                <span
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                    }}
                                >
                                    {option.label}
                                </span>
                            }
                        />
                    ))}
            </FormGroup>
        </div>
    );
};

const InputError: FC<InputErrorComponentProps> = ({ message }) => {
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

export default CheckboxInput;

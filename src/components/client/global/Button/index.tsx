import { FC } from "react";
import { ButtonComponentProps } from "@/types/componentProps";
import styles from "./style.module.scss";

const Button: FC<ButtonComponentProps> = ({
    type = "button",
    id,
    customStyle,
    onClick,
    disabled,
    children,
    StartIcon,
    EndIcon,
    isLoading,
    LoadingIndicator = <>Loading...</>,
    ...rest
}) => {
    const content = isLoading ? LoadingIndicator : children;

    return (
        <button
            className={styles.button}
            type={type}
            id={id}
            disabled={disabled || isLoading}
            style={customStyle}
            onClick={onClick}
            {...rest}
        >
            {StartIcon && StartIcon}
            {content}
            {EndIcon && EndIcon}
        </button>
    );
};

export default Button;

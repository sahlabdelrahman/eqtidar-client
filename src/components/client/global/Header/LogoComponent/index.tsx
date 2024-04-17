import { FC } from "react";
import Link from "next/link";

import { LogoComponentProps } from "@/types/componentProps";

import styles from "./style.module.scss";

const LogoComponent: FC<LogoComponentProps> = ({ inDrawer, Logo }) => {
    return (
        <Link
            href="/"
            className={`${styles.logoContainer} ${
                inDrawer ? styles.inDrawer : ""
            }`}
            aria-label={typeof Logo === "string" ? Logo : "Logo"}
            title={typeof Logo === "string" ? Logo : "Logo"}
        >
            {typeof Logo === "string" ? Logo : <Logo />}
        </Link>
    );
};

export default LogoComponent;

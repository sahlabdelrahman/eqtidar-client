import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { LogoComponentProps } from "@/types/componentProps";

import navbarConfig from "../config";

import styles from "./style.module.scss";

const { Logo: defaultLogo } = navbarConfig;

const LogoComponent: FC<LogoComponentProps> = ({
    inDrawer,
    Logo = defaultLogo,
    externalPage = false,
}) => {
    return (
        <Link
            href="/"
            className={`${styles.logoContainer} ${
                inDrawer ? styles.inDrawer : ""
            } ${externalPage ? styles.externalPage : ""}`}
            aria-label={typeof Logo === "string" ? Logo : "Logo"}
            title={typeof Logo === "string" ? Logo : "Logo"}
        >
            {typeof Logo === "string" ? Logo : <Image alt="logo" src={Logo} />}
        </Link>
    );
};

export default LogoComponent;

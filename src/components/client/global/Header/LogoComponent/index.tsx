import { FC } from "react";
import Image from "next/image";
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
            {typeof Logo === "string" ? (
                Logo
            ) : (
                <Image
                    alt="logo"
                    src={Logo}
                    loading="lazy"
                    placeholder="blur"
                />
            )}
        </Link>
    );
};

export default LogoComponent;

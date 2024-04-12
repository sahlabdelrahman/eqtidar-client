import { FC } from "react";
import Link from "next/link";

import { LinksComponentProps } from "@/types/componentProps";

import styles from "./style.module.scss";

const LinksComponent: FC<LinksComponentProps> = ({ notInDrawer, links }) => {
    return (
        <ul
            className={`${styles.linksContainer} ${
                notInDrawer ? styles.notInDrawer : ""
            }`}
        >
            {links.map(({ id, text, path }) => (
                <li key={id} className={styles.listItem}>
                    <Link href={path} className={styles.link}>
                        {text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LinksComponent;

import { FC } from "react";
import Link from "next/link";

import { LinksComponentProps } from "@/types/componentProps";

import styles from "./style.module.scss";

const LinksComponent: FC<LinksComponentProps> = ({
    notInDrawer,
    inFooter,
    links,
}) => {
    return (
        <ul
            className={`${styles.linksContainer} ${
                notInDrawer ? styles.notInDrawer : ""
            } ${inFooter ? styles.inFooter : ""}`}
        >
            {links.map(({ id, text, path }) => (
                <li key={id} className={styles.listItem}>
                    <Link
                        href={path}
                        className={styles.link}
                        aria-label={text}
                        title={text}
                    >
                        {text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LinksComponent;

import { FC } from "react";
import SectionTitle from "../../global/SectionTitle";

import { SectionComponentProps } from "@/types/componentProps";

import styles from "./style.module.scss";

const Section: FC<SectionComponentProps> = ({
    sectionId,
    title,
    description,
    dark = false,
    inDashboard = false,
    children,
}) => {
    return (
        <section
            id={sectionId}
            className={`${styles.section} ${dark ? styles.dark : ""} ${
                inDashboard ? styles.inDashboard : styles.notInDashboard
            } `}
        >
            <div className={styles.container}>
                {title && <SectionTitle title={title} />}
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;

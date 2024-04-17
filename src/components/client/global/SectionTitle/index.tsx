import { JSX, ClassAttributes, HTMLAttributes } from "react";

import styles from "./style.module.scss";

const SectionTitle = (
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLElement> &
        HTMLAttributes<HTMLElement>
) => {
    return (
        <section className={styles.sectionTitle} {...props}>
            <p className={styles.title}>{props.title}</p>
        </section>
    );
};

export default SectionTitle;

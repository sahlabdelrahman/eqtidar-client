import { JSX, ClassAttributes, HTMLAttributes } from "react";

import styles from "./style.module.scss";

const SectionTitle = (
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLElement> &
        HTMLAttributes<HTMLElement>
) => {
    return (
        <section className={styles.sectionTitle} {...props}>
            <h4 className={styles.title}>{props.title}</h4>
        </section>
    );
};

export default SectionTitle;

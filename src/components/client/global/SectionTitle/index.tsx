import { JSX, ClassAttributes, HTMLAttributes } from "react";

import styles from "./style.module.scss";

interface SectionTitleProps
    extends JSX.IntrinsicAttributes,
        ClassAttributes<HTMLElement>,
        HTMLAttributes<HTMLElement> {
    title: string;
    enableAOS?: boolean;
}

const SectionTitle = ({
    title,
    enableAOS = true,
    ...props
}: SectionTitleProps) => {
    const aosProps = enableAOS
        ? { "data-aos": "fade-up", "data-aos-duration": "500" }
        : {};

    return (
        <section className={styles.sectionTitle} {...props} {...aosProps}>
            <p className={styles.title}>{title}</p>
        </section>
    );
};

export default SectionTitle;

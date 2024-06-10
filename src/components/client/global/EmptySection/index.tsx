import styles from "./style.module.scss";

const EmptySection = ({
    text = "لا توجد بيانات متاحة حتى الآن.",
}: {
    text?: string;
}) => {
    return (
        <section
            className={styles.emptySection}
            data-aos="fade-up"
            data-aos-duration="500"
        >
            <p className={styles.text}>{text}</p>
        </section>
    );
};

export default EmptySection;

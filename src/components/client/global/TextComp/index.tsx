import styles from "./style.module.scss";

const TextComp = ({ text = "" }: { text?: string }) => {
    return (
        <section
            className={styles.textComp}
            data-aos="fade-up"
            data-aos-duration="500"
        >
            <p className={styles.text}>{text}</p>
        </section>
    );
};

export default TextComp;

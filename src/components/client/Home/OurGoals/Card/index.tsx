import styles from "./style.module.scss";

function Card({
    text,
    id,
    dashboard,
}: {
    text: string;
    id: string;
    dashboard?: boolean;
}) {
    return (
        <aside
            className={styles.card}
            data-aos="fade-right"
            data-aos-duration="500"
        >
            <p className={styles.text}>{text}</p>
        </aside>
    );
}

export default Card;

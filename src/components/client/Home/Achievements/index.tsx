import NumberCounter from "../../global/NumberCounter";
import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import achievementsConfig from "./config";

const { title, sectionId, data } = achievementsConfig;

function Achievements() {
    return (
        <div className={styles.achievements}>
            <div className={styles.overlay}></div>
            <Section title={title} sectionId={sectionId}>
                <div className={styles.content}>
                    {data?.map(({ id, text, number }) => (
                        <aside key={id} className={styles.card}>
                            <NumberCounter targetNumber={number} />
                            <p className={styles.text}>{text}</p>
                        </aside>
                    ))}
                </div>
            </Section>
        </div>
    );
}

export default Achievements;

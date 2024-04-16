import Image from "next/image";
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
                            <p className={styles.number}>{number}</p>
                            <p className={styles.text}>{text}</p>
                        </aside>
                    ))}
                </div>
            </Section>
        </div>
    );
}

export default Achievements;

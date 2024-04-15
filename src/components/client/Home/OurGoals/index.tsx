import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import ourGoalsConfig from "./config";

const { title, sectionId, data } = ourGoalsConfig;

function OurGoals() {
    return (
        <Section title={title} sectionId={sectionId}>
            <div className={styles.content}>
                {data?.map(({ id, text }) => (
                    <aside key={id} className={styles.card}>
                        <p className={styles.text}>{text}</p>
                    </aside>
                ))}
            </div>
        </Section>
    );
}

export default OurGoals;

import Section from "@/components/client/global/Section";
import NumberCounter from "../../global/NumberCounter";
import EmptySection from "../../global/EmptySection";

import styles from "./style.module.scss";

import achievementsConfig from "./config";

import { AchievementComponentProps } from "./achievements";

const { title, sectionId, data: configData } = achievementsConfig;

function Achievements({ data }: { data: AchievementComponentProps }) {
    return (
        <div className={styles.achievements}>
            <div className={styles.overlay}></div>
            <Section title={title} sectionId={sectionId}>
                <div className={styles.content}>
                    {configData?.map(({ id, text, key }) => (
                        <aside key={id} className={styles.card}>
                            {data?.[key] ? (
                                <NumberCounter targetNumber={data?.[key]} />
                            ) : (
                                <EmptySection />
                            )}
                            <p className={styles.text}>{text}</p>
                        </aside>
                    ))}
                </div>
            </Section>
        </div>
    );
}

export default Achievements;

import styles from "./style.module.scss";

import ourGoalsConfig from "./config";
import SectionTitle from "../../global/SectionTitle";

const { title, sectionId, data } = ourGoalsConfig;

function OurGoals() {
    return (
        <section id={sectionId} className={styles.ourGoals}>
            <div className={styles.container}>
                <SectionTitle title={title} />
                <div className={styles.content}>
                    {data?.map(({ id, text }) => (
                        <aside key={id} className={styles.card}>
                            <p className={styles.text}>{text}</p>
                        </aside>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurGoals;

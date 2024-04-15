import styles from "./style.module.scss";

import servicesConfig from "./config";
import SectionTitle from "../../global/SectionTitle";

const { title, sectionId, data } = servicesConfig;

function Services() {
    return (
        <section id={sectionId} className={styles.services}>
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

export default Services;

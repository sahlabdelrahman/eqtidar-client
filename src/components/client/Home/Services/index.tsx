import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import servicesConfig from "./config";

const { title, sectionId, data } = servicesConfig;

function Services() {
    return (
        <Section title={title} sectionId={sectionId} dark>
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

export default Services;

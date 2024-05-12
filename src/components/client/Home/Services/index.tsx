import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import servicesConfig from "./config";

const { title, sectionId, data } = servicesConfig;

function Services() {
    return (
        <Section title={title} sectionId={sectionId}>
            <div className={styles.content}>
                {data?.map(({ id, text, subServices }) => (
                    <aside key={id} className={styles.card}>
                        <p className={styles.text}>{text}</p>
                        {/* <ul className={styles.subServices}>
                            {subServices?.map((subService) => (
                                <li
                                    key={subService?.id}
                                    className={styles.subService}
                                >
                                    <span className={styles.bullet} />
                                    {subService?.text}
                                </li>
                            ))}
                        </ul> */}
                    </aside>
                ))}
            </div>
        </Section>
    );
}

export default Services;

import Link from "next/link";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import servicesConfig from "./config";

const { title, sectionId, data } = servicesConfig;

function Services() {
    return (
        <Section title={title} sectionId={sectionId}>
            <div className={styles.content}>
                {data?.map(({ id, text, subServices, slug }) => (
                    <Link
                        key={id}
                        href={`/services/${slug}`}
                        aria-label={text}
                        title={text}
                        rel="noreferrer"
                        className={styles.card}
                    >
                        <p className={styles.text}>{text}</p>
                    </Link>
                ))}
            </div>
        </Section>
    );
}

export default Services;

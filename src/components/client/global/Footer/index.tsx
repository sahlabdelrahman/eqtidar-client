import TopSection from "./TopSection";

import footerConfig from "./config";

import { TopSectionProps } from "@/components/client/global/Footer/footer";

import styles from "./style.module.scss";

const { copyright } = footerConfig;

export default function Footer({ data }: { data: TopSectionProps }) {
    return (
        <footer className={styles.footerContainer}>
            <TopSection data={{ ...data }} />
            <div className={styles.bottomContainer}>
                <section className={styles.bottomSection}>
                    <p className={styles.copyright}>{copyright}</p>
                    {/* <p className={styles.developed}>
                        {developed?.text}{" "}
                        <a
                            href={developed?.path}
                            className={styles.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={developed?.text + developed?.name}
                            title={developed?.text + developed?.name}
                        >
                            {developed?.name}
                        </a>
                    </p> */}
                </section>
            </div>
        </footer>
    );
}

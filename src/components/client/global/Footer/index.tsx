import TopSection from "./TopSection";

import navbarConfig from "../Header/config";
import footerConfig from "./config";

import styles from "./style.module.scss";

const { copyright } = footerConfig;

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <TopSection />
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

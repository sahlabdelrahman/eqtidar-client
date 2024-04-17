import LogoComponent from "../Header/LogoComponent";
import LinksComponent from "../Header/LinksComponent";

import navbarConfig from "../Header/config";
import footerConfig from "./config";

import styles from "./style.module.scss";

const { Logo, links } = navbarConfig;
const { slogan, socialMediaLinks, copyright, developed } = footerConfig;

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.topContainer}>
                <section className={styles.topSection}>
                    <div className={styles.topPart}>
                        <LogoComponent Logo={Logo} />
                        <p className={styles.slogan}>{slogan}</p>
                    </div>
                    <LinksComponent links={links} inFooter />
                    <div className={styles.socialMediaLinks}>
                        {socialMediaLinks?.map(({ id, path, Icon }) => (
                            <a
                                key={id}
                                href={path}
                                className={styles.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={path}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
            <div className={styles.bottomContainer}>
                <section className={styles.bottomSection}>
                    <p className={styles.copyright}>{copyright}</p>
                    <p className={styles.developed}>
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
                    </p>
                </section>
            </div>
        </footer>
    );
}

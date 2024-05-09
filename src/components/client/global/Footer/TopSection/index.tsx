import LogoComponent from "../../Header/LogoComponent";

import navbarConfig from "../../Header/config";
import footerConfig from "../config";

import styles from "./style.module.scss";

const { Logo } = navbarConfig;
const { socialMediaLinks, contact, whoAreWe, idFile } = footerConfig;

export default function TopSection() {
    return (
        <div className={styles.topSection}>
            <section className={styles.container}>
                <div className={styles.topPart}>
                    <LogoComponent Logo={Logo} withSlogan />
                </div>
                <div className={styles.sectionWithTitle}>
                    <p className={styles.title}>اتصل بنا</p>
                    <ul className={styles.contact}>
                        {contact?.map(({ id, text, Icon }) => (
                            <li
                                key={id}
                                className={styles.item}
                                aria-label={text}
                            >
                                <span>
                                    <Icon />
                                </span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.sectionWithTitle}>
                    <p className={styles.title}>من نحن</p>
                    <p className={styles.text}>{whoAreWe}</p>
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
                    {/* TODO: Replace this path with path of file after uploading file on server */}
                    <a
                        href={idFile?.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="الملف التعريفي"
                        className={styles.idFile}
                    >
                        {idFile?.text}
                    </a>
                </div>
            </section>
        </div>
    );
}

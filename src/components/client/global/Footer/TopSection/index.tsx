import LogoComponent from "../../Header/LogoComponent";
import EmptySection from "../../EmptySection";

import navbarConfig from "../../Header/config";
import footerConfig from "../config";

import { TopSectionProps } from "@/components/client/global/Footer/footer";

import { getProperFileUrl } from "@/utils/helpers";

import styles from "./style.module.scss";

const { Logo } = navbarConfig;
const { socialMediaLinks, contact: contactConfig, idFile } = footerConfig;

export default function TopSection({ data }: { data: TopSectionProps }) {
    const { contact, socialMedia, whoWeAre } = data;
    return (
        <div className={styles.topSection}>
            <section className={styles.container}>
                <div className={styles.topPart}>
                    <LogoComponent Logo={Logo} withSlogan />
                </div>
                <div className={styles.sectionWithTitle}>
                    <p className={styles.title}>اتصل بنا</p>
                    <ul className={styles.contact}>
                        {contactConfig?.map(({ id, Icon, key }) => (
                            <li key={id} aria-label={contact?.[key].text}>
                                <a
                                    href={
                                        contact?.[key]?.url
                                            ? contact?.[key]?.url
                                            : "/"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={contact?.[key].text}
                                    className={styles.item}
                                >
                                    <span>
                                        <Icon />
                                    </span>
                                    {contact?.[key].text ? (
                                        contact?.[key].text
                                    ) : (
                                        <EmptySection />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.sectionWithTitle}>
                    <p className={styles.title}>من نحن</p>
                    {whoWeAre?.text ? (
                        <p className={styles.text}>{whoWeAre?.text}</p>
                    ) : (
                        <EmptySection />
                    )}
                    <div className={styles.socialMediaLinks}>
                        {socialMediaLinks?.map(({ id, Icon, key }) => (
                            <a
                                key={id}
                                href={
                                    socialMedia?.[key]
                                        ? socialMedia?.[key]
                                        : "/"
                                }
                                className={styles.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={socialMedia?.[key]}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                    {/* TODO: Replace this path with path of file after uploading file on server */}
                    <a
                        href={getProperFileUrl({
                            filePath: "uploads/files/profileFile",
                        })}
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

import Image from "next/image";

import SectionTitle from "../../global/SectionTitle";

import projectsConfig from "./config";

import styles from "./style.module.scss";

const { title, sectionId, data } = projectsConfig;

function Projects() {
    return (
        <section id={sectionId} className={styles.projects}>
            <div className={styles.container}>
                <SectionTitle title={title} />
                <div className={styles.content}>
                    {data?.map(({ id, text, images }) => (
                        <aside key={id} className={styles.card}>
                            <div className={styles.imagesContainer}>
                                <Image
                                    alt={images?.[0]?.alt}
                                    src={images?.[0]?.url}
                                />
                            </div>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>{text}</p>
                            </div>
                        </aside>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../global/SectionTitle";

import projectsConfig from "./config";

import styles from "./style.module.scss";

const { title, sectionId, data, swiperConfig } = projectsConfig;

function Projects() {
    return (
        <section id={sectionId} className={styles.projects}>
            <div className={styles.container}>
                <SectionTitle title={title} />
                <div className={styles.content}>
                    {data?.map(({ id, title, description, images }) => (
                        <aside key={id} className={styles.card}>
                            <div className={styles.imagesContainer}>
                                <Swiper {...swiperConfig}>
                                    {images?.map(({ id, alt, url }) => (
                                        <SwiperSlide key={id}>
                                            <Image alt={alt} src={url} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={styles.textContainer}>
                                <h5 className={styles.title}>{title}</h5>
                                <p className={styles.description}>
                                    {description}
                                </p>
                            </div>
                        </aside>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import projectsConfig from "./config";

import styles from "./style.module.scss";

const { title, sectionId, data, swiperConfig } = projectsConfig;

function Projects() {
    return (
        <Section sectionId={sectionId} title={title} dark>
            <div className={styles.content}>
                {data?.map(({ id, title, description, images }) => (
                    <aside key={id} className={styles.card}>
                        <div className={styles.imagesContainer}>
                            <Swiper {...swiperConfig}>
                                {images?.map(({ id, alt, url }) => (
                                    <SwiperSlide key={id}>
                                        <Image
                                            alt={alt}
                                            src={url}
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </aside>
                ))}
            </div>
        </Section>
    );
}

export default Projects;

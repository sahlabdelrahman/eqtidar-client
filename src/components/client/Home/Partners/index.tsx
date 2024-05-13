"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import partnersConfig from "./config";

const { title, sectionId, partners, swiperConfig } = partnersConfig;

function Partners() {
    return (
        <div className={styles.partners}>
            <div className={styles.overlay}></div>
            <Section title={title} sectionId={sectionId}>
                <div className={styles.content}>
                    <Swiper {...swiperConfig}>
                        {partners?.map(({ id, alt, url }) => (
                            <SwiperSlide key={id}>
                                <div
                                    className={styles.imageContainer}
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                >
                                    <Image
                                        alt={alt}
                                        src={url}
                                        className={styles.image}
                                        loading="lazy"
                                        placeholder="blur"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Section>
        </div>
    );
}

export default Partners;

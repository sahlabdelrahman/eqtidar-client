"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import servicesConfig from "./config";

const { title, sectionId, swiperConfig, data } = servicesConfig;

function Services() {
    return (
        <Section title={title} sectionId={sectionId} dark>
            <div className={styles.content}>
                <Swiper {...swiperConfig}>
                    {data?.map(({ id, text }) => (
                        <SwiperSlide key={id}>
                            <aside key={id} className={styles.card}>
                                <p className={styles.text}>{text}</p>
                            </aside>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
}

export default Services;

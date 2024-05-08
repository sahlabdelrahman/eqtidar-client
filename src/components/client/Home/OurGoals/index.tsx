"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import ourGoalsConfig from "./config";

const { title, sectionId, data, swiperConfig } = ourGoalsConfig;

function OurGoals() {
    return (
        <Section title={title} sectionId={sectionId}>
            <div className={styles.content}>
                <Swiper {...swiperConfig}>
                    {data?.map(({ id, text }) => (
                        <SwiperSlide key={id}>
                            <aside className={styles.card}>
                                <p className={styles.text}>{text}</p>
                            </aside>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
}

export default OurGoals;

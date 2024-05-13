"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import messageAndVisionConfig from "./config";

const { data } = messageAndVisionConfig;

function MessageAndVision() {
    return (
        <Section>
            <div className={styles.container}>
                {data?.map(({ id, title, text }) => (
                    <aside
                        key={id}
                        className={styles.content}
                        data-aos="fade-left"
                        data-aos-duration="500"
                    >
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.text}>{text}</p>
                    </aside>
                ))}
            </div>
        </Section>
    );
}

export default MessageAndVision;

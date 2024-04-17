"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import clientsConfig from "./config";

const { title, sectionId, clients, swiperConfig } = clientsConfig;

function Clients() {
    return (
        <Section title={title} sectionId={sectionId}>
            <div className={styles.content}>
                <Swiper {...swiperConfig}>
                    {clients?.map(({ id, alt, url }) => (
                        <SwiperSlide key={id}>
                            <div className={styles.imageContainer}>
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
    );
}

export default Clients;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import clientsConfig from "./config";
import { Avatar } from "@mui/material";

const { title, description, sectionId, teamMembers, swiperConfig } =
    clientsConfig;

function OurTeam() {
    return (
        <Section
            title={title}
            description={description}
            sectionId={sectionId}
            dark
        >
            <div className={styles.content}>
                <Swiper {...swiperConfig}>
                    {teamMembers?.map(
                        ({ id, name, role, image: { alt, url } }) => (
                            <SwiperSlide key={id}>
                                <div className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            alt={alt}
                                            className={styles.image}
                                            src={url}
                                        />
                                    </div>
                                    <p className={styles.name}>{name}</p>
                                    <p className={styles.role}>{role}</p>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </Section>
    );
}

export default OurTeam;

"use client";

// import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import ourGoalsConfig from "./config";

const { title, sectionId, data, swiperConfig } = ourGoalsConfig;

function OurGoals() {
    // const navigationPrevRef = useRef();
    // const navigationNextRef = useRef();
    return (
        <Section title={title} sectionId={sectionId} dark>
            <div className={styles.content}>
                <Swiper
                    {...swiperConfig}
                    // navigation={{
                    //     prevEl: navigationPrevRef.current,
                    //     nextEl: navigationNextRef.current,
                    // }}
                >
                    {data?.map(({ id, text }) => (
                        <SwiperSlide key={id}>
                            <aside
                                className={styles.card}
                                data-aos="fade-right"
                                data-aos-duration="500"
                            >
                                <p className={styles.text}>{text}</p>
                            </aside>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination" slot="pagination" />
            </div>
        </Section>
    );
}

export default OurGoals;

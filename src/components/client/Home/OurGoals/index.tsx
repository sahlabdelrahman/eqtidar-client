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
                            <aside className={styles.card}>
                                <p className={styles.text}>{text}</p>
                            </aside>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div
                    ref={navigationPrevRef}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "auto",
                        cursor: "pointer",
                    }}
                >
                    prev
                </div>
                <div
                    ref={navigationNextRef}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        left: "auto",
                        right: "0",
                        cursor: "pointer",
                    }}
                >
                    next
                </div> */}
            </div>
        </Section>
    );
}

export default OurGoals;

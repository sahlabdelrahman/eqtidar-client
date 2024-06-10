"use client";

import useAPI from "@/hooks/useAPI";

import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import ourGoalsConfig from "./config";
import { APIUrlsConstants } from "@/utils/API/constants";
import EmptySection from "../../global/EmptySection";

const { title, sectionId, swiperConfig } = ourGoalsConfig;

function OurGoals() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.goal,
    });

    return (
        <Section title={title} sectionId={sectionId} dark>
            {!response || response?.data?.length === 0 ? (
                <EmptySection />
            ) : (
                <div className={styles.content}>
                    <Swiper {...swiperConfig}>
                        {response?.data?.map(
                            ({ _id, text }: { _id: string; text: string }) => (
                                <SwiperSlide key={_id}>
                                    <aside
                                        className={styles.card}
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                    >
                                        <p className={styles.text}>{text}</p>
                                    </aside>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                    <div className="swiper-pagination" slot="pagination" />
                </div>
            )}
        </Section>
    );
}

export default OurGoals;

"use client";

import useAPI from "@/hooks/useAPI";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./style.module.scss";

import ourGoalsConfig from "../config";
import { APIUrlsConstants } from "@/utils/API/constants";
import EmptySection from "../../../global/EmptySection";
import Card from "../Card";

const { swiperConfig } = ourGoalsConfig;

function GoalsCards({ inDashboard = false }) {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.goal,
    });

    return (
        <>
            {!response || response?.data?.length === 0 ? (
                <EmptySection />
            ) : (
                <div
                    className={`${styles.content} ${
                        inDashboard ? styles.inDashboard : ""
                    }`}
                >
                    {inDashboard ? (
                        <Swiper {...swiperConfig}>
                            {response?.data?.map(
                                ({
                                    _id,
                                    text,
                                }: {
                                    _id: string;
                                    text: string;
                                }) => (
                                    <SwiperSlide key={_id}>
                                        <Card text={text} id={_id} />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    ) : (
                        response?.data?.map(
                            ({ _id, text }: { _id: string; text: string }) => (
                                <div key={_id} className={styles.cardContainer}>
                                    <Card text={text} id={_id} />
                                </div>
                            )
                        )
                    )}
                </div>
            )}
        </>
    );
}

export default GoalsCards;

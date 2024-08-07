"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import EmptySection from "../../../global/EmptySection";
import Card from "../Card";

import ourGoalsConfig from "../config";
import { GoalProps } from "../ourGoals";

import styles from "./style.module.scss";

const { swiperConfig } = ourGoalsConfig;

function GoalsCards({
    inDashboard = false,
    data,
    loading,
    handleEdit,
    handleDelete,
}: {
    inDashboard?: boolean;
    data: GoalProps[];
    loading: boolean;
    handleEdit?: (goal: GoalProps) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    return (
        <>
            {!data || data?.length === 0 ? (
                <EmptySection />
            ) : (
                <div
                    className={`${styles.content} ${
                        inDashboard ? styles.inDashboard : ""
                    }`}
                >
                    {inDashboard ? (
                        data?.map((goal) => (
                            <div
                                key={goal?._id}
                                className={styles.cardContainer}
                            >
                                <Card
                                    goal={goal}
                                    enableAOS={false}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                    inDashboard
                                />
                            </div>
                        ))
                    ) : (
                        <Swiper {...swiperConfig}>
                            {data?.map((goal) => (
                                <SwiperSlide key={goal?._id}>
                                    <Card goal={goal} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            )}
        </>
    );
}

export default GoalsCards;

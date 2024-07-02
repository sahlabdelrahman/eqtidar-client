"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import EmptySection from "../../../global/EmptySection";
import Card from "./Card";

import { PartnerProps } from "../partners";
import partnersConfig from "../config";

import styles from "./style.module.scss";

const { swiperConfig } = partnersConfig;

function PartnerCards({
    inDashboard = false,
    data,
    loading,
    handleEdit,
    handleDelete,
}: {
    inDashboard?: boolean;
    data: PartnerProps[];
    loading: boolean;
    handleEdit?: (partner: PartnerProps) => void;
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
                        data?.map((partner) => (
                            <div
                                key={partner?._id}
                                className={styles.cardContainer}
                            >
                                <Card
                                    partner={partner}
                                    enableAOS={false}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                    inDashboard
                                />
                            </div>
                        ))
                    ) : (
                        <Swiper {...swiperConfig}>
                            {data?.map((partner) => (
                                <SwiperSlide key={partner?._id}>
                                    <Card partner={partner} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            )}
        </>
    );
}

export default PartnerCards;

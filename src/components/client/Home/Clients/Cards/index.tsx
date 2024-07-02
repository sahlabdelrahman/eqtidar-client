"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import EmptySection from "../../../global/EmptySection";
import Card from "./Card";

import { ClientProps } from "../clients";
import clientsConfig from "../config";

import styles from "./style.module.scss";

const { swiperConfig } = clientsConfig;

function ClientCards({
    inDashboard = false,
    data,
    loading,
    handleEdit,
    handleDelete,
}: {
    inDashboard?: boolean;
    data: ClientProps[];
    loading: boolean;
    handleEdit?: (client: ClientProps) => void;
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
                        data?.map((client) => (
                            <div
                                key={client?._id}
                                className={styles.cardContainer}
                            >
                                <Card
                                    client={client}
                                    enableAOS={false}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                    inDashboard
                                />
                            </div>
                        ))
                    ) : (
                        <Swiper {...swiperConfig}>
                            {data?.map((client) => (
                                <SwiperSlide key={client?._id}>
                                    <Card client={client} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            )}
        </>
    );
}

export default ClientCards;

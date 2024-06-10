"use client";

import Image from "next/image";
import useAPI from "@/hooks/useAPI";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";

import { getProperImageUrl } from "@/utils/helpers";

import { APIUrlsConstants } from "@/utils/API/constants";

import partnersConfig from "./config";

import { ImageProps } from "@/types";

import styles from "./style.module.scss";

const { title, sectionId, swiperConfig } = partnersConfig;

function Partners() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.partner,
    });
    return (
        <div className={styles.partners}>
            <div className={styles.overlay}></div>
            <Section title={title} sectionId={sectionId}>
                {!response || response?.data?.length === 0 ? (
                    <EmptySection />
                ) : (
                    <div className={styles.content}>
                        <Swiper {...swiperConfig}>
                            {response?.data?.map(
                                ({
                                    _id,
                                    image: { url, blurUrl, alt, width, height },
                                }: {
                                    _id: string;
                                    image: ImageProps;
                                }) => (
                                    <SwiperSlide key={_id}>
                                        <div
                                            className={styles.imageContainer}
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                        >
                                            <Image
                                                alt={alt}
                                                src={getProperImageUrl({
                                                    filePath: url,
                                                })}
                                                className={styles.image}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL={getProperImageUrl({
                                                    filePath: blurUrl,
                                                })}
                                                width={width}
                                                height={height}
                                            />
                                        </div>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                )}
            </Section>
        </div>
    );
}

export default Partners;

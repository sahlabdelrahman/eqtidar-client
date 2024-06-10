"use client";

import useAPI from "@/hooks/useAPI";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";

import { ImageProps } from "@/types";

import { APIUrlsConstants } from "@/utils/API/constants";

import { getProperImageUrl } from "@/utils/helpers";

import projectsConfig from "./config";

import styles from "./style.module.scss";

const { title, sectionId, data, mainSwiperConfig, swiperConfig } =
    projectsConfig;

function Projects() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.project,
    });
    return (
        <Section sectionId={sectionId} title={title} dark>
            {!response || response?.data?.items?.length === 0 ? (
                <EmptySection />
            ) : (
                <div className={styles.content}>
                    <Swiper {...mainSwiperConfig}>
                        {response?.data?.items?.map(
                            ({
                                _id: id,
                                title,
                                description,
                                images,
                            }: {
                                _id: string;
                                title: string;
                                description: string;
                                images: ImageProps[];
                            }) => (
                                <SwiperSlide key={id}>
                                    <aside key={id} className={styles.card}>
                                        <div className={styles.imagesContainer}>
                                            <Swiper {...swiperConfig}>
                                                {images?.map(
                                                    ({
                                                        _id: imageId,
                                                        alt,
                                                        url,
                                                        blurUrl,
                                                        width,
                                                        height,
                                                    }: ImageProps) => (
                                                        <SwiperSlide
                                                            key={imageId}
                                                        >
                                                            <Image
                                                                alt={alt}
                                                                src={getProperImageUrl(
                                                                    {
                                                                        filePath:
                                                                            url,
                                                                    }
                                                                )}
                                                                className={
                                                                    styles.image
                                                                }
                                                                loading="lazy"
                                                                placeholder="blur"
                                                                blurDataURL={getProperImageUrl(
                                                                    {
                                                                        filePath:
                                                                            blurUrl,
                                                                    }
                                                                )}
                                                                width={width}
                                                                height={height}
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                )}
                                            </Swiper>
                                        </div>
                                        <div className={styles.textContainer}>
                                            <p className={styles.title}>
                                                {title}
                                            </p>
                                            <p className={styles.description}>
                                                {description}
                                            </p>
                                        </div>
                                    </aside>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
            )}
        </Section>
    );
}

export default Projects;

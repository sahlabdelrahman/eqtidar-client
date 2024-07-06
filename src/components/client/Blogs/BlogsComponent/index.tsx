"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";
import ControlsOverlay from "../../global/ControlsOverlay";

import blogsConfig from "./config";

import { getProperFileUrl } from "@/utils/helpers";

import { BlogProps } from "../Main/main";

import styles from "./style.module.scss";

const { title } = blogsConfig;

function BlogsComponent({
    data,
    inDashboard = false,
    handleEdit,
    handleDelete,
}: {
    data: BlogProps[];
    inDashboard?: boolean;
    handleEdit?: (blog: BlogProps) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <Section title={title} inDashboard={inDashboard}>
            {data?.length > 0 ? (
                <div
                    className={`${styles.content} ${
                        inDashboard ? styles.inDashboard : ""
                    }`}
                >
                    {data?.map(
                        ({
                            _id: id,
                            slug,
                            title,
                            description,
                            images,
                            createdAt,
                            updatedAt,
                        }) => {
                            const { alt, url, blurUrl, width, height } =
                                images[0];

                            if (inDashboard) {
                                return (
                                    <div
                                        key={id}
                                        className={styles.card}
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                    >
                                        {inDashboard && (
                                            <ControlsOverlay
                                                handleEdit={() => {
                                                    if (handleEdit)
                                                        handleEdit({
                                                            _id: id,
                                                            slug,
                                                            title,
                                                            description,
                                                            images,
                                                            createdAt,
                                                            updatedAt,
                                                        });
                                                }}
                                                handleDelete={() => {
                                                    if (handleDelete)
                                                        handleDelete(id);
                                                }}
                                            />
                                        )}
                                        <div className={styles.imagesContainer}>
                                            <Image
                                                alt={alt}
                                                src={getProperFileUrl({
                                                    filePath: url,
                                                })}
                                                className={styles.image}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL={getProperFileUrl({
                                                    filePath: blurUrl,
                                                })}
                                                width={width}
                                                height={height}
                                            />
                                        </div>
                                        <div className={styles.textContainer}>
                                            <p className={styles.title}>
                                                {title}
                                            </p>
                                            <p className={styles.description}>
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <Link
                                        key={id}
                                        className={styles.card}
                                        href={`/blogs/${slug}`}
                                        aria-label={title}
                                        title={title}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                    >
                                        <div className={styles.imagesContainer}>
                                            <Image
                                                alt={alt}
                                                src={getProperFileUrl({
                                                    filePath: url,
                                                })}
                                                className={styles.image}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL={getProperFileUrl({
                                                    filePath: blurUrl,
                                                })}
                                                width={width}
                                                height={height}
                                            />
                                        </div>
                                        <div className={styles.textContainer}>
                                            <p className={styles.title}>
                                                {title}
                                            </p>
                                            <p className={styles.description}>
                                                {description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            }
                        }
                    )}
                </div>
            ) : (
                <EmptySection />
            )}
        </Section>
    );
}

export default BlogsComponent;

"use client";

import { useEffect } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";
import TextComp from "../../global/TextComp";

import blogsConfig from "./config";

import { getProperImageUrl } from "@/utils/helpers";
import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { BlogsProps } from "../Main/main";

import styles from "./style.module.scss";

const { title } = blogsConfig;

function BlogsComponent({ data }: { data: BlogsProps }) {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    const { items, isLoading, hasMore, bottomBoundaryRef } = useInfiniteScroll({
        initialItems: data?.items,
        fetchItems: async (page) => {
            const response = await getData({
                url: `${APIUrlsConstants.blog}?page=${page}&size=30`,
            });
            return { items: response.items, hasNextPage: response.hasNextPage };
        },
        initialPage: 1,
    });

    return (
        <Section title={title}>
            {items.length > 0 ? (
                <>
                    <div className={styles.content}>
                        {items.map(
                            ({ _id: id, slug, title, description, images }) => {
                                const { alt, url, blurUrl, width, height } =
                                    images[0];
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
                        )}
                        <div ref={bottomBoundaryRef}></div>
                    </div>
                    {isLoading && <TextComp text="جاري التحميل ..." />}
                    {/* Show a message when there are no more items to load */}
                    {items?.length > 30 && !hasMore && (
                        <TextComp text="لا مزيد من العناصر لتحميلها." />
                    )}
                </>
            ) : (
                <EmptySection />
            )}
        </Section>
    );
}

export default BlogsComponent;

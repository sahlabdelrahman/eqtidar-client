import Image from "next/image";

import { BlogProps } from "../Blogs/Main/main";

import { convertToArabicDate } from "@/functions/date";
import { getProperFileUrl } from "@/utils/helpers";

import styles from "./style.module.scss";

export default function BlogComponent({ data }: { data: BlogProps }) {
    const { title, description, images, createdAt } = data;
    const { alt, url, blurUrl, width, height } = images[0];

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.coverContainer}>
                    <Image
                        alt={alt}
                        src={getProperFileUrl({
                            filePath: url,
                        })}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={getProperFileUrl({
                            filePath: blurUrl,
                        })}
                        width={width}
                        height={height}
                        className={styles.cover}
                    />
                </section>
                <section className={styles.titleAndDate}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.date}>
                        نشرت في {convertToArabicDate(new Date(createdAt))}
                    </p>
                </section>
                <section className={styles.textContainer}>
                    <p className={styles.text}>{description}</p>
                </section>
            </div>
        </main>
    );
}

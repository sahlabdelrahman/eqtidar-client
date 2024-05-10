import Image from "next/image";
import blogConfig from "./config";

import { convertToArabicDate } from "@/functions/date";

import styles from "./style.module.scss";

const { id, slug, title, text, cover, date } = blogConfig;

export default function BlogComponent() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.coverContainer}>
                    <Image
                        src={cover?.url}
                        alt={cover?.alt}
                        loading="lazy"
                        placeholder="blur"
                        className={styles.cover}
                    />
                </section>
                <section className={styles.titleAndDate}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.date}>
                        نشرت في {convertToArabicDate(date)}
                    </p>
                </section>
                <section className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </section>
                <section className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </section>
                <section className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </section>
                <section className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </section>
            </div>
        </main>
    );
}

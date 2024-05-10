import Image from "next/image";
import Link from "next/link";

import Section from "@/components/client/global/Section";

import blogsConfig from "./config";

import styles from "./style.module.scss";

const { title, data } = blogsConfig;

function BlogsComponent() {
    return (
        <Section title={title}>
            <div className={styles.content}>
                {data?.map(({ id, slug, title, description, cover }) => (
                    <Link
                        key={id}
                        className={styles.card}
                        href={`/blogs/${slug}`}
                        aria-label={title}
                        title={title}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={styles.imagesContainer}>
                            <Image
                                alt={cover?.alt}
                                src={cover?.url}
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}

export default BlogsComponent;

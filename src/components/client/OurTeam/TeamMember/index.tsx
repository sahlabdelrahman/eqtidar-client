"use client";

import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

import { getProperImageUrl } from "@/utils/helpers";

import { MemberProps } from "../main";

import styles from "./style.module.scss";

export default function TeamMember({ member }: { member: MemberProps }) {
    const {
        name,
        role,
        description,
        image: { alt, url, blurUrl, width, height },
    } = member;

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section
                    className={styles.right}
                    data-aos="fade-left"
                    data-aos-duration="500"
                >
                    <div className={styles.avatarContainer}>
                        <Image
                            alt={alt}
                            src={getProperImageUrl({
                                filePath: url,
                            })}
                            className={styles.avatar}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={getProperImageUrl({
                                filePath: blurUrl,
                            })}
                            width={width}
                            height={height}
                        />
                    </div>
                    <div className={styles.nameAndRole}>
                        <h3 className={styles.name}>{name}</h3>
                        <p className={styles.role}>{role}</p>
                    </div>
                </section>
                <section
                    className={styles.left}
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    <div className={styles.textContainer}>
                        <p className={styles.text}>{description}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}

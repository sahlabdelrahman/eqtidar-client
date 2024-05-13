"use client";

import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

import teamMemberConfig from "./config";

import SectionTitle from "../global/SectionTitle";

import styles from "./style.module.scss";

const { title, id, slug, name, role, text, avatar } = teamMemberConfig;

export default function TeamMember() {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <main className={styles.main}>
            <SectionTitle title={title} />
            <div className={styles.container}>
                <section
                    className={styles.right}
                    data-aos="fade-left"
                    data-aos-duration="500"
                >
                    <div className={styles.avatarContainer}>
                        <Image
                            src={avatar?.url}
                            alt={avatar?.alt}
                            loading="lazy"
                            placeholder="blur"
                            className={styles.avatar}
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
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>{text}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";

import ourTeamConfig from "./config";

import SectionTitle from "../global/SectionTitle";

import styles from "./style.module.scss";

const { ourBoard, ourTeam } = ourTeamConfig;

export default function OurTeam() {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <SectionTitle title={ourBoard?.title} />
                    <div className={styles.members}>
                        {ourBoard?.members?.map(
                            ({ id, name, role, avatar }) => (
                                <Link
                                    key={id}
                                    className={styles.card}
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    href={`/our-team/${id}`}
                                    aria-label={name}
                                    title={name}
                                    rel="noreferrer"
                                >
                                    <div className={styles.imageContainer}>
                                        <Image
                                            alt={avatar?.alt}
                                            className={styles.image}
                                            src={avatar?.url}
                                        />
                                    </div>
                                    <p className={styles.name}>{name}</p>
                                    <p className={styles.role}>{role}</p>
                                </Link>
                            )
                        )}
                    </div>
                </section>
                <section className={styles.section}>
                    <SectionTitle title={ourTeam?.title} />
                    <div className={styles.members}>
                        {ourTeam?.members?.map(({ id, name, role, avatar }) => (
                            <Link
                                key={id}
                                className={styles.card}
                                data-aos="fade-left"
                                data-aos-duration="500"
                                href={`/our-team/${id}`}
                                aria-label={name}
                                title={name}
                                rel="noreferrer"
                            >
                                <div className={styles.imageContainer}>
                                    <Image
                                        alt={avatar?.alt}
                                        className={styles.image}
                                        src={avatar?.url}
                                    />
                                </div>
                                <p className={styles.name}>{name}</p>
                                <p className={styles.role}>{role}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

"use client";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";

import styles from "./style.module.scss";

import messageAndVisionConfig from "./config";

import { BannerTextProps } from "@/components/client/Home/Main/info";

const { data: configData } = messageAndVisionConfig;

function MessageAndVision({ data }: { data: BannerTextProps }) {
    return (
        <Section>
            <div className={styles.container}>
                {configData?.map(({ id, title, key }) => (
                    <aside
                        key={id}
                        className={styles.content}
                        data-aos="fade-left"
                        data-aos-duration="500"
                    >
                        <h1 className={styles.title}>{title}</h1>
                        {data?.[key]?.text ? (
                            <p className={styles.text}>{data?.[key]?.text}</p>
                        ) : (
                            <EmptySection />
                        )}
                    </aside>
                ))}
            </div>
        </Section>
    );
}

export default MessageAndVision;

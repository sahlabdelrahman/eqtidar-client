import Link from "next/link";
import useAPI from "@/hooks/useAPI";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";

import { APIUrlsConstants } from "@/utils/API/constants";

import servicesConfig from "./config";

import styles from "./style.module.scss";

const { title, sectionId } = servicesConfig;

function Services() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.service,
    });
    return (
        <Section title={title} sectionId={sectionId}>
            {!response || response?.data?.length === 0 ? (
                <EmptySection />
            ) : (
                <div className={styles.content}>
                    {response?.data?.map(
                        ({ _id, text }: { _id: string; text: string }) => (
                            <Link
                                key={_id}
                                href="/services"
                                aria-label={text}
                                title={text}
                                rel="noreferrer"
                                className={styles.card}
                                data-aos="fade-down"
                                data-aos-duration="500"
                            >
                                <p className={styles.text}>{text}</p>
                            </Link>
                        )
                    )}
                </div>
            )}
        </Section>
    );
}

export default Services;

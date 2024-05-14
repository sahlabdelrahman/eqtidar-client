import Link from "next/link";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import clientsConfig from "./config";

const { title, description, sectionId, teamMembers, subDescriptions } =
    clientsConfig;

function OurTeam() {
    return (
        <Section
            title={title}
            description={description}
            sectionId={sectionId}
            dark
        >
            <div className={styles.content}>
                <Link
                    href="our-team"
                    aria-label={subDescriptions}
                    title={subDescriptions}
                    rel="noreferrer"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    className={styles.subDescriptions}
                >
                    {subDescriptions}
                </Link>
            </div>
        </Section>
    );
}

export default OurTeam;

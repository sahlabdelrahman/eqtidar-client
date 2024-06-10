import useAPI from "@/hooks/useAPI";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Section from "@/components/client/global/Section";
import EmptySection from "../../global/EmptySection";

import { APIUrlsConstants } from "@/utils/API/constants";

import faqConfig from "./config";

import styles from "./style.module.scss";

const { title, sectionId, questions } = faqConfig;

function FAQ() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.question,
    });
    return (
        <Section title={title} sectionId={sectionId} dark>
            {!response || response?.data?.length === 0 ? (
                <EmptySection />
            ) : (
                <div
                    className={styles.content}
                    data-aos="fade-left"
                    data-aos-duration="500"
                >
                    {response?.data?.map(
                        ({
                            _id: id,
                            text,
                            answer,
                        }: {
                            _id: string;
                            text: string;
                            answer: string;
                        }) => (
                            <Accordion key={id} className={styles.accordion}>
                                <AccordionSummary
                                    aria-controls={`${text}-content`}
                                    id={`${text}-${id}-header`}
                                >
                                    <p className={styles.question}>{text}</p>
                                </AccordionSummary>
                                <AccordionDetails
                                    className={styles.accordionDetails}
                                >
                                    <p className={styles.answer}>{answer}</p>
                                </AccordionDetails>
                            </Accordion>
                        )
                    )}
                </div>
            )}
        </Section>
    );
}

export default FAQ;

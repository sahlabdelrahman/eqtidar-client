import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Section from "@/components/client/global/Section";

import styles from "./style.module.scss";

import faqConfig from "./config";

const { title, sectionId, questions } = faqConfig;

function FAQ() {
    return (
        <Section title={title} sectionId={sectionId} dark>
            <div className={styles.content}>
                {questions?.map(({ id, question, answer }) => (
                    <Accordion key={id} className={styles.accordion}>
                        <AccordionSummary
                            aria-controls={`${question}-content`}
                            id={`${question}-header`}
                        >
                            <p className={styles.question}>{question}</p>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <p className={styles.answer}>{answer}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </Section>
    );
}

export default FAQ;

import Section from "@/components/client/global/Section";
import EmptySection from "@/components/client/global/EmptySection";
import ControlsOverlay from "@/components/client/global/ControlsOverlay";

import servicesConfig from "./config";

import { ServicesProps } from "@/components/client/Services/Main/services";

import styles from "./style.module.scss";

const { title, sectionId } = servicesConfig;

function ServicesComp({
    data,
    handleEdit,
    handleDelete,
}: {
    data: ServicesProps[];
    handleEdit?: (client: any) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    return (
        <Section
            title={title}
            sectionId={sectionId}
            inDashboard
            enableAOS={false}
        >
            {!data || data?.length === 0 ? (
                <EmptySection />
            ) : (
                <div className={styles.content}>
                    {data?.map((service: ServicesProps) => (
                        <div
                            key={service?._id}
                            aria-label={service?.text}
                            title={service?.text}
                            className={styles.card}
                        >
                            <ControlsOverlay
                                handleEdit={() => {
                                    if (handleEdit) handleEdit(service);
                                }}
                                handleDelete={() => {
                                    if (handleDelete)
                                        handleDelete(service?._id);
                                }}
                            />
                            <p className={styles.title}>{service?.text}</p>
                            <ul className={styles.subServices}>
                                {service?.subServices?.map(
                                    ({ _id: id, text: subServiceText }) => (
                                        <li
                                            key={id}
                                            className={styles.subService}
                                        >
                                            - {subServiceText}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </Section>
    );
}

export default ServicesComp;

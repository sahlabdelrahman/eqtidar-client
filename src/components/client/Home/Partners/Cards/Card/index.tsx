import Image from "next/image";

import ControlsOverlay from "@/components/client/global/ControlsOverlay";

import { getProperImageUrl } from "@/utils/helpers";

import styles from "./style.module.scss";
import { PartnerProps } from "../../partners";

function Card({
    partner,
    inDashboard,
    enableAOS = true,
    handleEdit,
    handleDelete,
}: {
    partner: PartnerProps;
    inDashboard?: boolean;
    enableAOS?: boolean;
    handleEdit?: (partner: PartnerProps) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    const aosProps = enableAOS
        ? { "data-aos": "fade-up", "data-aos-duration": "500" }
        : {};

    const {
        _id,
        image: { alt, url, blurUrl, width, height },
    } = partner;

    return (
        <aside
            className={`${styles.card} ${
                !inDashboard ? styles.clientPage : ""
            }`}
            {...aosProps}
        >
            {inDashboard && (
                <ControlsOverlay
                    handleEdit={
                        handleEdit
                            ? () => {
                                  if (handleEdit) handleEdit(partner);
                              }
                            : null
                    }
                    handleDelete={
                        handleDelete
                            ? () => {
                                  if (handleDelete) handleDelete(_id);
                              }
                            : null
                    }
                />
            )}
            <div className={styles.imageContainer}>
                <Image
                    alt={alt}
                    src={getProperImageUrl({
                        filePath: url,
                    })}
                    className={styles.image}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={getProperImageUrl({
                        filePath: blurUrl,
                    })}
                    width={width}
                    height={height}
                />
            </div>
        </aside>
    );
}

export default Card;

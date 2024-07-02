import Image from "next/image";

import ControlsOverlay from "@/components/client/global/ControlsOverlay";

import { ClientProps } from "../../clients";

import { getProperImageUrl } from "@/utils/helpers";

import styles from "./style.module.scss";

function Card({
    client,
    inDashboard,
    enableAOS = true,
    handleEdit,
    handleDelete,
}: {
    client: ClientProps;
    inDashboard?: boolean;
    enableAOS?: boolean;
    handleEdit?: (client: ClientProps) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    const aosProps = enableAOS
        ? { "data-aos": "fade-up", "data-aos-duration": "500" }
        : {};

    const {
        _id,
        image: { alt, url, blurUrl, width, height },
    } = client;

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
                                  if (handleEdit) handleEdit(client);
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

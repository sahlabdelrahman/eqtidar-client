import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

import styles from "./style.module.scss";

export default function ControlsOverlay({
    handleEdit,
    handleDelete,
}: {
    handleEdit?: any;
    handleDelete?: any;
}) {
    return (
        <div className={styles.controlsOverlay}>
            <div className={styles.controls}>
                {handleEdit && (
                    <button
                        className={styles.button}
                        type="button"
                        onClick={() => {
                            if (handleEdit) {
                                handleEdit();
                            }
                        }}
                    >
                        <EditIcon />
                    </button>
                )}
                {handleDelete && (
                    <button
                        className={styles.button}
                        type="button"
                        onClick={() => {
                            if (handleDelete) {
                                handleDelete();
                            }
                        }}
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>
        </div>
    );
}

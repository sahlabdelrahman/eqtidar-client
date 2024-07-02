import ControlsOverlay from "@/components/client/global/ControlsOverlay";

import { GoalProps } from "../ourGoals";

import styles from "./style.module.scss";

function Card({
    goal,
    inDashboard,
    enableAOS = true,
    handleEdit,
    handleDelete,
}: {
    goal: GoalProps;
    inDashboard?: boolean;
    enableAOS?: boolean;
    handleEdit?: (goal: GoalProps) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    const aosProps = enableAOS
        ? { "data-aos": "fade-up", "data-aos-duration": "500" }
        : {};
    return (
        <aside className={styles.card} {...aosProps}>
            {inDashboard && (
                <ControlsOverlay
                    handleEdit={() => {
                        if (handleEdit) handleEdit(goal);
                    }}
                    handleDelete={() => {
                        if (handleDelete) handleDelete(goal?._id);
                    }}
                />
            )}
            <p className={styles.text}>{goal?.text}</p>
        </aside>
    );
}

export default Card;

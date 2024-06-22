import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import GoalsCards from "@/components/client/Home/OurGoals/Cards";
import Divider from "@/components/client/global/Divider";
import SectionTitle from "@/components/client/global/SectionTitle";

import goalsConfig from "./config";

import styles from "./style.module.scss";

export const metadata = {
    title: {
        default: "الأهداف",
        template: `%s | الأهداف`,
    },
};

const { formData } = goalsConfig;

export default function Goals() {
    return (
        <div className={styles.goals}>
            <DynamicForm formData={formData} />
            <Divider />
            <SectionTitle title="الأهداف" enableAOS={false} />
            <GoalsCards inDashboard={true} />
        </div>
    );
}

import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";

import goalsConfig from "./config";

export const metadata = {
    title: {
        default: "الأهداف",
        template: `%s | الأهداف`,
    },
};

const { formData } = goalsConfig;

export default function Goals() {
    return (
        <div>
            <DynamicForm formData={formData} />
        </div>
    );
}

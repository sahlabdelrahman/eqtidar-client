import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";

import visionAndMessageConfig from "./config";

export const metadata = {
    title: {
        default: "الرؤية والرسالة",
        template: `%s | الرؤية والرسالة`,
    },
};

const { formData } = visionAndMessageConfig;

export default function VisionAndMessage() {
    return (
        <div>
            <DynamicForm formData={formData} />
        </div>
    );
}

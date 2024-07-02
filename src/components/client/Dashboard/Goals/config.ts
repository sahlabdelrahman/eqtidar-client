import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const GoalsConfig: DynamicFormComponentProps = {
    formData: {
        page: "goals",
        api: "string",
        success: {
            message: "string",
        },
        fields: [
            {
                id: "goal",
                name: "text",
                type: "text",
                label: "الهدف",
                placeholder: "الهدف",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الهدف",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون الهدف أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون الهدف أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
        ],
        submitText: "إرسال",
    },
    submitHandler: async ({ data, id }) => {
        if (id) {
            const response = await APIConfig.patch(
                `${APIUrlsConstants.goal}/${id}`,
                { ...data }
            );
            return {
                status: response?.status,
                success: response?.data?.success,
                message: response?.data?.message,
                data: response?.data?.data,
            };
        } else {
            const response = await APIConfig.post(APIUrlsConstants.goal, {
                ...data,
            });
            return {
                status: response?.status,
                success: response?.data?.success,
                message: response?.data?.message,
                data: response?.data?.data,
            };
        }
    },
};

export default GoalsConfig;

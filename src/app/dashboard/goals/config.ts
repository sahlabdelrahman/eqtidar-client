import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

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
                name: "goal",
                type: "goal",
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
};

export default GoalsConfig;

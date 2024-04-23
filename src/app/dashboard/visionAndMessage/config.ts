import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

const VisionAndMessageConfig: DynamicFormComponentProps = {
    formData: {
        page: "visionAndMessage",
        api: "string",
        success: {
            message: "string",
        },
        fields: [
            {
                id: "vision",
                name: "vision",
                type: "vision",
                label: "الرؤية",
                placeholder: "الرؤية",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الرؤية",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن تكون الرؤية أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن تكون الرؤية أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "message",
                name: "message",
                type: "message",
                label: "الرسالة",
                placeholder: "الرسالة",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الرسالة",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن تكون الرسالة أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن تكون الرسالة أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
        ],
        submitText: "إرسال",
    },
};

export default VisionAndMessageConfig;

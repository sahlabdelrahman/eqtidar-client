import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const ourTeamConfig: DynamicFormComponentProps = {
    formData: {
        fields: [
            {
                id: "name",
                name: "name",
                type: "text",
                label: "الأسم",
                placeholder: "الأسم",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الأسم",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون الأسم أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون الأسم أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "role",
                name: "role",
                type: "text",
                label: "الدور",
                placeholder: "الدور",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الدور",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون الدور أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون الدور أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "description",
                name: "description",
                type: "text",
                label: "الوصف",
                placeholder: "الوصف",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الوصف",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون الوصف أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون الوصف أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "position",
                name: "position",
                type: "single-select",
                label: "الفريق",
                placeholder: "الفريق",
                options: [
                    {
                        text: "مجلس الإدارة",
                        value: "board_member",
                    },
                    {
                        text: "فريق العمل",
                        value: "team_member",
                    },
                ],
                validation: {
                    required: {
                        value: true,
                        message: "يجب اختيار الفريق",
                    },
                },
            },

            {
                id: "image",
                name: "files",
                type: "image",
                label: "صورة",
                placeholder: "صورة",
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال صورة",
                    },
                },
            },
        ],
        submitText: "إرسال",
    },
    submitHandler: async ({ data, id }) => {
        if (id) {
            const response = await APIConfig.patch(
                `${APIUrlsConstants.member}/${id}`,
                {
                    ...data,
                }
            );
            return {
                status: response?.status,
                success: response?.data?.success,
                message: response?.data?.message,
                data: response?.data?.data,
            };
        } else {
            const response = await APIConfig.post(APIUrlsConstants.member, {
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

export default ourTeamConfig;

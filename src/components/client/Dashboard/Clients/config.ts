import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const clientsConfig: DynamicFormComponentProps = {
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
                id: "url",
                name: "url",
                type: "text",
                label: "الرابط",
                placeholder: "الرابط",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الرابط",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون الرابط أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون الرابط أقل من ١٠٠٠٠ حرفًا",
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
                `${APIUrlsConstants.client}/${id}`,
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
            const response = await APIConfig.post(APIUrlsConstants.client, {
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

export default clientsConfig;

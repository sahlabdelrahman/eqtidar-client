import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const blogsConfig: DynamicFormComponentProps = {
    formData: {
        fields: [
            {
                id: "title",
                name: "title",
                type: "text",
                label: "العنوان",
                placeholder: "العنوان",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال العنوان",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون العنوان أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون العنوان أقل من ١٠٠٠٠ حرفًا",
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
                `${APIUrlsConstants.blog}/${id}`,
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
            const response = await APIConfig.post(APIUrlsConstants.blog, {
                ...data,
                images: [data?.image],
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

export default blogsConfig;

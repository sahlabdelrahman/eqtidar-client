import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const servicesConfig: DynamicFormComponentProps = {
    formData: {
        fields: [
            {
                id: "text",
                name: "text",
                type: "text",
                label: "الخدمة",
                placeholder: "الخدمة",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الخدمة",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن تكون الخدمة أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن تكون الخدمة أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "subServices",
                name: "subServices",
                type: "text",
                label: "الخدمة الفرعية",
                placeholder: "الرجاء الفصل بين كل خدمة فرعية ب ،",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الخدمة الفرعية",
                    },
                },
            },
        ],
        submitText: "إرسال",
    },
    submitHandler: async ({ data, id }) => {
        const subServiceArray = data?.subServices
            ?.split("،")
            .map((subService: any) => subService.trim());
        const subServices = subServiceArray.map((subService: any) => ({
            text: subService,
        }));

        if (id) {
            const response = await APIConfig.patch(
                `${APIUrlsConstants.service}/${id}`,
                {
                    ...data,
                    subServices,
                }
            );
            return {
                status: response?.status,
                success: response?.data?.success,
                message: response?.data?.message,
                data: response?.data?.data,
            };
        } else {
            const response = await APIConfig.post(APIUrlsConstants.service, {
                ...data,
                subServices,
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

export default servicesConfig;

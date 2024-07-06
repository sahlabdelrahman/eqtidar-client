import { DynamicFormComponentProps } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const infoConfig: DynamicFormComponentProps = {
    formData: {
        fields: [
            {
                id: "vision",
                name: "vision",
                type: "text",
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
                type: "text",
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
            {
                id: "values",
                name: "values",
                type: "text",
                label: "القيم",
                placeholder: "القيم",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال القيم",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن تكون القيم أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن تكون القيم أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "whoWeAre",
                name: "whoWeAre",
                type: "text",
                label: "من نحن",
                placeholder: "من نحن",
                multiline: true,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال من نحن",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون من نحن أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون من نحن أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "clients",
                name: "clients",
                type: "number",
                label: "عدد العملاء",
                placeholder: "عدد العملاء",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال عدد العملاء",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون عدد العملاء أقل من ٢٥٥ رقم ",
                    },
                },
            },
            {
                id: "employees",
                name: "employees",
                type: "number",
                label: "عدد الموظفين",
                placeholder: "عدد الموظفين",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال عدد الموظفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون عدد الموظفين أقل من ٢٥٥ رقم ",
                    },
                },
            },
            {
                id: "inProgressProjects",
                name: "inProgressProjects",
                type: "number",
                label: "عدد المشروعات المستقبلية",
                placeholder: "عدد المشروعات المستقبلية",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال عدد المشروعات المستقبلية",
                    },
                    maxLength: {
                        value: 10000,
                        message:
                            "يجب أن تكون عدد المشروعات المستقبلية أقل من ٢٥٥ رقم ",
                    },
                },
            },
            {
                id: "completedProjects",
                name: "completedProjects",
                type: "number",
                label: "عدد المشروعات المكتملة",
                placeholder: "عدد المشروعات المكتملة",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال عدد المشروعات المكتملة",
                    },
                    maxLength: {
                        value: 10000,
                        message:
                            "يجب أن تكون عدد المشروعات المكتملة أقل من ٢٥٥ رقم ",
                    },
                },
            },
            {
                id: "mobile",
                name: "mobile",
                type: "text",
                label: "الموبايل",
                placeholder: "الموبايل",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال الموبايل",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون الموبايل أقل من ٢٥٥ رقم ",
                    },
                },
            },
            {
                id: "whatsapp",
                name: "whatsapp",
                type: "text",
                label: "رابط الواتس اب",
                placeholder: "رابط الواتس اب",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال رابط الواتس اب",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون رابط الواتس اب أقل من ٢٥٥ رقم ",
                    },
                },
            },
            {
                id: "email",
                name: "email",
                type: "text",
                label: "البريد الالكتروني",
                placeholder: "البريد الالكتروني",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال البريد الالكتروني",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون البريد الالكتروني أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message:
                            "يجب أن يكون البريد الالكتروني أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "location",
                name: "location",
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
                id: "linkedin",
                name: "linkedin",
                type: "text",
                label: "رابط لينكد ان",
                placeholder: "رابط لينكد ان",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال رابط لينكد ان",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون رابط لينكد ان أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون رابط لينكد ان أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "x",
                name: "x",
                type: "text",
                label: "رابط اكس",
                placeholder: "رابط اكس",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال رابط اكس",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون رابط اكس أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون رابط اكس أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "instagram",
                name: "instagram",
                type: "text",
                label: "رابط انستغرام",
                placeholder: "رابط انستغرام",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال رابط انستغرام",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون رابط انستغرام أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون رابط انستغرام أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
            {
                id: "snapchat",
                name: "snapchat",
                type: "text",
                label: "رابط سناب شات",
                placeholder: "رابط سناب شات",
                multiline: false,
                validation: {
                    required: {
                        value: true,
                        message: "يجب ادخال رابط سناب شات",
                    },
                    minLength: {
                        value: 2,
                        message: "يجب أن يكون رابط سناب شات أكثر من حرفين",
                    },
                    maxLength: {
                        value: 10000,
                        message: "يجب أن يكون رابط سناب شات أقل من ١٠٠٠٠ حرفًا",
                    },
                },
            },
        ],
        submitText: "تحديث",
    },
    submitHandler: async ({ data }) => {
        const formattedData = {
            bannerText: {
                message: { text: data.message },
                vision: { text: data.vision },
                values: { text: data.values },
            },
            whoWeAre: {
                text: data.whoWeAre,
            },
            achievements: {
                clients: data.clients,
                employees: data.employees,
                inProgressProjects: data.inProgressProjects,
                completedProjects: data.completedProjects,
            },
            contact: {
                mobile: { text: data.mobile, url: `tel:${data.mobile}` },
                whatsapp: {
                    text: data.whatsapp,
                    url: data.whatsapp,
                },
                email: { text: data.email, url: `mailto:${data.email}` },
                location: {
                    text: data.location,
                    url: "//",
                },
            },
            socialMedia: {
                linkedin: data.linkedin,
                x: data.x,
                instagram: data.instagram,
                snapchat: data.snapchat,
            },
        };
        const response = await APIConfig.post(APIUrlsConstants.info, {
            ...formattedData,
        });
        return {
            status: response?.status,
            success: response?.data?.success,
            message: response?.data?.message,
            data: response?.data?.data,
        };
    },
};

export default infoConfig;

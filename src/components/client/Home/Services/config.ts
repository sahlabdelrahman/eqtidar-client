import { ServicesConfigProps } from "../../Services/Main/services";

const ServicesConfig: ServicesConfigProps = {
    title: "خدماتنا",
    sectionId: "services",

    fields: [
        {
            id: "name",
            name: "name",
            type: "name",
            label: "الاسم",
            placeholder: "الاسم",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الاسم",
                },
                minLength: {
                    value: 2,
                    message: "يجب أن يكون الاسم أكثر من حرفين",
                },
                maxLength: {
                    value: 60,
                    message: "يجب أن يكون الاسم أقل من 60 حرفًا",
                },
            },
        },
        {
            id: "mobileNumber",
            name: "mobile",
            type: "string",
            label: "الموبايل",
            placeholder: "الموبايل",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الموبايل",
                },
                minLength: {
                    value: 6,
                    message: "يجب أن يكون الموبايل أكثر من ٦ ارقام",
                },
                maxLength: {
                    value: 60,
                    message: "يجب أن يكون الموبايل أقل من 60 رقم",
                },
            },
        },
        {
            id: "email",
            name: "email",
            type: "email",
            label: "البريد الالكتروني",
            placeholder: "البريد الالكتروني",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال البريد الالكتروني",
                },
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "البريد الالكتروني غير صالح",
                },
            },
        },
        {
            id: "contactWay",
            name: "contactWay",
            type: "checkbox",
            label: "وسيلة الاتصال المفضلة لديكم",
            placeholder: "وسيلة الاتصال المفضلة لديكم",
            options: [
                { label: "الاتصال هاتفيا", value: "الاتصال هاتفيا" },
                { label: "البريد الإلكتروني", value: "البريد الإلكتروني" },
                { label: "واتساب", value: "واتساب" },
            ],
        },
        {
            id: "service",
            name: "service",
            type: "select",
            label: "الخدمة المطلوبة",
            placeholder: "اختر الخدمة",
            options: [],
            validation: {
                required: {
                    value: true,
                    message: "يجب اختيار الخدمة",
                },
            },
        },
        {
            id: "message",
            name: "message",
            type: "message",
            label: "شرح مختصر للمطلوب",
            placeholder: "شرح مختصر للمطلوب",
            multiline: true,
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الشرح",
                },
                minLength: {
                    value: 2,
                    message: "يجب أن تكون الشرح أكثر من حرفين",
                },
                maxLength: {
                    value: 10000,
                    message: "يجب أن تكون الشرح أقل من ١٠٠٠٠ حرفًا",
                },
            },
        },
    ],

    buttonText: "إرسال",
    successMessage: "نشكرك! سوف نعود اليك قريبا.",
};

export default ServicesConfig;

import { Autoplay } from "swiper/modules";

import { ServicesComponentProps } from "@/types/componentProps";

const ServicesConfig: ServicesComponentProps = {
    title: "خدماتنا",
    sectionId: "services",
    data: [
        {
            id: 0,
            slug: "0",
            text: "تأسيس الأوقاف",
            subServices: [
                { id: 0, text: "صيغة وثيقة فنية" },
                { id: 1, text: "تسجيل شهادة الوقف" },
                { id: 2, text: "فتح حساب بنكي للوقف" },
            ],
        },
        {
            id: 1,
            slug: "1",
            text: "حلول الأوقاف",
            subServices: [
                { id: 0, text: "تقديم استشارات وقفية" },
                { id: 1, text: "صياغة العقود" },
                { id: 2, text: "توفير أصول وقفية" },
                { id: 3, text: "تشغيل وقف" },
                { id: 4, text: "إدارة غلة وقف" },
                { id: 5, text: "استبدال وقف متعطل" },
            ],
        },
        {
            id: 2,
            slug: "2",
            text: "خدمات التدريب",
            subServices: [
                {
                    id: 0,
                    text: "دورات تدريبية للواقفين والعاملين في القطاع الوقفي",
                },
                { id: 1, text: "صياغة العقود" },
            ],
        },
        {
            id: 3,
            slug: "3",
            text: "خدمات التسويق والإعلام",
            subServices: [
                { id: 0, text: "تسويق وقف قائم" },
                { id: 1, text: "الإبراز الاعلامي للوقف" },
            ],
        },
    ],

    fields: [
        {
            id: "name",
            name: "customerName",
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
            name: "customerMobileNumber",
            type: "number",
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
            name: "customerEmail",
            type: "email",
            label: "الإيميل",
            placeholder: "الإيميل",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الإيميل",
                },
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "الإيميل غير صالح",
                },
            },
        },
        {
            id: "contactMethod",
            name: "contactMethod",
            type: "checkbox",
            label: "وسيلة الاتصال المفضلة لديكم",
            placeholder: "وسيلة الاتصال المفضلة لديكم",
            options: [
                { label: "الاتصال هاتفيا", value: "phone" },
                { label: "البريد الإلكتروني", value: "email" },
                { label: "واتساب", value: "whatsapp" },
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

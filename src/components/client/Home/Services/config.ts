import { Autoplay } from "swiper/modules";

import { ServicesComponentProps } from "@/types/componentProps";

const ServicesConfig: ServicesComponentProps = {
    title: "خدماتنا",
    sectionId: "services",
    data: [
        {
            id: 0,
            text: "تأسيس الأوقاف",
            subServices: [
                { id: 0, text: "صيغة وثيقة فنية" },
                { id: 1, text: "تسجيل شهادة الوقف" },
                { id: 2, text: "فتح حساب بنكي للوقف" },
            ],
        },
        {
            id: 1,
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
            text: "خدمات التسويق والإعلام",
            subServices: [
                { id: 0, text: "تسويق وقف قائم" },
                { id: 1, text: "الإبراز الاعلامي للوقف" },
            ],
        },
    ],
};

export default ServicesConfig;

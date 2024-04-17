import { Autoplay } from "swiper/modules";

import { ServicesComponentProps } from "@/types/componentProps";

const ServicesConfig: ServicesComponentProps = {
    title: "خدماتنا",
    sectionId: "services",
    swiperConfig: {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1536: {
                slidesPerView: 4,
            },
            2048: {
                slidesPerView: 5,
            },
        },
        loop: true,
    },
    data: [
        {
            id: 0,
            text: "تأسيس وقف",
        },
        {
            id: 1,
            text: "صياغة وثيقة وقفية",
        },
        {
            id: 2,
            text: "تسويق وقف قائم",
        },
        {
            id: 3,
            text: "تقديم استشارات وقفية",
        },
        {
            id: 4,
            text: "توفير أصول وقفية",
        },
        {
            id: 5,
            text: "تشغيل وقف",
        },
        {
            id: 6,
            text: "استخراج رخص وقفية",
        },
        {
            id: 7,
            text: "إدارة غلة وقف",
        },
        {
            id: 8,
            text: "صياغة عقود للوقف",
        },
        {
            id: 9,
            text: "الإبراز الإعلامي للوقف",
        },
        {
            id: 10,
            text: "استبدال وقف متعطل",
        },
        {
            id: 11,
            text: "تأسيس تطبيقات و أنظمة رقمية لإدارة الوقف واستثمارة",
        },
        {
            id: 12,
            text: "دورات تدريبية للنظار والواقفين والعاملين في القطاع الوقفي",
        },
    ],
};

export default ServicesConfig;

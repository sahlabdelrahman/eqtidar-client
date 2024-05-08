import { OurGoalsComponentProps } from "@/types/componentProps";

const OurGoalsConfig: OurGoalsComponentProps = {
    title: "أهدافنا",
    sectionId: "goals",
    data: [
        {
            id: 0,
            text: "تقديم خدمات ممـيزة للواقفين والنظار والعاملين في قطـاع الأوقاف لإدارة أوقافهم باحترافية ومهنية فائقة.",
        },
        {
            id: 1,
            text: "إيجاد الحلول للمشكلات التي تعتري الأوقاف.",
        },
        {
            id: 2,
            text: "تعزيز الإثراء المعرفي لمجال الأوقاف.",
        },
    ],

    swiperConfig: {
        spaceBetween: 15,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        loop: true,
    },
};

export default OurGoalsConfig;

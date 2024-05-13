import { Autoplay, Pagination } from "swiper/modules";

import TeamMemberImage from "@/components/Images/team_member.jpeg";

import { OurTeamComponentProps } from "@/types/componentProps";

const OurTeamConfig: OurTeamComponentProps = {
    title: "فريقنا",
    description:
        "يقود العمل نخبه من المتخصصين في العمل الوقفي والحاصلين علي المؤهلات والخبرات العالية في هذا المجال",
    sectionId: "ourTeam",
    teamMembers: [
        {
            id: "0",
            name: "محمد محمود",
            role: "المدير التنفيذي",
            description:
                "أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ",
            image: {
                alt: "string",
                url: TeamMemberImage,
                blurUrl: "string",
            },
        },
        {
            id: "1",
            name: "محمد محمود",
            role: "المدير التنفيذي",
            description:
                "أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ",
            image: {
                alt: "string",
                url: TeamMemberImage,
                blurUrl: "string",
            },
        },
        {
            id: "2",
            name: "محمد محمود",
            role: "المدير التنفيذي",
            description:
                "أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ",
            image: {
                alt: "string",
                url: TeamMemberImage,
                blurUrl: "string",
            },
        },
        {
            id: "3",
            name: "محمد محمود",
            role: "المدير التنفيذي",
            description:
                "أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ",
            image: {
                alt: "string",
                url: TeamMemberImage,
                blurUrl: "string",
            },
        },
        {
            id: "4",
            name: "محمد محمود",
            role: "المدير التنفيذي",
            description:
                "أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ",
            image: {
                alt: "string",
                url: TeamMemberImage,
                blurUrl: "string",
            },
        },
    ],
    swiperConfig: {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        modules: [Pagination, Autoplay],
        pagination: {
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
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
                slidesPerView: 5,
            },
        },

        loop: true,
    },
};

export default OurTeamConfig;

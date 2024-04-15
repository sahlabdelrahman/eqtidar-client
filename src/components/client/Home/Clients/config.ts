import { Autoplay } from "swiper/modules";

import Project01 from "@/components/Images/project_01.jpeg";
import Project02 from "@/components/Images/project_02.jpeg";
import Project03 from "@/components/Images/project_03.jpeg";
import Project04 from "@/components/Images/project_04.jpeg";
import Project05 from "@/components/Images/project_05.jpeg";

import { ClientsComponentProps } from "@/types/componentProps";

const ClientsConfig: ClientsComponentProps = {
    title: "عملاؤنا",
    sectionId: "clients",
    clients: [
        {
            id: "0",
            alt: "string",
            url: Project01,
            blurUrl: "string",
        },
        {
            id: "1",
            alt: "string",
            url: Project02,
            blurUrl: "string",
        },
        {
            id: "2",
            alt: "string",
            url: Project03,
            blurUrl: "string",
        },
        {
            id: "3",
            alt: "string",
            url: Project04,
            blurUrl: "string",
        },
        {
            id: "4",
            alt: "string",
            url: Project05,
            blurUrl: "string",
        },
        {
            id: "5",
            alt: "string",
            url: Project03,
            blurUrl: "string",
        },
        {
            id: "6",
            alt: "string",
            url: Project01,
            blurUrl: "string",
        },
        {
            id: "7",
            alt: "string",
            url: Project05,
            blurUrl: "string",
        },
    ],
    swiperConfig: {
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        // modules: [Autoplay],
        slidesPerView: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 3,
            },
            900: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1536: {
                slidesPerView: 6,
            },
            2048: {
                slidesPerView: 7,
            },
        },
        loop: true,
    },
};

export default ClientsConfig;

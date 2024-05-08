import { Autoplay } from "swiper/modules";

import Logo02 from "@/components/Images/logo_02.jpeg";

import { ClientsComponentProps } from "@/types/componentProps";

const ClientsConfig: ClientsComponentProps = {
    title: "عملاؤنا",
    sectionId: "clients",
    clients: [
        {
            id: "0",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "1",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "2",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "3",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "4",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "5",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "6",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
        {
            id: "7",
            alt: "string",
            url: Logo02,
            blurUrl: "string",
        },
    ],
    swiperConfig: {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
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

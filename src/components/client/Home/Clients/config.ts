import { Autoplay, Pagination } from "swiper/modules";

import Logo02 from "@/components/Images/logo_02.jpeg";

import { ClientsComponentProps } from "@/types/componentProps";

const ClientsConfig: ClientsComponentProps = {
    title: "عملاؤنا",
    sectionId: "clients",
    swiperConfig: {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        modules: [Autoplay, Pagination],
        pagination: {
            clickable: true,
        },
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

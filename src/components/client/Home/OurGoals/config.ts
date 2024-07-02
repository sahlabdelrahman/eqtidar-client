import { OurGoalsConfigProps } from "./ourGoals";

import { Pagination } from "swiper/modules";
import { HashNavigation } from "swiper/modules";

const OurGoalsConfig: OurGoalsConfigProps = {
    title: "أهدافنا",
    sectionId: "goals",
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
        modules: [Pagination, HashNavigation],
        pagination: {
            clickable: true,
        },
    },
};

export default OurGoalsConfig;

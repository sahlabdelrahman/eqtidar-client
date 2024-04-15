import BannerImage from "@/components/Images/banner.jpg";

import { BannerComponentProps } from "@/types/componentProps";

const bannerConfig: BannerComponentProps = {
    image: {
        alt: "Banner",
        src: BannerImage,
    },
    data: [
        {
            id: 0,
            title: "رؤيتنا",
            text: "أن نكون الأفضل في عالم تطوير الأوقاف.",
        },
        {
            id: 1,
            title: "رسالتنا",
            text: "قيام الأوقاف على أسس قوية، تعزز مكانتها وترفع سقـــف الاستفادة منها, وتمكنها من الوصول بفاعلية إلى الاستدامة المنشودة.",
        },
    ],
};

export default bannerConfig;

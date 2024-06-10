// Blogs

import { StaticImageData } from "next/image";
import { SwiperConfig } from "../componentProps";

interface BlogsImageProps {
    id: string;
    alt: string;
    url: StaticImageData;
    blurUrl?: string;
    width?: number;
    height?: number;
}

export interface BlogsConfigProps {
    title: string;
}

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

interface BlogsDataProps {
    id: number;
    slug: string;
    title: string;
    description: string;
    cover: BlogsImageProps;
}

export interface BlogsComponentProps {
    title: string;
    data: BlogsDataProps[];
}

// Blog

export interface BlogComponentProps {
    id: number;
    slug: string;
    title: string;
    text: string;
    cover: BlogsImageProps;
    date: Date;
}

import { SwiperConfig } from "@/types/componentProps";

export interface ClientProps {
    _id: string;
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    order: number;
    image: {
        url: string;
        blurUrl: string;
        alt: string;
        width: number;
        height: number;
    };
}

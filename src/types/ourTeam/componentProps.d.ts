import { StaticImageData } from "next/image";

interface AvatarProps {
    id: string;
    alt: string;
    url: StaticImageData;
    blurUrl?: string;
    width?: number;
    height?: number;
}

export interface TeamMemberComponentProps {
    title: string;
    id: number;
    slug: string;
    name: string;
    role: string;
    text: string;
    avatar: BlogsImageProps;
}

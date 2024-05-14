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
    id: string;
    slug?: string;
    name: string;
    role: string;
    text: string;
    avatar: AvatarProps;
}

export interface OurTeamComponentProps {
    ourBoard: {
        title: string;
        members: TeamMemberComponentProps[];
    };
    ourTeam: {
        title: string;
        members: TeamMemberComponentProps[];
    };
}

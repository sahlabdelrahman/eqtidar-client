import { ImageProps } from "@/types";

export interface MemberProps {
    _id: string;
    name: string;
    description: string;
    role: string;
    position: Position;
    image: ImageProps;
    order?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MembersProps {
    items: MemberProps[];
    itemCount: number;
    offset: number;
    perPage: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prev: boolean | null;
    next: boolean | null;
}

export interface OurTeamConfigProps {
    ourBoard: {
        title: string;
    };
    ourTeam: {
        title: string;
    };
}

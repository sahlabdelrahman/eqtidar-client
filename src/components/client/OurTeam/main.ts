import { ImageProps } from "@/types";

export enum Position {
    TeamMember = "team_member",
    BoardMember = "board_member",
}

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

export const initialMembersState: MembersProps = {
    items: [],
    itemCount: 0,
    offset: 0,
    perPage: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prev: null,
    next: null,
};

export interface OurTeamConfigProps {
    ourBoard: {
        title: string;
    };
    ourTeam: {
        title: string;
    };
}

import { ImageProps } from "@/types";

export interface BlogProps {
    _id: string;
    title: string;
    slug: string;
    description: string;
    images: ImageProps[];
    order?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface BlogsProps {
    items: BlogProps[];
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

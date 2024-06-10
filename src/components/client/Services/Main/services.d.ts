// Services types

import { Field } from "@/types/componentProps";

interface SubServicesDataProps {
    _id: number;
    text: string;
}

interface ServicesDataProps {
    id: number;
    slug: string;
    text: string;
    subServices: SubServicesDataProps[];
}

export interface ServicesConfigProps {
    title: string;
    sectionId: string;
    data: ServicesDataProps[];
    buttonText: string;
    successMessage: string;
    fields: Field[];
}

export interface ServicesProps {
    _id: string;
    text: string;
    slug: string;
    subServices: SubServicesDataProps[];
    createdAt: string;
    updatedAt: string;
    order: number;
}

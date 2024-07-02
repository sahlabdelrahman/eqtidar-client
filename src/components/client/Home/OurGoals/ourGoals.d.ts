import { SwiperConfig } from "@/types/componentProps";

export interface GoalProps {
    _id: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    order: number;
}

export interface OurGoalsConfigProps {
    title: string;
    sectionId: string;
    swiperConfig: SwiperConfig;
}

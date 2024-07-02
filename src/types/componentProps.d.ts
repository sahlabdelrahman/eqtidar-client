import React, {
    ButtonHTMLAttributes,
    CSSProperties,
    FunctionComponent,
    MouseEventHandler,
    ReactNode,
    SVGProps,
    StyleHTMLAttributes,
} from "react";

import { StaticImageData } from "next/image";
import { SlideProps } from "@mui/material";
import { SubServicesDataProps } from "@/components/client/Services/Main/services";

// Navbar types

interface NavbarComponentProps {
    window?: () => Window;
    children?: React.ReactElement | (IntrinsicAttributes & SlideProps);
}

interface NavbarHamburgerProps {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}

interface NavbarLinkProps {
    id: number;
    path: string;
    text: string;
}

export interface NavbarConfigProps {
    Logo: StaticImageData | string;
    LogoWithSlogan: StaticImageData | string;
    drawerWidth: number;
    links: NavbarLinkProps[];
}

export interface LinksComponentProps {
    notInDrawer?: boolean;
    inFooter?: boolean;
    links: NavbarLinkProps[];
}
export interface LogoComponentProps {
    inDrawer?: boolean;
    Logo?: StaticImageData | string;
    externalPage?: boolean;
    withSlogan?: boolean;
    url?: string;
}

// MessageAndVision types

interface MessageAndVisionDataProps {
    id: number;
    title: string;
    text: string;
    key: string;
}

export interface MessageAndVisionComponentProps {
    data: MessageAndVisionDataProps[];
}

// Banner types

interface BannerImageProps {
    url: StaticImageData;
    alt: string;
}

export interface BannerComponentProps {
    image: BannerImageProps;
}

// Section

export interface SectionComponentProps {
    title?: string;
    description?: string;
    sectionId?: string;
    dark?: boolean;
    styles?: StyleHTMLAttributes;
    children: ReactNode;
}

// Projects types

interface AutoplayConfig {
    delay: number;
    disableOnInteraction: boolean;
}

type SwiperBreakpoints = {
    [key: number]: {
        slidesPerView: number;
    };
};

interface CustomPaginationOptions {
    dynamicBullets?: boolean;
    clickable?: boolean;
}
interface CustomHashNavigationOptions {
    watchState: boolean;
}

interface SwiperConfig {
    autoplay?: AutoplayConfig;
    modules?: any[];
    pagination?: CustomPaginationOptions;
    hashNavigation?: CustomHashNavigationOptions;
    navigation?: any;
    spaceBetween?: number;
    slidesPerView?: number;
    breakpoints?: SwiperBreakpoints;
    loop?: boolean;
}

interface ProjectImageProps {
    id: string;
    alt: string;
    url: StaticImageData;
    blurUrl?: string;
    width?: number;
    height?: number;
}

interface ProjectsDataProps {
    id: number;
    title: string;
    description: string;
    images: ProjectImageProps[];
}

export interface ProjectsComponentProps {
    title: string;
    sectionId: string;
    data: ProjectsDataProps[];
    mainSwiperConfig: SwiperConfig;
    swiperConfig: SwiperConfig;
}

// Clients types

export interface ClientsComponentProps {
    title: string;
    sectionId: string;
    swiperConfig: SwiperConfig;
}

// OurTeam types

interface TeamMemberProps {
    id: string;
    name: string;
    description?: string;
    role: string;
    image: {
        url: StaticImageData;
        blurUrl?: string;
        alt: string;
        width?: number;
        height?: number;
    };
}

export interface OurTeamComponentProps {
    title: string;
    description: string;
    subDescriptions: string;
    sectionId: string;
    teamMembers: TeamMemberProps[];
}

// Partners types

export interface PartnersComponentProps {
    title: string;
    sectionId: string;

    swiperConfig: SwiperConfig;
}

// FAQ types

interface QuestionsProps {
    id: number;
    question: string;
    answer: string;
}

export interface FAQComponentProps {
    title: string;
    sectionId: string;
    questions: QuestionsProps[];
}

// ContactUs types

type ValidationRule = {
    value: any;
    message: string;
};

export type Field = {
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    validation?: {
        required: ValidationRule;
        minLength?: ValidationRule;
        maxLength?: ValidationRule;
        pattern?: ValidationRule;
    };
    multiline?: boolean;
    options?: any;
};

export interface ContactUsComponentProps {
    title: string;
    sectionId: string;
    fields: Field[];
    buttonText: string;
    successMessage: string;
}

export interface InputComponentProps {
    name: string;
    label: string;
    type?: string;
    id: string;
    placeholder: string;
    validation?: any;
    multiline?: boolean;
}

export interface CheckboxComponentProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    multiline?: boolean;
    value?: string;
    validation?: any;
    options?: { label: string; value: string }[];
}

export interface SelectComponentProps {
    name: string;
    label: string;
    id: string;
    placeholder: string;
    validation?: any;
    multiline?: boolean;
    value?: string;
    options: {
        text: string;
        _id: string | number;
        subServices: SubServicesDataProps[];
    }[];
}

export interface InputErrorComponentProps {
    message: string;
}

export interface ButtonComponentProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    id?: string;
    customStyle?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    StartIcon?: ReactNode;
    EndIcon?: ReactNode;
    isLoading?: boolean;
    LoadingIndicator?: ReactNode;
}

// ================================================== Pages ============================================== //

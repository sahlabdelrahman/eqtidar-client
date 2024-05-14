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

interface ContactProps {
    id: number;
    text: string;
    path: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}
interface SocialMediaLinkProps {
    id: number;
    path: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export interface NavbarConfigProps {
    Logo: StaticImageData | string;
    LogoWithSlogan: StaticImageData | string;
    drawerWidth: number;
    links: NavbarLinkProps[];
}
export interface FooterConfigProps {
    slogan: string;
    copyright: string;
    developed: {
        text: string;
        name: string;
        path: string;
    };
    idFile: {
        text: string;
        path: string;
    };
    whoAreWe: string;
    socialMediaLinks: SocialMediaLinkProps[];
    contact: ContactProps[];
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
}

// MessageAndVision types

interface MessageAndVisionDataProps {
    id: number;
    title: string;
    text: string;
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

// OurGoals types

interface OurGoalsDataProps {
    id: number;
    text: string;
}

export interface OurGoalsComponentProps {
    title: string;
    sectionId: string;
    data: OurGoalsDataProps[];
    swiperConfig: SwiperConfig;
}

// Services types

interface SubServicesDataProps {
    id: number;
    text: string;
}

interface ServicesDataProps {
    id: number;
    slug: string;
    text: string;
    subServices: SubServicesDataProps[];
}

export interface ServicesComponentProps {
    title: string;
    sectionId: string;
    data: ServicesDataProps[];
    buttonText: string;
    successMessage: string;
    fields: Field[];
}

// Achievements types

interface AchievementsDataProps {
    id: number;
    text: string;
    number: number;
}

export interface AchievementsComponentProps {
    title: string;
    sectionId: string;
    data: AchievementsDataProps[];
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

interface ClientProps {
    id: string;
    alt: string;
    url: StaticImageData;
    blurUrl?: string;
    width?: number;
    height?: number;
}

export interface ClientsComponentProps {
    title: string;
    sectionId: string;
    clients: ClientProps[];
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

interface PartnerProps {
    id: string;
    alt: string;
    url: StaticImageData;
    blurUrl?: string;
    width?: number;
    height?: number;
}

export interface PartnersComponentProps {
    title: string;
    sectionId: string;
    partners: PartnerProps[];
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

type Field = {
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
        id: string | number;
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

// Login page

export interface LoginFormComponentProps {
    title: string;
    description: string;
    fields: Field[];
    buttonText: string;
    successMessage: string;
}

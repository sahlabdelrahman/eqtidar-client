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

interface SocialMediaLinkProps {
    id: number;
    path: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export interface NavbarConfigProps {
    Logo: FunctionComponent<SVGProps<SVGSVGElement>> | string;
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
    socialMediaLinks: SocialMediaLinkProps[];
}

export interface LinksComponentProps {
    notInDrawer?: boolean;
    inFooter?: boolean;
    links: NavbarLinkProps[];
}
export interface LogoComponentProps {
    inDrawer?: boolean;
    Logo: FunctionComponent<SVGProps<SVGSVGElement>> | string;
}

// Banner types

interface BannerDataProps {
    id: number;
    title: string;
    text: string;
}

export interface BannerComponentProps {
    data: BannerDataProps[];
}

// Section

export interface SectionComponentProps {
    title: string;
    sectionId: string;
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
}

// Services types

interface ServicesDataProps {
    id: number;
    text: string;
}

export interface ServicesComponentProps {
    title: string;
    sectionId: string;
    swiperConfig: SwiperConfig;
    data: ServicesDataProps[];
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

interface SwiperConfig {
    autoplay?: AutoplayConfig;
    modules?: any[];
    spaceBetween?: number;
    slidesPerView: number;
    breakpoints?: SwiperBreakpoints;
    loop: boolean;
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
    validation: {
        required: ValidationRule;
        minLength?: ValidationRule;
        maxLength?: ValidationRule;
        pattern?: ValidationRule;
    };
    multiline?: boolean;
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

import React, { FunctionComponent, SVGProps } from "react";
import { StaticImageData } from "next/image";

// Navbar types

interface NavbarComponentProps {
    window?: () => Window;
    children?: React.ReactElement;
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
    data: ServicesDataProps[];
}

// Projects types

interface AutoplayConfig {
    delay: number;
    disableOnInteraction: boolean;
}

interface SwiperConfig {
    autoplay?: AutoplayConfig;
    modules?: any[];
    slidesPerView: number;
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

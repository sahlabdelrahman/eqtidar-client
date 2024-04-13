import React, { FunctionComponent, SVGProps } from "react";

// Navbar types

interface NavbarComponentProps {
    window?: () => Window;
    children: React.ReactElement;
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

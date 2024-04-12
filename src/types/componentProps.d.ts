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

export interface NavbarConfigProps {
    Logo: FunctionComponent<SVGProps<SVGSVGElement>> | string;
    drawerWidth: number;
    links: NavbarLinkProps[];
}

export interface LinksComponentProps {
    notInDrawer?: boolean;
    links: NavbarLinkProps[];
}
export interface LogoComponentProps {
    inDrawer?: boolean;
    Logo: FunctionComponent<SVGProps<SVGSVGElement>> | string;
}

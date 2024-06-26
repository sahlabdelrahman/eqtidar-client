import { FunctionComponent, SVGProps } from "react";

// Header

type Avatar = {
    src: string;
};

type Link = {
    id: number;
    path: string;
    text: string;
};

type Action = {
    id: number;
    text: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

type MenuLinksAndActions = {
    links: Link[];
    actions: Action[];
};

export interface DashboardHeaderConfigProps {
    name: string;
    avatar: Avatar;
    tooltipTitle: string;
    menuLinksAndActions: MenuLinksAndActions;
}

export interface DashboardHeaderComponentProps {
    handleSideMenu: () => void;
    openSideMenu: boolean;
}

// SideMenu

type SideMenuLink = {
    id: number;
    path: string;
    key: string;
    text: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export interface DashboardSideMenuConfigProps {
    links: SideMenuLink[];
}

export interface DashboardSideMenuComponentProps {
    openSideMenu: boolean;
}

// Dynamic form

interface Field {
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    multiline?: boolean;
    validation: any;
}

export interface FormDataProps {
    page: string;
    api: string;
    title?: string;
    description?: string;
    submitText?: string;
    fields: Field[];
    success: {
        message: string;
        redirectUrl?: string;
    };
}

export interface DynamicFormComponentProps {
    formData: FormDataProps;
    initialValues?: any;
}

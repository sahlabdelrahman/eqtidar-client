import { FunctionComponent, SVGProps } from "react";

// Header

type Link = {
    id: number;
    path: string;
    text: string;
    key?: string;
};

type Action = {
    id: number;
    text: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    key?: string;
};

type MenuLinksAndActions = {
    links: Link[];
    actions: Action[];
};

export interface DashboardHeaderConfigProps {
    tooltipTitle: string;
    redirectSuccessPath: string;
    successMessage: string;
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

export interface Field {
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    multiline?: boolean;
    validation: any;
    options?: any;
}

export interface FormDataProps {
    page?: string;
    api?: string;
    title?: string;
    description?: string;
    submitText?: string;
    fields: Field[];
    success?: {
        message: string;
        redirectUrl?: string;
    };
}

export interface FormDataPropsForSettings {
    page?: string;
    api?: string;
    title?: string;
    description?: string;
    submitText?: string;
    fields: Field[][];
    success?: {
        message: string;
        redirectUrl?: string;
    };
}

export interface SubmitHandlerResponse {
    status: number;
    success: boolean;
    message: string;
    data: any;
}

export interface DynamicFormComponentProps {
    formData: FormDataProps;
    submitHandler: (
        data: any,
        id?: number
    ) => Promise<SubmitHandlerResponse | null>;
}

export interface DynamicFormComponentPropsForSettings {
    formData: FormDataPropsForSettings;
    submitHandlerForEmail: (
        data: any,
        id?: number
    ) => Promise<SubmitHandlerResponse | null>;
    submitHandlerForPassword: (
        data: any,
        id?: number
    ) => Promise<SubmitHandlerResponse | null>;
}

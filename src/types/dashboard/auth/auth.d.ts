export interface UserProps {
    id: string;
    email: string;
    username: string;
    fullName: string;
    roles: string[];
}

export interface AuthUserProps {
    user: UserProps;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface AuthResponseProps {
    message: string;
    data?: AuthUser;
    success?: boolean;
}

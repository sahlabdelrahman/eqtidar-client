import { ImageProps } from ".";
import { ContactProps, SocialMediaProps } from "../../Home/Main/info";

interface ContactConfigProps {
    id: number;
    key: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}
interface SocialMediaLinkConfigProps {
    id: number;
    key: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
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
    };
    whoAreWe: string;
    socialMediaLinks: SocialMediaLinkConfigProps[];
    contact: ContactConfigProps[];
}

export interface TopSectionProps {
    secondaryLogo: ImageProps;
    contact: {
        [mobile: string]: ContactProps;
        [whatsapp: string]: ContactProps;
        [email: string]: ContactProps;
        [location: string]: ContactProps;
    };
    socialMedia: {
        [linkedin: string]: SocialMediaProps;
        [x: string]: SocialMediaProps;
        [instagram: string]: SocialMediaProps;
        [snapchat: string]: SocialMediaProps;
    };
    profileFile: {
        url: string;
    };
    [whoWeAre: string]: BannerTextProps;
}

// Controls
export interface ControlsProps {
    whatsapp: ContactProps;
}

import { ImageProps } from ".";

interface BannerTextProps {
    text: string;
}

interface ContactProps {
    text: string;
    url: string;
}

export interface BannerTextProps {
    [message: string]: BannerTextProps;
    [vision: string]: BannerTextProps;
    [values: string]: BannerTextProps;
}

export interface InfoProps {
    mainLogo: ImageProps;
    secondaryLogo: ImageProps;
    bannerImage: ImageProps;
    bannerText: BannerTextProps;
    achievements: {
        clients: number;
        employees: number;
        inProgressProjects: number;
        completedProjects: number;
    };
    contact: {
        [mobile: string]: ContactProps;
        [whatsapp: string]: ContactProps;
        [email: string]: ContactProps;
        [location: string]: ContactProps;
    };
    socialMedia: {
        [linkedin: string]: string;
        [x: string]: string;
        [instagram: string]: string;
        [snapchat: string]: string;
    };
    profileFile: {
        url: string;
    };
    [whoWeAre: string]: BannerTextProps;
    createAt: string;
    updatedAt: string;
    _id: string;
}

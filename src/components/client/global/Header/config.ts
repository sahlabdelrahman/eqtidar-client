import Logo from "@/components/Images/logo.png";
import LogoWithSlogan from "@/components/Images/logoWithSlogan.png";

import { NavbarConfigProps } from "@/types/componentProps";

const navbarConfig: NavbarConfigProps = {
    Logo: Logo,
    LogoWithSlogan: LogoWithSlogan,
    drawerWidth: 240,
    links: [
        {
            id: 0,
            path: "#goals",
            text: "أهدافنا",
        },
        // TODO: Added a new page for services
        // {
        //     id: 1,
        //     path: "#services",
        //     text: "خدماتنا",
        // },
        {
            id: 2,
            path: "#achievements",
            text: "إنجازاتنا",
        },
        // TODO: Show and hide from dashboard
        // {
        //     id: 3,
        //     path: "#projects",
        //     text: "مشاريعنا",
        // },
        {
            id: 4,
            path: "#clients",
            text: "عملاؤنا",
        },
        {
            id: 5,
            path: "#ourTeam",
            text: "فريقنا",
        },
        {
            id: 6,
            path: "#partners",
            text: "شركاؤنا",
        },
        // TODO: Show and hide from dashboard
        // {
        //     id: 7,
        //     path: "#faq",
        //     text: "الاسئلة الشائعة",
        // },
        // {
        //     id: 8,
        //     path: "#contactUs",
        //     text: "تواصل معنا",
        // },
    ],
};

export default navbarConfig;

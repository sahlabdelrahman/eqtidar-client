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
            path: "/#goals",
            text: "أهدافنا",
        },

        {
            id: 2,
            path: "/#achievements",
            text: "إنجازاتنا",
        },
        // TODO: Show and hide from dashboard
        // {
        //     id: 3,
        //     path: "/#projects",
        //     text: "مشاريعنا",
        // },
        {
            id: 4,
            path: "/#clients",
            text: "عملاؤنا",
        },
        {
            id: 6,
            path: "/#partners",
            text: "شركاؤنا",
        },
        // TODO: Show and hide from dashboard
        // {
        //     id: 7,
        //     path: "/#faq",
        //     text: "الاسئلة الشائعة",
        // },
        // {
        //     id: 8,
        //     path: "/#contactUs",
        //     text: "تواصل معنا",
        // },
        {
            id: 1,
            path: "/services",
            text: "خدماتنا",
        },
        {
            id: 5,
            path: "/our-team",
            text: "فريقنا",
        },
        {
            id: 10,
            path: "/blogs",
            text: "مدونات",
        },
    ],
};

export default navbarConfig;

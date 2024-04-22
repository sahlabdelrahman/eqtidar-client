import Logo from "@/components/Images/logo.png";

import { NavbarConfigProps } from "@/types/componentProps";

const navbarConfig: NavbarConfigProps = {
    Logo: Logo,
    drawerWidth: 240,
    links: [
        {
            id: 0,
            path: "#goals",
            text: "أهدافنا",
        },
        {
            id: 1,
            path: "#services",
            text: "خدماتنا",
        },
        {
            id: 2,
            path: "#achievements",
            text: "إنجازاتنا",
        },
        {
            id: 3,
            path: "#projects",
            text: "مشاريعنا",
        },
        {
            id: 4,
            path: "#clients",
            text: "عملاءنا",
        },
        {
            id: 5,
            path: "#ourTeam",
            text: "فريقنا",
        },
        {
            id: 6,
            path: "#partners",
            text: "شركائنا",
        },
        // {
        //     id: 7,
        //     path: "#faq",
        //     text: "الاسئلة الشائعة",
        // },
        {
            id: 8,
            path: "#contactUs",
            text: "تواصل معنا",
        },
    ],
};

export default navbarConfig;

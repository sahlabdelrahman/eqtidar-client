import ArLogo from "@/components/Icons/ArLogo";

import { NavbarConfigProps } from "@/types/componentProps";

const navbarConfig: NavbarConfigProps = {
    Logo: "اقتدار",
    drawerWidth: 240,
    links: [
        {
            id: 0,
            path: "/",
            text: "أهدافنا",
        },
        {
            id: 1,
            path: "/",
            text: "خدامتنا",
        },
        {
            id: 2,
            path: "/",
            text: "انجازتنا",
        },
        {
            id: 3,
            path: "/",
            text: "مشاريعنا",
        },
        {
            id: 4,
            path: "/",
            text: "عملائنا",
        },
        {
            id: 5,
            path: "/",
            text: "الاسئلة الشائعة",
        },
        {
            id: 6,
            path: "/",
            text: "تواصل معنا",
        },
    ],
};

export default navbarConfig;

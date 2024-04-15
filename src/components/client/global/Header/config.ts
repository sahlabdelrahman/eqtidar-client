import ArLogo from "@/components/Icons/ArLogo";

import { NavbarConfigProps } from "@/types/componentProps";

const navbarConfig: NavbarConfigProps = {
    Logo: "اقتدار",
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
            text: "خدامتنا",
        },
        {
            id: 2,
            path: "#achievements",
            text: "انجازتنا",
        },
        {
            id: 3,
            path: "#projects",
            text: "مشاريعنا",
        },
        {
            id: 4,
            path: "#clients",
            text: "عملاؤنا",
        },
        {
            id: 5,
            path: "#commonQuestions",
            text: "الاسئلة الشائعة",
        },
        {
            id: 6,
            path: "#contactUs",
            text: "تواصل معنا",
        },
    ],
};

export default navbarConfig;

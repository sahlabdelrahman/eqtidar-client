import PageMenuIcon from "@/components/Icons/PageMenuIcon";

import { DashboardSideMenuConfigProps } from "@/types/dashboard/componentProps";

const DashboardSideMenuConfig: DashboardSideMenuConfigProps = {
    links: [
        {
            id: 3,
            path: "/dashboard/goals",
            key: "/dashboard/goals",
            Icon: PageMenuIcon,
            text: "الأهداف",
        },
        {
            id: 4,
            path: "/dashboard/services",
            key: "/dashboard/services",
            Icon: PageMenuIcon,
            text: "الخدمات",
        },
        // {
        //     id: 5,
        //     path: "/dashboard/achievements",
        //     key: "/dashboard/achievements",
        //     Icon: PageMenuIcon,
        //     text: "الإنجازات",
        // },
        // {
        //     id: 6,
        //     path: "/dashboard/projects",
        //     key: "/dashboard/projects",
        //     Icon: PageMenuIcon,
        //     text: "المشاريع",
        // },
        {
            id: 7,
            path: "/dashboard/clients",
            key: "/dashboard/clients",
            Icon: PageMenuIcon,
            text: "العملاء",
        },
        {
            id: 8,
            path: "/dashboard/partners",
            key: "/dashboard/partners",
            Icon: PageMenuIcon,
            text: "الشركاء",
        },
        {
            id: 9,
            path: "/dashboard/team",
            key: "/dashboard/team",
            Icon: PageMenuIcon,
            text: "الفريق",
        },
        {
            id: 10,
            path: "/dashboard/blogs",
            key: "/dashboard/blogs",
            Icon: PageMenuIcon,
            text: "المدونات",
        },
    ],
};

export default DashboardSideMenuConfig;

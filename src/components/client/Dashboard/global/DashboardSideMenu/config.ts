import LogoutIcon from "@/components/Icons/LogoutIcon";

import { DashboardSideMenuConfigProps } from "@/types/dashboard/componentProps";

const DashboardSideMenuConfig: DashboardSideMenuConfigProps = {
    links: [
        {
            id: 2,
            path: "/dashboard/visionAndMessage",
            key: "/dashboard/visionAndMessage",
            Icon: LogoutIcon,
            text: "الرؤية والرسالة",
        },
        {
            id: 3,
            path: "/dashboard/goals",
            key: "/dashboard/goals",
            Icon: LogoutIcon,
            text: "الأهداف",
        },
        {
            id: 4,
            path: "/dashboard/services",
            key: "/dashboard/services",
            Icon: LogoutIcon,
            text: "الخدمات",
        },
        {
            id: 5,
            path: "/dashboard/achievements",
            key: "/dashboard/achievements",
            Icon: LogoutIcon,
            text: "الإنجازات",
        },
        {
            id: 6,
            path: "/dashboard/projects",
            key: "/dashboard/projects",
            Icon: LogoutIcon,
            text: "المشاريع",
        },
        {
            id: 7,
            path: "/dashboard/clients",
            key: "/dashboard/clients",
            Icon: LogoutIcon,
            text: "العملاء",
        },
        {
            id: 8,
            path: "/dashboard/team",
            key: "/dashboard/team",
            Icon: LogoutIcon,
            text: "الفريق",
        },
        {
            id: 9,
            path: "/dashboard/partners",
            key: "/dashboard/partners",
            Icon: LogoutIcon,
            text: "الشركاء",
        },
        {
            id: 1,
            path: "/dashboard/settings",
            key: "/dashboard/settings",
            Icon: LogoutIcon,
            text: "الإعدادات",
        },
    ],
};

export default DashboardSideMenuConfig;

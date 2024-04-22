import LogoutIcon from "@/components/Icons/LogoutIcon";

import { DashboardSideMenuConfigProps } from "@/types/dashboard/componentProps";

const DashboardSideMenuConfig: DashboardSideMenuConfigProps = {
    links: [
        {
            id: 0,
            path: "/dashboard",
            key: "/dashboard",
            Icon: LogoutIcon,
            text: "الصفحة الرئيسية",
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

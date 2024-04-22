import LogoutIcon from "@/components/Icons/LogoutIcon";

import { DashboardHeaderConfigProps } from "@/types/dashboard/componentProps";

const DashboardHeaderConfig: DashboardHeaderConfigProps = {
    name: "Admin Dashboard",
    avatar: {
        src: "https://mui.com/static/images/avatar/2.jpg",
    },
    tooltipTitle: "الإعدادات",
    menuLinksAndActions: {
        links: [
            {
                id: 0,
                path: "/dashboard/settings",
                text: "الإعدادات",
            },
        ],
        actions: [
            {
                id: 0,
                Icon: LogoutIcon,
                text: "تسجيل الخروج",
            },
        ],
    },
};

export default DashboardHeaderConfig;

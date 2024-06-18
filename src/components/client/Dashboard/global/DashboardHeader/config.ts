import LogoutIcon from "@/components/Icons/LogoutIcon";

import { DashboardHeaderConfigProps } from "@/types/dashboard/componentProps";

const DashboardHeaderConfig: DashboardHeaderConfigProps = {
    tooltipTitle: "الإعدادات",
    redirectSuccessPath: "/login",
    successMessage: "تم تسجيل الخروج بنجاح.",
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
                key: "logout",
            },
        ],
    },
};

export default DashboardHeaderConfig;

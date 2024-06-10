import { AchievementsConfigProps } from "./achievements";

const AchievementsConfig: AchievementsConfigProps = {
    title: "إنجازاتنا",
    sectionId: "achievements",
    data: [
        {
            id: 0,
            text: "عميل",
            key: "clients",
        },
        {
            id: 1,
            text: "مشروعات مستقبلية",
            key: "inProgressProjects",
        },
        {
            id: 2,
            text: "مشروع تم",
            key: "completedProjects",
        },
        {
            id: 3,
            text: "موظف",
            key: "employees",
        },
    ],
};

export default AchievementsConfig;

// Achievements types

interface AchievementsDataProps {
    id: number;
    text: string;
    key: string;
}

export interface AchievementsConfigProps {
    title: string;
    sectionId: string;
    data: AchievementsDataProps[];
}

export interface AchievementComponentProps {
    [clients: string]: number;
    [employees: string]: number;
    [inProgressProjects: string]: number;
    [completedProjects: string]: number;
}

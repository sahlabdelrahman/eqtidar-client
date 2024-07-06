import Main from "@/components/client/Dashboard/Settings";

export const metadata = {
    title: {
        default: "الإعدادات",
        template: `%s | الإعدادات`,
    },
};

export default function Settings() {
    return <Main />;
}

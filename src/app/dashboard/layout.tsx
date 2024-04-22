import type { Metadata } from "next";

import DashboardLayout from "@/Layouts/DashboardLayout";

export const metadata: Metadata = {
    title: {
        default: "لوحة التحكم",
        template: `%s | لوحة التحكم`,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}

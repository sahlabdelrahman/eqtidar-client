import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "تسجيل الدخول",
        template: `%s | تسجيل الدخول`,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/styles/style.scss";

const cairo = Cairo({
    subsets: ["arabic", "latin"],
    weight: ["300", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "اقتدار",
    description: "أوقاف مستدامة لمستقبل مشرق",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar">
            <body className={cairo.className}>{children}</body>
        </html>
    );
}

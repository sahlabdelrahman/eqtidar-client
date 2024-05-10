import type { Metadata } from "next";

import Header from "@/components/client/global/Header";
import Footer from "@/components/client/global/Footer";
import ScrollToTop from "@/components/client/global/ScrollToTop";

export const metadata: Metadata = {
    title: {
        default: "اقتدار",
        template: `%s | اقتدار`,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </>
    );
}

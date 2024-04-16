import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "@/styles/style.scss";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";

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
            <body className={cairo.className}>
                {children}
                <ToastContainer
                    position="top-left"
                    autoClose={4000}
                    newestOnTop={false}
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={4}
                />
            </body>
        </html>
    );
}

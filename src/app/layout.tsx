import type { Metadata, Viewport } from "next";
import { Cairo, Kufam } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "@/styles/style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

import ogImage from "./opengraph-image.png";

const cairo = Cairo({
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
});

const kufam = Kufam({
    subsets: ["arabic", "latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "اقتدار",
    description: "أوقاف مستدامة لمستقبل مشرق",
    openGraph: {
        images: [
            {
                url: ogImage.src,
                width: ogImage.width,
                height: ogImage.height,
            },
        ],
    },
    twitter: {
        images: [
            {
                url: ogImage.src,
                width: ogImage.width,
                height: ogImage.height,
            },
        ],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar">
            <body className={`${cairo.className} ${kufam.className}`}>
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

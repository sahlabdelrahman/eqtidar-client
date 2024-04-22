"use client";

import { useEffect, useState } from "react";

import TopArrow from "@/components/Icons/TopArrow";
import WhatsAppLogo from "@/components/Icons/WhatsAppLogo";

import styles from "./style.module.scss";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Effect to add and remove the window scroll listener
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <a
                href="https://wa.me/+9660599095059"
                target="_blank"
                className={`${styles.whatsApp} ${isVisible ? styles.show : ""}`}
                aria-label="Chat on whatsapp"
                title="Chat on whatsapp"
            >
                <WhatsAppLogo />
            </a>
            <button
                className={`${styles.scrollToTop} ${
                    isVisible ? styles.show : ""
                }`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                title="Scroll to top"
            >
                <TopArrow />
            </button>
        </>
    );
}

export default ScrollToTop;

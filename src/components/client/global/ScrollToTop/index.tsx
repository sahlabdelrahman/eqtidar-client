"use client";

import { FC, useEffect, useState } from "react";

import TopArrow from "@/components/Icons/TopArrow";

import styles from "./style.module.scss";

const ScrollToTop: FC = () => {
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
        <button
            className={`${styles.scrollToTop} ${isVisible ? styles.show : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <TopArrow />
        </button>
    );
};

export default ScrollToTop;

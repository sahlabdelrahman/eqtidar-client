"use client";

import { useState, useEffect, useRef, FC } from "react";

interface NumberCounterProps {
    targetNumber: number;
}

const NumberCounter: FC<NumberCounterProps> = ({ targetNumber }) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const startCounter = () => {
        let counter = 0;
        const interval = setInterval(() => {
            if (counter < targetNumber) {
                counter++;
                setCurrentNumber(counter);
            } else {
                clearInterval(interval);
            }
        }, 1);
    };

    return <span ref={counterRef}>{currentNumber}</span>;
};

export default NumberCounter;

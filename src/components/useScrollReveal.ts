"use client";

import { useEffect } from "react";
import styles from "./Contact.module.css";

export const useScrollReveal = () => {
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('[class*="reveal-"]');
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            for (let i = 0; i < reveals.length; i++) {
                const revealTop = reveals[i].getBoundingClientRect().top;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add("active");
                    if (reveals[i].id === 'contact') {
                        reveals[i].classList.add(styles.formScrollActive);
                    }
                } else {
                    reveals[i].classList.remove("active");
                    if (reveals[i].id === 'contact') {
                        reveals[i].classList.remove(styles.formScrollActive);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
};

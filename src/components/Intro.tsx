"use client";

import { useEffect, useState } from "react";
import styles from "./Intro.module.css";

interface IntroProps {
    onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
    const [logoAssembled, setLogoAssembled] = useState(false);
    const [logoUp, setLogoUp] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [titleText, setTitleText] = useState("");
    const [subtitleText, setSubtitleText] = useState("");

    const fullTitle = "ALLIENCE DIGITAL";
    const fullSubtitle = "Marketing becomes easy with ALLIENCE";

    useEffect(() => {
        // Step 1: Assemble logo parts (1s)
        const assembleTimer = setTimeout(() => {
            setLogoAssembled(true);
            
            // Step 2: Move logo up (0.6s)
            const moveUpTimer = setTimeout(() => {
                setLogoUp(true);
                
                // Step 3: Start typing text
                let titleIdx = 0;
                let subtitleIdx = 0;

                const typeTitle = setInterval(() => {
                    setTitleText(fullTitle.slice(0, titleIdx + 1));
                    titleIdx++;
                    if (titleIdx >= fullTitle.length) {
                        clearInterval(typeTitle);

                        setTimeout(() => {
                            const typeSubtitle = setInterval(() => {
                                setSubtitleText(fullSubtitle.slice(0, subtitleIdx + 1));
                                subtitleIdx++;
                                if (subtitleIdx >= fullSubtitle.length) {
                                    clearInterval(typeSubtitle);

                                    setTimeout(() => {
                                        setIsExiting(true);
                                        setTimeout(() => {
                                            onComplete();
                                        }, 1200);
                                    }, 1000);
                                }
                            }, 30);
                        }, 500);
                    }
                }, 60);
            }, 1000);
        }, 500);

        return () => {
            // Cleanup timers if needed
        };
    }, [onComplete]);

    return (
        <div className={`${styles.introOverlay} ${isExiting ? styles.fadeOut : ""}`}>
            <div className={styles.bars}>
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`${styles.bar} ${isExiting ? styles.barAnimate : ""}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    />
                ))}
            </div>

            <div className={`${styles.content} ${logoUp ? styles.contentUp : ""}`}>
                <div className={`${styles.logoContainer} ${logoAssembled ? styles.assembled : ""}`}>
                    <div className={styles.flare} />
                    <img src="/logo.jpg" alt="Logo Part 1" className={`${styles.logoPart} ${styles.part1}`} />
                    <img src="/logo.jpg" alt="Logo Part 2" className={`${styles.logoPart} ${styles.part2}`} />
                    <img src="/logo.jpg" alt="Logo Part 3" className={`${styles.logoPart} ${styles.part3}`} />
                </div>
                
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        {titleText}<span className={styles.cursor}>_</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {subtitleText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;

import styles from "./WhyUs.module.css";
import Image from "next/image";

const features = [
    "EXPERTISE & EXPERIENCE: A MULTIDISCIPLINARY TEAM OF CREATIVE AND TECHNICAL SPECIALISTS DELIVERING INDUSTRY-PROVEN SOLUTIONS.",
    "RELIABILITY & TRUST: A DEPENDABLE PARTNER COMMITTED TO TIMELY DELIVERY AND CONSISTENT QUALITY.",
    "24/7 SUPPORT: ALWAYS ACCESSIBLE, ENSURING CONTINUOUS ASSISTANCE WHENEVER IT'S NEEDED.",
    "TAILORED SOLUTIONS: CUSTOMIZED STRATEGIES DESIGNED TO MATCH EACH BUSINESS'S UNIQUE GOALS AND CHALLENGES.",
    "RESULTS-DRIVEN APPROACH: FOCUSED ON MEASURABLE OUTCOMES THAT TRANSLATE INTO REAL GROWTH AND ROI.",
    "COMPREHENSIVE SERVICES: END-TO-END SOLUTIONS COVERING CONTENT, TECHNOLOGY, AND MARKETING UNDER ONE ROOF."
];

const WhyUs = () => {
    return (
        <section id="why-us" className={`section ${styles.whyUs}`}>
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <div className={`${styles.header} reveal-left`}>
                            <h2 className="section-title">WHY US ?</h2>
                        </div>
                        <ul className={styles.list}>
                            {features.map((feature, index) => {
                                const [title, description] = feature.split(": ");
                                return (
                                    <li key={index} className={`reveal-left delay-${index + 1}`}>
                                        <div className={styles.item}>
                                            <span className={styles.dot}>•</span>
                                            <p>
                                                <strong>{title}:</strong> {description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={`${styles.imageWrapper} reveal-right delay-2`}>
                        <Image 
                            src="/growth.png" 
                            alt="Brand Growth" 
                            width={1200}
                            height={800}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

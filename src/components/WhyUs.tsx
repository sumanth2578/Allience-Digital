import styles from "./WhyUs.module.css";
import Image from "next/image";

const features = [
    "EXPERTISE & EXPERIENCE",
    "RELIABILITY & TRUST",
    "24/7 SUPPORT",
    "TAILORED SOLUTIONS",
    "RESULTS-DRIVEN APPROACH",
    "COMPREHENSIVE SERVICES"
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
                                return (
                                    <li key={index} className={`reveal-left delay-${index + 1}`}>
                                        <div className={styles.item}>
                                            <span className={styles.dot}>•</span>
                                            <p className={styles.featureTitle}>
                                                {feature}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={`${styles.imageWrapper} reveal-right delay-2`}>
                        <Image 
                            src="/Screenshot 2026-03-15 190819.png" 
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

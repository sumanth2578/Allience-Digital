"use client";

import Link from "next/link";
import styles from "./Pricing.module.css";

const plans = [
    {
        name: "Starter Growth",
        price: "$2,500",
        features: ["Strategy Session", "1 Campaign Launch", "Monthly Reporting"]
    },
    {
        name: "Growth Pro",
        price: "$6,000",
        features: ["Growth Plan", "3 Campaigns", "Weekly Reporting"]
    },
    {
        name: "Brand Authority",
        price: "$12,000",
        features: ["Custom Strategy", "5+ Campaigns", "Dedicated Manager"]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className={`section ${styles.pricing}`}>
            <div className="container">
                <div className={`${styles.header} reveal-up`}>
                    <h2>Pricing</h2>
                    <p>Invest in Your Growth</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <div key={index} className={`${styles.card} reveal-up delay-${index + 1}`}>
                            <div className={styles.planInfo}>
                                <span className={styles.planName}>{plan.name}</span>
                                <h3 className={styles.price}>{plan.price}</h3>
                            </div>
                            <ul className={styles.features}>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className={styles.check}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '2.5rem' }}>
                                <Link 
                                    href="#contact" 
                                    className="btn-outline" 
                                    style={{ width: '100%', display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

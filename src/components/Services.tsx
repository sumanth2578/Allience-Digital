import { useState } from "react";
import styles from "./Services.module.css";

const services = [
    { title: "Social Media", icon: "⚡" },
    { title: "Website Design", icon: "🔳" },
    { title: "Branding", icon: "🛡️" },
    { title: "Paid Advertising", icon: "📢" },
    { title: "Content & Creative", icon: "🖋️" },
    { title: "Growth Strategy", icon: "🚀" },
    { title: "Branding & ID", icon: "🔗" },
    { title: "Performance", icon: "💰" },
];

const processData = [
    {
        title: "Discovery & Strategy",
        content: "We begin by diving deep into your business ecosystem. Through exhaustive market research and competitor auditing, we identify untapped opportunities and craft a bespoke roadmap tailored for aggressive growth."
    },
    {
        title: "Brand Positioning",
        content: "Architecture of your identity. We define your unique value proposition and create a cinematic brand presence that commands authority and resonates deeply with your ideal demographic."
    },
    {
        title: "Content & Campaign",
        content: "High-impact storytelling meets data-driven deployment. We produce premium assets—from vertical video to high-fidelity design—engineered to capture attention and drive meaningful engagement."
    },
    {
        title: "Marketing & Optimization",
        content: "Continuous evolution. We deploy multi-channel campaigns and relentlessly A/B test every variable, ensuring your marketing dollars are maximized for the highest possible conversion rate."
    },
    {
        title: "Scale & Growth",
        content: "Igniting the growth engine. Once we find the winning formula, we aggressively scale your successful campaigns into new territories and segments to dominate your market niche."
    },
    {
        title: "Creative Growth Systems",
        content: "Building for the long term. We install proprietary growth infrastructures and creative loops that continue to generate leads and brand equity long after the initial launch."
    }
];

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className={`${styles.header} reveal-up`}>
                    <h2 className="section-title">OUR SERVICES</h2>
                </div>
                <div className={styles.grid}>
                    {services.map((item, index) => (
                        <div key={index} className={`${styles.card} reveal-up delay-${(index % 4) + 1}`}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>

                <div className={styles.processList}>
                    {processData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`${styles.processItem} ${expandedIndex === index ? styles.active : ""} reveal-up`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className={styles.processHeader}>
                                <div className={styles.processTitleGroup}>
                                    <span className={styles.processName}>{item.title}</span>
                                    <button className={styles.plusButton}>
                                        <span className={styles.plusIcon}>{expandedIndex === index ? "−" : "+"}</span>
                                    </button>
                                </div>
                                <span className={styles.processNumber}>{index + 1}</span>
                            </div>
                            
                            <div className={`${styles.processContent} ${expandedIndex === index ? styles.show : ""}`}>
                                <div className={styles.contentInner}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

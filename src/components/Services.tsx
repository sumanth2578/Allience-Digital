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

const process = [
    "Discovery & Strategy",
    "Brand Positioning",
    "Content & Campaign",
    "Marketing & Optimization",
    "Scale & Growth",
    "Creative Growth Systems"
];

const Services = () => {
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
                    {process.map((item, index) => (
                        <div key={index} className={`${styles.processItem} reveal-up delay-${index + 1}`}>
                            <span className={styles.processName}>{item}</span>
                            <span className={styles.processNumber}>{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

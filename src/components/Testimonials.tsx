import styles from "./Testimonials.module.css";

const feedbacks = [
    {
        name: "E. Carter",
        role: "Startup CEO",
        content: "Working with Alliance Digital made all the difference—amazing growth, creative campaigns."
    },
    {
        name: "J. Patel",
        role: "Brand Manager",
        content: "Expert team, seamless experience, and clear ROI. Highly recommended!"
    },
    {
        name: "A. Lopez",
        role: "Marketing Director",
        content: "They transformed our marketing and brand presence. Truly next-level results!"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className={`section ${styles.testimonials}`}>
            <div className={`container`}>
                <div className={`${styles.header} reveal-up`}>
                    <h2 className="section-title">TESTIMONIALS</h2>
                    <p>Hear why brands trust us</p>
                </div>

                <div className={styles.grid}>
                    {feedbacks.map((item, index) => (
                        <div key={index} className={`${styles.card} reveal-up delay-${index + 1}`}>
                            <p className={styles.content}>“{item.content}”</p>

                            <div className={styles.author}>
                                <h4>{item.name}</h4>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

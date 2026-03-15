import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`container reveal ${styles.grid}`}>
                <div className={styles.imageOuter}>
                    <div className={styles.imageInner}>
                        <div className={styles.placeholderImg}>AD</div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.badge}>
                        Who We Are
                    </div>
                    <h2>We bridge the gap between <span className="gradient-text">Brands and People</span></h2>
                    <p>
                        At Allience Digital, we believe in the power of connection. Founded in 2020, we&apos;ve helped hundreds of businesses navigate the complex digital landscape with precision and creativity.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h3 className="gradient-text">25+</h3>
                            <p>Clients Across India </p>
                        </div>
                        <div className={styles.statItem}>
                            <h3 className="gradient-text">98%</h3>
                            <p>Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

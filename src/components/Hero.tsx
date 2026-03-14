import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={`${styles.title} reveal-up`}>
                        We Build Brands That <br /> Grow Online.
                    </h1>
                    <p className={`${styles.subtitle} reveal-up delay-1`}>
                        Allience Digital helps businesses transform their online 
                        presence into a powerful growth engine through 
                        strategy, content, and digital marketing.
                    </p>
                    <div className={`${styles.cta} reveal-up delay-2`}>
                        <Link href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                            Get a Free Strategy Call
                        </Link>
                    </div>

                    <div className={`${styles.stats} reveal-up delay-3`}>
                        <div className={styles.statItem}>
                            <h3>50+</h3>
                            <span>Campaign Strategies</span>
                        </div>
                        <div className={styles.statItem}>
                            <h3>100K+</h3>
                            <span>Social Media Reach</span>
                        </div>
                        <div className={styles.statItem}>
                            <h3>90%</h3>
                            <span>Client Retention</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

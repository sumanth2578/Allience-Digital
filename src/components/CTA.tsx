"use client";

import Link from "next/link";
import styles from "./CTA.module.css";

const CTA = () => {
    return (
        <section className={`section ${styles.cta}`}>
            <div className="container">
                <div className={`${styles.box} reveal-up`}>
                    <h2>Ready to Grow Your Brand Online?</h2>
                    <p>Book a Strategy Call.</p>
                    <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                        Get a Free Strategy Call
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;

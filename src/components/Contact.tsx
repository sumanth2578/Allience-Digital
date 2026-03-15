"use client";

import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2>Let&apos;s build something <br /> Great Together.</h2>
                        <p>Ready to level up your brand? Our team is standing by to help you achieve your digital goals.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <span>Surya Towers, Izzathnagar, Shilpa Hills, Hyderabad</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span>info@alliencedigitalmarketing.in</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span>+91 8106992027</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.form} reveal-up`}>
                        <h3 className={styles.formTitle}>Book a Free Consultation</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label>First Name *</label>
                                    <input type="text" placeholder="John" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Last Name *</label>
                                    <input type="text" placeholder="Smith" required />
                                </div>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label>Work Email *</label>
                                <input type="email" placeholder="john@company.com" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Company Name *</label>
                                <input type="text" placeholder="Acme Corporation" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Service of Interest</label>
                                <select required defaultValue="">
                                    <option value="" disabled>Select a service...</option>
                                    <option value="social-media">Social Media Management</option>
                                    <option value="web-design">Website Design</option>
                                    <option value="paid-ads">Paid Advertising</option>
                                    <option value="branding">Branding & Identity</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Tell us about your project</label>
                                <textarea rows={4} placeholder="Briefly describe your digital platform challenge or initiative..."></textarea>
                            </div>
                            
                            <div className={styles.formGroup} style={{ marginTop: '2rem' }}>
                                <button type="submit" className={styles.submitBtn}>
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

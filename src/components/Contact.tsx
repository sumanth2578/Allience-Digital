import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Placeholder - User needs to add their key

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

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
                                <span>info@alliancedigital.com</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span>+91 8106992027</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.form} reveal-up`}>
                        <h3 className={styles.formTitle}>Book a Free Consultation</h3>
                        
                        {status === "success" ? (
                            <div className={styles.successMessage}>
                                <h4>Message Sent Successfully!</h4>
                                <p>We'll get back to you within 24 hours.</p>
                                <button onClick={() => setStatus("idle")} className={styles.submitBtn}>Send Another Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>First Name *</label>
                                        <input type="text" name="first_name" placeholder="John" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Last Name *</label>
                                        <input type="text" name="last_name" placeholder="Smith" required />
                                    </div>
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label>Work Email *</label>
                                    <input type="email" name="email" placeholder="john@company.com" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Company Name *</label>
                                    <input type="text" name="company" placeholder="Acme Corporation" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Service of Interest</label>
                                    <select name="service" required defaultValue="">
                                        <option value="" disabled>Select a service...</option>
                                        <option value="social-media">Social Media Management</option>
                                        <option value="web-design">Website Design</option>
                                        <option value="paid-ads">Paid Advertising</option>
                                        <option value="branding">Branding & Identity</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Tell us about your project</label>
                                    <textarea name="message" rows={4} placeholder="Briefly describe your digital platform challenge or initiative..."></textarea>
                                </div>
                                
                                {status === "error" && (
                                    <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '1rem' }}>
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <div className={styles.formGroup} style={{ marginTop: '2rem' }}>
                                    <button 
                                        type="submit" 
                                        className={styles.submitBtn}
                                        disabled={status === "submitting"}
                                    >
                                        {status === "submitting" ? "Sending..." : "Book Now"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="#hero" className={styles.logo}>
                            <img src="/logo.jpg" alt="Alliance Digital" className={styles.logoImg} />
                        </Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <div className={styles.links}>
                            <h4>Services</h4>
                            <Link href="/#social">Social Media</Link>
                            <Link href="/#branding">Branding & Identity</Link>
                            <Link href="/#paid">Paid Advertising</Link>
                        </div>

                        <div className={styles.links}>
                            <h4>Company</h4>
                            <Link href="/#clients">Work</Link>
                            <Link href="/#why-us">About</Link>
                            <Link href="/#testimonials">Testimonials</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.275825222045!2d78.37341807516628!3d17.446419983451553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be77ad4363!2sIzzathnagar%2C%20Shilpa%20Hills%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1710323000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="150" 
                            style={{ border: 0, borderRadius: '1rem' }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.map}
                        ></iframe>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Alliance Digital. All rights reserved.</p>
                    <div className={styles.socials}>
                        {/* Add social icons here if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

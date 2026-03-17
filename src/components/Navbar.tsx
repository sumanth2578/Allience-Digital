"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                setDeferredPrompt(null);
            }
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarActive : ""} ${menuOpen ? styles.menuOpen : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.jpg" alt="Alliance Digital" className={styles.logoImg} />
                </Link>

                <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksActive : ""}`}>
                    <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="/#clients" onClick={() => setMenuOpen(false)}>Work</Link>
                    <Link href="/#why-us" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    
                    {deferredPrompt && (
                        <button className={styles.installBtn} onClick={handleInstall}>
                            <span>Download App</span>
                        </button>
                    )}

                    <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                        Get a Free Strategy Call
                    </Link>
                </div>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}
        </nav>
    );
};

export default Navbar;

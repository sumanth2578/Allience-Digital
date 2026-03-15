"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function ContactPage() {
    useScrollReveal();

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <Contact />
            </div>
            <Footer />
        </main>
    );
}

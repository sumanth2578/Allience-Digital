"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import { useScrollReveal } from "@/components/useScrollReveal";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  useScrollReveal();

  useEffect(() => {
    // Only skip intro if deep-linking to a specific section (has hash)
    const hasHash = window.location.hash;

    if (hasHash) {
      setShowIntro(false);
    }
  }, []);

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      <main style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 0.8s ease' }}>
        <Navbar />
        <Hero />
        <Services />
        <Clients />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

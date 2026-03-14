"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import { useScrollReveal } from "@/components/useScrollReveal";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  useScrollReveal();

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
        <Pricing />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

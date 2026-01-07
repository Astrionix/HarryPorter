"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import ScrollSpell from "@/components/ScrollSpell";

export default function Home() {
  const [lumos, setLumos] = useState(false);
  const [inputBuffer, setInputBuffer] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const char = e.key.toLowerCase();
      // Only allow letters
      if (!/^[a-z]$/.test(char)) return;

      setInputBuffer((prev) => {
        const newBuffer = (prev + char).slice(-10); // Keep last 10 chars

        if (newBuffer.endsWith("lumos")) {
          setLumos(true);
          return ""; // Reset buffer
        }

        if (newBuffer.endsWith("nox")) {
          setLumos(false);
          return ""; // Reset buffer
        }

        return newBuffer;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className={`min-h-screen bg-midnight transition-colors duration-1000 ${lumos ? "lumos-theme" : ""}`}>
      {/* Magical Upgrades */}

      <ScrollSpell />

      {lumos && (
        <div className="fixed inset-0 pointer-events-none z-[100] bg-yellow-100/5 mix-blend-overlay" />
      )}

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

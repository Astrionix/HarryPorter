"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import ArcaneCircleBackground from "@/components/ArcaneCircleBackground";

// Pre-computed particle positions to avoid hydration mismatch (no Math.random during render)
const PARTICLES = [
    { left: "5%", top: "12%", delay: "0s", duration: "8s" },
    { left: "15%", top: "67%", delay: "1.2s", duration: "12s" },
    { left: "25%", top: "34%", delay: "0.5s", duration: "9s" },
    { left: "35%", top: "80%", delay: "2.1s", duration: "11s" },
    { left: "45%", top: "22%", delay: "3.4s", duration: "7s" },
    { left: "55%", top: "55%", delay: "0.8s", duration: "14s" },
    { left: "65%", top: "10%", delay: "4.2s", duration: "10s" },
    { left: "75%", top: "73%", delay: "1.7s", duration: "13s" },
    { left: "85%", top: "41%", delay: "2.9s", duration: "8s" },
    { left: "95%", top: "88%", delay: "0.3s", duration: "11s" },
    { left: "10%", top: "45%", delay: "3.8s", duration: "9s" },
    { left: "20%", top: "90%", delay: "1.5s", duration: "12s" },
    { left: "30%", top: "15%", delay: "4.7s", duration: "7s" },
    { left: "40%", top: "60%", delay: "0.6s", duration: "14s" },
    { left: "50%", top: "30%", delay: "2.3s", duration: "10s" },
    { left: "60%", top: "78%", delay: "3.1s", duration: "8s" },
    { left: "70%", top: "5%", delay: "1.9s", duration: "13s" },
    { left: "80%", top: "52%", delay: "4.5s", duration: "9s" },
    { left: "90%", top: "25%", delay: "0.1s", duration: "11s" },
    { left: "48%", top: "95%", delay: "2.7s", duration: "12s" },
];

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Layers */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald/20 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />

                {/* Floating Particles */}
                {PARTICLES.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gold/40 rounded-full animate-particle"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Arcane Circle */}
                <ArcaneCircleBackground />
            </div>

            <div className="container mx-auto px-6 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gold font-serif text-xl mb-4 tracking-widest uppercase">
                        Start Your Function
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-parchment mb-6 leading-tight">
                        Padala L M <br />
                        <span className="text-gold">Ramachandra Reddy</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-emerald font-serif mb-8">
                        MCA Graduate | AI & Full-Stack Developer
                    </h3>
                    <p className="text-parchment/80 text-lg max-w-2xl mx-auto mb-10 italic font-serif">
                        &ldquo;Turning logic into intelligent systems.&rdquo;
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <motion.a
                            href="/Padala_L M RamachandraReddy_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border-2 border-gold text-gold font-serif rounded-lg flex items-center gap-2 hover:bg-gold hover:text-midnight transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            View Resume
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(46, 139, 87, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-emerald text-parchment font-serif rounded-lg flex items-center gap-2 hover:bg-emerald/80 transition-colors"
                        >
                            Explore Projects
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

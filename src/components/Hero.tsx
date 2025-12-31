"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import ArcaneCircleBackground from "@/components/ArcaneCircleBackground";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background - Three.js Arcane Circle */}
            <div className="absolute inset-0 pointer-events-none w-full h-full">
                <ArcaneCircleBackground />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
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
                        “Turning logic into intelligent systems.”
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <motion.a
                            href="/Padala L M Ramachandra Reddy.pdf"
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

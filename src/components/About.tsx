"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Brain, Code, MapPin, BookOpen } from "lucide-react";

export default function About() {
    const [sorted, setSorted] = useState(false);

    const revealHouse = () => {
        setSorted(true);
    }; 

    return (
        <section id="about" className="py-20 bg-midnight relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Sorting Hat Section */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                            className="relative cursor-pointer mb-8"
                            onClick={revealHouse}
                        >
                            <div className="text-9xl filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                🎩
                            </div>
                            {!sorted && (
                                <p className="mt-4 text-gold font-serif text-sm animate-pulse">
                                    Click to be sorted...
                                </p>
                            )}
                        </motion.div>

                        {sorted && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-blue-900/30 border border-blue-500/50 p-6 rounded-lg backdrop-blur-sm"
                            >
                                <h3 className="text-3xl font-serif text-blue-300 mb-2">Ravenclaw</h3>
                                <p className="text-blue-100 italic">&ldquo;Intelligence, Wit, Wisdom&rdquo;</p>
                            </motion.div>
                        )}
                    </div>

                    {/* Bio Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif text-parchment mb-4 border-b border-gold/30 pb-2 inline-block">
                            About The Wizard
                        </h2>

                        <div className={`space-y-4 text-lg text-parchment/80 font-sans leading-relaxed ${sorted ? "animate-ink-reveal" : ""}`}>
                            <p>
                                Greetings! I am <span className="text-gold font-bold">Padala L M Ramachandra Reddy</span>,
                                a motivated and detail-oriented MCA graduate and a practitioner of the digital arts.
                                My wand is my keyboard, and my spells are written in code.
                            </p>
                            <p>
                                I specialize in <span className="text-emerald">Artificial Intelligence</span>,{" "}
                                <span className="text-emerald">Machine Learning</span>, and{" "}
                                <span className="text-emerald">Full-Stack Development</span>, crafting intelligent
                                systems and scalable applications that solve real-world enigmas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-parchment/5 rounded border border-gold/20 flex items-start gap-3">
                                <GraduationCap className="text-gold w-6 h-6 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-gold font-serif">MCA</h4>
                                    <p className="text-sm text-parchment/70">Atria Institute of Technology</p>
                                    <p className="text-xs text-parchment/50 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> Bengaluru — Expected May 2026</p>
                                </div>
                            </div>
                            <div className="p-4 bg-parchment/5 rounded border border-gold/20 flex items-start gap-3">
                                <BookOpen className="text-gold w-6 h-6 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-gold font-serif">BCA</h4>
                                    <p className="text-sm text-parchment/70">Aditya Degree College</p>
                                    <p className="text-xs text-parchment/50 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> Kakinada — Dec 2021 – May 2024</p>
                                </div>
                            </div>
                            <div className="p-4 bg-parchment/5 rounded border border-gold/20 flex items-center gap-3">
                                <Brain className="text-gold w-6 h-6" />
                                <div>
                                    <h4 className="text-gold font-serif">Focus</h4>
                                    <p className="text-sm text-parchment/70">AI & Machine Learning</p>
                                </div>
                            </div>
                            <div className="p-4 bg-parchment/5 rounded border border-gold/20 flex items-center gap-3">
                                <Code className="text-gold w-6 h-6" />
                                <div>
                                    <h4 className="text-gold font-serif">Stack</h4>
                                    <p className="text-sm text-parchment/70">Full-Stack Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

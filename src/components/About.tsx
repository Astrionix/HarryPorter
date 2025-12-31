"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Brain, Code, Target } from "lucide-react";

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
                                <p className="text-blue-100 italic">"Intelligence, Wit, Wisdom"</p>
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
                                an MCA Graduate and a practitioner of the digital arts. My wand is my keyboard,
                                and my spells are written in code.
                            </p>
                            <p>
                                I specialize in <span className="text-emerald">Artificial Intelligence</span> and
                                <span className="text-emerald"> Full-Stack Development</span>, crafting intelligent
                                systems that solve real-world enigmas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-parchment/5 rounded border border-gold/20 flex items-center gap-3">
                                <GraduationCap className="text-gold w-6 h-6" />
                                <div>
                                    <h4 className="text-gold font-serif">Education</h4>
                                    <p className="text-sm text-parchment/70">MCA Graduate</p>
                                </div>
                            </div>
                            <div className="p-4 bg-parchment/5 rounded border border-gold/20 flex items-center gap-3">
                                <Brain className="text-gold w-6 h-6" />
                                <div>
                                    <h4 className="text-gold font-serif">Focus</h4>
                                    <p className="text-sm text-parchment/70">AI & Blockchain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

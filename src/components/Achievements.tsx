"use client";

import { motion } from "framer-motion";
import { Crown, Cpu, Keyboard, Users } from "lucide-react";

export default function Achievements() {
    const achievements = [
        {
            title: "Agentic AI Competitor",
            points: "150",
            description: "Participated in CICADA – Agentic AI Competition. Built innovative AI solutions demonstrating strong problem-solving, teamwork, and real-world AI application skills.",
            icon: Cpu,
            rarity: "Epic",
        },
        {
            title: "Hackathon Organizer",
            points: "200",
            description: "Coordinated planning, logistics, and technical support for a State-Level Hackathon during the CUEST event, ensuring smooth participant engagement and successful execution.",
            icon: Crown,
            rarity: "Legendary",
        },
        {
            title: "No-Code Challenge Lead",
            points: "100",
            description: "Organized and managed a No-Code Challenge during the CUEST event, encouraging rapid prototyping, creativity, and problem-solving among participants.",
            icon: Keyboard,
            rarity: "Rare",
        },
        {
            title: "Technical Coordinator — FXC Club",
            points: "120",
            description: "Led technical initiatives during MCA, mentored students in project development, and organized workshops/events to promote practical learning and innovation.",
            icon: Users,
            rarity: "Epic",
        }
    ];

    return (
        <section id="achievements" className="py-20 bg-midnight relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif text-center text-parchment mb-4">
                    House Points Earned <span className="text-gold text-2xl mx-2"> (Achievements)</span>
                </h2>
                <p className="text-center text-parchment/60 mb-16 max-w-2xl mx-auto font-serifitalic">
                    &ldquo;Recognition bestowed for exceptional magical prowess and contributions.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-parchment/5 border border-gold/20 p-6 rounded-lg relative overflow-hidden group text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-16 h-16 mx-auto bg-midnight rounded-full border border-gold/50 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-shadow">
                                <item.icon className="w-8 h-8 text-gold" />
                            </div>

                            <h3 className="text-xl font-serif text-parchment mb-2">{item.title}</h3>
                            <div className="text-emerald font-bold mb-3 font-mono">+{item.points} Points</div>
                            <p className="text-sm text-parchment/70 font-sans">{item.description}</p>

                            <div className="mt-4 inline-block px-3 py-1 rounded-full border border-white/10 text-xs text-white/50 uppercase tracking-widest">
                                {item.rarity}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

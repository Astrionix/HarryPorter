"use client";

import { motion } from "framer-motion";
import { Award, Scroll, Trophy, Star, Shield, Cpu, Lock, Database } from "lucide-react";

const certifications = [
    {
        title: "AI Foundations Associate",
        issuer: "Oracle Cloud Infrastructure 2025",
        icon: Cpu,
        color: "text-emerald",
        borderColor: "border-emerald/50"
    },
    {
        title: "Python for Data Science",
        issuer: "Infosys Springboard",
        icon: Database,
        color: "text-gold",
        borderColor: "border-gold/50"
    },
    {
        title: "MongoDB Certified DBA Associate (C100DBA)",
        issuer: "Infosys Springboard",
        icon: Database,
        color: "text-emerald",
        borderColor: "border-emerald/50"
    },
    {
        title: "Programming Essentials in Python",
        issuer: "Cisco Networking Academy",
        icon: Scroll,
        color: "text-gold",
        borderColor: "border-gold/50"
    },
    {
        title: "AI Fluency Framework & Foundations",
        issuer: "Anthropic",
        icon: Star,
        color: "text-purple-400",
        borderColor: "border-purple-400/50"
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        icon: Lock,
        color: "text-red-400",
        borderColor: "border-red-400/50"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-midnight relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif text-center text-parchment mb-12">
                    Certified Wizardry <span className="text-gold text-xl">(Certifications)</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className={`bg-parchment/5 p-6 rounded-lg border ${cert.borderColor} backdrop-blur-sm flex items-start gap-4 hover:bg-parchment/10 transition-colors`}
                        >
                            <div className={`p-3 rounded-full bg-midnight border ${cert.borderColor}`}>
                                <cert.icon className={`w-6 h-6 ${cert.color}`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-serif text-parchment font-bold leading-tight mb-1">{cert.title}</h3>
                                <p className="text-sm font-mono text-emerald/80">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

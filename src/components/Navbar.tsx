"use client";

import { motion } from "framer-motion";
import { Scroll, User, Zap, FlaskConical, Shield, Star, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Zap, href: "#skills" },
    { name: "Projects", icon: FlaskConical, href: "#projects" },
    { name: "Experience", icon: Shield, href: "#experience" },
    { name: "Achievements", icon: Star, href: "#achievements" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-midnight/90 backdrop-blur-md border-b border-gold/30 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif text-gold font-bold flex items-center gap-2">
                    <Scroll className="w-8 h-8" />
                    <span>RCR</span>
                </Link>
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="flex items-center gap-2 text-parchment hover:text-gold transition-colors font-serif group"
                            >
                                <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}

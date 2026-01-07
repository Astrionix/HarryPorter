"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Scroll, User, Zap, FlaskConical, Shield, Star, Mail, Menu, X } from "lucide-react";
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-midnight/95 border-b border-gold/30 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif text-gold font-bold flex items-center gap-2">
                    <Scroll className="w-8 h-8" />
                    <span>RCR</span>
                </Link>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-gold p-2 hover:bg-gold/10 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-midnight/98 border-t border-gold/30 overflow-hidden"
                    >
                        <ul className="container mx-auto px-6 py-4 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="flex items-center gap-3 text-parchment hover:text-gold hover:bg-gold/10 transition-all font-serif p-3 rounded-lg group"
                                    >
                                        <item.icon className="w-5 h-5 group-hover:animate-pulse" />
                                        <span>{item.name}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

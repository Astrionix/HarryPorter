"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollSpell() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-emerald to-gold origin-left z-[1000] shadow-[0_0_10px_#2e8b57]"
            style={{ scaleX }}
        />
    );
}

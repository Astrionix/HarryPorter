"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { MouseEvent } from "react";

function HolographicCard({ href, icon: Icon, title, value, label }: any) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
    const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);
    const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(212, 175, 55, 0.15),
    transparent 80%
  )`;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="relative group w-full p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-white/0 shadow-xl"
        >
            <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            />

            <div className="relative h-full bg-midnight/80 backdrop-blur-xl rounded-xl p-8 flex flex-col items-center justify-center gap-6 border border-white/10 overflow-hidden">
                <motion.div
                    style={{ background }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <Icon className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="relative z-10 text-center space-y-2">
                    <h3 className="text-2xl font-serif text-parchment group-hover:text-gold transition-colors">{title}</h3>
                    <p className="text-emerald/80 font-mono text-sm tracking-wide">{value}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-parchment/40 uppercase tracking-widest mt-2 group-hover:text-gold/60">
                        {label} <ExternalLink className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-midnight relative overflow-hidden perspective-1000">
            {/* Futuristic Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,19,43,0.8),rgba(0,0,0,1))] -z-20" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald/5 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-parchment via-gold to-parchment mb-4"
                    >
                        The Neural Nexus
                    </motion.h2>
                    <p className="text-emerald font-mono tracking-widest uppercase text-sm">
                        [ Secure Transmission Channels Link_Start ]
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <HolographicCard
                        href="mailto:padalalmrreddy@gmail.com"
                        icon={Mail}
                        title="Hyper-Mail"
                        value="padalalmrreddy@gmail.com"
                        label="Send Transmission"
                    />
                    <HolographicCard
                        href="https://github.com/Astrionix"
                        icon={Github}
                        title="Code Vault"
                        value="github.com/Astrionix"
                        label="Access Repositories"
                    />
                    <HolographicCard
                        href="https://www.linkedin.com/in/padala-l-m-ramachandra-reddy-7529161b1/"
                        icon={Linkedin}
                        title="Pro Link"
                        value="LinkedIn Connection"
                        label="Establish Handshake"
                    />
                </div>
            </div>
        </section>
    );
}

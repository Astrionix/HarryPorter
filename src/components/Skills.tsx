"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
    Code, Server, Database, Layers, Terminal, Smartphone,
    Brain, Cloud, Network, BarChart, Wrench, Users, Globe
} from "lucide-react";
import ArcaneGridBackground from "./ArcaneGridBackground";

const spells = [
    {
        id: "prog",
        name: "Polyglot Prime",
        realName: "Programming Languages",
        icon: Code,
        description: "The fundamental runes of creation. Mastery over C, Python, and Java allows for shaping reality at the lowest levels.",
        level: "Intermediate",
        mana: "Core",
        tech: ["C", "Python", "Java"]
    },
    {
        id: "ml",
        name: "Tensor Mind",
        realName: "Machine Learning",
        icon: Brain,
        description: "Imbuing machines with the ability to learn. Harnessing TensorFlow, PyTorch, Scikit-learn, Pandas, and NumPy.",
        level: "Intermediate",
        mana: "Very High",
        tech: ["TensorFlow", "PyTorch", "Pandas", "NumPy"]
    },
    {
        id: "ai",
        name: "Neuro Mancer",
        realName: "Deep Learning & AI",
        icon: Terminal,
        description: "Advanced summoning of Large Language Models (OpenAI, Gemini), RAG pipelines, and Vector Databases (Pinecone, Chroma).",
        level: "Intermediate",
        mana: "Legendary",
        tech: ["LLMs", "LangChain", "RAG", "Vector DBs"]
    },
    {
        id: "frontend",
        name: "Visio Weavus",
        realName: "Frontend Tech",
        icon: Layers,
        description: "Crafting the visible illusions of the web. HTML5, CSS3, JavaScript, and React for responsive interfaces.",
        level: "Intermediate",
        mana: "Medium",
        tech: ["HTML5", "CSS3", "React", "JS"]
    },
    {
        id: "backend",
        name: "Serverius Core",
        realName: "Backend Frameworks",
        icon: Server,
        description: "The hidden engines that power the arcane. Flask, FastAPI, and Node.js (Express) for robust APIs.",
        level: "Intermediate",
        mana: "High",
        tech: ["Flask", "FastAPI", "Node.js"]
    },
    {
        id: "db",
        name: "Data Vault",
        realName: "Databases",
        icon: Database,
        description: "Eternal storage for knowledge. MySQL, PostgreSQL, MongoDB, and Firebase.",
        level: "Intermediate",
        mana: "Medium",
        tech: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        id: "devops",
        name: "Cloud Walker",
        realName: "DevOps & Cloud",
        icon: Cloud,
        description: "Deploying spells to the ether. Git, Docker, CI/CD, and Cloud Providers (AWS/GCP/Azure).",
        level: "Beginner",
        mana: "High",
        tech: ["Docker", "Git", "AWS", "CI/CD"]
    },
    {
        id: "api",
        name: "Inter Connectus",
        realName: "API & Integration",
        icon: Network,
        description: "Weaving connections between realms. REST APIs, GraphQL, and Postman.",
        level: "Intermediate",
        mana: "Low",
        tech: ["REST", "GraphQL", "Postman"]
    },
    {
        id: "viz",
        name: "Charto Mancy",
        realName: "Data Visualization",
        icon: BarChart,
        description: "Revealing hidden patterns through visual arts. Matplotlib, Seaborn, and Plotly.",
        level: "Intermediate",
        mana: "Medium",
        tech: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
        id: "tools",
        name: "Forge Tools",
        realName: "Tools & Hosting",
        icon: Wrench,
        description: "The wizard's workshop. Vercel, Netlify, VS Code, PyCharm, and Agentic IDEs.",
        level: "Intermediate",
        mana: "Low",
        tech: ["Vercel", "VS Code", "PyCharm"]
    },
    {
        id: "soft",
        name: "Empathos",
        realName: "Soft Skills",
        icon: Users,
        description: "The magic of human connection. Leadership, Problem Solving, and Communication.",
        level: "Advanced",
        mana: "Infinite",
        tech: ["Leadership", "Teamwork", "Adaptability"]
    }
];

export default function Skills() {
    const [activeSpell, setActiveSpell] = useState(spells[0]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        // Optimized for 120fps - 16ms throttle
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
            if (!scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            // Only run this logic on mobile where horizontal scroll is active
            if (window.innerWidth >= 1024) return;

            const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;

            let closestSpell: typeof spells[0] | null = null;
            let minDistance = Infinity;

            Array.from(container.children).forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                const childCenter = rect.left + rect.width / 2;
                const distance = Math.abs(containerCenter - childCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestSpell = spells[index];
                }
            });

            if (closestSpell && closestSpell.id !== activeSpell.id) {
                setActiveSpell(closestSpell);
            }
        }, 16); // 16ms = ~60fps, browser will interpolate to 120fps
    };

    const handleSpellClick = (spell: typeof spells[0], e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveSpell(spell);

        // Scroll to center on click
        e.currentTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };

    return (
        <section id="skills" className="py-16 bg-midnight relative overflow-hidden">
            {/* Background Decor - Passive Arcane Grid */}
            <ArcaneGridBackground />

            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-3xl rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-parchment mb-12">
                    The Book of Spells <span className="text-gold text-xl md:text-2xl ml-2">(Skills)</span>
                </h2>

                <div className="flex flex-col gap-6 bg-parchment/5 p-5 md:p-6 rounded-xl border border-gold/30 max-w-5xl mx-auto">
                    {/* Horizontal Scroll Spell List - All Screen Sizes */}
                    <div className="relative">
                        {/* Left Arrow */}
                        <button
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
                                }
                            }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gold/90 hover:bg-gold text-midnight p-2 rounded-full shadow-lg transition-all hover:scale-110 hidden md:block"
                            aria-label="Scroll left"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
                                }
                            }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gold/90 hover:bg-gold text-midnight p-2 rounded-full shadow-lg transition-all hover:scale-110 hidden md:block"
                            aria-label="Scroll right"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="w-full flex gap-3 overflow-x-auto custom-scrollbar pb-3 snap-x snap-mandatory px-8 md:px-12"
                        >
                            {spells.map((spell) => (
                                <motion.button
                                    key={spell.id}
                                    onClick={(e) => handleSpellClick(spell, e)}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex-shrink-0 w-[200px] md:w-[220px] text-left p-3 md:p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 snap-center ${activeSpell.id === spell.id
                                        ? "border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                        : "border-transparent text-parchment/60 hover:text-parchment bg-midnight/30"
                                        }`}
                                >
                                    <spell.icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <span className="font-serif text-base md:text-lg block truncate">{spell.name}</span>
                                        <span className="text-xs font-mono text-emerald/70 uppercase truncate block">{spell.realName}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Spell Details */}
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSpell.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="w-full p-5 md:p-6 bg-parchment/10 rounded-lg border border-gold/20 relative overflow-hidden"
                            >
                                {/* Decorative Rune Background */}
                                <div className="absolute right-0 top-0 opacity-5 text-8xl pointer-events-none select-none">
                                    ⚡
                                </div>

                                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                                    <activeSpell.icon className="w-10 h-10 md:w-12 md:h-12 text-emerald flex-shrink-0" />
                                    <div className="min-w-0">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-gold mb-1 truncate">{activeSpell.name}</h3>
                                        <p className="text-xs md:text-sm font-mono text-emerald uppercase tracking-wider">{activeSpell.realName}</p>
                                    </div>
                                </div>

                                <p className="text-base md:text-lg text-parchment leading-relaxed mb-5 md:mb-6">
                                    {activeSpell.description}
                                </p>

                                <div className="mb-5 md:mb-6">
                                    <h4 className="text-gold font-serif mb-2 text-xs md:text-sm uppercase tracking-widest">Components</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeSpell.tech.map((t) => (
                                            <span key={t} className="px-2.5 py-1 bg-midnight/60 text-emerald font-mono text-xs md:text-sm border border-emerald/30 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="bg-midnight/50 p-3 rounded border border-emerald/30">
                                        <span className="text-xs text-parchment/50 uppercase block mb-1">Proficiency</span>
                                        <div className="text-emerald font-serif text-sm md:text-base break-words">{activeSpell.level}</div>
                                    </div>
                                    <div className="bg-midnight/50 p-3 rounded border border-emerald/30">
                                        <span className="text-xs text-parchment/50 uppercase block mb-1">Mana Cost</span>
                                        <div className="text-emerald font-serif text-sm md:text-base">{activeSpell.mana}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

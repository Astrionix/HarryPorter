"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
        level: "Advanced",
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

    return (
        <section id="skills" className="py-20 bg-midnight relative overflow-hidden">
            {/* Background Decor - Passive Arcane Grid */}
            <ArcaneGridBackground />

            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-3xl rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-serif text-center text-parchment mb-16">
                    The Book of Spells <span className="text-gold text-2xl ml-2"> (Skills)</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 bg-parchment/5 p-8 rounded-xl border border-gold/30 backdrop-blur-sm min-h-[600px]">
                    {/* Left: Spell List - Scrollable */}
                    <div className="lg:w-1/3 border-r border-gold/20 pr-4 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                        {spells.map((spell) => (
                            <motion.button
                                key={spell.id}
                                onClick={() => setActiveSpell(spell)}
                                whileHover={{ x: 10, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center gap-4 ${activeSpell.id === spell.id
                                    ? "border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                    : "border-transparent text-parchment/60 hover:text-parchment"
                                    }`}
                            >
                                <spell.icon className="w-6 h-6 flex-shrink-0" />
                                <div>
                                    <span className="font-serif text-lg block">{spell.name}</span>
                                    <span className="text-xs font-mono text-emerald/70 uppercase">{spell.realName}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: Spell Details */}
                    <div className="lg:w-2/3 flex items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSpell.id}
                                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, y: -20, rotateX: 10 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full p-8 bg-parchment/10 rounded-lg border border-gold/20 flex flex-col justify-center relative overflow-hidden"
                            >
                                {/* Decorative Rune Background */}
                                <div className="absolute right-0 top-0 opacity-10 text-9xl pointer-events-none">
                                    ⚡
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <activeSpell.icon className="w-12 h-12 text-emerald animate-pulse" />
                                    <div>
                                        <h3 className="text-4xl font-serif text-gold mb-1">{activeSpell.name}</h3>
                                        <p className="text-sm font-mono text-emerald uppercase tracking-widest">{activeSpell.realName}</p>
                                    </div>
                                </div>

                                <p className="text-xl text-parchment leading-relaxed mb-8">
                                    {activeSpell.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-gold font-serif mb-2 text-sm uppercase tracking-widest">Components</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeSpell.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-midnight/60 text-emerald font-mono text-sm border border-emerald/30 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-midnight/50 p-4 rounded border border-emerald/30">
                                        <span className="text-xs text-parchment/50 uppercase">Proficiency</span>
                                        <div className="text-emerald font-serif text-lg">{activeSpell.level}</div>
                                    </div>
                                    <div className="bg-midnight/50 p-4 rounded border border-emerald/30">
                                        <span className="text-xs text-parchment/50 uppercase">Mana Cost</span>
                                        <div className="text-emerald font-serif text-lg">{activeSpell.mana}</div>
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

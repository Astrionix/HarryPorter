"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Github, ExternalLink, Beaker, FlaskConical } from "lucide-react";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    solution: string;
    techStack: string[];
    color: string;
}

const projects: Project[] = [
    {
        id: "toxinextx",
        title: "ToxiNextX",
        subtitle: "Anti-Venom for Digital Toxicity",
        description: "AI-powered content moderation system to detect and flag toxic comments and hate speech.",
        problem: "Rising toxicity in social platforms.",
        solution: "Real-time NLP analysis using BERT models to filter harmful content.",
        techStack: ["Python", "TensorFlow", "React", "FastAPI"],
        color: "from-purple-500 to-indigo-600",
    },
    {
        id: "eduelect",
        title: "EduElect",
        subtitle: "The Unbreakable Vow of Voting",
        description: "Secure blockchain-based voting system ensuring transparency and immutability.",
        problem: "Trust issues in traditional student elections.",
        solution: "Decentralized ledger application (DApp) on Ethereum.",
        techStack: ["Solidity", "Blockchain", "Web3.js", "React"],
        color: "from-blue-400 to-cyan-500",
    },
    {
        id: "tron",
        title: "Tron",
        subtitle: "The Oracle Automaton",
        description: "Intelligent chatbot assistant capable of natural conversation and task execution.",
        techStack: ["NLP", "Python", "OpenAI API"],
        problem: "Static FAQ sections are inefficient.",
        solution: "Conversational AI that learns from user interactions.",
        color: "from-green-400 to-emerald-600",
    },
    {
        id: "medscanx",
        title: "MedScanX",
        subtitle: "The Healer's Vision",
        description: "Medical imaging analysis tool for early disease detection.",
        techStack: ["Computer Vision", "PyTorch", "Flask"],
        problem: "Human error in X-ray analysis.",
        solution: "CNN-based classification for high-accuracy diagnostics.",
        color: "from-red-400 to-rose-600",
    },
    {
        id: "airquality",
        title: "AirQuality Sense",
        subtitle: "Divining the Air",
        description: "IoT-based pollution monitoring system with real-time analytics.",
        techStack: ["IoT", "Arduino", "Python", "Data Viz"],
        problem: "Lack of localized air quality data.",
        solution: "Distributed sensor network feeding a central dashboard.",
        color: "from-gray-400 to-slate-600",
    },
    {
        id: "platex",
        title: "PlateX",
        subtitle: "The All-Seeing Nutrition Eye",
        description: "AI-powered food nutrition analysis platform transforming meal photos into health data.",
        techStack: ["React", "Node.js", "AI/CV", "Web"],
        problem: "Manual calorie tracking is tedious and prone to error.",
        solution: "Instant nutritional breakdown via AI-driven image analysis.",
        color: "from-orange-400 to-amber-600",
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 bg-midnight relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif text-center text-parchment mb-12">
                    Potions Laboratory <span className="text-emerald text-xl">(Projects)</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                            className="group cursor-pointer bg-parchment/5 border border-gold/20 rounded-xl p-6 relative overflow-hidden backdrop-blur-sm"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.color} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity`} />

                            <div className="mb-4">
                                <FlaskConical className={`w-10 h-10 text-parchment group-hover:text-gold transition-colors`} />
                            </div>

                            <h3 className="text-2xl font-serif text-parchment mb-2 group-hover:text-gold transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm font-serif text-emerald italic mb-4">
                                {project.subtitle}
                            </p>

                            <div className="flex gap-2 flex-wrap mt-4">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono bg-midnight/50 px-2 py-1 rounded text-parchment/70">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md">
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="bg-midnight border border-gold w-full max-w-3xl rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            >
                                <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute top-4 right-4 text-parchment hover:text-gold p-2 bg-midnight/50 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${selectedProject.color} bg-opacity-20`}>
                                            <Beaker className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-serif text-gold">{selectedProject.title}</h2>
                                            <p className="text-emerald italic font-serif">{selectedProject.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-serif text-parchment border-b border-white/10 pb-2">The Problem</h4>
                                            <p className="text-parchment/70">{selectedProject.problem}</p>

                                            <h4 className="text-xl font-serif text-parchment border-b border-white/10 pb-2 pt-4">The Solution</h4>
                                            <p className="text-parchment/70">{selectedProject.solution}</p>
                                        </div>

                                        <div className="bg-parchment/5 p-6 rounded-lg border border-white/10">
                                            <h4 className="text-lg font-serif text-gold mb-4">Alchemy Ingredients</h4>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {selectedProject.techStack.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-midnight rounded border border-emerald/30 text-emerald text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <a href="#" className="flex items-center justify-center gap-2 w-full py-2 bg-gold text-midnight font-bold rounded hover:bg-gold/80 transition-colors">
                                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                                </a>
                                                <a href="#" className="flex items-center justify-center gap-2 w-full py-2 border border-parchment text-parchment rounded hover:bg-parchment/10 transition-colors">
                                                    <Github className="w-4 h-4" /> View Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

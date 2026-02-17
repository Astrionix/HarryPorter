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
    githubUrl: string;
}

const projects: Project[] = [
    {
        id: "toxinetx",
        title: "ToxiNetX",
        subtitle: "Anti-Venom for Digital Toxicity",
        description: "Next-generation AI content moderation and social safety engine with real-time detection of hate speech, cyberbullying, and toxicity.",
        problem: "Rising toxicity, hate speech, and cyberbullying in digital platforms.",
        solution: "Real-time NLP moderation workflows with ML pipelines for automated content filtering and detection accuracy.",
        techStack: ["Next.js", "NLP", "Machine Learning", "Vercel"],
        color: "from-purple-500 to-indigo-600",
        githubUrl: "https://github.com/Astrionix/ToxinetX"
    },
    {
        id: "edumatrix",
        title: "EduMatriX",
        subtitle: "The Academy's Enchanted Ledger",
        description: "Comprehensive academic management portal with role-based dashboards for students, faculty, and administrators.",
        problem: "Fragmented academic workflows and lack of unified portal for students, faculty, and admins.",
        solution: "Modular architecture with secure access control, real-time class scheduling, resource sharing, and assignment tracking.",
        techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        color: "from-blue-400 to-cyan-500",
        githubUrl: "https://github.com/Astrionix/EduMatriX"
    },
    {
        id: "medscanx",
        title: "MedScanX",
        subtitle: "The Healer's Vision",
        description: "AI-powered platform that analyzes CT scans with Gemini 2.5 Pro, providing instant medical insights, detailed reports, and secure result storage.",
        techStack: ["Next.js", "Gemini AI", "Supabase", "Tailwind CSS"],
        problem: "Human error and delays in medical scan analysis.",
        solution: "Multimodal AI analysis with secure authentication, file upload to Supabase Storage, and row-level security for data privacy.",
        color: "from-red-400 to-rose-600",
        githubUrl: "https://github.com/Astrionix/MedScanX"
    },
    {
        id: "platex",
        title: "PlateX",
        subtitle: "The All-Seeing Nutrition Eye",
        description: "AI-powered responsive web app for food image analysis, nutrition estimation (calories, macros), and personalized diet tracking.",
        techStack: ["React", "Node.js", "AI/CV", "Supabase"],
        problem: "Manual calorie tracking is tedious and prone to error.",
        solution: "Personalized diet tracking with intelligent nutritional insights, gamification, AI assistant, and interactive UI.",
        color: "from-orange-400 to-amber-600",
        githubUrl: "https://github.com/Astrionix/PlateX"
    },
    {
        id: "saferoutex",
        title: "SafeRouteX",
        subtitle: "The Guardian's Compass",
        description: "Full-stack platform providing safest navigation routes using real-time crime data, CCTV locations, and streetlight density.",
        techStack: ["Next.js", "Node.js", "PostgreSQL", "PostGIS"],
        problem: "Navigating unfamiliar areas without awareness of safety risks.",
        solution: "Dual routing (fastest + safest), crime heatmaps, live SOS alerts, admin dashboard, and time-based safety scoring.",
        color: "from-green-400 to-emerald-600",
        githubUrl: "https://github.com/Astrionix/SafeRouteX"
    },
    {
        id: "sentix",
        title: "SentiX",
        subtitle: "The Emotion Oracle",
        description: "AI sentiment analysis system for code-mixed and multilingual text using Llama 3.3 70B via Groq API with real-time confidence scoring.",
        techStack: ["Python", "FastAPI", "Llama 3.3", "Tailwind CSS"],
        problem: "Understanding emotional tone in informal, multilingual text is complex for traditional tools.",
        solution: "Groq-powered high-speed inference with confidence scoring, optimized for code-mixed input and glassmorphism UI.",
        color: "from-sky-400 to-blue-600",
        githubUrl: "https://github.com/Astrionix/SentiX"
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
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <motion.div
                                layoutId={`project-${project.id}`}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(212,175,55,0.3)" }}
                                className="cursor-pointer bg-parchment/5 border border-gold/20 rounded-xl p-6 relative overflow-hidden h-full"
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

                                <p className="text-parchment/70 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex gap-2 flex-wrap mt-4">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="text-xs font-mono bg-midnight/50 px-2 py-1 rounded text-parchment/70">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Overlay with Actions */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-midnight/95 rounded-xl flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="px-6 py-2 bg-gold text-midnight font-bold rounded-lg hover:bg-gold/80 transition-colors flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Details
                                    </button>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-6 py-2 border border-parchment text-parchment rounded-lg hover:bg-parchment/10 transition-colors flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        View Code
                                    </a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 cursor-pointer"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="bg-midnight border border-gold w-full max-w-3xl rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto relative shadow-2xl cursor-default"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 text-parchment hover:text-gold p-2 bg-midnight/80 rounded-full z-50 transition-colors"
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
                                                <a
                                                    href={selectedProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 w-full py-2 border border-parchment text-parchment rounded hover:bg-parchment/10 transition-colors"
                                                >
                                                    <Github className="w-4 h-4" /> View Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

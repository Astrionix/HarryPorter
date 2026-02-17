"use client";

import { motion } from "framer-motion";
import { Shield, Calendar, Briefcase, MapPin } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            company: "PAT Technologies Pvt. Ltd.",
            role: "Artificial Intelligence Intern",
            date: "Feb 2026 – Present",
            location: "Bengaluru, India",
            description: "Developing AI-based solutions using Machine Learning, data analysis, and real-world problem-solving through live project implementation. Collaborating with mentors in project-driven environments.",
            skills: ["Machine Learning", "Python", "Data Analysis", "AI Models"],
        },
        {
            company: "CodeClause",
            role: "Web Development Intern",
            date: "Sep 2025 – Oct 2025",
            location: "Kakinada, Andhra Pradesh",
            description: "Developed responsive web applications using HTML, CSS, JavaScript. Integrated RESTful APIs and participated in Agile development, debugging, and code reviews.",
            skills: ["HTML/CSS", "JavaScript", "REST APIs", "Agile"],
        },
        {
            company: "Adhoc Network Tech Company",
            role: "Machine Learning Intern",
            date: "Jan 2024 – Jun 2024",
            location: "Visakhapatnam, AP",
            description: "Applied Machine Learning techniques using Python for data preprocessing, exploratory data analysis, and feature engineering. Built and evaluated predictive models with real-world datasets.",
            skills: ["Python", "Machine Learning", "Data Analysis", "EDA"],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-midnight relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif text-center text-parchment mb-16">
                    Defense Against the Dark Arts <span className="text-gold text-2xl mx-2"> (Experience)</span>
                </h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 transform -translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } items-center`}
                        >
                            <div className="md:w-1/2" />

                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-12 h-12 bg-midnight border-2 border-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                                    <Shield className="w-6 h-6 text-gold" />
                                </div>
                            </div>

                            <div className="md:w-1/2 p-4 md:px-8">
                                <div className="bg-parchment/5 p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors backdrop-blur-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />

                                    <h3 className="text-2xl font-serif text-parchment mb-1">{exp.role}</h3>
                                    <h4 className="text-lg font-serif text-emerald mb-1 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> {exp.company}
                                    </h4>
                                    <p className="text-xs text-parchment/50 mb-4 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {exp.location}
                                    </p>

                                    <p className="text-parchment/70 mb-4 font-sans leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex gap-2 flex-wrap">
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="text-xs font-mono text-gold border border-gold/30 px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="absolute top-4 right-4 text-xs font-mono text-parchment/40 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {exp.date}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

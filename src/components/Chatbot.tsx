"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

// Resume Knowledge Base
const knowledgeBase = {
    identity: [
        "who are you", "what is this", "intro", "hello", "hi", "hey"
    ],
    experience: [
        "experience", "work", "job", "internship", "company", "hc technologies", "codeclause"
    ],
    skills: [
        "skills", "stack", "technologies", "languages", "python", "java", "react", "flutter", "ai", "ml"
    ],
    projects: [
        "projects", "portfolio", "built", "toxinextx", "platex", "eduelect", "tron"
    ],
    contact: [
        "contact", "email", "github", "linkedin", "reach"
    ],
    education: [
        "education", "degree", "college", "mca", "study"
    ],
    certifications: [
        "certification", "certificate", "oracle", "infosys", "cisco"
    ]
};

const responses = {
    default: "The mists are thick... I did not understand that spell. Ask me about my Experience, Skills, Projects, or Certifications.",
    identity: "I am the Arcane Guardian of this portfolio. I serve Padala L M Ramachandra Reddy, a Master of AI and Full-Stack Wizardry.",
    experience: "My master has served as:\n• Software Intern at HC Technologies (Jan 2024 - June 2024)\n• Web Dev Intern at CodeClause (Sep 2025 - Oct 2025)\nFocusing on backend optimization and API defense.",
    skills: "The spellbook contains many powerful incantations:\n• Languages: Python, Java, C, Dart\n• AI/ML: TensorFlow, PyTorch, LLMs, RAG\n• Web: React, Node.js, Flask\n• Mobile: Flutter\n• Databases: MySQL, MongoDB",
    projects: "Behold the artifacts created:\n• PlateX (AI Nutrition Analysis)\n• ToxiNextX (AI Toxicity Detection)\n• EduElect (Blockchain Voting)\n• Tron (AI Chatbot)\n• MedScanX (Medical Imaging)",
    contact: "You may reach the master via:\n• Email: padalalmrreddy@gmail.com\n• GitHub: github.com/Astrionix\nOr use the 'Contact' section below.",
    education: "Master of Computer Applications (MCA). A scholar of the digital arts.",
    certifications: "Certified in:\n• Oracle AI Foundations Associate\n• Python for Data Science\n• MongoDB DBA Associate\n• Cisco Cybersecurity"
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "init",
            text: "Greetings, traveler. I am the Oracle. Ask me anything about RCR's journey.",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");

        // Process Response
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let reply = responses.default;

            // Simple keyword matching
            if (knowledgeBase.identity.some(k => lowerInput.includes(k))) reply = responses.identity;
            else if (knowledgeBase.experience.some(k => lowerInput.includes(k))) reply = responses.experience;
            else if (knowledgeBase.skills.some(k => lowerInput.includes(k))) reply = responses.skills;
            else if (knowledgeBase.projects.some(k => lowerInput.includes(k))) reply = responses.projects;
            else if (knowledgeBase.contact.some(k => lowerInput.includes(k))) reply = responses.contact;
            else if (knowledgeBase.education.some(k => lowerInput.includes(k))) reply = responses.education;
            else if (knowledgeBase.certifications.some(k => lowerInput.includes(k))) reply = responses.certifications;

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: reply,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-gold to-amber-500 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] border-2 border-white/20 text-midnight"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-8 h-8" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-midnight/95 backdrop-blur-xl border border-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-gold/20 to-emerald/20 border-b border-gold/20 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <h3 className="font-serif text-gold font-bold">The Oracle</h3>
                            <Sparkles className="w-4 h-4 text-emerald ml-auto" />
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${msg.sender === "user"
                                                ? "bg-gold text-midnight font-medium rounded-tr-none"
                                                : "bg-white/10 text-parchment border border-white/10 rounded-tl-none"
                                            }`}
                                    >
                                        {msg.text.split('\n').map((line, i) => (
                                            <span key={i} className="block">{line}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-gold/20 bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about skills, projects..."
                                    className="w-full bg-midnight border border-gold/30 rounded-lg py-3 pl-4 pr-12 text-parchment focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 text-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gold hover:text-white transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

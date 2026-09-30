"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Filter, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "@/components/BrandIcons";

interface Project {
    title: string;
    description: string;
    category: "all" | "ai" | "fullstack" | "analytics";
    categoryLabel: string;
    tech: string[];
    demoUrl: string;
    githubUrl: string;
    imageUrl: string;
    urlLabel: string;
    statusLabel: string;
    metrics: { label: string; value: string }[];
}

export default function Projects() {
    const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "analytics">("all");

    const projects: Project[] = [
        {
            title: "Event Security & Attendance System",
            description: "A secure QR-based event entry and attendance system for Graduation Day (1,000+) and Orientation Day (1,800+) attendees with eligibility verification against official student records, real-time monitoring, duplicate-entry prevention, and role-based access control.",
            category: "fullstack",
            categoryLabel: "Full Stack & Security",
            tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Prisma", "JWT", "BCrypt", "Tailwind CSS"],
            demoUrl: "https://github.com/regondashiva",
            githubUrl: "https://github.com/regondashiva",
            imageUrl: "/projects/event_security.jpg",
            urlLabel: "github.com/regondashiva",
            statusLabel: "● PRODUCTION",
            metrics: [
                { label: "Attendees Served", value: "2,800+" },
                { label: "Scan Validation", value: "<150ms" },
            ],
        },
        {
            title: "SocialHub — AI-Powered Social Media Platform",
            description: "Full-stack social media platform with JWT authentication, real-time feed, posts, likes, comments, profiles, and follow system. Powered by an AI multilingual toxicity detection engine (FastAPI, PyTorch, XLM-RoBERTa) that validates comments in real time across English, Hindi, Telugu, and Hinglish with smart gradient alerts and polite rewrite suggestions.",
            category: "ai",
            categoryLabel: "AI / Full Stack / NLP",
            tech: ["React 18", "Vite", "Node.js", "Express", "MongoDB", "FastAPI", "PyTorch", "Transformers", "XLM-RoBERTa", "Zustand", "Tailwind CSS"],
            demoUrl: "https://social-hub-one-gamma.vercel.app/",
            githubUrl: "https://github.com/regondashiva/SocialHub",
            imageUrl: "/projects/socialhub.jpg",
            urlLabel: "social-hub-one-gamma.vercel.app",
            statusLabel: "● LIVE DEMO",
            metrics: [
                { label: "Inference Latency", value: "<110ms" },
                { label: "Detection Acc.", value: "99.1%" },
            ],
        },
        {
            title: "Bus Booking & Management System",
            description: "Enterprise bus booking and management system built with real-time seat coordination, automated route search, booking management, and live seat availability using Django Channels and WebSockets. Features instant QR-code ticket generation and automated notification dispatch.",
            category: "fullstack",
            categoryLabel: "Full Stack & WebSockets",
            tech: ["React.js", "Django", "Django Channels", "REST API", "WebSockets", "MySQL", "QR Generator", "Tailwind CSS"],
            demoUrl: "https://bus-management-system-six.vercel.app",
            githubUrl: "https://github.com/regondashiva/BUS-MANAGEMENT-SYSTEM",
            imageUrl: "/projects/busbooking.jpg",
            urlLabel: "bus-management-system-six.vercel.app",
            statusLabel: "● LIVE DEMO",
            metrics: [
                { label: "Socket Sync", value: "<45ms" },
                { label: "QR Generation", value: "<0.5s" },
            ],
        },
        {
            title: "CareerGuide — Student Career & Education Guidance Platform",
            description: "An interactive educational guidance platform built to empower students and parents across academic stages (6+, 10+, and 12+) with structured skill roadmaps, tailored stream selections, in-depth course explorations, and actionable career pathway insights.",
            category: "fullstack",
            categoryLabel: "Full Stack & EdTech",
            tech: ["React.js", "JavaScript", "Node.js", "Express.js", "HTML5", "CSS3", "REST APIs"],
            demoUrl: "https://career-guide-9kof.onrender.com",
            githubUrl: "https://github.com/regondashiva",
            imageUrl: "/projects/careerguide.jpg",
            urlLabel: "career-guide-9kof.onrender.com",
            statusLabel: "● LIVE DEMO",
            metrics: [
                { label: "Target Stages", value: "6+, 10+, 12+" },
                { label: "Platform Status", value: "100% Live" },
            ],
        },
        {
            title: "RecruitAI — Resume Screening & Recruitment Analytics",
            description: "An intelligent recruitment platform that automates resume screening with spaCy and NLTK NLP, extracts skills/experience from PDF/DOCX files, matches candidates using TF-IDF & cosine similarity ranking, and delivers interactive analytics dashboards with candidate funnel tracking.",
            category: "ai",
            categoryLabel: "AI / NLP / ATS Analytics",
            tech: ["Next.js 14", "React 18", "FastAPI", "SQLAlchemy", "MySQL 8.0", "spaCy", "NLTK", "Scikit-learn", "TF-IDF", "Tailwind CSS"],
            demoUrl: "https://github.com/regondashiva/Resume_analytics",
            githubUrl: "https://github.com/regondashiva/Resume_analytics",
            imageUrl: "/projects/recruitai.jpg",
            urlLabel: "github.com/regondashiva/Resume_analytics",
            statusLabel: "● TF-IDF + NLP",
            metrics: [
                { label: "Matching Accuracy", value: "98.4%" },
                { label: "Parsing Time", value: "<1.2s" },
            ],
        },
    ];

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-950 dark:text-stone-50"
                    >
                        Selected Projects
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        Explore systems built leveraging AI, NLP architectures, analytics processing, and full-stack interfaces.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
                    />
                </div>

                {/* Filters bar */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
                    {(["all", "ai", "fullstack"] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wider border ${filter === cat
                                ? "bg-stone-900 border-stone-900 text-stone-100 dark:bg-stone-100 dark:border-stone-100 dark:text-stone-900 shadow-md"
                                : "bg-white/80 border-stone-300 dark:bg-[#1D1C1A]/80 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#1D1C1A]"
                                }`}
                        >
                            <Filter size={12} />
                            {cat === "all" ? "All Projects" : cat === "ai" ? "AI & Machine Learning" : "Full Stack Web Apps"}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group flex flex-col justify-between rounded-3xl border border-stone-300 dark:border-stone-800 bg-white/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm overflow-hidden hover:border-stone-500 hover:shadow-2xl transition-all duration-300 shadow-sm"
                            >

                                {/* Visual Dashboard Screenshot (Streamlined & Compact) */}
                                <div className="h-40 sm:h-44 w-full border-b border-stone-200 dark:border-stone-800 bg-[#171614] relative overflow-hidden">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
                                    
                                    {/* Status Badge Tag */}
                                    <span className={`absolute top-3 right-3 text-[9px] px-2 py-0.5 rounded-full font-bold font-mono shadow-sm backdrop-blur-md ${project.statusLabel.includes("LIVE")
                                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                                        : "bg-stone-900/80 text-stone-300 border border-stone-600/40"
                                        }`}>
                                        {project.statusLabel}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Category Label */}
                                        <div className="flex items-center gap-1.5 text-[9px] uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                                            <Code2 size={11} className="text-stone-800 dark:text-stone-200" />
                                            <span>{project.categoryLabel}</span>
                                        </div>

                                        <h3 className="text-base sm:text-lg font-serif font-bold text-stone-950 dark:text-stone-50 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors mb-2 leading-snug">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs text-stone-600 dark:text-stone-400 mb-3.5 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 rounded-md text-[9px] font-mono font-medium bg-stone-100 dark:bg-stone-800/90 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Metrics and CTA Buttons (Footer of Card) */}
                                    <div className="border-t border-stone-200 dark:border-stone-800 pt-3.5 mt-auto">
                                        {/* Performance / KPI Metrics */}
                                        <div className="grid grid-cols-2 gap-2 mb-3.5 bg-stone-50 dark:bg-stone-900/60 p-2.5 rounded-xl border border-stone-200 dark:border-stone-800">
                                            {project.metrics.map((met) => (
                                                <div key={met.label} className="text-left font-mono">
                                                    <p className="text-[8px] text-stone-500 dark:text-stone-400 uppercase tracking-wider">{met.label}</p>
                                                    <p className="text-xs font-bold text-stone-950 dark:text-stone-50 mt-0.5">{met.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-grow inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-950 text-stone-100 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 transition-all duration-300 shadow-sm"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={12} />
                                            </a>

                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold border border-stone-300 bg-stone-100 hover:bg-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-all duration-300"
                                                aria-label="GitHub Repository"
                                            >
                                                <GithubIcon size={14} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

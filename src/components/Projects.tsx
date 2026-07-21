"use client";

import React, { useState } from "react";
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
    metrics: { label: string; value: string }[];
    renderMockup: () => React.JSX.Element;
}

export default function Projects() {
    const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "analytics">("all");

    const projects: Project[] = [
        {
            title: "AI-Powered Resume Screening & Predictive Recruitment Analytics System",
            description: "An advanced recruiter workspace solving resume parsing bottlenecks, providing intelligent job-matching ATS scores and recruitment pipelines using natural language processing.",
            category: "ai",
            categoryLabel: "AI / ML",
            tech: ["Next.js", "FastAPI", "NLP", "Scikit-Learn", "Hugging Face"],
            demoUrl: "#",
            githubUrl: "https://github.com/regondashiva/ai-resume-screener",
            metrics: [
                { label: "ATS Match Acc.", value: "98%" },
                { label: "Parsing Speed", value: "<1.2s" },
            ],
            renderMockup: () => (
                <div className="relative w-full h-full bg-[#0d1324] flex flex-col justify-between p-4 overflow-hidden select-none font-mono">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                        <span className="text-[10px] text-blue-500 uppercase tracking-widest font-bold">Workspace: Screener v1.0</span>
                        <div className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="w-2 h-2 rounded-full bg-yellow-505" />
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-3 items-center flex-1">
                        <div className="col-span-8 p-3 rounded-lg border border-slate-800 bg-slate-900/60 text-left">
                            <p className="text-[10px] text-slate-400">{"// resume_file.pdf"}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 text-xs">PDF</div>
                                <div>
                                    <h6 className="text-xs font-bold text-slate-200">Shiva_Resume.pdf</h6>
                                    <p className="text-[9px] text-slate-400">128 KB • NLP parsed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 p-2 rounded-lg border border-teal-500/20 bg-teal-500/5 text-center flex flex-col items-center justify-center h-full">
                            <p className="text-[9px] text-slate-400 uppercase tracking-wider">Score</p>
                            <span className="text-xl font-extrabold text-teal-400">87<span className="text-xs font-normal">/100</span></span>
                        </div>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 mt-2 text-left">
                        <p className="text-[9px] text-slate-400">Predicted match: <span className="text-blue-400">Senior Full-Stack Engineer</span></p>
                    </div>
                </div>
            ),
        },
        {
            title: "SocialHub AI Social Media Platform",
            description: "A real-time communication platform built to demonstrate advanced moderation protocols featuring live toxic comment checking, sentiment charts, and multi-language AI integration.",
            category: "ai",
            categoryLabel: "AI / ML",
            tech: ["React.js", "Express.js", "PyTorch", "Transformers", "NLP"],
            demoUrl: "#",
            githubUrl: "https://github.com/regondashiva/socialhub-ai",
            metrics: [
                { label: "Classify Latency", value: "<120ms" },
                { label: "Accuracy Rating", value: "99.2%" },
            ],
            renderMockup: () => (
                <div className="relative w-full h-full bg-[#110e1c] flex flex-col justify-between p-4 overflow-hidden select-none">
                    <div className="flex items-center justify-between border-b border-indigo-950 pb-2 mb-2">
                        <span className="text-[10px] text-purple-400 font-mono tracking-widest font-bold font-sans">SOCIALHUB API</span>
                        <span className="text-[9px] font-mono text-emerald-400">● LIVE MONITOR</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-3">
                        <div className="text-left bg-indigo-950/20 border border-red-500/30 p-2.5 rounded-lg text-xs leading-relaxed">
                            <p className="text-red-400 text-[10px] font-mono mb-1 font-bold">SYSTEM ALERT: HATE SPEECH FLAGGED</p>
                            <p className="text-slate-300 italic">&quot;This database architecture is trash! Burn the server...&quot;</p>
                        </div>
                        <div className="flex gap-2 text-[9px] font-mono justify-start">
                            <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">Toxicity: 94.7%</span>
                            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-450 border border-purple-500/20">Locale: English</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "CRM & Admin Management Platform",
            description: "Enterprise operations center equipped with user profiles, role-level permissions (RBAC), subscription pipelines, automated reports, analytics, and CRM sales pipelines.",
            category: "fullstack",
            categoryLabel: "Full Stack",
            tech: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Tailwind CSS"],
            demoUrl: "#",
            githubUrl: "https://github.com/regondashiva/crm-admin-platform",
            metrics: [
                { label: "API Query Load", value: "<45ms" },
                { label: "Uptime SLA", value: "99.9%" },
            ],
            renderMockup: () => (
                <div className="relative w-full h-full bg-[#0a0d16] flex flex-col justify-between p-4 overflow-hidden select-none font-mono">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                        <span className="text-[9px] text-indigo-400 font-bold uppercase tracking-widest">CRM SYSTEM DASHBOARD</span>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">RBAC: Active</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 flex-grow items-center">
                        <div className="p-2 border border-slate-800 bg-slate-900/60 rounded text-center">
                            <span className="text-[8px] text-slate-400 uppercase">Leads</span>
                            <p className="text-xs font-bold text-slate-200 mt-0.5">14,280</p>
                        </div>
                        <div className="p-2 border border-slate-800 bg-slate-900/60 rounded text-center">
                            <span className="text-[8px] text-slate-400 uppercase">Convs.</span>
                            <p className="text-xs font-bold text-emerald-400 mt-0.5">+18%</p>
                        </div>
                        <div className="p-2 border border-slate-800 bg-slate-900/60 rounded text-center flex flex-col items-center justify-center">
                            <span className="text-[8px] text-slate-400 uppercase">Status</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 animate-pulse" />
                        </div>
                    </div>
                    <div className="h-6 w-full bg-slate-900 border border-slate-800 rounded flex items-center justify-between px-2 text-[8px] text-slate-400 mt-2">
                        <span>Query payload: OK</span>
                        <span>GraphQL schema: V3</span>
                    </div>
                </div>
            ),
        },
        {
            title: "Bus Booking System",
            description: "A transportation platform featuring real-time interactive seat booking grids, automated QR ticket generators, WebSockets for sync, SMS notifications, and analytical dashboards.",
            category: "analytics",
            categoryLabel: "Data Analytics, Backend",
            tech: ["React.js", "WebSockets", "QR Generator", "MySQL", "Node.js"],
            demoUrl: "#",
            githubUrl: "https://github.com/regondashiva/bus-booking-system",
            metrics: [
                { label: "Socket Sync", value: "<50ms" },
                { label: "QR Verify", value: "0.8s" },
            ],
            renderMockup: () => (
                <div className="relative w-full h-full bg-[#050e12] flex flex-col justify-between p-4 overflow-hidden select-none font-mono">
                    <div className="flex items-center justify-between border-b border-cyan-950 pb-2 mb-2">
                        <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-widest">Seat Coordinator</span>
                        <span className="text-[9px] text-slate-400">Route 102A</span>
                    </div>
                    <div className="flex-1 flex gap-3 items-center justify-center">
                        {/* Seat Grid Representation */}
                        <div className="grid grid-cols-4 gap-1.5 p-1.5 border border-cyan-950/60 bg-[#07131a] rounded">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((seat) => (
                                <div
                                    key={seat}
                                    className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[7px] font-bold ${seat === 3 ? "bg-amber-500 text-white" : seat === 4 || seat === 5 ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-400"
                                        }`}
                                >
                                    {seat}
                                </div>
                            ))}
                        </div>
                        {/* Ticket Preview */}
                        <div className="flex-1 p-2 border border-slate-800 bg-[#07131a]/60 rounded text-left flex flex-col justify-center h-full">
                            <span className="text-[8px] text-slate-400 font-bold uppercase">Ticket Verified</span>
                            <div className="h-6 w-6 relative bg-white rounded mt-1 border border-slate-700 self-start flex items-center justify-center">
                                {/* QR Symbol */}
                                <div className="w-4 h-4 bg-slate-900 flex flex-wrap justify-between p-[2px]">
                                    <div className="w-1.5 h-1.5 bg-white" />
                                    <div className="w-1.5 h-1.5 bg-white" />
                                    <div className="w-0.5 h-0.5 bg-white self-end" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-[#090d16]">
            {/* Background radial highlights */}
            <div className="absolute top-[20%] left-[8%] w-[450px] h-[450px] rounded-full bg-blue-600/5 dark:bg-blue-900/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
                    >
                        Featured Projects
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        Explore a selection of systems built leveraging AI, GraphQL interfaces, analytics processing, and real-time protocols.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Filters bar */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
                    {(["all", "ai", "fullstack", "analytics"] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wider border ${filter === cat
                                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/15"
                                : "bg-slate-50 border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                                }`}
                        >
                            <Filter size={12} />
                            {cat === "all" ? "All Projects" : cat === "ai" ? "AI & Machine Learning" : cat === "fullstack" ? "Full Stack" : "Data Analytics"}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                                className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300"
                            >

                                {/* Visual Dashboard Mockup (Top portion of card) */}
                                <div className="h-48 w-full border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex relative items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/100 to-transparent z-10 pointer-events-none opacity-20" />
                                    {project.renderMockup()}
                                </div>

                                {/* Card Body */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Category Label */}
                                        <div className="flex gap-2 items-center text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3">
                                            <Code2 size={12} className="text-blue-500" />
                                            <span>{project.categoryLabel}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/80 border border-slate-250 dark:border-slate-700/50 text-slate-700 dark:text-slate-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Metrics and CTA Buttons (Footer of Card) */}
                                    <div className="border-t border-slate-150 dark:border-slate-800/60 pt-5">
                                        {/* Performance / KPI Metrics */}
                                        <div className="grid grid-cols-2 gap-4 mb-5 bg-slate-50/50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                                            {project.metrics.map((met) => (
                                                <div key={met.label} className="text-left font-mono">
                                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{met.label}</p>
                                                    <p className="text-[15px] font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{met.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.demoUrl}
                                                className="flex-grow inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 transition-colors"
                                                onClick={(e) => {
                                                    if (project.demoUrl === "#") {
                                                        e.preventDefault();
                                                        alert("Deploying project live demo details placeholder. Demo active on Vercel.");
                                                    }
                                                }}
                                            >
                                                Live Demo
                                                <ExternalLink size={13} />
                                            </a>

                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 bg-white/50 hover:bg-[#fafafa] dark:border-slate-800 dark:bg-slate-900/40 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 transition-colors"
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

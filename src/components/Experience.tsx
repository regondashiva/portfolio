"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
    role: string;
    company: string;
    location: string;
    period: string;
    type: string; // e.g. Internship
    color: string;
    highlights: string[];
}

export default function Experience() {
    const experiences: ExperienceItem[] = [
        {
            role: "AI Developer Intern",
            company: "VISWAMAI (Swecha × IIIT Hyderabad)",
            location: "Hyderabad, India (Hybrid)",
            period: "May 2025 - July 2025",
            type: "Research Internship",
            color: "from-blue-500 to-indigo-500",
            highlights: [
                "Built and deployed end-to-end AI applications using NLP algorithms and Hugging Face pipelines.",
                "Integrated Streamlit for fast dashboarding and hosting prototype AI models.",
                "Created an interactive Toxic Comment Detection NLP model to classify online comments.",
                "Collaborated with IIIT Hyderabad researchers on optimizing model latency and memory usage.",
            ],
        },
        {
            role: "Full Stack Developer Intern",
            company: "BusyBrains.ai",
            location: "Remote, India",
            period: "Dec 2024 - Apr 2025",
            type: "Industry Internship",
            color: "from-purple-500 to-pink-500",
            highlights: [
                "Architected an enterprise CRM & Admin dashboard management platform.",
                "Designed high-performance GraphQL APIs for real-time lead and user queries.",
                "Implemented secure, granular Role-Based Access Control (RBAC) authorization layer.",
                "Built interactive analytics visualization widgets to tracking lead status metrics.",
                "Optimized frontend bundle size by lazy loading dashboard views, reducing initial chunk loads.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
            {/* Background decoration orbs */}
            <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-blue-600/5 dark:bg-blue-900/5 blur-[90px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
                    >
                        Work Experience
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        Professional internships exploring full-stack web builds, AI modules, and API design.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Timeline container */}
                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 md:ml-8 space-y-12">

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="relative pl-8 sm:pl-10 group"
                        >
                            {/* Timeline marker icon/orb */}
                            <div className="absolute -left-[17px] top-1 ml-[1px] p-2 rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                <Briefcase size={16} />
                            </div>

                            {/* Company Info Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200/50 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-500/20 mb-2">
                                        {exp.type}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-905 dark:text-white leading-tight">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mt-0.5">
                                        {exp.company}
                                    </h4>
                                </div>

                                <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-end gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin size={14} />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Highlights container card */}
                            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm group-hover:shadow-md group-hover:border-blue-500/20 transition-all duration-300">
                                <ul className="space-y-3">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                            <CheckCircle2 size={16} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

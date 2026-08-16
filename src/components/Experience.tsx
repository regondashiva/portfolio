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
            role: "Full Stack Developer Intern",
            company: "BusyBrains.ai",
            location: "Remote, India",
            period: "Mar 2026 – Jul 2026",
            type: "Industry Internship",
            color: "from-stone-800 to-stone-600",
            highlights: [
                "Contributed to a CRM application and admin panel used to streamline business operations and manage application workflows for internal teams.",
                "Built analytics dashboards with KPI tracking, search insights, and reporting features using Next.js, GraphQL, and TypeScript.",
                "Implemented role-based access control (RBAC) and secure authentication, and optimized API performance while collaborating in an Agile development team.",
            ],
        },
        {
            role: "AI Developer Intern",
            company: "VISWAM.AI (Swecha × IIIT Hyderabad)",
            location: "Hyderabad, India (Summer of AI 2025)",
            period: "May 2025 – Jul 2025",
            type: "Research & Development Internship",
            color: "from-stone-800 to-stone-600",
            highlights: [
                "Built and deployed AI applications using Python, Hugging Face, and Streamlit for real-time inference and interactive user experiences.",
                "Developed SocialHub, an AI-powered platform for multilingual toxic-comment detection using FastAPI, PyTorch, Transformers, and XLM-RoBERTa.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-transparent">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-950 dark:text-stone-50"
                    >
                        Experience
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        Professional internships exploring full-stack web builds, AI modules, and API design.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
                    />
                </div>

                {/* Timeline container */}
                <div className="relative border-l-2 border-stone-300 dark:border-stone-800 ml-4 sm:ml-6 md:ml-8 space-y-12">

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
                            <div className="absolute -left-[17px] top-1 ml-[1px] p-2 rounded-full border border-stone-300 bg-[#DDD9D2] dark:border-stone-700 dark:bg-[#141312] text-stone-700 dark:text-stone-300 group-hover:scale-110 group-hover:border-stone-900 dark:group-hover:border-stone-100 transition-all duration-300 shadow-sm">
                                <Briefcase size={16} />
                            </div>

                            {/* Company Info Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-200 text-stone-800 border border-stone-300 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-700 mb-2">
                                        {exp.type}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-stone-950 dark:text-stone-50 leading-tight">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-base font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5 mt-0.5">
                                        {exp.company}
                                    </h4>
                                </div>

                                <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-end gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
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
                            <div className="p-6 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm shadow-sm group-hover:shadow-md group-hover:border-stone-400 transition-all duration-300">
                                <ul className="space-y-3">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300">
                                            <CheckCircle2 size={16} className="text-stone-900 dark:text-stone-200 shrink-0 mt-0.5" />
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

"use client";

import React from "react";
import { Trophy, Award, Users, FileText, CheckCircle2, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
    title: string;
    category: string;
    meta: string;
    desc: string;
    icon: LucideIcon;
    color: string;
}

export default function Achievements() {
    const achievements: Achievement[] = [
        {
            title: "4th Place – TechSaavishkar National-Level Hackathon",
            category: "National Hackathon",
            meta: "Vasavi College of Engineering, 2026",
            desc: "Secured 4th place for building an AI-powered land registry fraud detection system using OCR and machine learning techniques.",
            icon: Trophy,
            color: "text-stone-900 bg-stone-900/10 dark:text-stone-100 dark:bg-stone-100/10",
        },
        {
            title: "Technical Paper Presentation Coordinator",
            category: "College Leadership",
            meta: "Samavarthan 2K26, MVSR",
            desc: "Served as Technical Paper Presentation Coordinator for Samavarthan 2K26 at Maturi Venkata Subba Rao Engineering College.",
            icon: FileText,
            color: "text-stone-900 bg-stone-900/10 dark:text-stone-100 dark:bg-stone-100/10",
        },
        {
            title: "Robotics Workshop Co-Coordinator",
            category: "Collaborative Workshop",
            meta: "Techfest, IIT Bombay (2025)",
            desc: "Co-coordinated a hands-on Robotics Workshop in collaboration with Techfest, IIT Bombay (2025).",
            icon: Users,
            color: "text-stone-900 bg-stone-900/10 dark:text-stone-100 dark:bg-stone-100/10",
        },
        {
            title: "Deloitte Data Analytics Job Simulation",
            category: "Industry Simulation",
            meta: "Forage (2025)",
            desc: "Completed the Deloitte Data Analytics Job Simulation on Forage — built interactive dashboards and analyzed business data using Tableau and Excel.",
            icon: Award,
            color: "text-stone-900 bg-stone-900/10 dark:text-stone-100 dark:bg-stone-100/10",
        },
        {
            title: "Machine Learning Using Python (NIELIT)",
            category: "Certification",
            meta: "NIELIT (January 2025)",
            desc: "Completed Machine Learning Using Python by NIELIT with hands-on experience in classification, regression, and clustering techniques.",
            icon: CheckCircle2,
            color: "text-stone-900 bg-stone-900/10 dark:text-stone-100 dark:bg-stone-100/10",
        },
    ];

    return (
        <section id="achievements" className="py-24 relative overflow-hidden bg-transparent">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-950 dark:text-stone-50"
                    >
                        Achievements & Leadership
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        Key milestones, hackathons, and coordinator capacities held at MVSR.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
                    />
                </div>

                {/* List of achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {achievements.map((ach, idx) => {
                        const Icon = ach.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-5 p-6 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm hover:border-stone-500 hover:shadow-lg transition-all duration-300 group shadow-sm"
                            >
                                <div className={`p-3.5 rounded-xl ${ach.color} shrink-0 h-fit group-hover:scale-110 transition-transform`}>
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                                        <span className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                                            {ach.category}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-600 hidden sm:inline" />
                                        <span className="text-xs font-mono font-medium text-stone-800 dark:text-stone-300">
                                            {ach.meta}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-stone-950 dark:text-stone-50 mb-2 leading-snug">
                                        {ach.title}
                                    </h3>
                                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                                        {ach.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

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
            title: "4th Place – TechSaavishkar National Hackathon",
            category: "Hackathon Award",
            meta: "National Level Standing",
            desc: "Designed and engineered an automated workflow solution, qualifying in the top 4 teams out of 200+ submissions across engineering colleges.",
            icon: Trophy,
            color: "text-amber-500 bg-amber-500/10",
        },
        {
            title: "Robotics Workshop Coordinator",
            category: "Leadership Role",
            meta: "MVSR Student Council",
            desc: "Organized and structured a hands-on robotics development training program for over 150+ students covering hardware controllers, sensor integrations, and Arduino logic.",
            icon: Users,
            color: "text-blue-500 bg-blue-500/10",
        },
        {
            title: "Technical Paper Presentation Coordinator",
            category: "Academic Leadership",
            meta: "College Tech Fest",
            desc: "Coordinated research paper sessions, managed evaluation rubrics, and worked with expert panels to moderate and catalog student technical papers.",
            icon: FileText,
            color: "text-indigo-500 bg-indigo-500/10",
        },
        {
            title: "Deloitte Data Analytics Job Simulation",
            category: "Practice Simulation",
            meta: "Forage Platform",
            desc: "Completed simulated data modeling, dashboard analysis, client insight reports, and SQL data queries representing Deloitte workflow processes.",
            icon: Award,
            color: "text-emerald-500 bg-emerald-500/10",
        },
        {
            title: "Machine Learning Using Python (NIELIT)",
            category: "Specialized Course",
            meta: "National Institute of Electronics & Information Technology",
            desc: "Underwent rigorous classroom training and project builds covering supervised learning, pandas scripting, regression, clustering models, and PyTorch introductory algorithms.",
            icon: CheckCircle2,
            color: "text-rose-500 bg-rose-500/10",
        },
    ];

    return (
        <section id="achievements" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
                    >
                        Achievements & Leadership
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        Key milestones, hackathons, and coordinator capacities held at MVSR.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
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
                                className="flex gap-5 p-6 rounded-2xl border border-slate-205 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm hover:border-blue-550/20 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300 group"
                            >
                                <div className={`p-3.5 rounded-xl ${ach.color} shrink-0 h-fit group-hover:scale-110 transition-transform`}>
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                            {ach.category}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:inline" />
                                        <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                                            {ach.meta}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                                        {ach.title}
                                    </h3>
                                    <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
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

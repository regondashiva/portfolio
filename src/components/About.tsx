"use client";

import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { GraduationCap, Award, Brain, Rocket, Code2, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const stats = [
        { label: "Internships Completed", end: 3, suffix: "+", icon: Code2, desc: "Working in real world" },
        { label: "Projects Delivered", end: 10, suffix: "+", icon: Rocket, desc: "AI, Fullstack & Analytics" },
        { label: "Academic CGPA", end: 8.7, decimals: 1, suffix: "", icon: GraduationCap, desc: "MVSR IT Department" },
        { label: "Hackathon Standing", end: 4, prefix: "", suffix: "th", icon: Award, desc: "TechSaavishkar National" },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
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
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Detailed Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                            Passionate about Building scalable web applications, AI-powered solutions, and data-driven products
                        </h3>

                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            I am currently pursuing my <strong>B.E in Information Technology</strong> at <strong>MVSR Engineering College</strong>. Driven by the philosophy of solving real-world challenges through code, I specialize in combining robust Full Stack engineering with the analytical capabilities of Artificial Intelligence and Data Analytics.
                        </p>

                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            My hands-on experience spans building responsive, secure applications, crafting natural language processing models, and visualising workflows for large-scale data systems. I enjoy researching and implementing solutions from database architecture to user interfaces.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0f172a]/60">
                                <Brain className="text-blue-500 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Artificial Intelligence</h4>
                                    <p className="text-xs text-slate-400">NLP & Transformers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0f172a]/60">
                                <Code2 className="text-indigo-500 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Full Stack</h4>
                                    <p className="text-xs text-slate-400">React, Next.js & Node</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0f172a]/60">
                                <BarChart2 className="text-purple-500 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Data Analytics</h4>
                                    <p className="text-xs text-slate-400">SQL, Power BI & Pandas</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats & college info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* MVSR Card */}
                        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/60 backdrop-blur-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/5 rounded-full blur-xl pointer-events-none" />
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">MVSR Engineering College</h4>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">B.E. Information Technology</p>
                                    <p className="text-sm text-slate-400 mt-2">Affiliated to Osmania University. Specializing in systems design, algorithms, database logic, and computing paradigms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors">
                                            <stat.icon size={18} />
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight">
                                        <AnimatedCounter
                                            end={stat.end}
                                            decimals={stat.decimals}
                                            prefix={stat.prefix}
                                            suffix={stat.suffix}
                                        />
                                    </h5>
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat.label}</p>
                                    <p className="text-[10px] text-slate-400 mt-1">{stat.desc}</p>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

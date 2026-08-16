"use client";

import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { GraduationCap, Award, Brain, Rocket, Code2, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const stats = [
        { label: "Internships Completed", end: 2, suffix: "", icon: Code2, desc: "Industry & Research" },
        { label: "Projects Delivered", end: 10, suffix: "+", icon: Rocket, desc: "AI, Fullstack & Analytics" },
        { label: "Academic CGPA", end: 8.7, decimals: 1, suffix: "", icon: GraduationCap, desc: "MVSR IT Department" },
        { label: "Hackathon Standing", end: 4, prefix: "", suffix: "th", icon: Award, desc: "TechSaavishkar National" },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-transparent">
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
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
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
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-snug">
                            Passionate about building scalable web applications, AI-powered solutions, and data-driven products.
                        </h3>

                        <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-base">
                            I am currently pursuing my <strong>B.E in Information Technology</strong> at <strong>MVSR Engineering College</strong>. Driven by the philosophy of solving real-world challenges through code, I specialize in combining robust Full Stack engineering with the analytical capabilities of Artificial Intelligence and Data Analytics.
                        </p>

                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
                            My hands-on experience spans building responsive, secure applications, crafting natural language processing models, and visualising workflows for large-scale data systems. I enjoy researching and implementing solutions from database architecture to user interfaces.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/80 dark:bg-[#1D1C1A]/80 shadow-sm">
                                <Brain className="text-stone-800 dark:text-stone-200 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Artificial Intelligence</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">NLP & Transformers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/80 dark:bg-[#1D1C1A]/80 shadow-sm">
                                <Code2 className="text-stone-800 dark:text-stone-200 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Full Stack</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">React, Next.js & Node</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/80 dark:bg-[#1D1C1A]/80 shadow-sm">
                                <BarChart2 className="text-stone-800 dark:text-stone-200 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Data Analytics</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">SQL, Power BI & Pandas</p>
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
                        <div className="p-6 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-md relative overflow-hidden shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">MVSR Engineering College</h4>
                                    <p className="text-sm font-semibold text-stone-600 dark:text-stone-400 mt-0.5">B.E. Information Technology</p>
                                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">Affiliated to Osmania University. Specializing in systems design, algorithms, database logic, and computing paradigms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm hover:border-stone-500 transition-all duration-300 group shadow-sm"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2.5 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-white group-hover:bg-stone-300 transition-colors">
                                            <stat.icon size={18} />
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50 mb-1 tracking-tight">
                                        <AnimatedCounter
                                            end={stat.end}
                                            decimals={stat.decimals}
                                            prefix={stat.prefix}
                                            suffix={stat.suffix}
                                        />
                                    </h5>
                                    <p className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">{stat.label}</p>
                                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">{stat.desc}</p>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

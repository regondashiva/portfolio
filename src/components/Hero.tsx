"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
            {/* SaaS Background Radial Glows */}
            <div className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-indigo-600/10 dark:bg-purple-600/10 blur-[80px] sm:blur-[125px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
                >
                    {/* Text Content */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Tag/Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 dark:border-blue-500/20 dark:bg-blue-950/20 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-6 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Open for Internships & Opportunities
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                        >
                            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-teal-400">Regonda Shiva</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-4 max-w-xl"
                        >
                            Full Stack Developer <span className="text-blue-500">|</span> AI Developer <span className="text-blue-500">|</span> Data Analytics Enthusiast
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed"
                        >
                            Information Technology student passionate about building scalable web applications, AI-powered solutions, and data-driven products.
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 focus:ring-2 focus:ring-blue-500"
                            >
                                View Projects
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-800/80"
                            >
                                Contact Me
                                <Mail size={16} />
                            </a>

                            <a
                                href="#" // Click to trigger dummy download
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-800/80"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Downloading Regonda Shiva's Resume (PDF)...");
                                }}
                            >
                                Resume
                                <Download size={16} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Image & Glow Frame */}
                    <div className="lg:col-span-5 flex justify-center items-center relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
                            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-3xl"
                        >
                            {/* Outer Border Glow Ring */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 p-[3px] shadow-2xl shadow-blue-500/10">
                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-500 via-purple-500 to-teal-500 blur-xl opacity-40 animate-pulse" />
                                <div className="w-full h-full rounded-[1.8rem] bg-white dark:bg-slate-950 overflow-hidden relative">
                                    <Image
                                        src="/profile.png"
                                        alt="Regonda Shiva"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 300px, 380px"
                                    />
                                </div>
                            </div>

                            {/* Floating Experience Stats badge */}
                            <div className="absolute -bottom-4 -left-4 sm:-left-8 glassmorphism dark:glassmorphism border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
                                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    <ArrowUpRight size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Internships</p>
                                    <p className="text-lg font-bold text-slate-800 dark:text-white">3+ Completed</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

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
            {/* Editorial Background Ambient Glows */}
            <div className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-stone-400/20 dark:bg-stone-800/20 blur-[90px] sm:blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-stone-500/15 dark:bg-stone-700/15 blur-[90px] sm:blur-[130px] pointer-events-none" />

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
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-400/60 bg-stone-200/80 dark:border-stone-700 dark:bg-stone-900/80 text-xs font-semibold tracking-wide uppercase text-stone-800 dark:text-stone-300 mb-6 backdrop-blur-sm shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-700 dark:bg-stone-300 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-900 dark:bg-stone-100"></span>
                            </span>
                            Open for Internships & Opportunities
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-2">
                            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-600 dark:text-stone-400">
                                Engineering & AI Portfolio
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.08] mb-6"
                        >
                            Regonda <span className="italic font-serif font-normal">Shiva</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl font-medium text-stone-800 dark:text-stone-300 mb-4 max-w-xl"
                        >
                            Full Stack Developer <span className="text-stone-400 dark:text-stone-600">/</span> AI Developer <span className="text-stone-400 dark:text-stone-600">/</span> Data Analytics
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-stone-600 dark:text-stone-400 mb-8 max-w-2xl leading-relaxed font-light"
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
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-950 text-stone-100 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-stone-400"
                            >
                                View Projects
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-200/60 dark:bg-stone-900/60 backdrop-blur-md text-stone-900 dark:text-stone-200 font-semibold text-sm transition-all duration-300 hover:bg-stone-300/80 dark:hover:bg-stone-800"
                            >
                                Contact Me
                                <Mail size={16} />
                            </a>

                            <a
                                href="/resume"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-200/60 dark:bg-stone-900/60 backdrop-blur-md text-stone-900 dark:text-stone-200 font-semibold text-sm transition-all duration-300 hover:bg-stone-300/80 dark:hover:bg-stone-800"
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
                            className="relative w-[280px] h-[370px] sm:w-[330px] sm:h-[430px] lg:w-[360px] lg:h-[460px] rounded-3xl"
                        >
                            {/* Outer Border Frame */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-stone-800/30 via-stone-400/20 to-transparent dark:from-stone-300/20 dark:via-stone-700/20 p-[2px] shadow-2xl">
                                <div className="w-full h-full rounded-[1.9rem] bg-stone-200 dark:bg-stone-900 overflow-hidden relative border border-stone-300/60 dark:border-stone-800">
                                    <Image
                                        src="/profile1.jpeg"
                                        alt="Regonda Shiva"
                                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 330px, 360px"
                                    />
                                </div>
                            </div>

                            {/* Floating Experience Stats badge */}
                            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#EAE6DF]/95 dark:bg-[#1D1C1A]/95 backdrop-blur-md border border-stone-300 dark:border-stone-800 p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
                                <div className="p-2.5 rounded-xl bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100">
                                    <ArrowUpRight size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400 tracking-wider">Internships</p>
                                    <p className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">2 Completed</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import React, { useState } from "react";
import { Layers, Server, Database, BarChart3, Binary, Wrench, ChevronRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
    name: string;
    level: number; // 0 to 100
}

interface SkillCategory {
    title: string;
    icon: LucideIcon;
    color: string; // Tailwind color class
    glow: string; // RGB/Hex for glow
    skills: Skill[];
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<number>(0);

    const categories: SkillCategory[] = [
        {
            title: "Frontend Development",
            icon: Layers,
            color: "from-stone-900 to-stone-700 dark:from-stone-200 dark:to-stone-400",
            glow: "rgba(26, 25, 24, 0.08)",
            skills: [
                { name: "React.js", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "JavaScript", level: 92 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Shadcn UI", level: 85 },
            ],
        },
        {
            title: "Backend Development",
            icon: Server,
            color: "from-stone-800 to-stone-600 dark:from-stone-300 dark:to-stone-500",
            glow: "rgba(26, 25, 24, 0.08)",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 88 },
                { name: "Django", level: 75 },
                { name: "FastAPI", level: 80 },
                { name: "GraphQL", level: 78 },
            ],
        },
        {
            title: "Databases",
            icon: Database,
            color: "from-stone-900 to-stone-700 dark:from-stone-200 dark:to-stone-400",
            glow: "rgba(26, 25, 24, 0.08)",
            skills: [
                { name: "PostgreSQL", level: 82 },
                { name: "MySQL", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "Firebase", level: 85 },
            ],
        },
        {
            title: "Data Analytics",
            icon: BarChart3,
            color: "from-stone-800 to-stone-600 dark:from-stone-300 dark:to-stone-500",
            glow: "rgba(26, 25, 24, 0.08)",
            skills: [
                { name: "SQL", level: 88 },
                { name: "Power BI", level: 70 },
                { name: "Pandas", level: 85 },
                { name: "NumPy", level: 80 },
                { name: "Excel", level: 90 },
            ],
        },
        {
            title: "AI / Machine Learning",
            icon: Binary,
            color: "from-stone-900 to-stone-700 dark:from-stone-200 dark:to-stone-400",
            glow: "rgba(26, 25, 24, 0.08)",
            skills: [
                { name: "Scikit-Learn", level: 80 },
                { name: "Transformers", level: 75 },
                { name: "PyTorch", level: 70 },
                { name: "Natural Language Processing", level: 78 },
                { name: "Hugging Face", level: 78 },
            ],
        },
        {
            title: "Development Tools",
            icon: Wrench,
            color: "from-stone-800 to-stone-600 dark:from-stone-300 dark:to-stone-500",
            glow: "rgba(26, 25, 24, 0.08)",
            skills: [
                { name: "Git", level: 90 },
                { name: "GitHub", level: 92 },
                { name: "Postman", level: 88 },
                { name: "VS Code", level: 95 },
                { name: "Figma", level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
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
                        Technical Capabilities
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        A comprehensive list of technologies, frameworks, and tools I work with.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
                    />
                </div>

                {/* Tab Layout for Mobile + Sidebar for Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Navigation Bar / Panel */}
                    <div className="lg:col-span-4 flex flex-row overflow-x-auto lg:overflow-x-visible lg:flex-col gap-3 py-2 scrollbar-none lg:pr-4">
                        {categories.map((category, idx) => {
                            const Icon = category.icon;
                            const isActive = idx === activeCategory;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCategory(idx)}
                                    className={`flex items-center gap-3.5 px-5 py-4 rounded-xl border text-left font-semibold text-sm transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink w-auto lg:w-full ${isActive
                                        ? "bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-md translate-x-0 lg:translate-x-2"
                                        : "bg-[#EAE6DF]/70 hover:bg-[#EAE6DF] dark:bg-[#1D1C1A]/70 dark:hover:bg-[#1D1C1A] text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-800"
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${isActive ? "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900" : "bg-stone-300/60 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                                        }`}>
                                        <Icon size={18} />
                                    </div>
                                    <span className="flex-1">{category.title}</span>
                                    <ChevronRight size={16} className={`hidden lg:block opacity-60 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Details Dashboard Panel */}
                    <div className="lg:col-span-8">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="h-full p-6 sm:p-8 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-md shadow-sm relative"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shadow-md`}>
                                    {React.createElement(categories[activeCategory].icon, { size: 24 })}
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-stone-950 dark:text-stone-50">
                                        {categories[activeCategory].title}
                                    </h3>
                                    <p className="text-sm text-stone-600 dark:text-stone-400">
                                        Proficiency breakdown & skills list
                                    </p>
                                </div>
                            </div>

                            {/* Skills grid with animated progress bar */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {categories[activeCategory].skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="space-y-2 group">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-stone-900 dark:text-stone-200 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Progress Bar background */}
                                        <div className="w-full h-2 rounded-full bg-stone-300 dark:bg-stone-800 overflow-hidden">
                                            {/* Interactive visual progress fill */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                                                className={`h-full rounded-full bg-stone-900 dark:bg-stone-100`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Visual Tech Mockup in bottom */}
                            <div className="mt-8 pt-6 border-t border-stone-300 dark:border-stone-800 flex justify-between items-center text-xs text-stone-500 dark:text-stone-400 font-mono">
                                <span>{"// engineering curriculum & production stack"}</span>
                                <span>status: verified</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

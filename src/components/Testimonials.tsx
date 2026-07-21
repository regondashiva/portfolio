"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
    quote: string;
    role: string;
    relation: string; // e.g. Intern Supervisor
}

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            quote: "Regonda was a standout engineering intern during his tenure at BusyBrains. He picked up our GraphQL stack in less than a week and went on to design an RBAC schema that resolved multiple security concerns in our CRM.",
            role: "Lead Systems Architect",
            relation: "Internship Supervisor at BusyBrains.ai",
        },
        {
            quote: "As a hackathon teammate, Shiva's data analytics depth and quick implementation of ML models were exactly why we clinched 4th place. He has an incredible work ethic and is an absolute pleasure to collaborate with.",
            role: "Software Architect",
            relation: "Teammate in TechSaavishkar Hackathon",
        },
        {
            quote: "Building NLP models on Hugging Face is challenging, but Shiva demonstrated a strong grasp of data preparation pipelines during his research stint at VISWAMAI. His Streamlit demo was polished and highly functional.",
            role: "Visiting Research Fellow",
            relation: "Mentor at VISWAMAI (Swecha × IIIT-H)",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-[#090d16]">
            {/* Background orbs */}
            <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

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
                        Recommendations & Peer Feedback
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        What mentors, leads, and teammates say about working with me.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0f172a]/20 backdrop-blur-sm relative"
                        >
                            {/* Quote Mark Decoration */}
                            <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-800/60 pointer-events-none">
                                <Quote size={40} />
                            </div>

                            <div>
                                {/* 5 stars */}
                                <div className="flex gap-1 mb-4 text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-sm italic text-slate-700 dark:text-slate-350 leading-relaxed mb-6 relative z-10">
                                    &ldquo;{test.quote}&rdquo;
                                </p>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                <p className="text-xs text-slate-550 dark:text-slate-400 font-medium">
                                    {test.role}
                                </p>
                                <span className="inline-block text-[10px] text-blue-600 dark:text-blue-400 mt-1 font-semibold uppercase tracking-wider font-mono">
                                    {test.relation}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

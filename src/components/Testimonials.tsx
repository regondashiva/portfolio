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
        <section className="py-24 relative overflow-hidden bg-transparent">
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
                        Endorsements & Feedback
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        What mentors, leads, and teammates say about working with me.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
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
                            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm relative shadow-sm"
                        >
                            {/* Quote Mark Decoration */}
                            <div className="absolute top-6 right-6 text-stone-300 dark:text-stone-800 pointer-events-none">
                                <Quote size={40} />
                            </div>

                            <div>
                                {/* 5 stars */}
                                <div className="flex gap-1 mb-4 text-stone-900 dark:text-stone-200">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-sm font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed mb-6 relative z-10">
                                    &ldquo;{test.quote}&rdquo;
                                </p>
                            </div>

                            <div className="border-t border-stone-300 dark:border-stone-800 pt-4">
                                <p className="text-xs text-stone-700 dark:text-stone-300 font-semibold">
                                    {test.role}
                                </p>
                                <span className="inline-block text-[10px] text-stone-500 dark:text-stone-400 mt-1 font-semibold uppercase tracking-wider font-mono">
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

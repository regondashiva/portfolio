"use client";

import React from "react";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    url: string;
}

export default function Certifications() {
    const certifications: Certificate[] = [
        {
            title: "Machine Learning Using Python",
            issuer: "National Institute of Electronics & Information Technology (NIELIT)",
            date: "Aug 2024",
            credentialId: "NIELIT/MLP/2024/9482",
            url: "#",
        },
        {
            title: "Data Analytics Job Simulation",
            issuer: "Deloitte / Forage Platform",
            date: "June 2024",
            credentialId: "FORAGE/DELOITTE/DA-7261",
            url: "#",
        },
        {
            title: "Full Stack Web Development Specialist",
            issuer: "BusyBrains Academy",
            date: "Nov 2024",
            credentialId: "BB/FSWD/2024/098b",
            url: "#",
        },
        {
            title: "PostgreSQL & Database Foundations",
            issuer: "CodeAcademy Certification",
            date: "Mar 2024",
            credentialId: "CA/POSTGRES-90112",
            url: "#",
        },
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-white dark:bg-[#090d16]">
            {/* Background decoration orbs */}
            <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] bg-blue-600/5 rounded-full blur-[70px] pointer-events-none" />

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
                        Certifications & Licenses
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        Credentials and academic badges acquired throughout my engineering studies.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((certs, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300 group"
                        >
                            <div>
                                {/* Header Icon */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <Award size={20} />
                                    </div>
                                    <ShieldCheck size={18} className="text-emerald-500 opacity-60" />
                                </div>

                                <h3 className="text-base font-bold text-slate-905 dark:text-white mb-2 leading-snug">
                                    {certs.title}
                                </h3>

                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                                    {certs.issuer}
                                </p>
                            </div>

                            <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-4 mt-4">
                                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-405 dark:text-slate-400 mb-2.5">
                                    <Calendar size={13} />
                                    <span>Issued: {certs.date}</span>
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">
                                        ID: {certs.credentialId}
                                    </span>

                                    <a
                                        href={certs.url}
                                        onClick={(e) => {
                                            if (certs.url === "#") {
                                                e.preventDefault();
                                                alert(`Opening certification link detail verification credential code: ${certs.credentialId}`);
                                            }
                                        }}
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Verify
                                        <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

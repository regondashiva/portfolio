"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Download, Mail, Phone, ExternalLink, MapPin, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#DDD9D2] dark:bg-[#141312] py-8 px-4 sm:px-6 font-sans transition-colors duration-300">
            {/* Top Toolbar */}
            <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
                >
                    <ArrowLeft size={14} />
                    Back to Portfolio
                </Link>

                <div className="flex gap-3">
                    <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-400 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 text-stone-900 dark:text-stone-100 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors shadow-sm"
                    >
                        <Printer size={14} />
                        Print / Save as PDF
                    </button>
                </div>
            </div>

            {/* Resume Document Paper Container */}
            <div className="max-w-4xl mx-auto bg-white text-stone-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-stone-300 font-sans print:shadow-none print:border-none print:p-0 print:m-0">
                {/* Header */}
                <header className="text-center border-b border-stone-300 pb-5 mb-6">
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-950 uppercase">
                        Regonda Shiva
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-2">
                        <span className="flex items-center gap-1">Hyderabad, India</span>
                        <span>|</span>
                        <a href="tel:+917093211385" className="hover:text-stone-900">+91 7093211385</a>
                        <span>|</span>
                        <a href="mailto:regondashiva2414@gmail.com" className="hover:text-stone-900">regondashiva2414@gmail.com</a>
                        <span>|</span>
                        <a href="https://linkedin.com/in/regonda-shiva-113a6229b" target="_blank" rel="noreferrer" className="text-stone-800 font-semibold hover:underline">LinkedIn</a>
                        <span>|</span>
                        <a href="https://github.com/regondashiva" target="_blank" rel="noreferrer" className="text-stone-800 font-semibold hover:underline">GitHub</a>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        Professional Summary
                    </h2>
                    <p className="text-xs text-stone-700 leading-relaxed">
                        Final-year Information Technology undergraduate and Full Stack Developer Intern with hands-on experience building production web applications, AI-powered tools, and data-driven dashboards. Proficient in React, Next.js, Node.js, FastAPI, Python, and SQL, with a track record of shipping features in Agile teams. Passionate about clean architecture, scalable systems, and solving real-world problems with data and AI.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        Technical Skills
                    </h2>
                    <div className="space-y-1 text-xs text-stone-800">
                        <p><strong className="font-semibold text-stone-950">Languages:</strong> Python, SQL, C, JavaScript, TypeScript, Go</p>
                        <p><strong className="font-semibold text-stone-950">Frontend:</strong> React.js, Next.js, HTML5/CSS3, Tailwind CSS, shadcn/ui</p>
                        <p><strong className="font-semibold text-stone-950">Backend:</strong> Node.js, Express.js, Django, REST APIs, GraphQL</p>
                        <p><strong className="font-semibold text-stone-950">Databases:</strong> PostgreSQL, MySQL, MongoDB, Firebase</p>
                        <p><strong className="font-semibold text-stone-950">Data & Tools:</strong> Power BI, Pandas, NumPy, Matplotlib, Scikit-learn, Excel, Git/GitHub, Figma, Postman</p>
                        <p><strong className="font-semibold text-stone-950">Platforms:</strong> PyCharm, Jupyter Notebook, VS Code</p>
                        <p><strong className="font-semibold text-stone-950">Soft Skills:</strong> Leadership, Teamwork, Time Management, Problem Solving, Communication</p>
                    </div>
                </section>

                {/* Work Experience */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-3 font-mono">
                        Work Experience
                    </h2>
                    
                    {/* Role 1 */}
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline text-xs mb-1">
                            <h3 className="font-bold text-stone-950">Full Stack Developer Intern — <span className="font-semibold text-stone-800">BusyBrains.ai</span></h3>
                            <span className="text-stone-500 font-mono text-[11px]">Mar 2026 – Jul 2026</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1">
                            <li>Contributed to a CRM application and admin panel used to streamline business operations and manage application workflows for internal teams.</li>
                            <li>Built analytics dashboards with KPI tracking, search insights, and reporting features using Next.js, GraphQL, and TypeScript.</li>
                            <li>Implemented role-based access control (RBAC) and secure authentication, and optimized API performance while collaborating in an Agile development team.</li>
                        </ul>
                    </div>

                    {/* Role 2 */}
                    <div>
                        <div className="flex justify-between items-baseline text-xs mb-1">
                            <h3 className="font-bold text-stone-950">AI Developer Intern — <span className="font-semibold text-stone-800">Summer of AI 2025, VISWAM.AI (Swecha × IIIT Hyderabad)</span></h3>
                            <span className="text-stone-500 font-mono text-[11px]">May 2025 – Jul 2025</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1">
                            <li>Built and deployed AI applications using Python, Hugging Face, and Streamlit for real-time inference and interactive user experiences.</li>
                            <li>Developed SocialHub, an AI-powered platform for multilingual toxic-comment detection using FastAPI, PyTorch, Transformers, and XLM-RoBERTa.</li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-3 font-mono">
                        Projects
                    </h2>

                    {/* Project 1 */}
                    <div className="mb-3">
                        <div className="flex justify-between items-baseline text-xs mb-0.5">
                            <h3 className="font-bold text-stone-950">SocialHub — AI-Powered Social Media Platform</h3>
                            <span className="text-stone-500 font-mono text-[11px]">2025</span>
                        </div>
                        <p className="text-[11px] text-stone-500 italic mb-1">React 18 · Vite · Node.js · Express · MongoDB · FastAPI · PyTorch · XLM-RoBERTa · Tailwind CSS</p>
                        <ul className="list-disc list-inside space-y-0.5 text-xs text-stone-700 pl-1">
                            <li>Built a full-stack social platform with JWT auth, real-time feed, posts, likes, comments, profiles, and follow network.</li>
                            <li>Engineered an AI multilingual toxicity detection system validating comments in real time across English, Hindi, Telugu, and Hinglish.</li>
                        </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="mb-3">
                        <div className="flex justify-between items-baseline text-xs mb-0.5">
                            <h3 className="font-bold text-stone-950">Bus Booking & Management System</h3>
                            <span className="text-stone-500 font-mono text-[11px]">2024</span>
                        </div>
                        <p className="text-[11px] text-stone-500 italic mb-1">React.js · Django · Django Channels · WebSockets · MySQL · QR Generator · Tailwind CSS</p>
                        <ul className="list-disc list-inside space-y-0.5 text-xs text-stone-700 pl-1">
                            <li>Developed a full-stack bus booking system with route search, interactive seat selection, and booking management.</li>
                            <li>Implemented real-time seat availability using Django Channels and WebSockets with QR-code ticket generation.</li>
                        </ul>
                    </div>

                    {/* Project 3 */}
                    <div>
                        <div className="flex justify-between items-baseline text-xs mb-0.5">
                            <h3 className="font-bold text-stone-950">RecruitAI — Resume Screening & Recruitment Analytics</h3>
                            <span className="text-stone-500 font-mono text-[11px]">2026</span>
                        </div>
                        <p className="text-[11px] text-stone-500 italic mb-1">Next.js 14 · React 18 · FastAPI · SQLAlchemy · MySQL 8.0 · spaCy · NLTK · Scikit-learn · TF-IDF</p>
                        <ul className="list-disc list-inside space-y-0.5 text-xs text-stone-700 pl-1">
                            <li>Developed an AI-powered ATS platform extracting candidate skills, education, and experience from PDF/DOCX using NLP.</li>
                            <li>Built candidate matching with TF-IDF and cosine similarity scoring alongside recruiter analytics dashboards.</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-3 font-mono">
                        Education
                    </h2>
                    
                    <div className="mb-2">
                        <div className="flex justify-between items-baseline text-xs">
                            <h3 className="font-bold text-stone-950">Maturi Venkata Subba Rao College of Engineering — <span className="font-normal">B.E., Information Technology</span></h3>
                            <span className="text-stone-500 font-mono text-[11px]">2023 – 2027</span>
                        </div>
                        <p className="text-xs font-semibold text-stone-800">CGPA: 8.69 / 10</p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline text-xs">
                            <h3 className="font-bold text-stone-950">Narayana Junior College</h3>
                            <span className="text-stone-500 font-mono text-[11px]">2021 – 2023</span>
                        </div>
                        <p className="text-xs font-semibold text-stone-800">Percentage: 96.5%</p>
                    </div>
                </section>

                {/* Achievements & Certifications */}
                <section>
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        Achievements & Certifications
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1">
                        <li>Secured <strong>4th place</strong> at the <strong>TechSaavishkar National-Level Hackathon</strong> (Vasavi College of Engineering, 2026) for an AI-powered land registry fraud detection system using OCR and machine learning.</li>
                        <li>Served as <strong>Technical Paper Presentation Coordinator</strong> for <em>Samavarthan 2K26</em> at MVSR Engineering College.</li>
                        <li>Co-coordinated a <strong>Robotics Workshop</strong> in collaboration with Techfest, IIT Bombay (2025).</li>
                        <li>Completed the <strong>Deloitte Data Analytics Job Simulation</strong> on Forage (2025) — built interactive dashboards and analyzed business data using Tableau and Excel.</li>
                        <li>Completed <strong>Machine Learning Using Python by NIELIT</strong> (January 2025) — hands-on experience with classification, regression, and clustering techniques.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

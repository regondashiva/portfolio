"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

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
            <div className="max-w-4xl mx-auto bg-white text-stone-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-stone-300 font-sans print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-full">
                {/* Header */}
                <header className="text-center border-b border-stone-300 pb-5 mb-6">
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-950 uppercase">
                        REGONDA SHIVA
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-stone-600 mt-2 font-medium">
                        <span>Hyderabad, India</span>
                        <span>|</span>
                        <a href="tel:+917093211385" className="hover:text-stone-950 hover:underline">+91 7093211385</a>
                        <span>|</span>
                        <a href="mailto:regondashiva2414@gmail.com" className="hover:text-stone-950 hover:underline">regondashiva2414@gmail.com</a>
                        <span>|</span>
                        <a href="https://linkedin.com/in/regonda-shiva-113a6229b" target="_blank" rel="noreferrer" className="text-stone-900 font-semibold hover:underline">LinkedIn</a>
                        <span>|</span>
                        <a href="https://github.com/regondashiva" target="_blank" rel="noreferrer" className="text-stone-900 font-semibold hover:underline">GitHub</a>
                        <span>|</span>
                        <Link href="/" className="text-stone-900 font-semibold hover:underline">Portfolio</Link>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-xs text-stone-700 leading-relaxed text-justify">
                        Final-year Information Technology undergraduate and Full Stack Developer Intern with hands-on experience building production web applications, AI-powered tools, and data-driven dashboards. Proficient in React, Next.js, Node.js, FastAPI, Python, and SQL, with a track record of shipping features in Agile teams. Passionate about clean architecture, scalable systems, and solving real-world problems with data and AI.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        TECHNICAL SKILLS
                    </h2>
                    <div className="space-y-1 text-xs text-stone-800">
                        <p><strong className="font-semibold text-stone-950">Languages:</strong> Python, SQL, C, JavaScript, TypeScript, Go</p>
                        <p><strong className="font-semibold text-stone-950">Frontend:</strong> React.js, Next.js, HTML5/CSS3, Tailwind CSS, shadcn/ui</p>
                        <p><strong className="font-semibold text-stone-950">Backend:</strong> Node.js, Express.js, Django, REST APIs, GraphQL</p>
                        <p><strong className="font-semibold text-stone-950">Databases:</strong> PostgreSQL, MySQL, MongoDB, Firebase</p>
                        <p><strong className="font-semibold text-stone-950">Data & Tools:</strong> Power BI, Pandas, NumPy, Matplotlib, Scikit-learn, Excel, Git/GitHub, Figma, Postman, Docker, AWS</p>
                        <p><strong className="font-semibold text-stone-950">AI Tools/Platforms:</strong> PyCharm, Jupyter Notebook, VS Code, antigravity, claude code, cursor, windsurf</p>
                        <p><strong className="font-semibold text-stone-950">Soft Skills:</strong> Leadership, Teamwork, Time Management, Problem Solving, Communication</p>
                    </div>
                </section>

                {/* Work Experience */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-3 font-mono">
                        WORK EXPERIENCE
                    </h2>
                    
                    {/* Role 1 */}
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline text-xs mb-1">
                            <h3 className="font-bold text-stone-950">Full Stack Developer Intern — <span className="font-semibold text-stone-800">BusyBrains.ai</span></h3>
                            <span className="text-stone-600 font-mono text-[11px]">Mar 2026 – Sep 2026</span>
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-stone-700">
                            <li>Contributed to a CRM application and admin panel used to streamline business operations and manage application workflows for internal teams.</li>
                            <li>Built analytics dashboards with KPI tracking, search insights, and reporting features using Next.js, GraphQL, and TypeScript.</li>
                            <li>Implemented role-based access control (RBAC) and secure authentication, and optimized API performance while collaborating in an Agile development team.</li>
                        </ul>
                    </div>

                    {/* Role 2 */}
                    <div>
                        <div className="flex justify-between items-baseline text-xs mb-1">
                            <h3 className="font-bold text-stone-950">AI Developer Intern — <span className="font-semibold text-stone-800">Summer of AI 2025, VISWAM.AI (Swecha × IIIT Hyderabad)</span></h3>
                            <span className="text-stone-600 font-mono text-[11px]">May 2025 – Jul 2025</span>
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-stone-700">
                            <li>Built and deployed AI applications using Python, Hugging Face, and Streamlit for real-time inference and interactive user experiences.</li>
                            <li>Developed SocialHub, an AI-powered platform for multilingual toxic-comment detection using FastAPI, PyTorch, Transformers, and XLM-RoBERTa.</li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-3 font-mono">
                        PROJECTS
                    </h2>

                    {/* Project 1 */}
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline text-xs mb-0.5">
                            <h3 className="font-bold text-stone-950">Event Security & Attendance System</h3>
                            <span className="text-stone-600 font-mono text-[11px]">2026</span>
                        </div>
                        <p className="text-[11px] text-stone-500 italic mb-1 font-mono">React.js · TypeScript · Node.js · Express.js · Prisma · JWT</p>
                        <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-700">
                            <li>Built a secure QR-based event entry and attendance system for Graduation Day (1,000+) and Orientation Day (1,800+) attendees, with eligibility verification against official student records.</li>
                            <li>Implemented real-time attendance monitoring, duplicate-entry prevention, role-based access, and server-side QR validation for administrators, coordinators, security staff, and students.</li>
                            <li>Secured the platform using JWT authentication, BCrypt hashing, cryptographically random QR tokens, and database-level uniqueness constraints.</li>
                        </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline text-xs mb-0.5">
                            <h3 className="font-bold text-stone-950">
                                SocialHub — AI-Powered Social Media Platform
                                <a href="https://social-hub-one-gamma.vercel.app/" target="_blank" rel="noreferrer" className="text-stone-600 hover:text-stone-950 font-normal ml-1 underline">| Link</a>
                            </h3>
                            <span className="text-stone-600 font-mono text-[11px]">2025</span>
                        </div>
                        <p className="text-[11px] text-stone-500 italic mb-1 font-mono">React.js · Node.js · Express · MongoDB · FastAPI · Transformers · PyTorch</p>
                        <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-700">
                            <li>Developed a full-stack social media platform with user profiles, posts, likes, comments, follow/unfollow, and personalized content feeds.</li>
                            <li>Built a multilingual AI-powered content moderation system using Transformer models to detect toxic comments across English, Hindi, Telugu, and Hinglish before database storage.</li>
                            <li>Integrated a FastAPI-based ML inference service with the Node.js backend, enabling real-time toxicity classification and automated rejection of harmful user-generated content.</li>
                        </ul>
                    </div>

                    {/* Project 3 */}
                    <div>
                        <div className="flex justify-between items-baseline text-xs mb-0.5">
                            <h3 className="font-bold text-stone-950">
                                Bus Booking System
                                <a href="https://bus-management-system-six.vercel.app" target="_blank" rel="noreferrer" className="text-stone-600 hover:text-stone-950 font-normal ml-1 underline">| Link</a>
                            </h3>
                            <span className="text-stone-600 font-mono text-[11px]">2024</span>
                        </div>
                        <p className="text-[11px] text-stone-500 italic mb-1 font-mono">React.js · Django · REST API · WebSockets</p>
                        <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-700">
                            <li>Developed a full-stack bus booking system with route search, seat selection, ticket booking, and booking management.</li>
                            <li>Implemented real-time seat availability using Django Channels and WebSockets, along with QR-code ticket generation and SMS notifications.</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-3 font-mono">
                        EDUCATION
                    </h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse border border-stone-400">
                            <thead>
                                <tr className="bg-[#1C4E80] text-white font-semibold">
                                    <th className="border border-stone-400 px-2.5 py-1.5 font-bold">Course</th>
                                    <th className="border border-stone-400 px-2.5 py-1.5 font-bold">Institute Name</th>
                                    <th className="border border-stone-400 px-2.5 py-1.5 font-bold">University Name</th>
                                    <th className="border border-stone-400 px-2.5 py-1.5 font-bold text-center whitespace-nowrap">Year of Passing</th>
                                    <th className="border border-stone-400 px-2.5 py-1.5 font-bold text-center whitespace-nowrap">Score Details (%/CGPA)</th>
                                    <th className="border border-stone-400 px-2.5 py-1.5 font-bold text-center whitespace-nowrap">Course Type</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-800 text-[11px]">
                                <tr className="hover:bg-stone-50">
                                    <td className="border border-stone-400 px-2.5 py-2 font-medium">10th (SSC)</td>
                                    <td className="border border-stone-400 px-2.5 py-2">Little Scholars High School, Talakondapally, Ranga Reddy District</td>
                                    <td className="border border-stone-400 px-2.5 py-2">Board of Secondary Education, Telangana State</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center">2021</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center font-semibold">10.0 CGPA</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center">Full-time</td>
                                </tr>
                                <tr className="hover:bg-stone-50">
                                    <td className="border border-stone-400 px-2.5 py-2 font-medium">12th (Intermediate)</td>
                                    <td className="border border-stone-400 px-2.5 py-2">Narayana Junior College, Bongulur, Ibrahimpatnam, R.R. Dist.</td>
                                    <td className="border border-stone-400 px-2.5 py-2">Telangana State Board of Intermediate Education</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center">2023</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center font-semibold">96.5%</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center">Full-time</td>
                                </tr>
                                <tr className="hover:bg-stone-50">
                                    <td className="border border-stone-400 px-2.5 py-2 font-medium">B.E., Information Technology</td>
                                    <td className="border border-stone-400 px-2.5 py-2">Maturi Venkata Subba Rao (MVSR) College of Engineering</td>
                                    <td className="border border-stone-400 px-2.5 py-2">Osmania University, Hyderabad</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center">2027 (Expected)</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center font-semibold">8.79 CGPA</td>
                                    <td className="border border-stone-400 px-2.5 py-2 text-center">Full-time</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Strong Subjects */}
                <section className="mb-6">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        STRONG SUBJECTS
                    </h2>
                    <p className="text-xs text-stone-800 leading-relaxed">
                        Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering
                    </p>
                </section>

                {/* Achievements & Certifications */}
                <section>
                    <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950 border-b border-stone-300 pb-1 mb-2 font-mono">
                        ACHIEVEMENTS & CERTIFICATIONS
                    </h2>
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-stone-700">
                        <li>
                            Secured <strong>4th place at the TechSaavishkar National-Level Hackathon</strong> (Vasavi College of Engineering, 2026) for an AI-powered land registry fraud detection system using OCR and machine learning.
                        </li>
                        <li>
                            Served as <strong>Technical Paper Presentation Coordinator for Samavarthan 2K26</strong> at MVSR Engineering College.
                        </li>
                        <li>
                            Co-coordinated a <strong>Robotics Workshop</strong> in collaboration with <strong>Techfest, IIT Bombay (2025)</strong>.
                        </li>
                        <li>
                            Completed <strong>Machine Learning Using Python by NIELIT (January 2025)</strong> — hands-on experience with classification, regression, and clustering techniques.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScrollTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b12] transition-colors py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <span className="font-mono text-sm font-bold text-slate-805 dark:text-white">
                            Regonda <span className="text-blue-600 dark:text-blue-500">Shiva</span>
                        </span>
                        <p className="text-xs text-slate-500 mt-2 font-medium">
                            &copy; {currentYear} Regonda Shiva. All rights reserved.
                        </p>
                    </div>

                    {/* Technology badges disclaimer */}
                    <div className="text-center text-xs text-slate-400 max-w-xs md:max-w-none">
                        Built using <span className="font-semibold text-slate-600 dark:text-slate-300">Next.js 15</span>, <span className="font-semibold text-slate-600 dark:text-slate-300">Tailwind CSS</span>, &amp; <span className="font-semibold text-slate-600 dark:text-slate-300">Framer Motion</span>.
                    </div>

                    {/* Socials & back to top */}
                    <div className="flex items-center gap-6">
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/regondashiva"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                                aria-label="GitHub Profile"
                            >
                                <GithubIcon size={18} />
                            </a>
                            <a
                                href="https://linkedin.com/in/regonda-shiva-113a6229b"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-blue-550 dark:hover:text-blue-400 transition-colors"
                                aria-label="LinkedIn Profile"
                            >
                                <LinkedinIcon size={18} />
                            </a>
                            <a
                                href="mailto:regondashiva2414@gmail.com"
                                className="text-slate-400 hover:text-blue-550 dark:hover:text-blue-400 transition-colors"
                                aria-label="Email Address"
                            >
                                <Mail size={18} />
                            </a>
                        </div>

                        <button
                            onClick={handleScrollTop}
                            className="p-2 sm:p-2.5 rounded-xl border border-slate-205 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-450 dark:text-slate-400 transition-all"
                            aria-label="Back to Top String"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
}

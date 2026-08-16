"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScrollTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-stone-300 dark:border-stone-800 bg-[#DDD9D2] dark:bg-[#141312] transition-colors py-10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Social links */}
                    <div className="flex items-center gap-4 order-2 sm:order-1">
                        <a
                            href="https://github.com/regondashiva"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl border border-stone-300 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <GithubIcon size={16} />
                        </a>
                        <a
                            href="https://linkedin.com/in/regonda-shiva-113a6229b"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl border border-stone-300 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedinIcon size={16} />
                        </a>
                        <a
                            href="mailto:regondashiva2414@gmail.com"
                            className="p-2 rounded-xl border border-stone-300 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
                            aria-label="Email Address"
                        >
                            <Mail size={16} />
                        </a>
                    </div>

                    {/* Center: Logo & Copyright */}
                    <div className="text-center flex flex-col items-center order-1 sm:order-2 gap-1.5">
                        <div className="flex items-center gap-2">
                            <BrandLogo size={24} />
                            <span className="font-serif text-lg font-bold text-stone-950 dark:text-stone-50">
                                Regonda <span className="font-sans font-normal text-stone-600 dark:text-stone-400">Shiva</span>
                            </span>
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 font-medium font-mono">
                            &copy; {currentYear} Regonda Shiva. All rights reserved.
                        </p>
                    </div>

                    {/* Back to top button */}
                    <div className="flex items-center justify-end order-3">
                        <button
                            onClick={handleScrollTop}
                            className="p-2.5 rounded-xl border border-stone-300 dark:border-stone-800 bg-white/80 hover:bg-white dark:bg-stone-900/80 dark:hover:bg-stone-900 text-stone-700 dark:text-stone-300 transition-all shadow-sm flex items-center gap-1.5 text-xs font-mono font-medium"
                            aria-label="Back to Top"
                        >
                            <span>Top</span>
                            <ArrowUp size={14} />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
}

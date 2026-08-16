"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Briefcase, User, Cpu, FolderGit2, Trophy, Award, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                setScrollProgress((window.scrollY / totalScroll) * 100);
            }

            // Check if scrolled past hero
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#about", icon: User },
        { name: "Skills", href: "#skills", icon: Cpu },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Projects", href: "#projects", icon: FolderGit2 },
        { name: "Achievements", href: "#achievements", icon: Trophy },
        { name: "Certifications", href: "#certifications", icon: Award },
        { name: "Contact", href: "#contact", icon: MessageSquare },
    ];

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div
                className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-stone-900 via-stone-600 to-stone-400 dark:from-stone-200 dark:via-stone-400 dark:to-stone-600 z-50 origin-left transition-all duration-100"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? "bg-[#DDD9D2]/85 dark:bg-[#141312]/85 backdrop-blur-md border-b border-stone-300/80 dark:border-stone-800/80 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#"
                            className="group flex items-center gap-2.5 font-serif text-lg font-bold tracking-wide text-stone-900 dark:text-stone-100"
                        >
                            <BrandLogo size={32} />
                            <span>Regonda <span className="font-sans font-normal text-stone-600 dark:text-stone-400">Shiva</span></span>
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-100 transition-colors relative group py-2"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-stone-900 dark:bg-stone-200 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-stone-200/70 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>

                        {/* Mobile Actions Container */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-stone-800 dark:text-stone-200"
                                aria-label="Toggle Mobile Menu"
                            >
                                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-b border-stone-300 dark:border-stone-800 bg-[#DDD9D2]/95 dark:bg-[#141312]/95 backdrop-blur-lg override-bg-mobile"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-stone-800 hover:bg-stone-200/60 dark:text-stone-200 dark:hover:bg-stone-800/50 font-medium transition-colors"
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Terminal, Briefcase, User, Cpu, FolderGit2, Trophy, Award, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 origin-left transition-all duration-100"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-slate-800 dark:text-white"
                        >
                            <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-500">
                                <Terminal size={18} />
                            </div>
                            <span>Regonda <span className="text-blue-600 dark:text-blue-500">Shiva</span></span>
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors relative group py-2"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all group-hover:w-full" />
                                </a>
                            ))}

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>

                        {/* Mobile Actions Container */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
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
                            className="md:hidden border-b border-gray-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-lg override-bg-mobile"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
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

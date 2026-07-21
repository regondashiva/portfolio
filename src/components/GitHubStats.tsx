"use client";

import React, { useEffect, useState } from "react";
import { GitBranch, GitPullRequest, GitCommit, FileCode2, ArrowUpRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/BrandIcons";

export default function GitHubStats() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const stats = [
        { label: "Total Contributions", value: "1,420+", icon: GitCommit, desc: "Yearly activity logs" },
        { label: "Project Repositories", value: "18", icon: FileCode2, desc: "Public repos" },
        { label: "Commit History", value: "840+", icon: GitBranch, desc: "Across all branches" },
        { label: "PRs & Merges", value: "45+", icon: GitPullRequest, desc: "Collaborative checks" },
    ];

    // Dummy monthly commits data for the chart
    const activityData = [
        { month: "Jan", commits: 65 },
        { month: "Feb", commits: 90 },
        { month: "Mar", commits: 140 },
        { month: "Apr", commits: 120 },
        { month: "May", commits: 195 },
        { month: "Jun", commits: 240 },
    ];

    const languages = [
        { name: "TypeScript", percentage: 40, color: "bg-blue-500" },
        { name: "JavaScript", percentage: 30, color: "bg-yellow-400" },
        { name: "Python (ML)", percentage: 20, color: "bg-green-500" },
        { name: "SQL & Analytics", percentage: 10, color: "bg-orange-500" },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
                    >
                        GitHub Activity & Metrics
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        Production code analytics and language distribution profiles.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">

                    {/* Quick Metrics */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {stats.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0f172a]/60 backdrop-blur-sm flex flex-col justify-between"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                        <item.icon size={18} />
                                    </div>
                                    <ArrowUpRight size={14} className="text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{item.value}</p>
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">{item.label}</p>
                                    <p className="text-[10px] text-slate-405 mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recharts Commit Chart (requires mounting check to block hydration mismatches) */}
                    <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-[#0f172a]/40 backdrop-blur-sm flex flex-col justify-between min-h-[300px]">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Commit Analytics</h3>
                                    <p className="text-xs text-slate-400">Trend of code contributions</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                                    <GithubIcon size={9} />
                                    <span>github.com/regondashiva</span>
                                </div>
                            </div>

                            {/* Chart container */}
                            <div className="h-[180px] w-full mt-4">
                                {mounted ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={activityData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis
                                                dataKey="month"
                                                stroke="#94a3b8"
                                                fontSize={10}
                                                tickLine={false}
                                                axisLine={false}
                                            />
                                            <YAxis
                                                stroke="#94a3b8"
                                                fontSize={10}
                                                tickLine={false}
                                                axisLine={false}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: "#0f172a",
                                                    border: "1px solid #1e293b",
                                                    borderRadius: "8px",
                                                    fontSize: "11px",
                                                    color: "#fff",
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="commits"
                                                stroke="#3b82f6"
                                                strokeWidth={2}
                                                fillOpacity={1}
                                                fill="url(#colorCommits)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                                        Loading dashboard...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Languages Breakdowns bar */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0f172a]/20 backdrop-blur-sm">
                    <h4 className="text-sm font-bold text-slate-850 dark:text-white mb-4">Linguistic Profile (Codebase Breakdown)</h4>
                    <div className="flex h-3 w-full rounded-full overflow-hidden mb-6 bg-slate-205 dark:bg-slate-800">
                        {languages.map((lang) => (
                            <div
                                key={lang.name}
                                className={`${lang.color} h-full`}
                                style={{ width: `${lang.percentage}%` }}
                                title={`${lang.name}: ${lang.percentage}%`}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {languages.map((lang) => (
                            <div key={lang.name} className="flex items-center gap-3">
                                <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                                <div>
                                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{lang.name}</p>
                                    <p className="text-[10px] text-slate-400 font-medium">{lang.percentage}% of workspace</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

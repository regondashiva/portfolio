"use client";

import React, { useState } from "react";
import { GitBranch, GitPullRequest, GitCommit, FileCode2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/BrandIcons";

export default function GitHubStats() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const stats = [
        { label: "Total Contributions", value: "1,420+", icon: GitCommit, desc: "Yearly activity logs" },
        { label: "Project Repositories", value: "18", icon: FileCode2, desc: "Public repos" },
        { label: "Commit History", value: "840+", icon: GitBranch, desc: "Across all branches" },
        { label: "PRs & Merges", value: "45+", icon: GitPullRequest, desc: "Collaborative checks" },
    ];

    // Monthly commits data for the chart
    const activityData = [
        { month: "Jan", commits: 65 },
        { month: "Feb", commits: 90 },
        { month: "Mar", commits: 140 },
        { month: "Apr", commits: 120 },
        { month: "May", commits: 195 },
        { month: "Jun", commits: 240 },
    ];

    const languages = [
        { name: "TypeScript", percentage: 40, color: "bg-stone-900 dark:bg-stone-100" },
        { name: "JavaScript", percentage: 30, color: "bg-stone-700 dark:bg-stone-300" },
        { name: "Python (ML)", percentage: 20, color: "bg-stone-500 dark:bg-stone-500" },
        { name: "SQL & Analytics", percentage: 10, color: "bg-stone-400 dark:bg-stone-600" },
    ];

    // SVG dimensions
    const maxVal = 260;
    const svgWidth = 500;
    const svgHeight = 150;
    const paddingX = 30;
    const paddingY = 20;

    const points = activityData.map((d, i) => {
        const x = paddingX + (i / (activityData.length - 1)) * (svgWidth - paddingX * 2);
        const y = svgHeight - paddingY - (d.commits / maxVal) * (svgHeight - paddingY * 2);
        return { x, y, ...d };
    });

    const pathD = points.reduce((acc, p, i) => {
        if (i === 0) return `M ${p.x} ${p.y}`;
        const prev = points[i - 1];
        const cpX1 = prev.x + (p.x - prev.x) / 2;
        const cpY1 = prev.y;
        const cpX2 = prev.x + (p.x - prev.x) / 2;
        const cpY2 = p.y;
        return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p.x} ${p.y}`;
    }, "");

    const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingY} L ${points[0].x} ${svgHeight - paddingY} Z`;

    return (
        <section id="github" className="py-24 relative overflow-hidden bg-transparent">
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
                        Activity & Metrics
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        Production code contributions, analytics, and repository distribution.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
                    />
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">

                    {/* Quick Metrics */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {stats.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm flex flex-col justify-between shadow-sm"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 rounded-lg bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100">
                                        <item.icon size={18} />
                                    </div>
                                    <ArrowUpRight size={14} className="text-stone-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50 tracking-tight">{item.value}</p>
                                    <p className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mt-1">{item.label}</p>
                                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Commit Chart */}
                    <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm flex flex-col justify-between min-h-[300px] shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-base font-serif font-bold text-stone-950 dark:text-stone-50">Commit Analytics</h3>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">Trend of code contributions</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-stone-700 dark:text-stone-300 font-mono bg-stone-200 dark:bg-stone-800 px-3 py-1 rounded-lg">
                                    <GithubIcon size={12} />
                                    <span>github.com/regondashiva</span>
                                </div>
                            </div>

                            {/* Native SVG responsive area chart */}
                            <div className="w-full relative mt-2">
                                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-[180px] overflow-visible">
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="currentColor" className="text-stone-900 dark:text-stone-200" stopOpacity="0.25" />
                                            <stop offset="100%" stopColor="currentColor" className="text-stone-900 dark:text-stone-200" stopOpacity="0.0" />
                                        </linearGradient>
                                    </defs>

                                    {/* Grid Lines */}
                                    <line x1={paddingX} y1={svgHeight - paddingY} x2={svgWidth - paddingX} y2={svgHeight - paddingY} stroke="currentColor" className="text-stone-300 dark:text-stone-800" strokeWidth="1" />
                                    <line x1={paddingX} y1={(svgHeight - paddingY) / 2} x2={svgWidth - paddingX} y2={(svgHeight - paddingY) / 2} stroke="currentColor" className="text-stone-300/60 dark:text-stone-800/60" strokeDasharray="3 3" strokeWidth="1" />

                                    {/* Area Fill */}
                                    <path d={areaD} fill="url(#areaGradient)" />

                                    {/* Line Stroke */}
                                    <path d={pathD} fill="none" stroke="currentColor" className="text-stone-900 dark:text-stone-100" strokeWidth="2.5" strokeLinecap="round" />

                                    {/* Interactive Data Points */}
                                    {points.map((p, i) => (
                                        <g key={i} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} className="cursor-pointer">
                                            <circle
                                                cx={p.x}
                                                cy={p.y}
                                                r={hoveredIdx === i ? 6 : 4}
                                                className="fill-stone-900 dark:fill-stone-100 stroke-stone-100 dark:stroke-stone-900 transition-all duration-200"
                                                strokeWidth="2"
                                            />
                                            {/* X-axis Label */}
                                            <text x={p.x} y={svgHeight - 4} textAnchor="middle" className="text-[10px] fill-stone-500 dark:fill-stone-400 font-mono">
                                                {p.month}
                                            </text>
                                        </g>
                                    ))}
                                </svg>

                                {/* Tooltip display on hover */}
                                {hoveredIdx !== null && (
                                    <div
                                        className="absolute -top-3 p-2 rounded-lg bg-stone-950 text-stone-100 text-xs font-mono shadow-xl pointer-events-none transform -translate-x-1/2 transition-all duration-150"
                                        style={{
                                            left: `${(points[hoveredIdx].x / svgWidth) * 100}%`,
                                        }}
                                    >
                                        <p className="font-bold">{points[hoveredIdx].commits} commits</p>
                                        <p className="text-[10px] text-stone-400">{points[hoveredIdx].month}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Languages Breakdowns bar */}
                <div className="p-6 rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#EAE6DF]/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm shadow-sm">
                    <h4 className="text-sm font-serif font-bold text-stone-950 dark:text-stone-50 mb-4">Linguistic Profile (Codebase Breakdown)</h4>
                    <div className="flex h-3 w-full rounded-full overflow-hidden mb-6 bg-stone-300 dark:bg-stone-800">
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
                                    <p className="text-xs font-bold text-stone-800 dark:text-stone-200">{lang.name}</p>
                                    <p className="text-[10px] text-stone-500 dark:text-stone-400 font-medium">{lang.percentage}% of workspace</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

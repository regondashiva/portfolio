"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [warningNotice, setWarningNotice] = useState<string | null>(null);

    const contactDetails = [
        {
            label: "Email Address",
            value: "regondashiva2414@gmail.com",
            href: "mailto:regondashiva2414@gmail.com",
            icon: Mail,
            color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        },
        {
            label: "Phone Number",
            value: "+91 7093211385",
            href: "tel:+917093211385",
            icon: Phone,
            color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
        },
        {
            label: "LinkedIn Professional Profile",
            value: "regonda-shiva-113a6229b",
            href: "https://linkedin.com/in/regonda-shiva-113a6229b",
            icon: LinkedinIcon,
            color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        },
        {
            label: "GitHub Repositories",
            value: "github.com/regondashiva",
            href: "https://github.com/regondashiva",
            icon: GithubIcon,
            color: "bg-slate-500/10 text-slate-800 dark:text-slate-200 border-slate-500/20",
        },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setWarningNotice(null);

        if (!formState.name || !formState.email || !formState.message) {
            alert("Please fill all form fields.");
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState),
            });

            const data = await res.json();

            if (res.ok) {
                if (data.warning === "API Key Missing") {
                    setWarningNotice("Developer setup note: The database/email route is functioning successfully, but your RESEND_API_KEY environment variable is not defined locally yet. Set it in .env.local to route notifications directly to your email inbox.");
                }
                setSubmitSuccess(true);
                setFormState({ name: "", email: "", message: "" });
            } else {
                throw new Error(data.error || "Failed to send message.");
            }
        } catch (err: unknown) {
            const errMsg = err instanceof Error ? err.message : "An unexpected error occurred. Please trigger contact options directly.";
            setSubmitError(errMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
            <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

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
                        Get In Touch
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2.5">
                        Feel free to submit a message, query, or invitation for collaboration.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* Contact Details Grid */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-850 dark:text-white">Contact Channels</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                You can reach out directly via mail or telephone, or connect through social links.
                            </p>
                        </div>

                        <div className="space-y-4 flex-grow mt-6">
                            {contactDetails.map((channel, idx) => {
                                const Icon = channel.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={channel.href}
                                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noreferrer"
                                        className="flex items-center gap-4.5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0f172a]/40 backdrop-blur-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className={`p-3 rounded-lg border ${channel.color} shrink-0 group-hover:scale-105 transition-transform`}>
                                            <Icon size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold font-mono">{channel.label}</p>
                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate mt-0.5">{channel.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Interactive Form */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0f172a]/60 backdrop-blur-md shadow-lg relative overflow-hidden">

                            <AnimatePresence>
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 bg-white dark:bg-[#0f172a] z-20 flex flex-col items-center justify-center p-6 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                                            <CheckCircle2 size={36} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {warningNotice ? "Form Received (Demo Mode)" : "Message Sent Successfully!"}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                                            {warningNotice || "Thank you for reaching out, Regonda Shiva will respond to your email as soon as possible."}
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitSuccess(false);
                                                setWarningNotice(null);
                                            }}
                                            className="mt-6 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="form-name" className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="form-name"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-slate-800 dark:text-white transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="form-email" className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                                        E-mail Address
                                    </label>
                                    <input
                                        id="form-email"
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-slate-800 dark:text-white transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="form-msg" className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="form-msg"
                                        rows={4}
                                        required
                                        placeholder="Describe your project, role opportunity, or question..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-slate-800 dark:text-white transition-all outline-none resize-none"
                                    />
                                </div>

                                {submitError && (
                                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center gap-2">
                                        <AlertCircle size={16} />
                                        <span>{submitError}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold text-sm transition-all duration-300 font-sans cursor-pointer hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span>Sending message...</span>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

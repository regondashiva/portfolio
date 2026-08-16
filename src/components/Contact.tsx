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

    const contactDetails = [
        {
            label: "Email Address",
            value: "regondashiva2414@gmail.com",
            href: "mailto:regondashiva2414@gmail.com",
            icon: Mail,
            color: "bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100 border-stone-400/30",
        },
        {
            label: "Phone Number",
            value: "+91 7093211385",
            href: "tel:+917093211385",
            icon: Phone,
            color: "bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100 border-stone-400/30",
        },
        {
            label: "LinkedIn Professional Profile",
            value: "regonda-shiva-113a6229b",
            href: "https://linkedin.com/in/regonda-shiva-113a6229b",
            icon: LinkedinIcon,
            color: "bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100 border-stone-400/30",
        },
        {
            label: "GitHub Repositories",
            value: "github.com/regondashiva",
            href: "https://github.com/regondashiva",
            icon: GithubIcon,
            color: "bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100 border-stone-400/30",
        },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

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

            if (res.ok && data.success) {
                setSubmitSuccess(true);
                setFormState({ name: "", email: "", message: "" });
            } else {
                throw new Error(data.error || "Failed to deliver message. Please use the direct email link below.");
            }
        } catch (err: unknown) {
            const errMsg = err instanceof Error ? err.message : "An unexpected error occurred. Please contact regondashiva2414@gmail.com directly.";
            setSubmitError(errMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
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
                        Get In Touch
                    </motion.h2>
                    <p className="text-stone-600 dark:text-stone-400 mt-2.5">
                        Feel free to submit a message, query, or invitation for collaboration.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-[2px] bg-stone-900 dark:bg-stone-200 mx-auto mt-4"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* Contact Details Grid */}
                    <div className="lg:col-span-5 flex flex-col justify-start gap-6">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50">Direct Channels</h3>
                            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                                You can reach out directly via email, phone, or connect through professional networks.
                            </p>
                        </div>

                        <div className="space-y-4 mt-2">
                            {contactDetails.map((channel, idx) => {
                                const Icon = channel.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={channel.href}
                                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noreferrer"
                                        className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-stone-300 dark:border-stone-800 bg-white/90 dark:bg-[#1D1C1A]/90 backdrop-blur-sm hover:border-stone-600 dark:hover:border-stone-500 hover:shadow-md transition-all duration-300 group shadow-sm"
                                    >
                                        <div className="p-3.5 rounded-xl bg-stone-900/10 text-stone-900 dark:bg-stone-100/10 dark:text-stone-100 border border-stone-400/20 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                                            <Icon size={20} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
                                                {channel.label}
                                            </p>
                                            <p className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 truncate mt-0.5">
                                                {channel.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Interactive Form */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-8 rounded-2xl border border-stone-300 dark:border-stone-800 bg-white/90 dark:bg-[#1D1C1A]/90 backdrop-blur-md shadow-md relative overflow-hidden">

                            <AnimatePresence>
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 bg-white dark:bg-[#1D1C1A] z-20 flex flex-col items-center justify-center p-6 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20 shadow-sm">
                                            <CheckCircle2 size={36} />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50 mb-2">
                                            Message Sent Successfully!
                                        </h3>
                                        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-sm leading-relaxed mb-6">
                                            Thank you for reaching out. Your message has been delivered directly to Shiva&apos;s email inbox.
                                        </p>
                                        <div className="flex flex-wrap items-center justify-center gap-3">
                                            <button
                                                onClick={() => {
                                                    setSubmitSuccess(false);
                                                }}
                                                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-950 text-stone-100 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 text-xs font-semibold shadow-sm transition-all"
                                            >
                                                Send Another Message
                                            </button>
                                            <a
                                                href="mailto:regondashiva65@gmail.com"
                                                className="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-all"
                                            >
                                                Direct Mail App
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="form-name"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:ring-2 focus:ring-stone-500 dark:focus:ring-stone-400 focus:border-stone-500 text-sm transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-2">
                                        E-mail Address
                                    </label>
                                    <input
                                        id="form-email"
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:ring-2 focus:ring-stone-500 dark:focus:ring-stone-400 focus:border-stone-500 text-sm transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="form-msg" className="block text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="form-msg"
                                        rows={4}
                                        required
                                        placeholder="Describe your project, role opportunity, or question..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:ring-2 focus:ring-stone-500 dark:focus:ring-stone-400 focus:border-stone-500 text-sm transition-all outline-none resize-none"
                                    />
                                </div>

                                {submitError && (
                                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs flex items-center gap-2">
                                        <AlertCircle size={16} />
                                        <span>{submitError}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900 hover:bg-stone-950 disabled:bg-stone-800 text-stone-100 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 font-semibold text-sm transition-all duration-300 font-sans cursor-pointer shadow-md hover:shadow-lg mt-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span>Sending message...</span>
                                            <div className="w-4 h-4 border-2 border-stone-400 border-t-transparent rounded-full animate-spin" />
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

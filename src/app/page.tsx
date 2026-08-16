import React from "react";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import GitHubStats from "@/components/GitHubStats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#DDD9D2] dark:bg-[#141312] selection:bg-[#1A1918] selection:text-[#DDD9D2] dark:selection:bg-[#DDD9D2] dark:selection:text-[#141312] text-stone-900 dark:text-stone-100 overflow-x-hidden font-sans transition-colors duration-300">

      {/* Background Interactive Cursor Glow */}
      <CursorGlow />

      {/* Header Sticky Navbar */}
      <Navbar />

      {/* Main Layout Sections */}
      <main className="relative">
        {/* Hero Welcome banner */}
        <Hero />

        {/* Professional stats, introduction, education */}
        <About />

        {/* Technical stack & skill breakdown gauges */}
        <Skills />

        {/* Chronological work experience timeline */}
        <Experience />

        {/* Interactive project cards & visual UI previews */}
        <Projects />

        {/* Academic hackathons accomplishments & leadership */}
        <Achievements />

        {/* Courses & verified credential cards */}
        <Certifications />

        {/* Dynamic Activity Charts and metrics */}
        <GitHubStats />

        {/* Professional placeholder testimonials */}
        <Testimonials />

        {/* Contact info cards & validation form fields */}
        <Contact />
      </main>

      {/* Footer copyright, references & navigation reminders */}
      <Footer />

    </div>
  );
}

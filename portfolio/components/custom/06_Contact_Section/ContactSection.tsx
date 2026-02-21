"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#020617] py-32 px-6 overflow-hidden"
    >
      {/* --- THE SUBTLE GLOBAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 1. The Base Depth */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* 2. The Micro-Dot Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* 3. The Slow-Motion Aurora Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[120px]"
        />

        {/* 4. The Edge Fade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4"
          >
            Available for new opportunities
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Let&apos;s build{" "}
            <span className="text-slate-500">something amazing.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg font-light"
          >
            Have a project in mind or just want to say hi? Feel free to reach
            out. I&apos;m currently accepting new freelance projects and
            technical consultations.
          </motion.p>
        </motion.div>

        {/* DIRECT FORM RENDER */}
        <ContactForm />
      </div>
    </section>
  );
}

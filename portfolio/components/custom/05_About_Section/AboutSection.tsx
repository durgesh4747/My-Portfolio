"use client";

import { motion, Variants } from "framer-motion";
import {
  FiDatabase,
  FiCpu,
  FiMapPin,
} from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const [isClicked,setIsClicked]=useState(false);
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-slate-950 py-32 px-6 relative overflow-hidden flex items-center"
    >
      {/* 1. AMBIENT BACKGROUND */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none opacity-50" />
      {/* Subtle Grid pattern behind everything */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* === LEFT SIDE: VISUAL ARCHITECTURE (5 Columns) === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* LAYER A: The Photo "Hardware" */}
          <motion.div
            variants={itemVariants}
            onClick={() => setIsClicked(!isClicked)}
            className=" relative z-10 h-[450px] w-full rounded-[3rem] overflow-hidden border-2 border-slate-800/80 bg-slate-950 group" 
          >
            <Image
              // REPLACE WITH YOUR PHOTO
              src="https://images.pexels.com/photos/35031430/pexels-photo-35031430.jpeg"
              alt="Aditya - System Architect"
              fill
              className={`${isClicked?`grayscale-0`:`grayscale`} object-cover group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100`}
            />
          </motion.div>

          {/* LAYER B: The Floating "Data Node" (Overlaps photo) */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-10 -right-10 z-20 w-54 h-54 md:w-64 md:h-64 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full p-6 flex flex-col justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
          >
            <div className="text-center mb-4">
              <FiCpu className="inline-block text-3xl text-cyan-500 mb-2 animate-pulse" />
              <h4 className="text-white font-bold text-xl">System Core</h4>
              <p className="text-xs text-slate-500 font-mono">
                Durgesh :: Age 19
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                  Focus
                </p>
                <p className="text-white font-mono text-sm flex items-center justify-center gap-1">
                  <FiDatabase className="text-cyan-500 size-3" /> Backend
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                  Base
                </p>
                <p className="text-white font-mono text-sm flex items-center justify-center gap-1">
                  <FiMapPin className="text-cyan-500 size-3" /> India
                </p>
              </div>
            </div>
            {/* Spinning border decoration */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
          </motion.div>

          {/* LAYER C: Decorative Backdrop Element */}
          <div className="absolute top-10 -left-10 w-full h-full border border-slate-800/50 rounded-[3rem] -z-10" />
        </motion.div>

        {/* === RIGHT SIDE: THE NARRATIVE (7 Columns) === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-7 pl-0 lg:pl-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-[2px] bg-cyan-500"></span>
            <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em]">
              About The Architect
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none tracking-tight"
          >
            Engineering logic, <br /> not just{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-500 to-white">
              writing code.
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-slate-400 text-lg leading-relaxed mb-12"
          >
            <p className="first-letter:text-3xl first-letter:text-white first-letter:font-bold first-letter:mr-1">
              I’m a 19-year-old developer who prefers the terminal over the
              browser. While others focus on pixel-pushing, I focus on data
              structures, API efficiency, and system scalability.
            </p>
            <p>
              My approach is simple: **Backend First.** I believe a beautiful
              interface is useless without a robust engine. I build secure,
              type-safe infrastructures using the modern Next.js ecosystem.
            </p>
            <p>
              Currently advancing my knowledge in{" "}
              <span className="text-white font-medium border-b border-cyan-500/30">
                Computer Science
              </span>
              , treating every project as a production-level deployment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

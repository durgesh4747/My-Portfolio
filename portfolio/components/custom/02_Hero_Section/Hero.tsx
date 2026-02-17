"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-28"
    >
      {/* 1. THE CONE SPOTLIGHT (Refined Opacity) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.3) 0%, transparent 65%)",
          clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* 2. TYPOGRAPHY & INTRO */}
      <div className="relative z-10 text-center px-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6"
        >
          Building Scalable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
            Digital Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto max-w-2xl text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10"
        >
          Specializing in{" "}
          <span className="text-white">high-integrity architecture</span> and
          performant web logic. I turn complex technical debt into clean,
          scalable, and maintainable production systems.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#vault"
            className="group px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-sm transition-all hover:bg-cyan-400 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center gap-2"
          >
            Access_Project_Vault{" "}
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-800 bg-slate-900/40 text-white font-bold text-sm hover:bg-slate-800 transition-all"
          >
            Get a Look at my Services
          </a>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        {/* Grid Pattern - Move this inside your Hero Section, at the very bottom */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <div className="h-full w-full bg-[size:60px_60px] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]" />
        </div>
      </div>
    </section>
  );
}

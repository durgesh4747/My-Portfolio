"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FiArrowRight,
  FiTerminal,
  FiSearch,
  FiLayers,
  FiCode,
  FiTarget,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const fullLog = [
      "Establishing secure connection...",
      "Loading project environment...",
      "Routing traffic protocols...",
      "Architecture verified.",
      "Status: READY FOR DEPLOYMENT.",
      "Post-launch support: Active.",
    ];

    fullLog.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
      }, 700 * i);
    });
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const el = document.getElementById(id);

    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });

    history.pushState(null, "", `#${id}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh w-full flex items-center justify-center bg-[#020617] overflow-hidden pt-24 pb-12 px-4 sm:px-6"
    >
      {/*  Ambient bg  */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-glow cyan" />

        <div className="ambient-glow blue" />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zz48cGF0aCBkPSJNMTAgMTBoMjB2MjBIMTB6IiBmaWxsPSIjMWUyOTNiIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
      >
        {/* LEFT */}

        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6"
          >
            I build software that{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              scales.
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="max-w-xl text-slate-400 text-lg leading-relaxed mb-10 mx-auto lg:mx-0"
          >
            Hi, I&apos;m Durgesh. A Software Architect specializing in
            high-performance web applications.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#vault"
              onClick={(e) => handleScroll(e, "vault")}
              className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 active:scale-95 flex items-center gap-2"
            >
              <FiTerminal />
              View_Work
            </a>

            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-300 font-bold hover:text-white hover:bg-slate-800"
            >
              See How I Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <div className="lg:col-span-5 grid gap-4">
          {/* TERMINAL */}

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-5 flex flex-col h-56"
          >
            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs mb-3">
              <FiTerminal /> server_log.sh
            </div>

            <div className="flex-1 font-mono text-xs text-cyan-500/80 flex flex-col gap-1 overflow-y-auto">
              {terminalLines.map((line, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-slate-600">❯</span>

                  {line}
                </div>
              ))}
            </div>
          </motion.div>

          {/* WORKFLOW */}

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 flex flex-col h-40 md:h-48 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
          >
            <div className="text-slate-400 font-mono text-[10px] md:text-xs flex items-center gap-2 mb-2">
              <FiTarget className="text-blue-400" /> Proven Workflow
            </div>

            <div className="relative flex-1 flex items-center justify-between px-2 md:px-6 mt-2">
              {/* bg line */}
              <div className="workflow-line">
              <div className="workflow-packet" />
              </div>

              {[
                { icon: <FiSearch size={16} />, label: "Discover" },
                { icon: <FiLayers size={16} />, label: "Architect" },
                { icon: <FiCode size={16} />, label: "Build" },
                { icon: <FaRocket size={16} />, label: "Deliver" },
              ].map((node, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center gap-3"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-slate-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                    {node.icon}
                  </div>

                  <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-wider">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

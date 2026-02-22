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
      "Post-launch support: Active."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullLog.length) {
        setTerminalLines((prev) => [...prev, fullLog[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);
  // SCROLL HANDLER
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh w-full flex items-center justify-center bg-[#020617] overflow-hidden pt-24 pb-12 px-4 sm:px-6"
    >
      {/* 1. AMBIENT BACKGROUND GLOBES */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMiAyem0xMCAxMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bS0yMC0yMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6IiBmaWxsPSIjMWUyOTNiIiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* 2. THE MAIN DASHBOARD BENTO */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
      >
        {/* Left */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6"
          >
            I build software <br className="hidden sm:block" />
            that{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              scales.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-light px-2 lg:px-0"
          >
            Hi, I&apos;m Durgesh. A Software Architect specializing in
            high-performance web applications. I transform complex business
            problems into clean, production-ready digital systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 lg:px-0"
          >
            <a
              href="#vault"
              onClick={(e) => handleScroll(e, "vault")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold transition-all hover:bg-cyan-400 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
            >
              <FiTerminal className="text-lg" />
              View_Work
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-md text-slate-300 font-bold hover:text-white hover:bg-slate-800 transition-colors active:scale-95"
            >
              See How I Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="col-span-1 lg:col-span-5 grid grid-cols-1 gap-4 mt-8 lg:mt-0">
          {/* Widget 1: Active Terminal */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-5 flex flex-col h-48 md:h-56 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                <FiTerminal /> <span>server_log.sh</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] transition-colors" />
              </div>
            </div>
            <div className="flex-1 font-mono text-[10px] md:text-xs text-cyan-500/80 flex flex-col gap-1.5 overflow-y-auto custom-scrollbar">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-2"
                >
                  <span className="text-slate-600">❯</span> {line}
                </motion.div>
              ))}
              <div className="flex gap-2 items-center mt-1">
                <span className="text-slate-600">❯</span>
                <span className="w-2 h-3 bg-cyan-400 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Widget 2: Proven Workflow */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 flex flex-col h-40 md:h-48 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
          >
            <div className="text-slate-400 font-mono text-[10px] md:text-xs flex items-center gap-2 mb-2">
              <FiTarget className="text-blue-400" /> Proven Workflow
            </div>

            {/* Timeline Container */}
            <div className="relative flex-1 flex items-center justify-between px-2 md:px-6 mt-2">
              {/* Background Progress Line */}
              <div className="absolute left-[10%] right-[10%] h-0.5 bg-slate-800 z-0 overflow-hidden rounded-full">
                {/* Animated "Progress" Packet */}
                <motion.div
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="w-1/3 h-full bg-linear-to-r from-transparent via-blue-400 to-transparent"
                />
              </div>

              {/* The Workflow Nodes */}
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

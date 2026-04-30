"use client";

import { motion, Variants } from "framer-motion";
import { FiCpu, FiGlobe } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function About() {
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
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-slate-950 py-32 px-6 relative overflow-hidden flex items-center"
    >
      <div className="absolute top-0 right-0 w-150 h-150 bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* LEFT SIDE: VISUAL ARCHITECTURE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Photo  */}
          <motion.div
            variants={itemVariants}
            onClick={() => setIsClicked(!isClicked)}
            className=" relative z-10 h-112.5 w-full rounded-[3rem] overflow-hidden border-2 border-slate-800/80 bg-slate-950 group"
          >
            <Image
              src="/unoptimg.png"
              alt="Durgesh - System Architect"
              fill
              className={`object-cover transition-all duration-700 scale-100 group-hover:scale-105`}
              // className={`${isClicked ? `grayscale-0` : `grayscale`} object-cover group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100`}
            />
          </motion.div>

          {/*Floating Data */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-10 -right-10 z-20 w-54 h-54 md:w-64 md:h-64 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full p-6 flex flex-col justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
          >
            <div className="text-center mb-4">
              <FiCpu className="inline-block text-3xl text-cyan-500 mb-2 animate-pulse" />
              <h4 className="text-white font-bold text-md">System Core</h4>
              <p className="text-xs text-slate-500 font-mono">
                STATUS :: ENGINEERED FOR GROWTH
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                  Focus
                </p>
                <p className="text-white font-mono text-[8px] md:text-[12px] flex uppercase items-center justify-center gap-1">
                  Architecture
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                  Timezone
                </p>
                <p className="text-white font-mono text-[8px] md:text-[12px] flex uppercase items-center justify-center gap-1">
                  <FiGlobe className="text-cyan-500 size-3" /> Global
                </p>
              </div>
            </div>
            {/* Spinning border */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
          </motion.div>

          <div className="absolute top-10 -left-10 w-full h-full border border-slate-800/50 rounded-[3rem] -z-10" />
        </motion.div>

        {/* RIGHT SIDE: NARRATIVE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-7 pl-0 lg:pl-12"
        >
          <motion.h1
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-0.5 bg-cyan-500"></span>
            <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em]">
              About The Architect
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none tracking-tight"
          >
            Engineering Results, <br /> not just{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-500 to-white">
              Code
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-slate-400 text-lg leading-relaxed mb-12"
          >
            <p className="first-letter:text-3xl first-letter:text-white first-letter:font-bold first-letter:mr-1">
              I am a Performance Architect specializing in high-stakes digital
              infrastructure for the industrial and service sectors. While
              others build simple websites, I engineer custom, high-velocity
              systems designed to secure market authority and drive inquiries.
            </p>
            <p>
              My philosophy is Infrastructure First. A beautiful interface is a
              liability if it loses you customers due to poor performance. I
              build secure, production-grade architectures using modern
              technology, ensuring your digital presence is as reliable and
              efficient as the services you provide.
            </p>
            <p>
              Dedicated to maximizing your{" "}
              <span className="text-white font-medium border-b border-cyan-500/30">
                Commercial Efficiency
              </span>
              , treating every project as a production-level deployment.
            </p>
          </motion.div>
          {/* Audits Section */}
          <motion.h2
            variants={itemVariants}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="flex flex-col border-l-2 border-cyan-400 pl-4">
              <span className="text-4xl font-bold tracking-tight text-white leading-none">
                250<span className="text-cyan-400">+</span>
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-semibold mt-1">
                Website Performance Audits Completed
              </span>
            </div>

            <div className="hidden md:block">
              <span className="text-[9px] px-2 py-1 border border-white/10 bg-white/5 text-white/50 uppercase tracking-widest rounded-sm">
                Standard: ISO-ARCH-26
              </span>
            </div>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}

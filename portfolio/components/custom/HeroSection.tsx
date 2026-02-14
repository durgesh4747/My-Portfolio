"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiTerminal,
  FiChevronRight,
  FiShield,
} from "react-icons/fi";
import { CodeTerminal } from "./mini_components/Terminal";

export default function ArchitectHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#05070a] overflow-hidden pt-28"
    >
      {/* 1. THE CONE SPOTLIGHT (Refined Opacity) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.12) 0%, transparent 65%)",
          clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* 2. TYPOGRAPHY & INTRO */}
      <div className="relative z-10 text-center px-6 mb-12">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
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
          <button className="group px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-sm transition-all hover:bg-cyan-400 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center gap-2">
            View Case Studies{" "}
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-800 bg-slate-900/40 text-white font-bold text-sm hover:bg-slate-800 transition-all">
            Download Resume <FiDownload size={16} />
          </button>
        </div>
      </div>

      {/* 3. THE ARCHITECT TERMINAL (Advanced Next.js Code) */}
      <CodeTerminal/>
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full bg-[size:60px_60px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />
      </div>
    </section>
  );
}


    //   <motion.div
    //     initial={{ opacity: 0, y: 60 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.5, duration: 1 }}
    //     className="relative z-10 w-full max-w-4xl mx-auto rounded-t-[2.5rem] border-x border-t border-white/10 bg-slate-950/50 backdrop-blur-3xl shadow-2xl overflow-hidden"
    //   >
    //     <div className="flex items-center justify-between px-8 py-5 bg-white/[0.03] border-b border-white/5">
    //       <div className="flex gap-2.5">
    //         <div className="h-3 w-3 rounded-full bg-red-700" />
    //         <div className="h-3 w-3 rounded-full bg-slate-800" />
    //         <div className="h-3 w-3 rounded-full bg-slate-800" />
    //       </div>
    //       <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
    //         <FiShield className="text-cyan-500" />
    //         <span>middleware.ts // security_layer</span>
    //       </div>
    //     </div>

    //     <div className="p-10 font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto">
    //       <div className="flex gap-6 mb-1">
    //         <span className="text-slate-700 select-none">01</span>
    //         <p>
    //           <span className="text-purple-400">export async function</span>{" "}
    //           <span className="text-blue-400">middleware</span>(req:{" "}
    //           <span className="text-yellow-400">NextRequest</span>) {"{"}
    //         </p>
    //       </div>
    //       <div className="flex gap-6 mb-1">
    //         <span className="text-slate-700 select-none">02</span>
    //         <p className="ml-6">
    //           <span className="text-purple-400">const</span> token ={" "}
    //           <span className="text-purple-400">await</span>{" "}
    //           <span className="text-blue-400">getToken</span>(
    //           {"{ req, secret }"});
    //         </p>
    //       </div>
    //       <div className="flex gap-6 mb-1">
    //         <span className="text-slate-700 select-none">03</span>
    //         <p className="ml-6 italic text-slate-600">
    //           // Validating structural integrity & auth session
    //         </p>
    //       </div>
    //       <div className="flex gap-6 mb-1">
    //         <span className="text-slate-700 select-none">04</span>
    //         <p className="ml-6">
    //           <span className="text-purple-400">if</span> (!token){" "}
    //           <span className="text-pink-500">return</span>{" "}
    //           <span className="text-yellow-400">NextResponse</span>.
    //           <span className="text-blue-400">redirect</span>(
    //           <span className="text-emerald-400">'/login'</span>);
    //         </p>
    //       </div>
    //       <div className="flex gap-6 mb-1">
    //         <span className="text-slate-700 select-none">05</span>
    //         <p>&nbsp;</p>
    //       </div>
    //       <div className="flex gap-6 mb-1 text-emerald-400/80">
    //         <span className="text-slate-700 select-none">06</span>
    //         <p className="ml-6 flex items-center gap-2">
    //           <FiTerminal size={12} /> [SYSTEM] Routing to:{" "}
    //           <span className="text-white">/dashboard/analytics</span>
    //         </p>
    //       </div>
    //       <div className="flex gap-6">
    //         <span className="text-slate-700 select-none">07</span>
    //         <p>{"}"}</p>
    //       </div>

    //       <motion.div
    //         animate={{ opacity: [1, 0.4, 1] }}
    //         transition={{ repeat: Infinity, duration: 1.5 }}
    //         className="mt-8 flex items-center gap-3 text-cyan-500 font-bold text-[11px] tracking-tighter uppercase"
    //       >
    //         <FiChevronRight />{" "}
    //         <span>Architecting Scalable Node Environment...</span>
    //         <span className="h-4 w-1 bg-cyan-500 animate-pulse" />
    //       </motion.div>
    //     </div>

    //     {/* Shadow Overlay */}
    //     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#05070a] to-transparent pointer-events-none" />
    //   </motion.div>
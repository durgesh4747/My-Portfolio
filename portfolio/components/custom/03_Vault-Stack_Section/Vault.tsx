"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiX, FiExternalLink, FiLock, FiTerminal } from "react-icons/fi";
import Image from "next/image";
import { Project } from "@/app/page";
import { PortableText } from "@portabletext/react";

interface WorkProps {
  projects: Project[];
}

interface ProjectCardProps {
  item: Project;
  index: number;
  setSelected: (project: Project) => void;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Memoized to prevent parent re-renders from affecting cards
const ProjectCard = memo(({ item, index, setSelected }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelected(item)}
      style={{ willChange: "transform, opacity" }}
      className="group relative w-full max-w-85 h-115 bg-slate-900/20 backdrop-blur-md border border-slate-800/50 rounded-[2.5rem] p-8 flex flex-col justify-between cursor-pointer hover:border-cyan-500/40 transition-all duration-500 shadow-2xl hover:-translate-y-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">
            NODE_0{index + 1}
          </span>
        </div>
        <FiLock className="text-slate-600 group-hover:text-cyan-400 transition-colors text-sm" />
      </div>

      <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-800/50 bg-slate-950/50">
        {/* LAZY VIDEO: Only mounts when hovered on desktop to save initial scroll memory */}
        {isHovered &&
          typeof window !== "undefined" &&
          window.innerWidth > 1024 && (
            <video
              ref={videoRef}
              src={item.clip}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
            />
          )}

        {item.thumbnail && (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            // unoptimized // It might be the main reason for the lag - 
            className={`object-cover transition-all duration-700 ${
              isHovered ? "scale-110 opacity-40" : "opacity-70"
            }`}
          />
        )}

        {/* SCANNER: Uses GPU-accelerated translateY instead of top */}
        <div className="scanner absolute w-full h-[1.1px] bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] z-20 opacity-0 group-hover:opacity-100" />
      </div>

      <div>
        <div className="flex gap-2 mb-4">
          <span className="text-[8px] font-mono border border-cyan-500/20 px-2 py-0.5 rounded bg-cyan-500/5 text-cyan-500 uppercase">
            {item.isFeatured ? "Priority_Build" : "System_Log"}
          </span>
        </div>
        <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors leading-tight">
          {item.title}
        </h4>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function Vault({ projects }: WorkProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <section
      id="vault"
      className="relative bg-[#020617] py-32 px-6 text-white overflow-hidden"
    >
      <style jsx>{`
        @keyframes scan-optimized {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }
        .scanner {
          will-change: transform;
        }
        .group:hover .scanner {
          animation: scan-optimized 3s linear infinite;
        }
        @keyframes aurora {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -20px) scale(1.1);
          }
        }
        .aurora-orb {
          will-change: transform;
          animation: aurora 20s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none isolate">
        <div className="absolute inset-0 bg-[#020617]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px,transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="aurora-orb absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div
          className="aurora-orb absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px]"
          style={{ animationDelay: "-5s" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">
            Archive_v2.0
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Digital Vault
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm">
            Production-grade systems, tailored SaaS solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-wrap justify-center gap-10 perspective-distant"
        >
          {projects.map((item, index) => (
            <ProjectCard
              key={item._id}
              item={item}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-red-500 text-white rounded-full z-110 transition-all"
              >
                <FiX />
              </button>

              <div className="md:w-3/5 relative aspect-video md:aspect-auto bg-black flex items-center justify-center min-h-62.5">
                {selected.videoUrl && (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selected.videoUrl.split("v=")[1]?.split("&")[0] || selected.videoUrl.split("/").pop()}?autoplay=1`}
                    allowFullScreen
                  />
                )}
              </div>

              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <FiTerminal className="text-cyan-500" />
                  <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">
                    CaseStudy_Report
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white leading-tight">
                  {selected.title}
                </h2>
                <div className="mb-8 max-h-62.5 overflow-y-auto pr-2 custom-scrollbar text-slate-400 text-sm leading-relaxed prose prose-invert prose-sm">
                  {selected.caseStudy ? (
                    <PortableText value={selected.caseStudy} />
                  ) : (
                    <p>No CaseStudy provided.</p>
                  )}
                </div>
                <a
                  href={selected.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  Visit Deployment <FiExternalLink />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

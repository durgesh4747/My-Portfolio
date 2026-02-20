"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { FiX, FiExternalLink, FiLock } from "react-icons/fi";
import Image from "next/image";
import { Project } from "@/app/page";

interface WorkProps {
  projects: Project[];
}

interface ProjectCardProps {
  item: Project;
  index: number;
  setSelected: (project: Project) => void;
  handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

function ProjectCard({
  item,
  index,
  setSelected,
  handleMouse,
  springX,
  springY,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.6 },
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        springX.set(0);
        springY.set(0);
      }}
      onClick={() => setSelected(item)}
      style={{
        rotateX: springY,
        rotateY: springX,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full max-w-85 h-115 bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between cursor-pointer hover:border-cyan-500/50 transition-colors shadow-2xl"
    >
      <div
        className="flex justify-between items-center"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">
            NODE_0{index + 1}
          </span>
        </div>
        <FiLock className="text-slate-600 group-hover:text-cyan-400 transition-colors text-sm" />
      </div>

      <div
        className="relative h-48 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950"
        style={{ transform: "translateZ(40px)" }}
      >
        <video
          ref={videoRef}
          src={item.clip}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10"
        />
        {item.thumbnail && (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            unoptimized
            className="object-cover opacity-70 group-hover:scale-150 transition-transform duration-700 hover:opacity-0"
          />
        )}
        <div className="scanner absolute w-full h-[1.1px] bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] z-20 opacity-0 group-hover:opacity-100" />
      </div>

      <div style={{ transform: "translateZ(30px)" }}>
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
}

export default function Vault({ projects }: WorkProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) / 15);
    y.set((rect.top + rect.height / 2 - e.clientY) / 15);
  };

  return (
    <section
      id="vault"
      className="bg-slate-950 py-24 px-6 text-white overflow-hidden"
    >
      <style>{`
        @keyframes scan { 0%, 100% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; } }
        .scanner { animation: scan 3s linear infinite; }
      `}</style>

      <div className="text-center mb-20">
        <h2 className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">
          Archive_v2.0
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Digital Vault
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm">
          [STATUS: MONITORING_NODES]
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 perspective-distant">
        {projects.map((item, index) => (
          <ProjectCard
            key={item._id}
            item={item}
            index={index}
            setSelected={setSelected}
            handleMouse={handleMouse}
            springX={x}
            springY={y}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-red-500 text-white rounded-full z-110 transition-colors"
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
                <span className="text-cyan-500 font-mono text-[10px] uppercase mb-4 tracking-widest">
                  Build_Details
                </span>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  {selected.title}
                </h2>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                  Full technical breakdown and execution architecture available
                  via project link.
                </p>
                <a
                  href={selected.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-2 group"
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

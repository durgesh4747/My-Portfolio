"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { FiX, FiPlay, FiExternalLink, FiLock } from "react-icons/fi";
import Image from "next/image";

// 1. Clean Data Structure
const vaultItems = [
  {
    id: 1,
    title: "Invoice Generator",
    tags: ["Next.js", "Prisma"],
    img: "https://images.pexels.com/photos/14866072/pexels-photo-14866072.jpeg",
  },
  {
    id: 2,
    title: "Aegis Gateway",
    tags: ["Clerk", "Redis"],
    img: "https://images.pexels.com/photos/14866072/pexels-photo-14866072.jpeg",
  },
  {
    id: 3,
    title: "Nexus Commerce",
    tags: ["Stripe", "Sanity"],
    img: "https://images.pexels.com/photos/14866072/pexels-photo-14866072.jpeg",
  },
];

interface VaultItemInterface {
  id: number;
  title: string;
  tags: string[];
  img: string;
}

export default function Vault() {
  const [selected, setSelected] = useState<VaultItemInterface|null>(null);

  // 2. Simplified 3D Engine
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) / 15);
    y.set((rect.top + rect.height / 2 - e.clientY) / 15);
  };

  return (
    <section id="vault" className="bg-slate-950 py-24 px-6 text-white overflow-hidden">
      {/* 3. Injecting Keyframes once */}
      <style>{`
        @keyframes scan { 0%, 100% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; } }
        .scanner { animation: scan 3s linear infinite; }
      `}</style>

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">
          Archive_01
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Digital Vault
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Featured projects focused on performance and clean architecture.
        </p>
      </div>

      {/* 4. The Grid */}
      <div className="flex flex-wrap justify-center gap-10 perspective-distant">
        {vaultItems.map((item) => (
          <motion.div
            key={item.id}
            onMouseMove={handleMouse}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            onClick={() => setSelected(item)}
            style={{
              rotateX: springY,
              rotateY: springX,
              transformStyle: "preserve-3d",
            }}
            className="group relative w-80 h-[480px] bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between cursor-pointer hover:border-cyan-500/50 transition-colors shadow-2xl"
          >
            {/* Top Bar */}
            <div
              className="flex justify-between items-center"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-500">
                  UNIT_{item.id}
                </span>
              </div>
              <FiLock className="group-hover:text-cyan-400 transition-colors" />
            </div>

            {/* Project Image */}
            <div
              className="relative h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-950"
              style={{ transform: "translateZ(50px)" }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="scanner absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] opacity-0 group-hover:opacity-100" />
            </div>

            {/* Info */}
            <div style={{ transform: "translateZ(30px)" }}>
              <div className="flex gap-2 mb-3">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono border border-slate-800 px-2 py-0.5 rounded bg-slate-950 text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 5. Simplified Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full hover:bg-red-500 z-10"
              >
                <FiX />
              </button>

              <div className="md:w-1/2 relative min-h-[300px] bg-black">
                <Image
                  src={selected.img}
                  alt="preview"
                  fill
                  className="object-cover opacity-40"
                />
                <FiPlay className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500 text-5xl animate-pulse" />
              </div>

              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <span className="text-cyan-500 font-mono text-xs uppercase mb-2">
                  Build Report
                </span>
                <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  System architecture optimized for scalability and clean data
                  flow.
                </p>
                <button className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
                  Launch Application <FiExternalLink />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

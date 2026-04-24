"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/(frontend)/page";

interface WorkProps {
  projects: Project[];
}

export default function Vault({ projects }: WorkProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [projects]);

  return (
    <section
      id="vault"
      className="relative bg-[#020617] py-32 px-6 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
          <div className="inline-block py-1 px-3 border border-cyan-500/20 bg-cyan-500/5 rounded-full mb-4">
            <span className="text-cyan-500 font-mono text-[10px] tracking-[0.3em] uppercase">
              Archive_v2.0
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Digital Vault
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm">
            Technical architecture and production-grade deployments.
          </p>
        </div>
        {/* Slider Container */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-6 top-[40%] z-40 hidden md:flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md transition-all duration-300 ${
              canScrollLeft
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75 pointer-events-none"
            } hover:border-cyan-500 hover:text-cyan-400 shadow-2xl`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute -right-6 top-[40%] z-40 hidden md:flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md transition-all duration-300 ${
              canScrollRight
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75 pointer-events-none"
            } hover:border-cyan-500 hover:text-cyan-400 shadow-2xl`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Horizontal Scroll Area */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-12 p-3 snap-x snap-mandatory no-scrollbar"
          >
            {projects.map((project) => (
              <Link
                href={`/vault/${project.slug.current}`}
                key={project._id}
                className="group relative shrink-0 w-[85vw] md:w-130 snap-center hover:scale-102 flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.2)]"
              >
                {/* Image Section */}
                <div className="relative h-52 md:h-72 w-full overflow-hidden border-b border-slate-800 scale-105">
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500" />
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 520px"
                    className="object-cover transition-transform duration-700 ease-out p-2 rounded-4xl"
                  />
                </div>

                {/* Text Content */}
                <div className="p-8 pb-0 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4">
                    <h3 className="text-[18px] md:text-2xl font-bold tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-4 pb-6 text-sm leading-relaxed text-slate-400 font-mono">
                    {project.description ||
                      "System data encrypted. Initialization sequence ready for deep-dive."}
                  </p>
                </div>
                <div className="absolute flex end-2 top-2 md:bottom-auto items-center gap-1 md:gap-2 rounded-full bg-slate-950/90 md:bg-slate-950/80 px-2 py-1 md:px-3 md:py-1.5 text-[6px] md:text-[10px] font-mono text-cyan-400 border border-slate-800">
                  <span className="relative flex h-1 w-1 md:h-1.5 md:w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-cyan-500"></span>
                  </span>
                  LIVE
                </div>
              </Link>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="w-48 h-[2.01px] bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            <p
              className={`text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em] md:hidden transition-opacity duration-300 ${
                canScrollRight ? "opacity-100" : "opacity-0"
              }`}
            >
              Swipe to explore
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

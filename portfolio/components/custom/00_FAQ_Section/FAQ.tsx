"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will this change how ite day-to-day?",
    a: "No — for optimization work, you keep using your site exactly the same way. For a full rebuild, you'll get a simple dashboard that's easier to use than what you have now, not harder.",
  },
  {
    q: "Do I need to change my hosting or domain?",
    a: "In most cases, no. Optimization work happens within your current setup. If a rebuild genuinely needs a different platform, I'll explain exactly why before any changes are made.",
  },
  {
    q: "How long does a project take?",
    a: "Optimization work: 3-5 days. A full rebuild: 2-3 weeks. You'll know the timeline upfront before we start.",
  },
  {
    q: "I'm not very technical — what's happening?",
    a: "Yes. I explain everything in plain terms — no jargon, no assuming you know web development. If something needs a technical decision, I'll walk you through the options simply.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We'll agree on what success looks like before starting, and I'll show you the before-and-after data (load times, mobile performance) so it's clear, not just a matter of opinion.",
  },
  {
    q: "Do you offer ongoing suppor project's done?",
    a: "Yes — that's what the monthly maintenance option is for, if you'd rather not think about it again. Otherwise, one-off fixes are always available too.",
  },
  {
    q: "Do you offer ongoing support ect's done?",
    a: "Yes — that's what the monthly maintenance option is for, if you'd rather not think about it again. Otherwise, one-off fixes are always available too.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#020617] py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.08),rgba(255,255,255,0))] pointer-events-none" />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl md:text-5xl text-white font-extrabold tracking-tight">
          Clear Answers Upfront
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-start">
        {/* Left Column: Questions */}
        <div className="lg:col-span-5 space-y-3 ">
          {faqs.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-full flex items-center h-10 justify-between px-4 py-3.5 rounded-xl border text-left font-mono text-xs md:text-sm transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-slate-900 border-cyan-500/20 text-white shadow-[0_0_15px_-3px_rgba(14,165,233,0.2)]"
                    : "bg-slate-900/30 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-semibold shrink-0 ${
                      isActive ? "text-cyan-400" : "text-slate-600"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="truncate font-sans font-medium text-sm">
                    {item.q}
                  </span>
                </div>
                <span
                  className={`text-xs shrink-0 transition-transform ${
                    isActive
                      ? "text-cyan-400 translate-x-0.5"
                      : "text-slate-600"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Answer Panel */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 md:p-12 backdrop-blur-sm min-h-65 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />

          <div className="border-b border-slate-800/60 pb-4 ">
            {/* Question Tag*/}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyan-400">
                QUESTION 0{activeIndex + 1}
              </span>
            </div>

            {/* Question*/}
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">
              {faqs[activeIndex].q}
            </h3>

            {/* Answer*/}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {faqs[activeIndex].a}
            </p>
          </div>

          {/* Note at the end*/}
          <div className="mt-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Click any question on the left to switch view.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

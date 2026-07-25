"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I don't have a website yet, where do we even start?",
    a: "We start with a short conversation about what your business does and what you want visitors to do when they land on your site - get in touch, request a quote, learn about your services. From there I handle the design, build, and setup end-to-end. You don't need any technical knowledge or existing content ready to begin.",
  },
  {
    q: "Will this change how I manage things day-to-day?",
    a: "No, if I'm optimizing your current site, you keep using it exactly the same way. If it's a new build or full rebuild, you'll get a simple dashboard that's easier to use than what you have now, not harder.",
  },
  {
    q: "Why pay for this instead of a cheaper £300-400 template site?",
    a: "If you're starting fresh, a properly built site costs more upfront but is designed to actually convert visitors into inquiries, not just exist online. If you already have a site, optimizing keeps everything that already works and just fixes what's slowing you down. A cheap template site usually means starting from zero — losing any existing search rankings, content, and branding you've built up, often with a recurring monthly fee attached. ",
  },
  {
    q: "How long will my project take?",
    a: "Optimization work: 3-5 days. A new site or full rebuild: 2-3 weeks. You'll know the exact timeline for your specific project before anything starts.",
  },
  {
    q: "Do I need to change my hosting or domain?",
    a: "If you already have a site, optimization work usually happens within your current setup - no hosting or domain changes needed. If you're starting fresh, I'll guide you through picking and setting up a domain and hosting as part of the project, so there's nothing to figure out on your own.",
  },
  {
    q: "I'm not very technical — will I understand what's happening?",
    a: "Yes. I explain everything in plain terms, whether you're getting your first website or fixing an existing one — no jargon, no assuming you already know how any of this works. Any decision that needs your input gets explained simply first.",
  },
  {
    q: "What happens after my site is live — do you offer support",
    a: "Yes. If you'd rather not think about it again, the monthly Ongoing Care option covers monitoring, small updates, and priority support. If you just want the option available when something comes up, one-off fixes are always on the table too — no obligation either way.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#020617] py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.08),rgba(255,255,255,0))] pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <span className="text-cyan-500 text-[10px] tracking-[0.3em] uppercase">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-3xl md:text-5xl text-white font-bold tracking-tight mb-6">
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
                aria-label="Questions-FAQ's"
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
                  <span className="truncate font-sans font-medium text-[12px]">
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

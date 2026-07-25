import React from "react";

const tiers = [
  {
    name: "Performance Optimization",
    price: "From £449",
    period: "one-time",
    duration: "3-5 days",
    description:
      "Works across WordPress, Wix, Squarespace, Shopify & custom-built sites on Next.js, React, or Vue.",
    features: [
      "Full speed & mobile audit",
      "Fixes applied within your existing site — no rebuild, no downtime",
      "Keeps your current content, branding, and search rankings intact",
      "Before & after performance report with real numbers",
      "Final price confirmed after a quick audit of your site",
    ],
    highlighted: false,
  },
  {
    name: "New Site / Full Rebuild",
    price: "From £999",
    period: "one-time",
    duration: "2-3 weeks",
    description:
      "For businesses without a site yet, or ones that need a complete modern overhaul.",
    features: [
      "Modern, fast, mobile-first design built from the ground up",
      "Simple dashboard to manage your own content — no developer needed",
      "Optimized from day one, not patched together after launch",
      "Works whether you're starting fresh or replacing an outdated site",
    ],
    highlighted: true,
  },
  {
    name: "Ongoing Care",
    price: "From £99",
    period: "/month",
    duration: "monthly",
    description:
      "For businesses who'd rather not think about their site again.",
    features: [
      "Regular performance & security monitoring",
      "Small updates & fixes included",
      "Priority response time when something needs attention",
      "One less thing on your plate",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#020617] py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.08),rgba(255,255,255,0))] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <span className="text-cyan-500 text-[10px] tracking-[0.3em] uppercase">
          PRICING & PACKAGES
        </span>
        <h2 className="text-3xl md:text-5xl text-white font-bold tracking-tight mb-6">
          Simple & Transparent Packages
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          No hidden fees. Pick what fits, or ask and I&apos;ll help you decide.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative z-10 ">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`group relative flex flex-col rounded-2xl p-8 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
              tier.highlighted
                ? "bg-slate-900/90 border-cyan-500/50 hover:border-cyan-700/30 shadow-[0_0_30px_-10px_rgba(6,182,212,0.25)]"
                : "bg-slate-900/50 border-slate-800/80 hover:border-slate-800/10"
            }`}
          >
            {/* Top Border Glow Line for Highlighted Card */}
            {tier.highlighted && (
              <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent" />
            )}

            {/* Highlight Badge */}
            {/* {tier.highlighted && (
              <span className="absolute top-9 right-2 z-50 bg-cyan-400 text-slate-950 text-[10px] font-mono font-extrabold px-2 rounded-full tracking-wider uppercase shadow-md">
                RECOMMENDED
              </span>
            )} */}

            {/* Title & Description */}
            <h3 className="text-white text-xl font-bold mb-2">{tier.name}</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 min-h-9">
              {tier.description}
            </p>

            {/* Price & Duration */}
            <div className="mb-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  {tier.price}
                </span>
                <span className="text-slate-400 text-xs font-mono">
                  {tier.period}
                </span>
              </div>
              {/* <p className="text-slate-400 text-xs font-mono mt-2 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2" />
                <span>Est. timeline: {tier.duration}</span>
              </p> */}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-slate-300 text-xs leading-relaxed"
                >
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <a href="#contact" className="cursor-pointer scroll-smooth">
              <button
                aria-label="Contact-Form"
                className={`w-full py-3 cursor-pointer rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 hover:border-cyan-300 ${
                  tier.highlighted
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-md font-bold"
                    : "bg-slate-800/10 text-slate-200 border border-slate-700/60 hover:bg-slate-800 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

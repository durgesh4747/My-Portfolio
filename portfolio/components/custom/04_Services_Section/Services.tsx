"use client";

import { Monitor, Cpu, Database } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 bg-slate-950">
      {/* HEADER */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          Capabilities
        </h2>
        <h1 className="text-4xl font-bold text-white mb-6">
          System Architecture
        </h1>
        <p className="text-slate-400 text-lg">
          Bridging the gap between complex backend logic and pixel-perfect
          design.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesItems.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-8 rounded-2xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors duration-300"
          >
            {/* ICON */}
            <div className="mb-6 text-cyan-500">{service.icon}</div>

            {/* CONTENT */}
            <h3 className="text-xl font-bold text-white mb-4">
              {service.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const servicesItems = [
  {
    title: "Modern Web Platforms",
    description:
      "I build fast, modern websites using Next.js and Server-Side Rendering (SSR). Your website loads quickly, performs smoothly on all devices, and is optimized to rank better on Google — giving visitors an app-like experience without complexity.",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "Interactive Web Applications",
    description:
      "Need more than a website? I develop custom web applications with secure authentication, API integrations, and scalable architecture. Whether it's client dashboards, SaaS platforms, or business tools, I turn complex ideas into reliable systems.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Flexible Content Systems",
    description:
      "I build websites where you can update text, images, and content without touching code. Using modern headless systems like Sanity, your website stays easy to manage, scalable, and ready to grow with your business.",
    icon: <Database className="w-8 h-8" />,
  },
];

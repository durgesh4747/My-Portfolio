"use client";

import React, { useState } from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiZod,
  SiSanity,
  SiClerk,
  SiVercel,
  SiNetlify,
  SiFramer,
  SiResend,
  SiAuth0,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
  { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-[#3178C6]" },
  { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
  { name: "Prisma", icon: <SiPrisma />, color: "hover:text-white" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-[#47A248]" },
  { name: "Redux", icon: <SiRedux />, color: "hover:text-[#764ABC]" },
  { name: "Zod", icon: <SiZod />, color: "hover:text-[#3E67B1]" },
  { name: "Sanity", icon: <SiSanity />, color: "hover:text-[#F03E2F]" },
  { name: "Clerk", icon: <SiClerk />, color: "hover:text-[#6C47FF]" },
  { name: "Framer", icon: <SiFramer />, color: "hover:text-[#0055FF]" },
  { name: "Auth0", icon: <SiAuth0 />, color: "hover:text-[#EB5424]" }, // AuthJS OR BETTER AUTH
  { name: "Vercel", icon: <SiVercel />, color: "hover:text-white" },
  { name: "Resend", icon: <SiResend />, color: "hover:text-white" },
  { name: "Netlify", icon: <SiNetlify />, color: "hover:text-[#F03E2F]" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="relative flex max-w-full overflow-hidden">
        {/* The Motion Div handles everything */}
        <motion.div
          className="flex whitespace-nowrap gap-16 pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {/* Mapping twice so the loop is seamless */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-slate-600 transition-all duration-300 group ${tech.color}`}
            >
              <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="text-sm md:text-base font-mono font-medium uppercase tracking-tighter opacity-50 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Manual Fades (instead of global CSS mask) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[#0F172A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-[#0F172A] to-transparent z-10" />
      </div>
    </section>
  );
}



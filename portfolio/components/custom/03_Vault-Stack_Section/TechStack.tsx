"use client";

import React, { useState, useEffect, useRef } from "react";
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
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa"; // Better Auth Icon
const techStack = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#FFFF00" },
  { name: "Prisma", icon: <SiPrisma />, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Zod", icon: <SiZod />, color: "#3E67B1" },
  { name: "Sanity", icon: <SiSanity />, color: "#F03E2F" },
  { name: "Clerk", icon: <SiClerk />, color: "#6C47FF" },
  { name: "Framer", icon: <SiFramer />, color: "#0055FF" },
  { name: "BetterAuth", icon: <FaFingerprint />, color: "#EB5424" },
  { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
  { name: "Resend", icon: <SiResend />, color: "#FFFFFF" },
  { name: "Netlify", icon: <SiNetlify />, color: "#F03E2F" },
];

function TechItem({ tech }: { tech: (typeof techStack)[0] }) {
  const [isCentered, setIsCentered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isMobileView = window.innerWidth < 1024;
        if (isMobileView) {
          setIsCentered(entry.isIntersecting);
        } else {
          setIsCentered(false);
        }
      },
      {
        rootMargin: "0% -40% 0% -40%",
        threshold: 0,
      },
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      // Passing the brand color as a CSS variable to the parent
      style={{ "--active-color": tech.color } as React.CSSProperties}
      className={`group flex items-center gap-3 cursor-default transition-transform duration-500
        ${isCentered ? "scale-110" : "hover:scale-110"}
      `}
    >
      <span
        className={`text-3xl md:text-4xl transition-all duration-500 
          ${
            isCentered
              ? "text-(--active-color) brightness-125"
              : "text-slate-600 group-hover:text-(--active-color) group-hover:brightness-110"
          }
        `}
      >
        {tech.icon}
      </span>
      <span
        className={`text-sm md:text-base font-mono font-medium uppercase tracking-tighter transition-all duration-500
          ${
            isCentered
              ? "text-(--active-color) opacity-100"
              : "text-slate-600 opacity-50 group-hover:opacity-100 group-hover:text-(--active-color)"
          }
        `}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="relative flex max-w-full overflow-hidden">
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
          {[...techStack, ...techStack].map((tech, index) => (
            <TechItem key={index} tech={tech} />
          ))}
        </motion.div>

        {/* Edge Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0F172A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0F172A] to-transparent z-10" />
      </div>
    </section>
  );
}

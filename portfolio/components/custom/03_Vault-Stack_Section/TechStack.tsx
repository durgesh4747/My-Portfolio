"use client";

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

import { FaFingerprint } from "react-icons/fa";

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
  return (
    <div
      style={{ "--active-color": tech.color } as React.CSSProperties}
      className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform duration-500"
    >
      {/* Icon's */}
      <span
        aria-hidden="true"
        className="
        text-3xl md:text-4xl transition-all duration-500

        text-(--active-color) opacity-70

        lg:text-slate-600 lg:opacity-100
        lg:group-hover:text-(--active-color)
        "
      >
        {tech.icon}
      </span>

      {/* Name */}
      <span
        className="
        text-sm md:text-base font-mono font-medium uppercase tracking-tighter
        transition-all duration-500

        text-(--active-color) opacity-90

        lg:text-slate-300 lg:opacity-100
        lg:group-hover:text-(--active-color)
        lg:group-hover:opacity-100
        "
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <TechItem key={index} tech={tech} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0F172A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0F172A] to-transparent z-10" />
      </div>
    </section>
  );
}

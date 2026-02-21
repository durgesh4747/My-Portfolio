"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Services() {
  // Tracks which card is currently tapped/active on mobile
  const [activeCard, setActiveCard] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      title: "High-Performance Frontends",
      points: [
        "Lightning-fast load times using modern frameworks.",
        "Pixel-perfect, responsive designs for any screen size.",
        "SEO-optimized architecture for maximum search visibility.",
      ],
    },
    {
      title: "Custom SaaS & Web Apps",
      points: [
        "Robust backend logic and secure database structuring.",
        "Custom API development and seamless third-party integrations.",
        "Scalable architecture built to handle user growth.",
      ],
    },
    {
      title: "Headless CMS & Dashboards",
      points: [
        "Custom admin panels for effortless content management.",
        "Decoupled architecture for superior speed and security.",
        "Easy media and data updates without touching a single line of code.",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-[#020617] py-32 px-6 overflow-hidden"
    >
      {/* --- THE SUBTLE GLOBAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 1. The Base Depth */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* 2. The Micro-Dot Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* 3. The Slow-Motion Aurora Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px]"
        />

        {/* 4. The Edge Fade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            My Expertise
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Specializing in{" "}
            <span className="text-slate-500">modern web logic.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            I focus on building engines that are as powerful as they are
            beautiful, ensuring your project is ready for production from day
            one.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setActiveCard(isActive ? 1 : index)}
                className={`group relative p-8 md:p-10 bg-slate-900/20 backdrop-blur-md border rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col h-full cursor-pointer ${
                  isActive
                    ? "border-cyan-500/30 -translate-y-2 shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)]"
                    : "border-slate-800/50 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)]"
                }`}
              >
                {/* The Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <h3
                    className={`text-2xl font-bold mb-8 transition-colors duration-300 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-white group-hover:text-cyan-400"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <ul className="flex flex-col gap-5 mt-auto">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheckCircle className="text-cyan-500 mt-1 shrink-0 text-sm opacity-80" />
                        <span className="text-slate-400 leading-relaxed text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

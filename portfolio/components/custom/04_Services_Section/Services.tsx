"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(1);

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const services = [
    {
      title: "High Velocity User Experiences",

      points: [
        "Instant load times that capture lead attention immediately.",

        "Precision-engineered designs that work flawlessly on every device.",

        "Google-standard optimization to maximize your online visibility.",
      ],
    },

    {
      title: "Business SaaS & Web Apps",

      points: [
        "Robust logic designed to handle your specific business workflows.",

        "Seamless integration with the tools your team already uses.",

        "Enterprise-grade stability built to support long-term growth.",
      ],
    },

    {
      title: "Headless CMS & Dashboards",

      points: [
        "Custom admin panels for effortless content updates.",

        "Decoupled architecture for superior security and protection",

        "Full control over your data without needing a developer for every change.",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-[#020617] py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* CSS AMBIENT ORBS */}

        <div className="aurora-orb cyan" />

        <div className="aurora-orb blue" />

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
          <motion.h1
            variants={itemVariants}
            className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            My Expertise
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Specializing in{" "}
            <span className="text-slate-500">modern web logic.</span>
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            I focus on building engines that are as powerful as they are
            beautiful.
          </motion.h3>
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
                onClick={() => setActiveCard(isActive ? null : index)}
                className={`group relative p-8 md:p-10 bg-slate-900/20 backdrop-blur-md border rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col h-full cursor-pointer
                  ${isActive ? "border-cyan-500/30 -translate-y-2 shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)]" : "border-slate-800/50 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)]"}`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <h3
                    className={`text-2xl font-bold mb-8 transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-white group-hover:text-cyan-400"}`}
                  >
                    {service.title}
                  </h3>

                  <ul className="flex flex-col gap-5 mt-auto">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheckCircle className="text-cyan-500 mt-1 shrink-0 text-sm opacity-80" />

                        <span className="text-slate-400 text-sm leading-relaxed">
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

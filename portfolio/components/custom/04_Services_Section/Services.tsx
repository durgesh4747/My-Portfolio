"use client";

import { motion, Variants } from "framer-motion";

export default function Services() {
  // Keeping your exact About section animation physics
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const services = [
    {
      title: "High-Performance Websites",
      desc: "For brands that need to stand out. I build lightning-fast, visually striking websites with smooth animations. Using Next.js, I ensure your site looks premium, ranks high on Google, and loads instantly on every device.",
    },
    {
      title: "Custom Web Applications",
      desc: "For businesses that need complex logic. If you need more than a static page, I engineer interactive software like SaaS dashboards, client portals, and custom tools—complete with secure user logins and robust APIs.",
    },
    {
      title: "Content & Admin Systems",
      desc: "For teams who want full control. Stop paying developers just to change a paragraph. I build custom Admin Dashboards (Headless CMS) so you can effortlessly manage blogs, products, and media while I handle the core infrastructure.",
    },
  ];

  return (
    <section id="services" className="w-full bg-slate-950 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* CENTERED HEADER - Matches Hero/About style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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

        {/* SIMPLE STRUCTURED CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-10 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] hover:border-slate-700 transition-colors duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

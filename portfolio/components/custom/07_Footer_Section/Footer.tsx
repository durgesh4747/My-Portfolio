"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
  FiTwitter,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("durgeshsutariya07@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 500);
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/durgesh-sutariya-929b82333/",
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      href: "https://github.com/durgesh4747",
    },
    {
      name: "X / Twitter",
      icon: <FiTwitter />,
      href: "https://x.com/DurgeshS4747",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#020617] border-t border-slate-900/50 overflow-hidden"
    >
      {/* --- THE SUBTLE GLOBAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Faint orb for the corner depth */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* LEFT-IDENTITY */}
        <div className="p-8 md:p-12 border-b md:border-b-0 border-slate-900/50 flex flex-col justify-center">
          <h2 className="text-white text-2xl font-bold tracking-tighter mb-4">
            Durgesh Sutariya<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
            A highly specialized developer engineering scalable SaaS products,
            headless systems, and high-performance web architecture. Based in
            Vadodara, India.
          </p>
        </div>

        {/* MIDDLE-CONTACT */}
        <div className="p-8 md:p-12 border-b md:border-b-0 border-slate-900/50 bg-slate-900/5 flex flex-col justify-center">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Contact_Direct
          </p>
          <div className="space-y-3">
            <div className="w-full group flex items-center justify-between p-4 rounded-xl border border-slate-800/50 bg-slate-900/20 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm">
              <a
                href="mailto:durgeshsutariya07@gmail.com"
                className="flex flex-col items-start no-underline"
              >
                <span className="text-[9px] text-slate-500 uppercase mb-1">
                  Business Mail
                </span>
                <span className="text-[11px] md:text-xs font-mono text-slate-300 group-hover:text-white transition-colors">
                  durgeshsutariya07@gmail.com
                </span>
              </a>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyEmail();
                }}
                className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copiedEmail ? (
                  <FiCheck className="text-cyan-500" />
                ) : (
                  <FiCopy className="text-slate-600 group-hover:text-cyan-500" />
                )}
              </button>
            </div>

            <a
              href="https://wa.me/919904410362?text=Hi%20Durgesh,%20I'm%20reaching%20out%20from%20your%20portfolio..."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-between p-4 rounded-xl border border-slate-800/50 bg-slate-900/20 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start">
                <span className="text-[9px] text-slate-500 uppercase mb-1">
                  Instant Message
                </span>
                <span className="text-[11px] md:text-xs font-mono text-slate-300 group-hover:text-white transition-colors">
                  +91 99044 10362
                </span>
              </div>
              <FaWhatsapp className="text-slate-600 group-hover:text-green-500 transition-colors text-lg" />
            </a>
          </div>
        </div>

        {/* RIGHT-SOCIALS */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Social_Links
          </p>
          <div className="grid grid-cols-1 gap-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-900/30 group transition-all"
              >
                <div className="flex items-center gap-4 text-slate-400 group-hover:text-white">
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {social.name}
                  </span>
                </div>
                <FiArrowUpRight className="text-slate-800 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR - Sharpened for visibility */}
      <div className="w-full border-t border-slate-800/60 bg-slate-950/80 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 cursor-default relative z-20">
        <p className="text-slate-400 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Durgesh Sutariya. Programmed for
          performance.
        </p>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-slate-400 group">
            <FiClock className="text-[12px] text-cyan-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase group-hover:text-white transition-colors">
              IST — {time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 group">
            <FiMapPin className="text-[12px] text-cyan-500" />
            <span className="text-[10px] font-mono uppercase group-hover:text-white transition-colors">
              Vadodara, IN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

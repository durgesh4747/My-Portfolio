"use client";

import React, { useState, useEffect } from "react";
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
      className="w-full bg-slate-950 border-t border-slate-900"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* LEFT-IDENTITY */}
        <div className="p-8 md:p-10 border-b md:border-b-0 border-slate-900 flex flex-col justify-center">
          <h2 className="text-white text-2xl font-bold tracking-tighter mb-4">
            Durgesh Sutariya<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            A Developer building scalable digital systems and
            high-performance web architecture. Based in Vadodara, Gujarat.
          </p>
        </div>

        {/* MIDDLE-CONTACT */}
        <div className="p-8 md:p-10 border-b md:border-b-0 border-slate-900 bg-slate-900/10 flex flex-col justify-center">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Contact_Direct
          </p>
          <div className="space-y-3">
            <div className="w-full group flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950 hover:border-cyan-500/40 transition-all duration-300">
              {/* The Text is a Link: Opens user's mail client */}
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

              {/* The Icon is a Button: Only for copying */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevents the link from triggering if they click the icon
                  handleCopyEmail();
                }}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
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
              className="w-full group flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950 hover:border-green-500/40 transition-all duration-300"
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
        <div className="p-8 md:p-10 flex flex-col justify-center">
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
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-900/50 group transition-all"
              >
                <div className="flex items-center gap-4 text-slate-400 group-hover:text-white">
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-sm font-semibold uppercase">
                    {social.name}
                  </span>
                </div>
                <FiArrowUpRight className="text-slate-800 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full border-t border-slate-900 bg-slate-900/20 px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4 cursor-default">
        <div className="flex items-center gap-6">
          <p className="text-slate-400 text-[9px] md:text-[10px] font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} Durgesh Sutariya. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-slate-400">
            <FiClock className="text-[12px] text-cyan-500" />
            <span className="text-[10px] font-mono uppercase">
              IST - {time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <FiMapPin className="text-[12px] text-cyan-500" />
            <span className="text-[10px] font-mono uppercase">
              Vadodara, IN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

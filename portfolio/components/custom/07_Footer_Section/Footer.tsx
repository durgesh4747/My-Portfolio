"use client";

import React, { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
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
    setTimeout(() => setCopiedEmail(false), 2000);
  };
  const handleCopyPhone = () => {
    navigator.clipboard.writeText("9904410362");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const socials = [
    { name: "LinkedIn", icon: <FiLinkedin />, href: "#" },
    { name: "GitHub", icon: <FiGithub />, href: "#" },
    { name: "Instagram", icon: <FiInstagram />, href: "#" },
  ];

  return (
    <footer id="footer" className="w-full bg-slate-950 border-t border-slate-900">
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {/* LEFT-IDENTITY */}
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-900 flex flex-col justify-center">
          <h2 className="text-white text-4xl font-bold tracking-tighter mb-4">
            YourName<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            MERN Stack Developer building scalable digital systems and
            high-performance web architecture. Based in Vadodara, Gujarat.
          </p>
        </div>

        {/* MIDDLE-CONTACT */}
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-900 bg-slate-900/10 flex flex-col justify-center">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Contact_Direct
          </p>
          <div className="space-y-4">
            <button
              onClick={handleCopyEmail}
              className="w-full group flex items-center justify-between p-5 rounded-xl border-b border-t border-slate-800 bg-slate-950 hover:border-cyan-500/50 transition-all duration-300"
            >
              <span className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors">
                Email : durgeshsutariya07@gmail.com
              </span>
              {copiedEmail ? (
                <FiCheck className="text-white" />
              ) : (
                <FiCopy className="text-slate-50 group-hover:text-cyan-500" />
              )}
            </button>
            <button
              onClick={handleCopyPhone}
              className="w-full group flex items-center justify-between p-5 rounded-xl border-b border-t border-slate-800 bg-slate-950 hover:border-cyan-500/50 transition-all duration-300"
            >
              <span className="text-sm font-mono text-slate-300 group-hover:bg-cyan ">
                Phone : +91 00000 00000
              </span>
              {copiedPhone ? (
                <FiCheck className="text-white" />
              ) : (
                <FiCopy className="text-slate-50 group-hover:text-cyan-500" />
              )}
            </button>
          </div>
        </div>

        {/* RIGHT-SOCIALS */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Social_Links
          </p>
          <div className="grid grid-cols-1 gap-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-900/50 group transition-all"
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
        <div className="flex items-center gap-6 px-2">
          <p className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} Durgesh Sutariya. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-slate-400 px-2">
            <FiClock className="text-[12px] text-cyan-500" />
            <span className="text-[10px] font-mono uppercase">IST - {time} </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 px-2">
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

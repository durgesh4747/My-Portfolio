"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiLink, FiFolder, FiUser, FiX, FiCpu } from "react-icons/fi";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent, id: string) => void;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const allSections = [
      "home",
      "vault",
      "services",
      "stack",
      "about",
      "contact",
    ];
    const navIds = ["vault", "services", "about", "contact"];

    const observerOptions = {
      rootMargin: "-45% 0% -45% 0%",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (navIds.includes(id)) {
            setActiveSection(id);
          } else {
            setActiveSection("");
          }
        }
      });
    }, observerOptions);

    allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { href: "#vault", label: "Vault", icon: <FiFolder />, id: "vault" },
    {
      href: "#services",
      label: "Services",
      icon: <FiCpu />,
      id: "services",
    },
    { href: "#about", label: "About", icon: <FiUser />, id: "about" },
  ];

  return (
    <nav className="fixed left-1/2 z-100 w-full -translate-x-1/2 font-sans px-2">
      <div className="relative overflow-hidden w-full mx-auto px-6 py-1 md:py-3 shadow-2xl rounded-2xl top-[0.1] bg-transparent backdrop-blur-xl md:backdrop-blur-none">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-1">
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="group flex flex-col"
            >
              <span className="text-base font-bold tracking-tighter text-slate-50 md:text-xl">
                Durgesh <span className="hidden md:inline"> | </span>
                <br className="md:hidden" />
                <span className="text-slate-500 md:inline font-medium">
                  Software Architect
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3 rounded-full bg-slate-900/50 p-1.5 border border-white/5 backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    isActive={activeSection === link.id}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className={`hidden md:flex items-center gap-2 rounded-full border border-slate-700 px-6 py-2 text-sm font-bold transition-all ${
                activeSection === "contact"
                  ? "bg-[#00B8DB] text-slate-950 border-[#00B8DB]"
                  : "bg-transparent text-slate-500 hover:text-slate-950 hover:bg-[#00B8DB]"
              }`}
            >
              <FiLink size={18} /> Connect
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="relative z-110 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-slate-300 md:hidden border border-white/10 active:scale-90 transition-transform"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 90% 5%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-100 h-screen w-screen bg-slate-950/95 backdrop-blur-md md:hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-size-[40px_40px] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]" />

            <div className="flex h-full flex-col justify-center items-center px-10 text-center">
              <span className="mb-6 font-mono text-[10px] tracking-[0.4em] text-cyan-500 uppercase">
                System_Menu
              </span>

              <ul className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <button
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`text-sm font-bold tracking-tighter transition-colors duration-300 ${
                        activeSection === link.id
                          ? "text-[#00B8DB]"
                          : "text-slate-500"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className=" mt-6 w-full max-w-70 flex flex-col gap-4 border-t pt-6 border-cyan-200/20"
              >
                <button
                  aria-label="Contact Button"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className={`flex w-full items-center justify-center gap-1 rounded-2xl py-2 text-sm font-bold transition-all active:scale-[0.98] ${
                    activeSection === "contact"
                      ? "bg-[#00B8DB] text-slate-950 shadow-[0_0_25px_rgba(0,184,219,0.3)]"
                      : "bg-slate-900 text-white border border-white/10"
                  }`}
                >
                  Connect <FiLink size={15} />
                </button>

                {/* Cancel Button */}
                <button
                  aria-label="Cancel Button"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-xs font-mono text-slate-500 hover:text-white transition-colors"
                >
                  <FiX /> CANCEL_SESSION
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavLink = ({ href, label, isActive, icon, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={(e) => onClick(e, href.slice(1))}
    className={`relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
    }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 z-0 rounded-full bg-slate-800 border border-white/10"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <span className="relative z-10 text-base">{icon}</span>
    <span className="relative z-10">{label}</span>
  </Link>
);

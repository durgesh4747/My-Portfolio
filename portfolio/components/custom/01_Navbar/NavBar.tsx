"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiLink, FiFolder, FiUser, FiHome } from "react-icons/fi";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  icon: React.ReactNode; // Added icon prop
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "vault", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: <FiHome /> },
    { href: "#vault", label: "Vault", icon: <FiFolder /> },
    { href: "#about", label: "About", icon: <FiUser /> },
  ];

  return (
    <nav className="fixed left-1/2 z-100 w-full -translate-x-1/2 font-sans px-2">
      {/* --- Main Navbar Pill --- */}
      <div className="relative overflow-hidden w-full mx-auto px-6 py-1 md:py-3 shadow-2xl rounded-2xl top-[0.1] bg-transparent backdrop-blur-xl md:backdrop-blur-none">
        <div className="flex h-14 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1">
            <Link href="#home" className="group flex flex-col">
              <span className="text-base font-bold tracking-tighter text-slate-50 md:text-xl">
                Durgesh{" "}
                <span className="hidden text-slate-500 md:inline font-medium">
                  | Software Architect
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3 rounded-full bg-slate-900/50 p-1.5 border border-white/5 backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    isActive={activeSection === link.href.slice(1)}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button (Right) */}
          <div className="flex flex-1 justify-end items-center gap-4 ">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 rounded-full border border-slate-700 bg-transparent px-6 py-2 text-sm font-bold transition text-slate-500 hover:text-slate-950 hover:bg-[#00B8DB]"
            >
              <FiLink size={18} /> Connect
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-12 w-12 backdrop-blur-xl items-center justify-center rounded-full bg-slate-900 text-slate-300 md:hidden border border-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="mt-4 overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur-2xl md:hidden "
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href} onClick={() => setIsOpen(false)}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-4 rounded-2xl px-6 py-5 text-[0.7rem] transition-all ${
                      activeSection === link.href.slice(1)
                        ? "bg-slate-50 text-slate-950 font-bold"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span> {link.label}
                  </Link>
                </li>
              ))}
              <hr className="my-2 border-white/5" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#F5C16C] py-2 text-[0.7rem] font-bold text-slate-950 active:scale-95 transition-transform"
              >
                <FiLink size={20} /> Get in Touch
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Sub-Components ---

const NavLink = ({ href, label, isActive, icon }: NavLinkProps) => (
  <Link
    href={href}
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

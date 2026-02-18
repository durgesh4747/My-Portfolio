"use client";

import { useState } from "react";
import { Send, Terminal, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Web Development",
    budget: "",
    currency: "USD",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("System Request Initialized!");
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 flex justify-center bg-slate-950"
    >
      {/* 1. CONTAINER: max-w-4xl is the sweet spot (not too wide, not too narrow) */}
      <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* HEADER */}
        <div className="bg-slate-950/50 border-b border-slate-800 p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="font-mono text-xs text-cyan-400 flex items-center gap-2 bg-cyan-500/10 p-2 rounded border border-cyan-500/20">
              <Terminal size={12} />
              <span>contact_protocol.json</span>
            </div>
          </div>
        </div>

        {/* FORM BODY */}
        <form onSubmit={handleSubmit} className="p-6 md:p-12 font-mono text-sm">
          <div className="space-y-8 md:space-y-12">
            {/* ROW 1: IDENTITY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Name */}
              <div className="group relative">
                <label className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors">
                  Client_Identity
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-transparent border-b border-slate-700 py-3 text-lg text-white focus:outline-none transition-all placeholder:text-slate-600 border-l"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 group-focus-within:w-full transition-all duration-700" />
              </div>

              {/* Email */}
              <div className="group relative">
                <label className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors">
                  Contact_Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-b border-slate-700 py-3 text-lg text-white focus:outline-none transition-all placeholder:text-slate-600"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 group-focus-within:w-full transition-all duration-700" />
              </div>
            </div>

            {/* ROW 2: SPECS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
              {/* 1. Project Type */}
              <div className="group relative">
                <label className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-purple-400 transition-colors">
                  Project_Type
                </label>
                {/* FIXED HEIGHT CONTAINER: h-12 */}
                <div className="relative h-12 border-b border-slate-700 group-focus-within:border-purple-500 transition-colors duration-300">
                  <select
                    className="w-full h-full bg-transparent text-lg text-slate-400 focus:outline-none appearance-none cursor-pointer"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option className="bg-slate-900 text-slate-300">
                      Full Stack System
                    </option>
                    <option className="bg-slate-900 text-slate-300">
                      Backend Architecture
                    </option>
                    <option className="bg-slate-900 text-slate-300">
                      Frontend Experience
                    </option>
                    <option className="bg-slate-900 text-slate-300">
                      SaaS Development
                    </option>
                  </select>
                  <ChevronDown
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* 2. Budget & Currency Combined */}
              <div className="group relative">
                <label className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-emerald-400 transition-colors">
                  Budget_Estimate
                </label>

                {/* FIXED HEIGHT CONTAINER: h-12 (Matches Project Type Exactly) */}
                <div className="h-12 flex items-center border-b border-slate-700 group-focus-within:border-emerald-500 transition-colors duration-300">
                  {/* Currency Dropdown */}
                  <select
                    className="h-full bg-transparent text-emerald-400 font-bold text-lg outline-none appearance-none cursor-pointer pr-4"
                    onChange={(e) =>
                      setFormData({ ...formData, currency: e.target.value })
                    }
                    defaultValue="INR"
                  >
                    <option value="INR" className="bg-slate-900 text-slate-300">
                      INR
                    </option>
                    <option value="USD" className="bg-slate-900 text-slate-300">
                      USD
                    </option>
                    <option value="EUR" className="bg-slate-900 text-slate-300">
                      EUR
                    </option>
                    <option value="ETH" className="bg-slate-900 text-slate-300">
                      ETH
                    </option>
                  </select>

                  {/* Vertical Divider */}
                  <div className="h-6 w-[1px] bg-slate-700 mx-2" />

                  {/* Amount Input */}
                  <input
                    type="number"
                    placeholder="5000"
                    className="flex-1 h-full bg-transparent text-lg text-emerald-400 focus:outline-none  placeholder:text-slate-600 font-mono"
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* ROW 3: MESSAGE */}
            <div className="group relative">
              <label className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-yellow-400 transition-colors">
                Execution_Plan
              </label>
              <textarea
                rows={4}
                placeholder="Describe system requirements..."
                className="w-full bg-slate-900/30 border border-slate-700 rounded-xl p-4 text-white focus:outline-none  transition-all placeholder:text-slate-600 resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end pt-4">
              <button
                disabled={isSubmitting}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-xl flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-900/20"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Initialize_Project()</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

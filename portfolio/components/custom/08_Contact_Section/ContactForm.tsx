"use client";

import { useActionState, useEffect, useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { ContactFormState, sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactForm() {
  const [currency, setCurrency] = useState("GBP");
  const [budgetValue, setBudgetValue] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState,
  );

  const formatCommas = (val: string) => {
    const clean = val.replace(/[^\d\s-]/g, "");
    return clean.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent! I'll get back to you soon.");

      setTimeout(() => {
        setBudgetValue(null);
        setCurrency("INR");
        document.querySelector("form")?.reset();
      }, 0);
    }

    if (state?.message && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section
      id="contact_form"
      /* CHANGE: Removed bg-slate-950 and used bg-transparent so it doesn't clash with the section background */
      className="w-full py-8 md:py-16 px-0 flex justify-center bg-transparent"
    >
      <div className="w-full max-w-4xl bg-slate-900/20 backdrop-blur-md border border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl">
        {/* HEADER */}
        <div className="bg-slate-950/30 border-b border-slate-800/50 p-4 md:p-6">
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="flex gap-2" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <div className="font-mono text-xs p-2 text-cyan-400 flex items-center gap-2 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
              <span>Get In Touch</span>
            </div>
          </div>
        </div>

        {/* FORM BODY */}
        <form
          action={formAction}
          onSubmit={(e) => {
            if (!formAction) e.preventDefault();
          }}
          noValidate
          autoComplete="off"
          className="p-6 md:p-12 font-mono text-sm"
        >
          <div className="space-y-8 md:space-y-12">
            {/* ROW 1: IDENTITY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group relative">
                <label
                  htmlFor="client-identity"
                  className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors"
                >
                  Your Name
                </label>
                <div className="relative">
                  <input
                    id="security-honeypot"
                    type="text"
                    name="security_honeypot"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <input
                    id="client-identity"
                    required
                    name="name"
                    type="text"
                    defaultValue={state.data?.name || ""}
                    placeholder="Your Name"
                    className={`w-full bg-transparent border-b py-3 text-lg text-white focus:outline-none transition-all placeholder:text-slate-500 ${
                      state.errors?.name
                        ? "border-rose-500/50"
                        : "border-slate-700"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-[1.1px] w-0 group-focus-within:w-full transition-all duration-700 ${
                      state.errors?.name ? "bg-rose-500" : "bg-cyan-500"
                    }`}
                  />
                </div>
                {state.errors?.name && (
                  <p className="text-rose-500 text-[10px] font-mono uppercase mt-1">
                    {state.errors.name}
                  </p>
                )}
              </div>

              <div className="group relative">
                <label
                  htmlFor="contact-email"
                  className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    required
                    name="email"
                    type="email"
                    defaultValue={state.data?.email || ""}
                    placeholder="Your Email"
                    className={`w-full bg-transparent border-b py-3 text-lg text-white focus:outline-none transition-all placeholder:text-slate-500 ${
                      state.errors?.email
                        ? "border-rose-500/50"
                        : "border-slate-700"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-[1.1px] w-0 group-focus-within:w-full transition-all duration-700 ${
                      state.errors?.email ? "bg-rose-500" : "bg-cyan-500"
                    }`}
                  />
                </div>
                {state.errors?.email && (
                  <p className="text-rose-500 text-[10px] font-mono uppercase mt-1">
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 2: SPECS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
              <div className="group relative">
                <label
                  htmlFor="project-type"
                  className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-purple-400 transition-colors"
                >
                  Project Type
                </label>
                <div className="relative h-12 border-b border-slate-700 group-focus-within:border-purple-500 transition-colors duration-300">
                  <select
                    id="project-type"
                    className="w-full h-full bg-transparent text-lg text-slate-300 focus:outline-none appearance-none cursor-pointer p-2"
                    name="type"
                    key={state.data?.type || ""}
                    defaultValue={state.data?.type || ""}
                  >
                    <option value="" hidden disabled>
                      Select_Project_Type
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="Portfolio"
                    >
                      Personal Brand / Portfolio
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="Business"
                    >
                      Business / Company Website
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="E-commerce"
                    >
                      Online Store / Shop
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="Web App"
                    >
                      Custom Web App / Tool
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="Fix Existing Site"
                    >
                      Revamp / Fix Existing Site
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="Maintenance/Retainer"
                    >
                      Site Maintenance / Ongoing Support
                    </option>
                    <option
                      className="bg-slate-900 text-slate-300"
                      value="Other"
                    >
                      Other / Custom Project
                    </option>
                  </select>
                  <ChevronDown
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                    size={16}
                  />
                </div>
                {state.errors?.type && (
                  <p className="text-rose-500 text-[10px] font-mono uppercase mt-1">
                    {state.errors.type}
                  </p>
                )}
              </div>

              <div className="group relative">
                <label
                  htmlFor="budget-estimate"
                  className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-emerald-400 transition-colors"
                >
                  Estimated Budget
                </label>
                <div className="h-12 flex items-center border-b border-slate-700 group-focus-within:border-emerald-500 transition-colors duration-300">
                  <div className="relative h-full flex items-center">
                    <select
                      name="currency"
                      aria-label="select-currency"
                      key={state.data?.currency || "GBP"}
                      defaultValue={state.data?.currency || "GBP"}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="h-full bg-transparent text-emerald-400 font-bold text-lg outline-none appearance-none cursor-pointer pr-6 pl-2 z-10"
                    >
                      <option value="GBP" className="bg-slate-900">
                        GBP
                      </option>
                      <option value="USD" className="bg-slate-900">
                        USD
                      </option>
                      <option value="INR" className="bg-slate-900">
                        INR
                      </option>
                      <option value="EUR" className="bg-slate-900">
                        EUR
                      </option>
                      <option value="OTHER" className="bg-slate-900">
                        OTHER
                      </option>
                    </select>
                    <ChevronDown
                      size={12}
                      className="absolute right-1 text-emerald-600 pointer-events-none"
                    />
                  </div>
                  <div className="h-6 w-[1.1px] bg-slate-700 mx-2" />
                  <div className="relative flex-1 flex items-center">
                    <span className="absolute left-0 text-emerald-400 font-mono text-lg pointer-events-none">
                      {currency === "GBP"
                        ? "£"
                        : currency === "USD"
                          ? "$"
                          : currency === "INR"
                            ? "₹"
                            : currency === "EUR"
                              ? "€"
                              : "¤"}
                    </span>
                    <input
                      type="text"
                      name="budget"
                      id="budget-estimate"
                      value={
                        budgetValue ??
                        (state.data?.budget
                          ? formatCommas(state.data.budget)
                          : "")
                      }
                      onChange={(e) =>
                        setBudgetValue(formatCommas(e.target.value))
                      }
                      placeholder="500 - 3000"
                      className="w-full h-full bg-transparent pl-6 text-lg text-emerald-400 focus:outline-none placeholder:text-slate-700 font-mono"
                    />
                  </div>
                </div>
                {state.errors?.budget && (
                  <p className="text-rose-500 text-[10px] font-mono uppercase mt-1">
                    {state.errors.budget}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 3: MESSAGE */}
            <div className="group relative">
              <label
                htmlFor="message"
                className="text-xs text-white uppercase tracking-widest mb-2 block group-focus-within:text-yellow-400 transition-colors"
              >
                Project Details
              </label>
              <textarea
                rows={4}
                id="message"
                name="message"
                defaultValue={state.data?.message || ""}
                placeholder="Describe your project..."
                className="w-full bg-slate-950/20 border border-slate-700/50 rounded-xl p-4 text-white focus:outline-none transition-all placeholder:text-slate-500 resize-none"
              />
              {state.errors?.message && (
                <p className="text-rose-500 text-[10px] font-mono uppercase mt-1">
                  {state.errors.message}
                </p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center pt-4">
              <button
                disabled={isPending}
                className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-xl flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-900/20"
              >
                {isPending ? (
                  <span className="font-semibold">Processing...</span>
                ) : (
                  <>
                    <span className="text-white">Send Message</span>
                    <Send size={18} aria-hidden="true" />
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

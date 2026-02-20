import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-20 mb-20">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          Let&apos;s Build Something Amazing
        </h2>
        <h1 className="text-4xl font-bold text-white mb-6">Contact Details</h1>
        <p className="text-slate-400 text-lg">
          Let&apos;s get in touch and create something Amazing.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}

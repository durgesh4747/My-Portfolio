import Link from "next/link";

const testimonials = [
  {
    quote:
      "Being a designer, I'm super picky about pixels, but Durgesh nailed my portfolio site on the first try. Working with him was super easy, he hit every deadline, and best of all, the site is actually landing me new client work. Thanks Man",
    name: "Divyesh Parmar",
    role: "Graphic Designer",
    tag: "Portfolio & Brand Site",
    initials: "DP",
    href: "/vault/portfolio-for-graphics-designer",
  },
  {
    quote:
      "Working with Durgesh was smooth from start to finish. He built a clean, fast portfolio site for my video editing work and handled all the deployment effortlessly. Super helpful guy and easy to work with.",
    name: "Pranav Pargi",
    role: "Video Editor",
    tag: "Video Portfolio & CMS",
    initials: "PP",
    href: "/vault/portfolio-for-video-editor",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-[#020617] py-20 px-6"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <span className="text-cyan-500 text-[10px] tracking-[0.3em] uppercase">
          Client Feedback
        </span>
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-5xl text-white font-bold tracking-tight mb-6"
        >
          What people say
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Real results from projects deployed and optimized.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors select-none duration-300"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border cursor-default border-slate-700/60 text-slate-300 text-xs font-mono mb-6">
              {t.tag}
            </div>
            <p className="text-slate-200 text-base leading-relaxed mb-8">
              {t.quote}
            </p>
            <div className="flex items-center justify-between border-t pt-4 border-slate-800/60">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
              <Link
                href={t.href}
                aria-label={`View project for ${t.name}`}
                className="text-cyan-400 text-xs font-mono border border-cyan-500/30 rounded-xl px-3 py-1.5 hover:bg-cyan-500/50 hover:scale-102 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

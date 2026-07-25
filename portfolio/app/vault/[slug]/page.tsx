import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

async function getProject(slug: string) {
  const query = `*[_type == "work" && slug.current == $slug][0] {
    title,
    description,
    videoUrl,
    lighthouse,
    caseStudy,
    techStack,
    timeline,
    role,
    liveLink,
    githubLink
  }`;

  return client.fetch(
    query,
    { slug: slug || "" },
    { next: { revalidate: 60 } },
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) return notFound();

  const project = await getProject(slug);

  if (!project) return notFound();

  const getEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      let videoId = "";
      if (parsed.searchParams.get("v")) videoId = parsed.searchParams.get("v")!;
      if (parsed.hostname === "youtu.be") videoId = parsed.pathname.slice(1);
      if (parsed.pathname.includes("/shorts/"))
        videoId = parsed.pathname.split("/shorts/")[1];
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;
    } catch {
      return url;
    }
  };
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30">
      <nav className="fixed top-0 z-50 w-full px-6 py-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="/#vault"
            className="text-[10px] font-mono hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <span>
              <ArrowBigLeft />
            </span>{" "}
            BACK_TO_SITE
          </Link>
          <span className="hidden sm:block text-[10px] font-mono text-slate-600">
            STATUS: READING CASE STUDY
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 text-cyan-500 font-mono text-[10px] mb-4">
            Case Study of {project.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold flex justify-center text-center tracking-tight text-white mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg flex justify-center text-center text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {project.description}
          </p>
        </section>
        {/* Video */}
        {project.videoUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl mb-12">
            <iframe
              src={getEmbedUrl(project.videoUrl)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        )}
        {/* Case Study */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="md:col-span-2 space-y-10">
            <div className="space-y-4">
              <h3 className="text-[15px] font-mono text-cyan-500 uppercase tracking-widest">
                Case Study
              </h3>
              <div className="prose prose-invert text-[15px] prose-cyan max-w-none text-slate-400 leading-relaxed font-sans">
                {project.caseStudy ? (
                  <PortableText value={project.caseStudy} />
                ) : (
                  "System log empty."
                )}
              </div>
            </div>
            {/* Project Audit - Lighthouse Scores */}
            {project.lighthouse && (
              <div className="space-y-4 mb-10">
                <h3 className="text-[12px] md:text-[13px] font-mono text-cyan-500 uppercase tracking-[0.3em] flex items-center gap-2">
                  Recorded Performance Audit
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      label: "PERFORMANCE",
                      score: project.lighthouse.performance,
                    },
                    {
                      label: "ACCESSIBILITY",
                      score: project.lighthouse.accessibility,
                    },
                    {
                      label: "BEST PRACTICE",
                      score: project.lighthouse.bestPractices,
                    },
                    { label: "SEO", score: project.lighthouse.seo },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-sm"
                    >
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-[12px] font-mono tracking-tighter text-slate-200 uppercase">
                          {metric.label}
                        </span>
                        <span className="text-sm font-mono font-bold text-emerald-400">
                          {metric.score === 100 ? "100" : `${metric.score}+`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Tech Stack */}
            {project.techStack && (
              <div className="space-y-4">
                <h3 className="text-[12px] md:text-[13px] font-mono text-cyan-500 uppercase tracking-widest">
                  Tech Stack Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t: string) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-900 border border-slate-800 text-[12px] font-mono text-slate-200 hover:border-cyan-50 rounded-4xl cursor-default hover:scale-105"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Project Specification table */}
          <div className="space-y-8">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="mb-6 border-b border-slate-800 pb-4">
                <h3 className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em]">
                  Project_Specifications
                </h3>
              </div>
              <div className="space-y-4 mb-8 flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    TIMELINE
                  </span>
                  <span className="text-xs font-mono uppercase text-white">
                    {project.timeline || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    ROLE
                  </span>
                  <span className="text-xs font-mono uppercase text-white">
                    {project.role || "Architect"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    STATUS
                  </span>
                  <span className="text-xs font-mono uppercase text-emerald-300">
                    PRODUCTION
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="w-full py-3 bg-cyan-500 text-slate-950 text-[11px] font-bold rounded-lg text-center hover:bg-cyan-400 transition-all active:scale-95 "
                  >
                    LAUNCH_LIVE
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="w-full py-3 border border-slate-800 text-slate-400 text-[11px] font-bold rounded-lg text-center hover:text-white hover:border-slate-600 transition-all active:scale-95"
                  >
                    SOURCE_CODE
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section of page */}
        <section className="pt-24 pb-12 border-t border-slate-900 text-center space-y-10">
          <div className="space-y-3">
            <h4 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
              Ready to build your system?
            </h4>
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2"></span>
              <p className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-[0.3em]">
                Did you liked it? Or wanna explore more
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto px-6 sm:px-0">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-slate-950 font-black text-[11px] uppercase tracking-[0.15em] rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95 text-center"
            >
              Let&apos;s build!
            </Link>

            <Link
              href="/#vault"
              className="w-full sm:w-auto px-10 py-4 border border-slate-800 bg-slate-900/40 text-slate-400 font-bold text-[11px] uppercase tracking-[0.15em] rounded-xl hover:text-white hover:border-slate-600 hover:bg-slate-900 transition-all active:scale-95 text-center backdrop-blur-sm"
            >
              Continue_To_Vault
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

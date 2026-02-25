import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

async function getProject(slug: string) {
  const query = `*[_type == "work" && slug.current == $slug][0] {
    title,
    description,
    "videoUrl": clip.asset->url,
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
            BACK_TO_ARCHIVE
          </Link>
          <span className="hidden sm:block text-[10px] font-mono text-slate-600">
            STATUS: ENCRYPTED_ACCESS
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 text-cyan-500 font-mono text-[10px] mb-4">
            <span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
            DEPLOYMENT_LOG_047
          </div>
          <h1 className="text-4xl md:text-6xl font-bold flex justify-center tracking-tight text-white mb-4">
            {project.title} <span className="text-cyan-500">.</span>
          </h1>
          <p className="text-base md:text-lg flex justify-center text-center text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {project.description}
          </p>
        </section>

        {project.videoUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl mb-12">
            <iframe
              src={project.videoUrl}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="md:col-span-2 space-y-10">
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
                Case_Study
              </h3>
              <div className="prose prose-invert prose-cyan max-w-none text-slate-400 leading-relaxed font-sans">
                {project.caseStudy ? (
                  <PortableText value={project.caseStudy} />
                ) : (
                  "System log empty."
                )}
              </div>
            </div>

            {project.techStack && (
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
                  Stack_Initialization
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t: string) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-900 border hover:border-cyan-300 border-slate-800 rounded text-[10px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6">
              <h3 className="text-xs font-mono text-slate-100 mb-6 border-b border-slate-800 pb-2 uppercase">
                Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    TIMELINE
                  </span>
                  <span className="text-[10px] font-mono text-white">
                    {project.timeline || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    ROLE
                  </span>
                  <span className="text-[10px] font-mono text-white">
                    {project.role || "Architect"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    STATUS
                  </span>
                  <span className="text-[10px] font-mono text-emerald-500 underline">
                    PRODUCTION
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="block w-full text-center py-3 border bg-cyan-300 text-black md:bg-transparent border-slate-700 md:text-white hover:text-black md:hover:bg-cyan-400 text-xs font-bold rounded-2xl transition-colors"
                  >
                    LAUNCH_LIVE
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="block w-full text-center py-3 border bg-cyan-300 text-black md:bg-transparent border-slate-700 md:text-white hover:text-black md:hover:bg-cyan-400 text-xs font-bold rounded-2xl transition-colors"
                  >
                    SOURCE_CODE
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <section className="pt-20 border-t border-slate-900 text-center space-y-8">
          <div className="space-y-2">
            <h4 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter">
              Ready to build your system?
            </h4>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em]">
              Deployment slots available now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-cyan-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-cyan-500 transition-all"
            >
              Start Project &rarr;
            </Link>
            <Link
              href="/#vault"
              className="px-8 py-4 border border-slate-800 text-slate-400 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-900 transition-all"
            >
              Explore Other Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

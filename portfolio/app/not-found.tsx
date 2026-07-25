import NavBar from "@/components/custom/01_Navbar/NavBar";
import Footer from "@/components/custom/10_Footer_Section/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 font-mono relative overflow-hidden">
        <div className="z-10 text-center max-w-2xl mt-13">
          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-cyan-400 mb-4 tracking-tighter animate-pulse">
            404 <span className="text-white"></span>
            <span className="block text-2xl md:text-4xl mt-2">
              P A G E - N O T - F O U N D
            </span>
          </h1>

          {/* Divider */}
          <div className="w-full h-[1.1px] bg-cyan-900 my-8 flex items-center justify-center">
            <span className="bg-[#020617] px-4 text-xs text-cyan-700 tracking-[0.3em]">
              SYSTEM_ERROR_REPORT
            </span>
          </div>

          {/* Page not found info*/}
          <p className="text-white text-lg md:text-xl mb-12 leading-relaxed opacity-90">
            The requested <span className="text-cyan-400">page</span> could not
            be reached. The resource may have been removed or shifted to a
            secure directory.
          </p>

          {/* Reuturn Button*/}
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 rounded-2xl py-4 font-bold text-cyan-400 transition-all duration-200 border-2 border-cyan-400 hover:bg-cyan-100 hover:text-[#020617] active:scale-95"
          >
            <span className="relative">
              [ RETURN TO THE ARCHITECT&apos;S PROFILE ]
            </span>
            <div className="absolute -inset-0.5 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-sm transition duration-200"></div>
          </Link>

          {/* Sub Footer */}
          <div className="mt-16 text-[10px] text-cyan-900 uppercase tracking-widest">
            Status: Disconnected
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

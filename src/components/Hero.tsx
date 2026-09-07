import { ArrowRight, Terminal } from "lucide-react";

const Hero = () => (
  <section className="bg-black min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto text-center space-y-8">

      {/* Status pill */}
      <div className="animate-in flex justify-center">
        <span className="status-pill">System Status: Work In-Progress</span>
      </div>

      {/* Headline */}
      <h1 className="animate-in-1 font-extrabold tracking-tight leading-[1.1] text-white">
        <span className="block text-[clamp(24px,5.2vw,60px)] text-white sm:whitespace-nowrap">
          Cloud-Native Network
        </span>
        <span className="block text-[clamp(24px,5.2vw,60px)] text-white sm:whitespace-nowrap">
          Infrastructure <span className="text-[#00e5cc]">Intelligently</span>
        </span>
        <span className="block text-[clamp(24px,5.2vw,60px)] text-[#00e5cc] sm:whitespace-nowrap">
          Accelerated. AI-Ready.
        </span>
      </h1>

      {/* Subtext */}
      <p className="animate-in-2 text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
        Empower network accelerators to foster a ready-to-plug-in cloud-native
        platform for driving AI workload innovation.
      </p>

      {/* CTAs */}
      <div className="animate-in-3 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="/p4-sandbox"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00e5cc] text-black text-xs sm:text-sm font-semibold hover:bg-[#00cbb5] transition-colors shadow-lg shadow-[#00e5cc]/10"
        >
          Innovation Sandbox <ArrowRight size={15} />
        </a>
        <a
          href="#"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-zinc-800 text-zinc-400 font-mono text-xs sm:text-sm hover:text-white hover:border-zinc-700 transition-colors"
        >
          <Terminal size={14} /> Live Playground
        </a>
      </div>

    </div>
  </section>
);

export default Hero;

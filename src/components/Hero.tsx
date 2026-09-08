const Hero = () => (
  <section className="bg-black min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto text-center space-y-8">

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

      {/* Coming Soon */}
      <div className="animate-in-3 flex justify-center pt-2">
        <span className="px-8 py-3 rounded-full bg-[#00e5cc]/10 border border-[#00e5cc]/30 text-[#00e5cc] text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase shadow-xl shadow-[#00e5cc]/10">
          Coming Soon
        </span>
      </div>

    </div>
  </section>
);

export default Hero;

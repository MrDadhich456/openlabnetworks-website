import React from "react";
import { Terminal, Lightbulb, Network } from "lucide-react";

const features = [
  { icon: Terminal, title: "Browser-Based Labs", desc: "No setup required. Spin up complex environments in seconds directly from your browser." },
  { icon: Lightbulb, title: "Project-Based Learning", desc: "Don't just watch tutorials. Build real infrastructure and solve production incidents." },
  { icon: Network, title: "AI-Ready Networks", desc: "Learn to design and deploy networks optimized for AI workloads and next-gen architectures." },
];

const FeaturesSection: React.FC = () => (
  <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900 font-sans">
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-3 max-w-xl">
        <span className="status-pill">Why Choose Us</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Built for the future of networking
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          We don't teach syntax; we teach you how to think and build like a Senior Network Systems Engineer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-6 space-y-4 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00e5cc]/10 border border-[#00e5cc]/20 flex items-center justify-center text-[#00e5cc] group-hover:scale-105 transition-transform">
              <f.icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

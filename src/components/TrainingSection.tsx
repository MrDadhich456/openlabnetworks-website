import React from "react";
import { BookOpen, Users, Microscope } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "For Students", sub: "Build a Solid Networking Foundation", desc: "Comprehensive introduction to networking fundamentals, equipping students with the skills to excel." },
  { icon: Microscope, title: "For Researchers", sub: "Accelerate Networking Research", desc: "Leverage our sandbox ecosystem to spin up testing environments for P4 architectures and DPU offloads." },
  { icon: Users, title: "For Professionals", sub: "Simulate NGNs in Production", desc: "Architect novel approaches guided by cutting-edge research. Test, verify, and incorporate DPU acceleration." },
];

const TrainingSection: React.FC = () => (
  <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900 font-sans">
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-3 max-w-xl">
        <span className="status-pill">Training Programs</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Elevate your networking skills
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Comprehensive hands-on labs with interactive P4 and SmartNIC sandboxes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {programs.map((p, i) => (
          <div
            key={i}
            className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-6 space-y-4 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00e5cc]/10 border border-[#00e5cc]/20 flex items-center justify-center text-[#00e5cc] group-hover:scale-105 transition-transform">
              <p.icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-0.5">{p.title}</h3>
              <p className="text-xs font-mono text-[#00e5cc] mb-2">{p.sub}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;

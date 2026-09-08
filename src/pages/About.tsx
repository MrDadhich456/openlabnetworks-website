import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About: React.FC = () => (
  <div className="bg-black text-white min-h-screen font-sans">
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="status-pill">About Us</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The <span className="text-[#00e5cc]">OpenLab Network</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Cloud-Native Network Infrastructure. Intelligently Accelerated. AI-Ready.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 space-y-3">
          <h2 className="text-base font-bold text-white">Our Mission</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            OpenLabNetwork exists to make SmartNIC and AI infrastructure networking accessible to everyone.
            We provide a shared, browser-accessible platform where engineers, researchers, and platform teams can build, test, and deploy P4-programmable data planes on real silicon — without hardware procurement or configuration overhead.
          </p>
        </div>

        {/* What We Build */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-white">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "SmartNIC Sandbox", desc: "Browser-accessible BlueField-3, AMD Pensando, and Intel IPU sandboxes for P4 development." },
              { label: "Unified P4 Toolchain", desc: "Compiler pipeline targeting ASIC, FPGA, and software switch targets seamlessly." },
              { label: "AI Cluster Interconnect", desc: "RoCEv2 fabric simulation, in-network acceleration, and GPUDirect I/O offload labs." },
            ].map((item) => (
              <div key={item.label} className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5 space-y-2">
                <div className="w-2 h-2 rounded-full bg-[#00e5cc]" />
                <h3 className="text-xs font-bold text-white">{item.label}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-white">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Network Engineers", d: "Test SmartNIC architectures before silicon arrives. Validate P4 pipelines in real sandbox environments." },
              { t: "AI/ML Researchers", d: "Benchmark GPU cluster network performance. Explore RoCEv2 tuning and in-network operators." },
              { t: "Platform Teams", d: "Simulate cloud-native network functions, CNI offload strategies, and zero-trust DPU policies." },
            ].map((item) => (
              <div key={item.t} className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5 space-y-2">
                <h3 className="text-xs font-bold text-[#00e5cc]">{item.t}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default About;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Layers, GitBranch, Cpu, Network } from "lucide-react";

const layers = [
  { icon: Network, lbl: "01 — Network Fabric", title: "Cloud-Native Underlay", body: "High-throughput VXLAN/EVPN fabric with eBPF-accelerated forwarding. Supports 400G leaf-spine topologies with sub-microsecond latency.", tags: ["VXLAN", "EVPN", "eBPF", "ECMP"] },
  { icon: Cpu, lbl: "02 — Data Plane", title: "P4-Programmable Pipeline", body: "Custom P4 programs compiled to ASIC, FPGA, and software targets via a unified toolchain. Runtime control through P4Runtime gRPC API.", tags: ["P4", "P4Runtime", "ASIC", "FPGA"] },
  { icon: GitBranch, lbl: "03 — Control Plane", title: "Distributed SDN Controller", body: "Multi-cluster SDN control using gRPC-based southbound interfaces. Supports OpenConfig telemetry streaming and intent-based policy.", tags: ["gRPC", "OpenConfig", "SDN", "Intent-Based"] },
  { icon: Layers, lbl: "04 — AI Orchestration", title: "AI Workload Integration", body: "Native integration with NVIDIA DOCA, ROCm, and OneAPI. Network-aware scheduling for GPU clusters with RDMA over Converged Ethernet.", tags: ["DOCA", "ROCm", "RoCEv2", "RDMA"] },
];

const Architecture: React.FC = () => (
  <div className="bg-black text-white min-h-screen font-sans">
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3 max-w-xl">
          <span className="status-pill">Architecture</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            System <span className="text-[#00e5cc]">Architecture</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            A layered, disaggregated architecture built for programmability at every level — from silicon to orchestration.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((l, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-6 space-y-3 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00e5cc]/10 border border-[#00e5cc]/20 flex items-center justify-center text-[#00e5cc] shrink-0 group-hover:scale-105 transition-transform">
                  <l.icon size={20} />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{l.lbl}</p>
                  <h3 className="text-base font-bold text-white mb-1">{l.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{l.body}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {l.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default Architecture;

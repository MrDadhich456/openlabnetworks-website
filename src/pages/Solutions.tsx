import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const solutions = [
  { tag: "AI Infrastructure", title: "AI Cluster Networking", desc: "End-to-end SmartNIC acceleration for GPU cluster interconnects. Reduce AI training time with in-network collective operations and RDMA offload.", features: ["RoCEv2 RDMA", "In-network AllReduce", "GPUDirect Support", "Zero-copy I/O"] },
  { tag: "Cloud Native", title: "Cloud-Native Network Functions", desc: "Virtualized network functions running on OpenLab's P4-programmable substrate. Replace legacy hardware with software-defined equivalents.", features: ["vRouter", "vFirewall", "vLoad Balancer", "Service Mesh Integration"] },
  { tag: "Security", title: "Zero-Trust Network Security", desc: "Cryptographic identity and micro-segmentation enforced in the data plane. IPSec and mTLS offloaded to SmartNIC at line rate.", features: ["IPSec Offload", "mTLS at Scale", "Microsegmentation", "Identity-Based Policy"] },
  { tag: "Telemetry", title: "In-Network Telemetry", desc: "INT (In-band Network Telemetry) at 400G line rate with per-flow visibility. Export to Prometheus, OpenTelemetry, or custom sinks.", features: ["INT Metadata", "Per-Flow Stats", "OpenTelemetry", "Sub-ms Latency"] },
];

const Solutions: React.FC = () => (
  <div className="bg-black text-white min-h-screen font-sans">
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="space-y-3 max-w-xl">
          <span className="status-pill">Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What we <span className="text-[#00e5cc]">solve</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Purpose-built solutions for AI infrastructure, cloud-native network functions, and programmable data planes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-colors group"
            >
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00e5cc]/10 border border-[#00e5cc]/30 text-[#00e5cc] text-[10px] font-mono">
                  {s.tag}
                </span>
                <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1.5 border-t border-zinc-900 pt-3">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e5cc] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-xs font-semibold text-[#00e5cc] group-hover:underline cursor-pointer">
                  Learn more <ArrowRight size={13} />
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

export default Solutions;

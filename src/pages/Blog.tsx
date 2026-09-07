import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tagColor: Record<string, string> = {
  "SmartNIC": "#00e5cc",
  "P4": "#60a5fa",
  "AI Infra": "#c084fc",
  "RoCEv2": "#fb923c",
  "Security": "#fbbf24",
  "Kubernetes": "#34d399",
};

const posts = [
  { date: "Sep 1, 2026", tag: "SmartNIC", title: "BlueField-3 vs Pensando Elba: SmartNIC Architecture Deep Dive", excerpt: "Side-by-side technical comparison of NVIDIA BlueField-3 DOCA SDK and AMD Pensando Elba P4_10 toolchain capabilities for AI cluster networking.", rt: "12 min" },
  { date: "Aug 20, 2026", tag: "P4", title: "Writing Your First In-Band Telemetry Pipeline in P4_16", excerpt: "A step-by-step tutorial on implementing INT (In-band Network Telemetry) with per-flow metadata collection at 400G line rate.", rt: "9 min" },
  { date: "Aug 8, 2026", tag: "AI Infra", title: "RoCEv2 Tuning for 8-GPU Training Clusters: A Practical Guide", excerpt: "How to configure DCQCN congestion control, ECN marking thresholds, and lossless fabric for distributed deep learning workloads.", rt: "11 min" },
  { date: "Jul 25, 2026", tag: "P4", title: "Compiling P4 Programs to AMD Pensando Elba ASIC with OpenLab", excerpt: "End-to-end walkthrough of writing a stateful firewall in P4, compiling with the P4_10 toolchain, and deploying to Elba SoC via OpenLab sandbox.", rt: "8 min" },
  { date: "Jul 10, 2026", tag: "Security", title: "Zero-Trust SmartNIC: IPSec and mTLS Offload at Line Rate", excerpt: "Implementing per-flow cryptographic identity and micro-segmentation policies enforced in the SmartNIC data plane without CPU involvement.", rt: "10 min" },
  { date: "Jun 28, 2026", tag: "AI Infra", title: "In-Network AllReduce: Eliminating the CPU from Distributed Training", excerpt: "How SmartNIC-accelerated collective communications reduce GPU idle time by up to 40% in large-scale AI training clusters.", rt: "13 min" },
  { date: "Jun 15, 2026", tag: "Kubernetes", title: "Offloading Kubernetes Network Policies to BlueField-3 DPU", excerpt: "Using OpenLab's CNI plugin to translate Kubernetes network policies into P4 pipeline rules executed at hardware speed on BlueField-3.", rt: "7 min" },
  { date: "Jun 2, 2026", tag: "RoCEv2", title: "GPUDirect RDMA over Converged Ethernet: Topology and Tuning", excerpt: "Designing a leaf-spine fabric for lossless RoCEv2 traffic between GPU nodes, including buffer sizing and PFC configuration.", rt: "9 min" },
];

const Blog: React.FC = () => (
  <div className="bg-black text-white min-h-screen font-sans">
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3 max-w-2xl">
          <span className="status-pill">Blog</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SmartNIC &amp; <span className="text-[#00e5cc]">AI Infra Insights</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Technical deep dives on P4 programming, SmartNIC silicon, RoCEv2 fabric design, and cloud-native network acceleration.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((p, i) => (
            <article
              key={i}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-5 space-y-3 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-mono border"
                    style={{
                      borderColor: `${tagColor[p.tag] ?? "#fff"}40`,
                      color: tagColor[p.tag] ?? "#fff",
                      backgroundColor: `${tagColor[p.tag] ?? "#fff"}15`,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">{p.date}</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">{p.rt}</span>
              </div>

              <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00e5cc] transition-colors leading-snug">
                {p.title}
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default Blog;

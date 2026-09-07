import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Cpu, Network, Zap, ArrowRight, Clock, Users, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    icon: Cpu,
    tag: "Track 01",
    title: "SmartNIC Fundamentals",
    subtitle: "From silicon to pipeline",
    level: "Beginner → Intermediate",
    hours: "12 hrs",
    modules: [
      "SmartNIC vs Traditional NIC Architecture",
      "DPU, IPU & FPGA-based SmartNIC Comparison",
      "DOCA SDK Setup on BlueField-3",
      "Data-plane Programming Basics",
      "Offloading OVS to SmartNIC",
    ],
  },
  {
    icon: Network,
    tag: "Track 02",
    title: "P4 Programmable Data Planes",
    subtitle: "Write, compile, deploy",
    level: "Intermediate",
    hours: "18 hrs",
    modules: [
      "P4 Language Fundamentals & Type System",
      "Compiling P4 to BMv2 Software Switch",
      "Targeting AMD Pensando Elba SoC",
      "P4Runtime gRPC Control Plane APIs",
      "In-band Network Telemetry (INT) with P4",
    ],
  },
  {
    icon: Zap,
    tag: "Track 03",
    title: "AI Infrastructure Networking",
    subtitle: "GPU clusters & RoCE",
    level: "Advanced",
    hours: "14 hrs",
    modules: [
      "RoCEv2 & RDMA Fundamentals",
      "GPUDirect & NVLink Network Topologies",
      "In-network AllReduce for Distributed Training",
      "Zero-copy I/O Offload with DOCA",
      "Benchmarking AI Cluster Network Throughput",
    ],
  },
  {
    icon: BookOpen,
    tag: "Track 04",
    title: "Cloud-Native Network Functions",
    subtitle: "P4-based vNF development",
    level: "Intermediate → Advanced",
    hours: "10 hrs",
    modules: [
      "vRouter on SmartNIC with P4",
      "vFirewall: Stateful Packet Inspection",
      "Service Mesh Sidecar Offload",
      "Multi-tenant Isolation with NVMe-oF",
      "Kubernetes CNI Integration",
    ],
  },
];

const labs = [
  { title: "BlueField-3 Sandbox", desc: "Full DOCA SDK environment, live on real hardware.", tag: "Live Hardware" },
  { title: "P4 Software Switch Lab", desc: "BMv2 in-browser for instant P4 prototyping.", tag: "Instant" },
  { title: "AI Cluster Simulation", desc: "Simulated 8-GPU node with RoCEv2 fabric.", tag: "Simulation" },
  { title: "AMD Pensando Elba Lab", desc: "P4_10 compiler + flow-tracking pipeline.", tag: "Live Hardware" },
];

const stats = [
  { v: "4", l: "Curated tracks" },
  { v: "54+", l: "Hands-on modules" },
  { v: "1:1", l: "Live mentoring" },
  { v: "400G", l: "Line-rate labs" },
];

const Training: React.FC = () => (
  <div className="bg-black text-white min-h-screen font-sans">
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-12 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="status-pill">Training Programs</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Master the infrastructure that <span className="text-[#00e5cc]">powers AI at scale</span>
        </h1>
        <p className="text-xs sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Hands-on training programs covering SmartNIC programming, P4 data planes, RoCEv2 fabric, and cloud-native network functions — all run on real silicon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#tracks"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00e5cc] text-black font-semibold text-xs sm:text-sm hover:bg-[#00cbb5] transition-colors"
          >
            Browse Tracks <ArrowRight size={14} />
          </a>
          <Link
            to="/p4-sandbox"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full border border-zinc-800 text-zinc-300 font-mono text-xs sm:text-sm hover:text-white hover:border-zinc-700 transition-colors"
          >
            Open P4 Sandbox
          </Link>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="border-y border-zinc-900 py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((s, i) => (
          <div key={i} className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#00e5cc] font-mono tracking-tight">{s.v}</p>
            <p className="text-xs font-mono text-zinc-400">{s.l}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Learning tracks */}
    <section id="tracks" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3 max-w-xl">
          <span className="status-pill">Learning Tracks</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Four specialized tracks
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Each track is built around real production scenarios — not slides. Every module includes a browser-accessible lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#00e5cc]/10 border border-[#00e5cc]/20 flex items-center justify-center text-[#00e5cc]">
                    <t.icon size={20} />
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{t.tag}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">{t.title}</h3>
                  <p className="text-xs font-semibold text-[#00e5cc]">{t.subtitle}</p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {t.hours}</span>
                  <span className="flex items-center gap-1.5"><BarChart2 size={12} /> {t.level}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  {t.modules.map((m, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e5cc] shrink-0 mt-1.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-semibold text-[#00e5cc] group-hover:underline cursor-pointer">
                Start Track <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Labs */}
    <section className="py-12 px-4 sm:px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <span className="status-pill">Lab Environments</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Real hardware. Browser access.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {labs.map((l, i) => (
            <div key={i} className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#00e5cc]/10 border border-[#00e5cc]/30 text-[#00e5cc] text-[10px] font-mono">
                {l.tag}
              </span>
              <h3 className="text-xs font-bold text-white">{l.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mentoring CTA */}
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-[#00e5cc] text-xs font-mono uppercase tracking-wider">
            <Users size={16} /> Live Mentoring
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            One-on-one sessions with SmartNIC engineers
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Book 1:1 sessions with engineers who work on BlueField, Pensando, and P4 pipelines in production.
          </p>
        </div>

        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00e5cc] text-black text-xs sm:text-sm font-semibold hover:bg-[#00cbb5] transition-colors shrink-0"
        >
          Book a Session <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Training;

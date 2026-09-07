import React, { useState } from "react";
import { ArrowUpRight, Cpu, Cloud, GitMerge, Layers, Handshake } from "lucide-react";
import PartnerModal from "./PartnerModal";

const CYAN = "#00e5cc";

const categories = [
  { key: "silicon", label: "Silicon",     icon: Cpu },
  { key: "cloud",   label: "Cloud",       icon: Cloud },
  { key: "open",    label: "Open Source", icon: GitMerge },
  { key: "stack",   label: "Software",    icon: Layers },
];

const partnersData: Record<string, {
  abbr: string;
  company: string;
  type: string;
  title: string;
  desc: string;
  tags: string[];
}[]> = {
  silicon: [
    {
      abbr: "NV",
      company: "NVIDIA Mellanox",
      type: "BlueField-3 DPU",
      title: "DOCA SDK & P4 Acceleration",
      desc: "Run P4 programs and benchmark RoCEv2 AI cluster flows directly on BlueField-3 targets.",
      tags: ["DOCA SDK", "RoCEv2", "400G"],
    },
    {
      abbr: "AMD",
      company: "AMD Pensando",
      type: "Elba & Pollara DPU",
      title: "P4_10 Compiler Sandbox",
      desc: "Stateful telemetry and packet processing pipelines compiled to Pensando Elba ASICs.",
      tags: ["P4_10", "400G Line Rate", "Flow Table"],
    },
    {
      abbr: "INTC",
      company: "Intel IPU Labs",
      type: "Mount Evans IPU",
      title: "Virtual Infrastructure Lab",
      desc: "Multi-tenant cloud isolation and NVMe-oF target offload testing.",
      tags: ["NVMe-oF", "OVS Offload", "IDPF"],
    },
  ],
  cloud: [
    {
      abbr: "GCP",
      company: "Google Cloud",
      type: "GKE Acceleration",
      title: "SmartNIC Toolchain on GKE",
      desc: "P4 pipeline compiler and eBPF-to-SmartNIC offload integrated with GKE nodes.",
      tags: ["GKE", "eBPF CNI", "AI Clusters"],
    },
    {
      abbr: "AWS",
      company: "Amazon Web Services",
      type: "Nitro Compatibility",
      title: "Nitro System Abstraction",
      desc: "Cross-cloud P4Runtime abstraction layer bridging AWS Nitro cards.",
      tags: ["Nitro", "P4Runtime", "VPC Line Rate"],
    },
    {
      abbr: "AZR",
      company: "Microsoft Azure",
      type: "AccelNet FPGA",
      title: "FPGA-Backed SmartNIC",
      desc: "FPGA acceleration testing for AI training interconnects and RDMA offloads.",
      tags: ["AccelNet", "FPGA", "RDMA"],
    },
  ],
  open: [
    {
      abbr: "P4",
      company: "P4.org",
      type: "Standards Body",
      title: "P4 Language & Runtime",
      desc: "Sandbox environments for executing P4_16 programs on heterogeneous targets.",
      tags: ["P4_16", "P4Runtime", "gRPC"],
    },
    {
      abbr: "OVS",
      company: "Open vSwitch",
      type: "Datapath Offload",
      title: "OVS Hardware Switching",
      desc: "OpenFlow rules compiled to P4 pipelines offloaded to 400G SmartNIC silicon.",
      tags: ["OpenFlow", "OVS-DPDK", "0% CPU"],
    },
    {
      abbr: "OTL",
      company: "OpenTelemetry",
      type: "In-Band Telemetry",
      title: "Line-Rate INT Exporter",
      desc: "Sub-microsecond per-hop packet metrics streamed via OpenTelemetry OTLP.",
      tags: ["INT Telemetry", "OTLP", "Prometheus"],
    },
  ],
  stack: [
    {
      abbr: "K8s",
      company: "Kubernetes CNI",
      type: "Container Offload",
      title: "SmartNIC-Aware CNI",
      desc: "Expose DPU pipeline APIs to Kubernetes network security and load balancing.",
      tags: ["CNI Plugin", "Network Policy", "DPU Offload"],
    },
    {
      abbr: "DCK",
      company: "DPDK & SPDK",
      type: "Data Plane SDK",
      title: "Hardware Pipeline Compiler",
      desc: "DPDK & SPDK storage routines compiled and offloaded directly to SmartNIC ASICs.",
      tags: ["DPDK 22.11", "SPDK", "Zero-Copy"],
    },
    {
      abbr: "eBPF",
      company: "eBPF / XDP",
      type: "Kernel Datapath",
      title: "eBPF → P4 Offload Bridge",
      desc: "Translate eBPF/XDP programs into native hardware P4 pipelines.",
      tags: ["eBPF", "XDP", "P4 Bridge"],
    },
  ],
};

export const PartnershipSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("silicon");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const partners = partnersData[activeCategory] ?? [];

  return (
    <section className="bg-black text-white py-20 px-6 border-t border-zinc-900 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="status-pill">Partnership Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            SmartNIC <span className="text-[#00e5cc]">Partner Integrations</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            Reciprocal validation across silicon targets, cloud providers, and open-source data planes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map(({ key, label, icon: Icon }) => {
            const active = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  active
                    ? "bg-[#00e5cc] text-black font-semibold shadow-md"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                <Icon size={14} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-xs font-mono text-[#00e5cc]">
                      {p.abbr}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white">{p.company}</h3>
                      <p className="text-[10px] font-mono text-zinc-500">{p.type}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">{p.title}</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer CTA */}
        <div className="pt-4 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00e5cc] text-black font-semibold text-xs hover:bg-[#00cbb5] transition-colors"
          >
            <Handshake size={15} /> Partner With Us
          </button>
        </div>

      </div>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PartnershipSection;

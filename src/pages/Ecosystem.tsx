import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/PartnershipSection";
import { Handshake } from "lucide-react";
import PartnerModal from "@/components/PartnerModal";

const stats = [
  { v: "12+",  l: "Integrations" },
  { v: "400G", l: "Line Rate" },
  { v: "3",    l: "Hyperscalers" },
  { v: "Open", l: "P4 Toolchain" },
];

const Ecosystem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Page Hero Header */}
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-900">
            <div className="space-y-2 max-w-xl">
              <span className="status-pill">Partnership Ecosystem</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                SmartNIC <span className="text-[#00e5cc]">Ecosystem</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                Connecting SmartNIC silicon, cloud providers, and AI infrastructure stacks.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#00e5cc] text-black font-semibold text-xs hover:bg-[#00cbb5] transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <Handshake size={15} /> Partner With Us
            </button>
          </div>

          {/* Minimal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 text-center space-y-0.5"
              >
                <p className="text-2xl font-extrabold text-[#00e5cc] font-mono tracking-tight">{s.v}</p>
                <p className="text-xs font-mono text-zinc-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directory Cards */}
        <PartnershipSection />
      </main>

      <Footer />
      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Ecosystem;

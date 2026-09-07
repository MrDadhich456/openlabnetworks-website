import React, { useState } from "react";
import { Handshake, ShieldCheck, Cpu, ArrowRight, X } from "lucide-react";
import { toast } from "sonner";

interface PartnerModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ children, isOpen: externalOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    workEmail: "",
    collabType: "reciprocal_services",
    serviceDescription: "",
  });

  const isModalOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const handleClose = () => {
    if (onClose) onClose();
    else setInternalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.workEmail) {
      toast.error("Please provide both company name and official work email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClose();
      toast.success("Partnership inquiry submitted successfully!", {
        description: `Our ecosystem team will reach out to ${formData.workEmail} within 24 hours.`,
      });
      setFormData({
        companyName: "",
        workEmail: "",
        collabType: "reciprocal_services",
        serviceDescription: "",
      });
    }, 800);
  };

  return (
    <>
      {children && (
        <div onClick={() => setInternalOpen(true)} className="inline-block cursor-pointer">
          {children}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in">
          <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-zinc-100">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[#00e5cc] text-xs font-mono mb-2 uppercase tracking-widest">
                <Cpu size={14} /> Reciprocal Partner Program
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Join the OpenLab Partner Ecosystem
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Feature your SmartNIC silicon, cloud infrastructure, or AI networking stack on OpenLab, and access our interactive P4 sandboxes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1 font-mono">
                  Organization / Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mellanox / Pensando / Cloud Scale"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00e5cc] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1 font-mono">
                  Official Business Email
                </label>
                <input
                  type="email"
                  placeholder="partnerships@organization.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00e5cc] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1 font-mono">
                  Collaboration Model
                </label>
                <select
                  value={formData.collabType}
                  onChange={(e) => setFormData({ ...formData, collabType: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00e5cc] transition-colors"
                >
                  <option value="reciprocal_services">Reciprocal Service Listing (Dual Showcase)</option>
                  <option value="smartnic_offload">SmartNIC / DPU Hardware Acceleration Lab</option>
                  <option value="ai_infra_cloud">AI Infrastructure & LLM Interconnect Testbed</option>
                  <option value="p4_research">Open-Source P4 / eBPF R&D Co-Innovation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1 font-mono">
                  Technology Overview & Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your hardware targets, P4 toolchains, or cloud integration requirements..."
                  value={formData.serviceDescription}
                  onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00e5cc] transition-colors"
                />
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300">
                <ShieldCheck size={16} className="text-[#00e5cc] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Reciprocal Guarantee:</strong> Approved partners gain featured placement on OpenLab&apos;s directory and direct sandbox API access.
                </span>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-[#00e5cc] text-black hover:bg-[#00cbb5] transition-colors"
                >
                  {loading ? "Submitting..." : (
                    <>
                      Submit Application <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerModal;

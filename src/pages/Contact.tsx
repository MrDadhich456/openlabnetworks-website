import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Github, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch soon.");
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="space-y-3 max-w-xl">
            <span className="status-pill">Contact</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get in <span className="text-[#00e5cc]">touch</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Questions about partnerships, sandbox access, or SmartNIC integrations? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e5cc] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e5cc] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your SmartNIC or AI infra requirements..."
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e5cc] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#00e5cc] text-black font-semibold text-xs hover:bg-[#00cbb5] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={14} /> {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>

            {/* Direct Channels */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email us", val: "hello@openlabnetworks.io", href: "mailto:hello@openlabnetworks.io" },
                { icon: Github, label: "Open Source", val: "github.com/openlabnetworks", href: "https://github.com" },
                { icon: Twitter, label: "Follow us", val: "@openlabnetworks", href: "https://twitter.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-950 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-5 flex items-center gap-4 transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00e5cc]/10 border border-[#00e5cc]/20 flex items-center justify-center text-[#00e5cc] group-hover:scale-105 transition-transform shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs font-semibold text-white group-hover:text-[#00e5cc] transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home",        to: "/" },
  { label: "About Us",    to: "/about" },
  { label: "Training",    to: "/training" },
  { label: "Blog",        to: "/blog" },
  { label: "Partnership", to: "/ecosystem" },
  { label: "Contact",     to: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-5 px-6 pointer-events-none"
      style={{
        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative pointer-events-auto">

        {/* ── Brand Logo ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/openlabnetworks-favicon-white.png"
            alt="OpenLab Networks Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base tracking-tight font-mono">
              OPENLAB <span className="text-[#00e5cc]">NETWORKS</span>
            </span>
            <span className="text-[9px] font-mono text-zinc-500 tracking-wider">
              AI INFRA &amp; SMARTNIC
            </span>
          </div>
        </Link>

        {/* ── Center Floating Pill ── */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <nav className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 px-6 py-2.5 rounded-full flex items-center gap-6 text-xs font-medium text-zinc-400 shadow-2xl">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`transition-colors whitespace-nowrap ${
                    active
                      ? "text-white font-semibold"
                      : "hover:text-[#00e5cc]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ── Right Action Buttons ── */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
          >
            Docs
            <ArrowUpRight className="h-3.5 w-3.5 text-[#00e5cc]" />
          </a>
          <Link
            to="/p4-sandbox"
            className="bg-[#00e5cc] text-black px-5 py-2 rounded-full font-semibold text-xs hover:bg-[#00cbb5] transition-colors shadow-sm"
          >
            Launch Sandbox
          </Link>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          className="lg:hidden text-white p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile Nav Dropdown ── */}
      {isOpen && (
        <div className="lg:hidden mt-3 p-5 rounded-2xl bg-zinc-950/95 border border-zinc-800 backdrop-blur-xl space-y-1 pointer-events-auto shadow-2xl">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  active
                    ? "text-[#00e5cc] bg-zinc-900"
                    : "text-slate-300 hover:text-[#00e5cc] hover:bg-zinc-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to="/p4-sandbox"
              className="block w-full bg-[#00e5cc] text-black py-2.5 rounded-full font-semibold text-xs text-center hover:bg-[#00cbb5] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Launch Sandbox
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


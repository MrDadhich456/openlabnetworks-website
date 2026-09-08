import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/",          label: "Home" },
  { to: "/about",     label: "About Us" },
  { to: "/training",  label: "Academy" },
  { to: "/blog",      label: "Blog" },
  { to: "/ecosystem", label: "Partnership" },
  { to: "/contact",   label: "Contact" },
];

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-zinc-900 py-8 px-4 sm:px-6 font-sans">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

      {/* Brand logo & tagline */}
      <Link to="/" className="flex items-center gap-3 group">
        <img
          src="/openlabnetworks-favicon-white.png"
          alt="OpenLabNetwork"
          className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
        />
        <span className="text-sm font-mono font-bold tracking-tight">
          <span className="text-zinc-400">OPENLAB</span>
          <span className="text-[#00e5cc]">NETWORK</span>
        </span>
      </Link>

      {/* Navigation links */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="hover:text-[#00e5cc] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[11px] font-mono text-zinc-500">
        © 2026 OpenLabNetwork
      </p>

    </div>
  </footer>
);

export default Footer;

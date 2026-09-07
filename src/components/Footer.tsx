import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/",          label: "Home" },
  { to: "/about",     label: "About Us" },
  { to: "/training",  label: "Training" },
  { to: "/blog",      label: "Blog" },
  { to: "/ecosystem", label: "Partnership" },
  { to: "/contact",   label: "Contact" },
];

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-zinc-900 py-8 px-4 sm:px-6 font-sans">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

      {/* Brand logo & tagline */}
      <Link to="/" className="flex items-center gap-2.5 group">
        <img
          src="/openlabnetworks-favicon-white.png"
          alt="OpenLab Networks"
          className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
        />
        <span className="text-xs font-mono font-bold tracking-tight">
          <span className="text-zinc-400">OPENLAB </span>
          <span className="text-[#00e5cc]">NETWORKS</span>
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
        © 2026 OpenLab Networks
      </p>

    </div>
  </footer>
);

export default Footer;

"use client";

import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "#contact" },
];

export default function PillNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 z-[100] -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full bg-[#0d0d0d] p-1.5 pl-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
        <a href="/" className="pr-2 text-lg font-semibold tracking-tight">
          Jonathan
        </a>

        <nav
          className={`hidden items-center gap-6 overflow-hidden pr-2 text-sm text-white/70 transition-all duration-500 md:flex ${
            open ? "max-w-md opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#0d0d0d] transition-transform duration-300 hover:scale-95"
        >
          <span className="flex items-center gap-[3px]">
            <span
              className={`h-[3px] w-[3px] rounded-full bg-current transition-all duration-300 ${
                open ? "rotate-45 translate-x-[3px]" : ""
              }`}
            />
            <span
              className={`h-[3px] w-[3px] rounded-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[3px] w-[3px] rounded-full bg-current transition-all duration-300 ${
                open ? "-rotate-45 -translate-x-[3px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        className={`mt-2 flex flex-col items-center gap-1 rounded-3xl bg-[#0d0d0d] py-3 text-white transition-all duration-500 md:hidden ${
          open
            ? "max-h-72 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden py-0 opacity-0"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            className="px-8 py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

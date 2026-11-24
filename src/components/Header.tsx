"use client";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6"
      style={{ mixBlendMode: "difference" }}
    >
      {/* Mobile: logo on the left */}
      <a href="/" className="md:hidden text-2xl font-bold tracking-tighter text-white">
        J.O
      </a>

      {/* Desktop: left nav links */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-sm font-medium uppercase tracking-wider text-white transition-opacity duration-500 hover:opacity-50">
          Work
        </a>
        <a href="#clients" className="text-sm font-medium uppercase tracking-wider text-white transition-opacity duration-500 hover:opacity-50">
          Clients
        </a>
      </nav>

      {/* Desktop: centered logo */}
      <a href="/" className="hidden md:block absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-tighter text-white">
        J.O<span className="text-xs align-super">.</span>
      </a>

      {/* Desktop: right nav links */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm font-medium uppercase tracking-wider text-white transition-opacity duration-500 hover:opacity-50">
          About
        </a>
        <a href="#contact" className="text-sm font-medium uppercase tracking-wider text-white transition-opacity duration-500 hover:opacity-50">
          Contact
        </a>
      </nav>

      {/* Mobile: menu button on the right (unchanged) */}
      <button className="md:hidden text-white" aria-label="Menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </header>
  );
}

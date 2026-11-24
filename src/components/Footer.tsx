import { Twitter, Instagram, Dribbble, Linkedin } from "lucide-react";

const socials = [
  { label: "Twitter", link: "https://twitter.com", icon: <Twitter size={16} /> },
  { label: "Instagram", link: "https://instagram.com", icon: <Instagram size={16} /> },
  { label: "Dribbble", link: "https://dribbble.com", icon: <Dribbble size={16} /> },
  { label: "LinkedIn", link: "https://linkedin.com", icon: <Linkedin size={16} /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="headline text-5xl md:text-7xl">Jonathan Okwudili</h2>
            <p className="mt-6 max-w-md text-lg text-neutral-400" style={{ letterSpacing: "-0.02em", lineHeight: 1.5 }}>
              A design-driven studio crafting digital experiences that resonate. We blend form and function to create work that stands apart.
            </p>
          </div>
          <div>
            <h3 className="mono mb-6 text-neutral-500">Socials</h3>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-300 transition-colors duration-500 hover:text-white">
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mono mb-6 text-neutral-500">Contact</h3>
            <ul className="space-y-3">
              {["hello@studio.com", "+1 (555) 000-0000", "New York, NY"].map((c) => (
                <li key={c}>
                  <span className="text-neutral-300">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row">
          <p>&copy; 2024 Jonathan Okwudili. All rights reserved.</p>
          <p className="mono">Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}

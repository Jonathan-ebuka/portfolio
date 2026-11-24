"use client";

const projects = [
  { title: "Project One", category: "Web Design", year: "2024", image: "https://picsum.photos/seed/g1/800/600", link: "#" },
  { title: "Project Two", category: "Web App", year: "2024", image: "https://picsum.photos/seed/g2/800/600", link: "#" },
  { title: "Project Three", category: "Landing Page", year: "2024", image: "https://picsum.photos/seed/g3/800/600", link: "#" },
  { title: "Project Four", category: "E-Commerce", year: "2023", image: "https://picsum.photos/seed/g4/800/600", link: "#" },
  { title: "Project Five", category: "Dashboard", year: "2023", image: "https://picsum.photos/seed/g5/800/600", link: "#" },
  { title: "Project Six", category: "Portfolio", year: "2023", image: "https://picsum.photos/seed/g6/800/600", link: "#" },
];

export default function ProjectGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
                <div
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-500 group-hover:opacity-100"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                <h3 className="text-2xl font-bold tracking-tighter">{project.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="mono text-secondary">{project.category}</span>
                  <span className="mono text-secondary">{project.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

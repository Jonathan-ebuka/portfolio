"use client";

const projects = [
  { title: "Luminary", image: "https://picsum.photos/seed/p1/400/560", radius: "100px 0 0 0" },
  { title: "Kinetic", image: "https://picsum.photos/seed/p2/400/560", radius: "0 100px 0 40px" },
  { title: "Forma", image: "https://picsum.photos/seed/p3/400/560", radius: "40px" },
  { title: "Verve", image: "https://picsum.photos/seed/p4/400/560", radius: "100px 0 0 0" },
  { title: "Drift", image: "https://picsum.photos/seed/p5/400/560", radius: "0 100px 0 40px" },
  { title: "Prism", image: "https://picsum.photos/seed/p6/400/560", radius: "40px" },
];

export default function Marquee() {
  const items = [...projects, ...projects];

  return (
    <section className="marquee-container w-full overflow-hidden py-16">
      <div className="marquee-track flex gap-6" style={{ width: "max-content" }}>
        {items.map((project, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden"
            style={{
              width: 280,
              aspectRatio: "5/7",
              borderRadius: project.radius,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

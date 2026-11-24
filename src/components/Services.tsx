"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Frontend Development", tags: ["UI Dev", "Responsive Layouts", "Web Performance"] },
  { title: "Product Engineering", tags: ["SaaS", "APIs", "Scalable Systems"] },
  { title: "Framer Templates", tags: ["Startup", "Agency", "Portfolio"] },
  { title: "Technical Consulting", tags: ["Product Direction", "Web Strategy", "Code Review"] },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".service-row", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: section, start: "top 70%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="display mb-16 text-6xl md:mb-24 md:text-8xl">Services</h2>

        <div>
          {services.map((s) => (
            <div
              key={s.title}
              className="service-row flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between md:py-12"
            >
              <span className="service-title display inline-block text-3xl md:text-5xl">
                {s.title}
              </span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-secondary md:text-base">
                {s.tags.map((t, i) => (
                  <span key={t} className="whitespace-nowrap">
                    {t}
                    {i < s.tags.length - 1 && (
                      <span className="ml-3 text-foreground/30">•</span>
                    )}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

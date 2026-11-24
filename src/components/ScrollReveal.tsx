"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use — driven by clarity, structured systems, and intentional design.";

export default function ScrollReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const p = pRef.current;
    if (!section || !p) return;

    const words = Array.from(p.querySelectorAll<HTMLElement>(".reveal-word"));

    const ctx = gsap.context(() => {
      gsap.to(words, {
        "--w": 1,
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[80vh] items-center px-6 py-32 md:px-16"
    >
      <p
        ref={pRef}
        className="mx-auto max-w-5xl text-center text-3xl font-medium leading-[1.25] tracking-tight md:text-6xl"
      >
        {TEXT.split(" ").map((word, i) => (
          <span key={i} className="reveal-word" style={{ "--w": 0.18 } as React.CSSProperties}>
            {word}
            {" "}
          </span>
        ))}
      </p>
    </section>
  );
}

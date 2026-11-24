"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const star = starRef.current;
    const bolt = boltRef.current;
    const portrait = portraitRef.current;
    if (!section || !star || !bolt || !portrait) return;

    const ctx = gsap.context(() => {
      // Ambient float + spin so the chrome reads as 3D at rest
      gsap.to(star, {
        rotateY: 360,
        duration: 14,
        repeat: -1,
        ease: "none",
      });
      gsap.to(star, {
        y: "+=22",
        rotateX: 18,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(bolt, {
        rotateY: -360,
        duration: 11,
        repeat: -1,
        ease: "none",
      });
      gsap.to(bolt, {
        y: "+=30",
        rotateZ: -8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll-driven parallax + depth
      gsap.to(star, {
        yPercent: -120,
        rotateZ: -40,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(bolt, {
        yPercent: 140,
        rotateZ: 35,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.fromTo(
        portrait,
        { yPercent: 0, rotateX: 0 },
        {
          yPercent: -40,
          rotateX: 18,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1 },
        }
      );
    }, section);

    // Pointer-driven 3D tilt of the whole scene
    const onMove = (e: PointerEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const rx = (e.clientY / h - 0.5) * -10;
      const ry = (e.clientX / w - 0.5) * 14;
      gsap.to([star, bolt], {
        rotationX: `+=${rx * 0.04}`,
        rotationY: `+=${ry * 0.04}`,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(portrait, {
        rotateY: ry * 0.4,
        rotateX: rx * 0.4,
        duration: 0.8,
        ease: "power2.out",
      });
    };
    window.addEventListener("pointermove", onMove);

    return () => {
      ctx.revert();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scene-3d relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Chrome star — top left */}
      <div
        ref={starRef}
        className="chrome chrome-star pointer-events-none absolute left-[6%] top-[22%] z-20 h-24 w-24 md:left-[12%] md:top-[26%] md:h-36 md:w-36"
      />

      {/* Chrome bolt — right */}
      <div
        ref={boltRef}
        className="chrome chrome-bolt pointer-events-none absolute right-[6%] top-[42%] z-20 h-28 w-24 md:right-[10%] md:top-[40%] md:h-44 md:w-36"
      />

      {/* Giant headline */}
      <h1 className="display relative z-10 text-center text-[18vw] leading-[0.8] md:text-[15vw]">
        Software
        <br />
        Engineer
      </h1>

      {/* Portrait, center-bottom over the type */}
      <div
        ref={portraitRef}
        className="absolute left-1/2 top-[58%] z-30 h-44 w-36 -translate-x-1/2 overflow-hidden rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.35)] md:h-64 md:w-52"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
          alt="Jonathan Okwudili"
          className="h-full w-full object-cover grayscale"
        />
      </div>

      {/* Metadata */}
      <span className="display absolute bottom-8 left-6 z-10 text-5xl md:bottom-12 md:left-12 md:text-7xl">
        ©2026
      </span>
      <span className="mono absolute bottom-10 right-6 z-10 text-foreground/70 md:bottom-14 md:right-12">
        /Creating since 2020
      </span>
    </section>
  );
}

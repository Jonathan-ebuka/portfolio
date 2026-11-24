"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function Hero() {
  const headline = "Jonathan";
  const subline = "Okwudili";
  const [visible, setVisible] = useState(false);
  const [fontWeight, setFontWeight] = useState(300);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;
    const scrolled = -rect.top;
    const progress = Math.min(1, Math.max(0, scrolled / (sectionHeight * 0.3)));
    const weight = 300 + progress * 500;
    setFontWeight(weight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const renderLetters = (text: string, delayOffset: number) =>
    text.split("").map((char, i) => (
      <span key={i} className="reveal-char inline-block overflow-hidden">
        <span
          style={{
            animationDelay: `${delayOffset + i * 0.05}s`,
            opacity: visible ? 1 : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));

  return (
    <section ref={sectionRef} className="relative min-h-screen">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pointer-events-none">
        <h1
          className="headline text-center text-red-600"
          style={{
            fontSize: "12vw",
            fontWeight,
            transition: "font-weight 100ms linear",
          }}
        >
          {renderLetters(headline, 0)}
        </h1>
        <h1
          className="headline text-center text-red-600"
          style={{
            fontSize: "12vw",
            fontWeight,
            transition: "font-weight 100ms linear",
          }}
        >
          {renderLetters(subline, 0.4)}
        </h1>
      </div>
    </section>
  );
}

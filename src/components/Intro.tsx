"use client";

import { ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-12">
        {/* Left: greeting + place */}
        <div className="md:col-span-4">
          <h2 className="display text-7xl md:text-8xl">Hey!</h2>
          <p className="mt-10 max-w-xs text-lg text-foreground/80 md:mt-44">
            I&apos;m Jonathan, a software engineer based in Lagos, building
            products and Framer experiences for teams shipping fast.
          </p>
        </div>

        {/* Center: portrait on accent */}
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-2xl bg-accent">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop"
              alt="Portrait of Jonathan Okwudili"
              className="aspect-[4/5] w-full object-cover mix-blend-luminosity"
            />
          </div>
        </div>

        {/* Right: pitch + CTA */}
        <div className="md:col-span-4 md:pt-44">
          <p className="text-lg text-foreground/80">
            I focus on building modern, scalable, and conversion-driven web
            experiences — from interface to deployment.
          </p>
          <p className="mt-6 text-lg text-foreground/80">
            Over the years I&apos;ve shipped SaaS products and Framer templates
            used by teams worldwide, helping them launch faster.
          </p>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 text-lg font-medium"
          >
            Get started
            <span className="grid h-7 w-7 place-items-center rounded-full border border-foreground/30 transition-colors duration-300 group-hover:border-foreground">
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

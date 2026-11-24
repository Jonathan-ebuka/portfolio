"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CurveSvg = () => (
  <svg
    width='80'
    height='60'
    viewBox='0 0 80 60'
    fill='none'
    className='inline-block flex-shrink-0 mx-4 opacity-30'
    style={{ verticalAlign: "middle" }}
  >
    <path
      d='M0 30 Q20 0 40 30 Q60 60 80 30'
      stroke='currentColor'
      strokeWidth='1'
    />
  </svg>
)

const DotSvg = () => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='currentColor'
    className='inline-block flex-shrink-0 mx-6 opacity-20'
    style={{ verticalAlign: "middle" }}
  >
    <circle cx='6' cy='6' r='6' />
  </svg>
)

const DiamondSvg = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    className='inline-block flex-shrink-0 mx-6 opacity-25'
    style={{ verticalAlign: "middle" }}
  >
    <rect x='2' y='2' width='12' height='12' transform='rotate(45 8 8)' />
  </svg>
)

const StarSvg = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    className='inline-block flex-shrink-0 mx-5 opacity-20'
    style={{ verticalAlign: "middle" }}
  >
    <line x1='10' y1='0' x2='10' y2='20' />
    <line x1='0' y1='10' x2='20' y2='10' />
    <line x1='3' y1='3' x2='17' y2='17' />
    <line x1='17' y1='3' x2='3' y2='17' />
  </svg>
)

interface WordProps {
  children: React.ReactNode
  italic?: boolean
  light?: boolean
}

function Word({ children, italic, light }: WordProps) {
  return (
    <span
      className={`flex-shrink-0 ${italic ? "italic" : ""} ${light ? "font-light text-secondary" : "font-bold"}`}
    >
      {children}
    </span>
  )
}

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const totalScroll = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className='overflow-hidden'>
      <div
        ref={trackRef}
        className='flex items-center whitespace-nowrap px-[15vw]'
        style={{
          height: "30vh",
          gap: "0.3em",
          fontSize: "clamp(3rem, 8vw, 8rem)",
          letterSpacing: "-0.05em",
          lineHeight: 0.9,
        }}
      >
        <Word>Pixels</Word>

        <DotSvg />

        <Word light>that</Word>
        <Word>move.</Word>

        <CurveSvg />

        <Word italic>Code</Word>
        <Word light>that</Word>
        <Word italic>breathes.</Word>

        <DiamondSvg />

        <Word>Interfaces</Word>
        <Word light>that</Word>
        <Word>feel</Word>

        <StarSvg />

        <Word italic>alive.</Word>

        <CurveSvg />
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { StaggeredMenu } from "./StaggeredMenu"

function AnimatedLogo() {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href='/'
      className='group relative block h-[1.5em] overflow-hidden text-2xl font-bold tracking-tighter leading-[1.5em] text-white'
    >
      <span
        className={`block h-[1.5em] text-center font-light transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          pastHero ? "-translate-y-full" : ""
        } group-hover:-translate-y-full`}
      >
        simply the best
      </span>
      <span
        className={`block h-[1.5em] text-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          pastHero ? "-translate-y-full" : ""
        } group-hover:-translate-y-full`}
      >
        Jonathan Okwudili
      </span>
    </a>
  )
}

const menuItems = [
  { label: "Work", ariaLabel: "View my work", link: "#work" },
  { label: "Client", ariaLabel: "View clients", link: "/clients" },
  { label: "About", ariaLabel: "About me", link: "#about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
]

const socialItems = [
  {
    label: "Twitter",
    link: "https://twitter.com",
    icon: <Twitter size={16} />,
  },
  {
    label: "Instagram",
    link: "https://instagram.com",
    icon: <Instagram size={16} />,
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com",
    icon: <Linkedin size={16} />,
  },
  { label: "GitHub", link: "https://github.com", icon: <Github size={16} /> },
]

const leftLinks = [
  { label: "Work", link: "#work" },
  { label: "Client", link: "/clients" },
]

const rightLinks = [
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
]

export default function Navigation({
  variant = "dark",
}: {
  variant?: "dark" | "light"
}) {
  const menuBtnColor = variant === "light" ? "#ffffff" : "#000000"

  return (
    <>
      {/* Desktop Nav */}
      <header
        className='hidden md:flex fixed top-0 left-0 w-full items-center justify-between px-10 py-6 z-[100] text-white'
        style={{ mixBlendMode: "difference" }}
      >
        <nav className='flex items-center gap-8'>
          {leftLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className='text-sm font-medium uppercase tracking-wider hover:opacity-60 transition-opacity'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <AnimatedLogo />

        <nav className='flex items-center gap-8'>
          {rightLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className='text-sm font-medium uppercase tracking-wider hover:opacity-60 transition-opacity'
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Nav (hamburger menu) */}
      <div className='md:hidden'>
        <StaggeredMenu
          isFixed
          items={menuItems}
          socialItems={socialItems}
          position='right'
          colors={["#1a1a1b", "#0A0A0A", "#ffffff"]}
          accentColor={menuBtnColor}
          menuButtonColor={menuBtnColor}
          openMenuButtonColor='#000000'
          changeMenuColorOnOpen
          logo={
            <a
              href='/'
              className='text-2xl font-bold tracking-tighter text-black'
            >
              Jonathan Okwudili.
            </a>
          }
        />
      </div>
    </>
  )
}

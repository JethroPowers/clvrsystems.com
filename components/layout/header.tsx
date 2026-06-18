"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const navItems = [
  { href: "/systems", label: "Systems" },
  { href: "/verified", label: "Verified" },
  { href: "/company", label: "Company" },
  { href: "/#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const activeSection = useScrollSpy(
    ["systems", "verified", "contact"],
    {
      threshold: 0.24,
      rootMargin: "-96px 0px -62% 0px",
    },
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const scrollToSection = (hash: string, url: string) => {
    const element = document.querySelector(hash)
    if (!element) return

    const headerHeight = headerRef.current?.offsetHeight || 0
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - headerHeight,
      behavior: "smooth",
    })

    history.replaceState({}, "", url)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false)

    if (href === "/" && pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
      history.replaceState({}, "", "/")
      return
    }

    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      scrollToSection(`#${href.split("#")[1]}`, href)
      return
    }

    if (href.startsWith("#")) {
      e.preventDefault()
      scrollToSection(href, href)
    }
  }

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.href === "/systems") {
      return pathname === "/systems" || (pathname === "/" && activeSection === "systems")
    }

    if (item.href === "/verified") {
      return pathname === "/verified" || (pathname === "/" && activeSection === "verified")
    }

    if (item.href === "/company") {
      return pathname === "/company"
    }

    if (pathname !== "/" || !item.href.startsWith("/#")) {
      return false
    }

    return activeSection === item.href.replace("/#", "")
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-black/10 bg-background/80 shadow-[0_18px_60px_-44px_rgba(46,34,38,0.26)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container relative flex h-16 items-center justify-between gap-6 px-4 md:h-[4.5rem] md:px-6">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className={cn(
            "rounded-sm font-display text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 md:text-[0.95rem]",
            isScrolled ? "text-black focus-visible:ring-offset-background" : "text-white focus-visible:ring-offset-[#041711]",
          )}
        >
          CLVR Systems
        </Link>

        <nav
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1.5 xl:flex",
            isScrolled ? "border border-black/[0.06] bg-white/[0.74] shadow-[0_16px_40px_-34px_rgba(0,0,0,0.34)] backdrop-blur-md" : "bg-white/[0.06] backdrop-blur-[2px]",
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-current={isActive(item) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-[0.8rem] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2",
                isActive(item)
                  ? isScrolled
                    ? "bg-[#eef3ee] text-black"
                    : "bg-white/12 text-white"
                  : isScrolled
                    ? "text-black/[0.52] hover:text-black focus-visible:ring-offset-background"
                    : "text-white/68 hover:text-white focus-visible:ring-offset-[#041711]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className={cn(
              "hidden rounded-full px-5 py-2 text-[0.8rem] font-semibold transition xl:inline-flex",
              isScrolled
                ? "border border-black bg-black text-white hover:bg-black/90"
                : "border border-white/18 bg-white text-black hover:bg-white/90",
            )}
          >
            Start a Conversation
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 xl:hidden",
              isScrolled
                ? "text-black hover:bg-black/[0.05] focus-visible:ring-offset-background"
                : "text-white hover:bg-white/10 focus-visible:ring-offset-[#041711]",
            )}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-black/10 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "rounded-sm border-b border-black/10 py-3.5 text-lg text-black/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive(item) ? "text-black" : "hover:text-black",
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="mt-5 inline-flex rounded-full border border-black bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black/90"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

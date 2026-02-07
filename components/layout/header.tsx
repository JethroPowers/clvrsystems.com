"use client"

import type React from "react"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

// Navigation items
const navItems = [
  { href: "#", label: "Home" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-we-do-it", label: "How We Do It" },
  { href: "#products", label: "Operators" },
  { href: "#stack", label: "Stack" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Use scroll spy to highlight current section
  const activeSection = useScrollSpy(["", "what-we-do", "how-we-do-it", "products", "stack", "faq", "contact"], {
    threshold: 0.3,
    rootMargin: "-100px 0px -70% 0px",
  })

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  // Handle smooth scrolling for navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    // If href is just "#", scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - headerHeight,
        behavior: "smooth",
      })

      // Update URL without page reload
      history.pushState({}, "", href)
    }
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "border-white/10 shadow-sm" : "border-transparent",
      )}
      style={{ backgroundColor: "rgba(6, 78, 59, 0.95)" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="text-xl font-bold font-serif text-white flex items-center gap-2"
          >
            <span>CLVR</span>
            <span className="font-normal">Automations</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium text-white hover:text-white transition-colors relative group px-1 py-1",
                  (activeSection === item.href.replace("#", "") || (activeSection === "" && item.href === "#")) &&
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-mint-green",
                )}
              >
                {item.label}
                <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-mint-green transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="hidden sm:block"
          >
            <a href="https://tally.so/r/mZGbo5" target="_blank" rel="noopener noreferrer">
              <Button className="bg-mint-green text-forest-green hover:bg-mint-green/90 transition-all duration-300">
                Book Systems Audit
              </Button>
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-white hover:bg-forest-green/50"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed inset-0 top-16 bg-forest-green z-40 overflow-auto"
        >
          <nav className="flex flex-col py-8 px-6 h-full">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block py-4 text-xl font-medium text-white hover:text-mint-green transition-colors border-b border-white/10",
                    (activeSection === item.href.replace("#", "") || (activeSection === "" && item.href === "#")) &&
                      "text-mint-green",
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-auto"
            >
              <a href="https://tally.so/r/mZGbo5" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-mint-green text-forest-green hover:bg-mint-green/90 py-6 text-lg">
                  Book Systems Audit
                </Button>
              </a>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

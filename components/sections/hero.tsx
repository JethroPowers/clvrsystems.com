"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Network, Settings, Shield } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import Link from "next/link"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Detect mobile devices
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Parallax effect values - reduced intensity to prevent visual inconsistencies
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  // Grid animation for background
  useEffect(() => {
    const gridCells = document.querySelectorAll(".grid-cell")
    gridCells.forEach((cell, index) => {
      const delay = Math.random() * 2
      const htmlCell = cell as HTMLElement
      htmlCell.style.animationDelay = `${delay}s`
    })
  }, [])

  // Icon animation variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.8, scale: 1 },
  }

  // Floating animation for icons
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="w-full bg-forest-green text-white relative overflow-hidden"
      style={{
        paddingTop: isMobile ? "48px" : "120px",
        paddingBottom: isMobile ? "48px" : "120px",
        zIndex: 1, // Ensure proper stacking context
      }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 sm:grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="grid-cell border border-white/20 transition-opacity duration-1000"
              style={{ opacity: Math.random() > 0.7 ? 0.8 : 0.2 }}
            ></div>
          ))}
        </div>
      </div>

      {/* Parallax content */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div style={{ y: textY, opacity }} className="max-w-3xl space-y-6">
          {/* Floating icons - desktop version */}
          {!isMobile && (
            <>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute -top-10 -right-10 text-white/30"
                whileInView={floatingAnimation}
              >
                <Network size={64} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute top-20 -left-16 text-white/20"
                whileInView={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 0.5 },
                }}
              >
                <Settings size={48} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="absolute bottom-10 right-0 text-white/25"
                whileInView={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 1 },
                }}
              >
                <Shield size={56} />
              </motion.div>
            </>
          )}

          {/* Mobile icons - optimized placement and reduced number */}
          {isMobile && (
            <>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute top-0 right-4 text-white/30"
                whileInView={{
                  ...floatingAnimation,
                  y: [0, -5, 0], // Smaller movement on mobile
                  transition: { ...floatingAnimation.transition, duration: 3 },
                }}
              >
                <Network size={28} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute bottom-4 right-8 text-white/20"
                whileInView={{
                  ...floatingAnimation,
                  y: [0, -5, 0], // Smaller movement on mobile
                  transition: { ...floatingAnimation.transition, duration: 3, delay: 0.5 },
                }}
              >
                <Settings size={24} />
              </motion.div>
            </>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight"
          >
            {isMobile ? "Building Modular AI Systems." : "Building Modular AI Systems for Growth."}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed"
          >
            {isMobile
              ? "Automate operations and scale — no extra headcount."
              : "Modular AI infrastructure for automating operations and scaling growth — without increasing headcount."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className={`flex ${isMobile ? "flex-col" : "sm:flex-row"} gap-4 pt-4`}
          >
            <Link href="#stack" className={`${isMobile ? "w-full" : ""}`}>
              <Button
                size="lg"
                className="bg-mint-green text-forest-green hover:bg-mint-green/90 transition-all duration-300 transform hover:scale-105 w-full"
              >
                Explore Our Stack
              </Button>
            </Link>
            <a
              href="https://tally.so/r/mZGbo5"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isMobile ? "w-full" : ""}`}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 w-full backdrop-blur-sm bg-transparent"
              >
                Deploy Your System
              </Button>
            </a>
          </motion.div>

          {/* Scroll indicator - only visible on desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-1"
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-white/50 rounded-full"
                />
              </motion.div>
              <span className="text-white/50 text-xs mt-2">Scroll</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  Calendar,
  Share,
  BarChart3,
  Database,
  Zap,
  Users,
  Bot,
  LineChart,
  Layers,
  Network,
  Cpu,
  GitBranch,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const capabilities = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Response Control",
      description: "Inbound handled fast: qualify, route, and book—automatically, 24/7.",
      metric: "< 2 min avg response time",
      subFeatures: [
        { icon: <Bot />, label: "Auto-Qualify" },
        { icon: <Database />, label: "Smart Routing" },
        { icon: <Zap />, label: "Instant Booking" },
      ],
      systemMap: ["Inquiry", "Qualify", "Route", "Book", "Confirm"],
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Booking Control",
      description: "Reduce no-shows with deposits, reminders, and automated reschedules.",
      metric: "-35% no-show rate",
      subFeatures: [
        { icon: <Layers />, label: "Deposit Collection" },
        { icon: <MessageSquare />, label: "Smart Reminders" },
        { icon: <GitBranch />, label: "Auto-Reschedule" },
      ],
      systemMap: ["Book", "Deposit", "Remind", "Confirm", "Reschedule"],
    },
    {
      icon: <Share className="h-8 w-8 text-white" />,
      title: "Retention Control",
      description: "Reactivation, loyalty programs, and tracked referrals that drive repeat revenue.",
      metric: "+22% repeat bookings",
      subFeatures: [
        { icon: <Users />, label: "Reactivation Flows" },
        { icon: <Zap />, label: "Loyalty Wallet" },
        { icon: <LineChart />, label: "Referral Tracking" },
      ],
      systemMap: ["Lapsed", "Trigger", "Incentive", "Track", "Convert"],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Cash Control",
      description: "Quote to change order to invoice to paid—same-day, every time.",
      metric: "50% faster collections",
      subFeatures: [
        { icon: <Cpu />, label: "Instant Quotes" },
        { icon: <Database />, label: "Change Orders" },
        { icon: <Network />, label: "Auto-Invoice" },
      ],
      systemMap: ["Quote", "Approve", "Change", "Invoice", "Collect"],
    },
  ]

  // Handle touch events for swiping on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext()
    }

    if (touchEnd - touchStart > 75) {
      // Swipe right
      handlePrev()
    }
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === capabilities.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1))
  }

  // Auto-advance slides on mobile with pause on hover/touch
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isMobile && !isPaused) {
      const interval = setInterval(() => {
        handleNext()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isMobile, activeIndex, isPaused])

  return (
    <section id="what-we-do" className="w-full py-12 md:py-20 lg:py-32 bg-forest-green text-white relative z-0">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white mb-3 md:mb-4">What We Do</h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            We build operators that own workflow choke points—where revenue leaks or money stalls.
          </p>
        </div>

        {/* Desktop View */}
        {!isMobile && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <DesktopCapabilityCard key={index} capability={capability} index={index} />
            ))}
          </div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div ref={ref} className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex transition-all duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  width: `${capabilities.length * 100}%`,
                  transform: `translateX(-${(activeIndex * 100) / capabilities.length}%)`,
                }}
              >
                {capabilities.map((capability, index) => (
                  <div key={index} className="w-full px-2" style={{ flex: `0 0 ${100 / capabilities.length}%` }}>
                    <MobileCapabilityCard capability={capability} isActive={index === activeIndex} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {capabilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-mint-green scale-125" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-2 z-10">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Desktop Card Component
function DesktopCapabilityCard({ capability, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showMetric, setShowMetric] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  // Show metric after delay
  useEffect(() => {
    let timer
    if (isHovered) {
      timer = setTimeout(() => {
        setShowMetric(true)
      }, 1000)
    } else {
      setShowMetric(false)
    }

    return () => clearTimeout(timer)
  }, [isHovered])

  return (
    <div
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.04 : 1,
          rotateX: isHovered ? -mousePosition.y * 5 : 0,
          rotateY: isHovered ? mousePosition.x * 5 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-white/15 backdrop-blur-sm rounded-lg p-6 h-full cursor-pointer transition-all duration-300",
          isHovered ? "shadow-lg shadow-forest-green/30" : "",
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="flex justify-between items-start mb-6">
            <div className="bg-forest-green/40 w-16 h-16 rounded-lg flex items-center justify-center">
              {capability.icon}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
          <p className="text-base text-white/90 leading-relaxed mb-6">{capability.description}</p>

          {/* Sub-features that appear on hover */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <div className="border-t border-white/20 pt-4 mb-4">
                <p className="text-sm text-white/80 mb-3">System Components</p>
                <div className="grid grid-cols-3 gap-2">
                  {capability.subFeatures.map((feature, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 flex flex-col items-center text-center">
                      <div className="text-mint-green mb-2">{feature.icon}</div>
                      <span className="text-xs text-white/90">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Map - Fixed alignment issues */}
              <div className="relative h-10 mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-white/20"></div>
                </div>
                <div className="relative flex justify-between">
                  {capability.systemMap.map((step, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center"
                      style={{ width: `${100 / capability.systemMap.length}%` }}
                    >
                      <div className="w-3 h-3 rounded-full bg-mint-green"></div>
                      <span className="text-[10px] text-white/80 mt-1 text-center whitespace-normal">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Metric that appears after delay */}
          {showMetric && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-auto"
            >
              <div className="bg-mint-green/15 rounded-lg p-3 flex items-center justify-center">
                <span className="text-base text-mint-green font-bold">{capability.metric}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5 rounded-lg overflow-hidden pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            transform: "translateZ(-10px)",
          }}
        ></div>
      </motion.div>
    </div>
  )
}

// Mobile Card Component with enhanced animations
function MobileCapabilityCard({ capability, isActive }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/15 backdrop-blur-sm rounded-lg p-5 h-full relative overflow-hidden"
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-mint-green/10 to-transparent opacity-0"
        animate={{ opacity: isActive ? 0.5 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Icon with animated entrance */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
        className="bg-forest-green/40 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
      >
        {capability.icon}
      </motion.div>

      {/* Title with animated entrance */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-xl font-bold text-white mb-2"
      >
        {capability.title}
      </motion.h3>

      {/* Description with animated entrance */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-base text-white/90 leading-relaxed mb-4"
      >
        {capability.description}
      </motion.p>

      {/* System Components */}
      <div className="border-t border-white/20 pt-3 mb-4">
        <p className="text-sm text-white/80 mb-3">System Components</p>
        <div className="grid grid-cols-3 gap-2">
          {capability.subFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              className="bg-white/10 rounded-lg p-2 flex flex-col items-center text-center"
            >
              <div className="text-mint-green mb-1.5">{feature.icon}</div>
              <span className="text-xs text-white/90 leading-tight">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* System Map - Fixed alignment for mobile */}
      <div className="mb-4">
        <div className="relative h-10">
          {/* Horizontal line */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-white/20"></div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {capability.systemMap.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                className="flex flex-col items-center"
                style={{ width: `${100 / capability.systemMap.length}%` }}
              >
                <div className="w-2 h-2 rounded-full bg-mint-green mb-1.5"></div>
                <span className="text-[8px] text-white/80 text-center whitespace-normal px-1">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Metric with animated entrance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="bg-mint-green/15 rounded-lg p-3 flex items-center justify-center"
      >
        <span className="text-sm text-mint-green font-bold">{capability.metric}</span>
      </motion.div>
    </motion.div>
  )
}

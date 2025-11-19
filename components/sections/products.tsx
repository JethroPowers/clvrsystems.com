"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronRight,
  Calendar,
  ShoppingCart,
  Users,
  Layers,
  Database,
  MessageSquare,
  Clock,
  BarChart3,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const products = [
    {
      title: "Emilia.io",
      description: "Clinic Management Automation",
      status: "Production",
      metric: "+30% appointment show-up rate",
      cta: "Learn More",
      ctaLink: "https://v0-aesthetic-clinic-landing-page.vercel.app",
      color: "bg-mint-green/20",
      modules: [
        { icon: <Calendar className="h-4 w-4" />, name: "Smart Scheduling" },
        { icon: <MessageSquare className="h-4 w-4" />, name: "Patient Chat" },
        { icon: <Clock className="h-4 w-4" />, name: "Reminder System" },
      ],
    },
    {
      title: "CommerceIQ",
      description: "E-commerce Growth Engine",
      status: "Coming Q4 2025",
      metric: "+20% customer retention (projected)",
      cta: "Coming Soon",
      ctaLink: "#",
      color: "bg-lavender/20",
      modules: [
        { icon: <ShoppingCart className="h-4 w-4" />, name: "Cart Recovery" },
        { icon: <Users className="h-4 w-4" />, name: "Customer Insights" },
        { icon: <BarChart3 className="h-4 w-4" />, name: "Sales Analytics" },
      ],
    },
    {
      title: "TalentTunnel",
      description: "Recruiting Automation",
      status: "Coming Q1 2026",
      metric: "Launch Q1 2026",
      cta: "Coming Soon",
      ctaLink: "#",
      color: "bg-teal/20",
      modules: [
        { icon: <Users className="h-4 w-4" />, name: "Candidate Screening" },
        { icon: <Calendar className="h-4 w-4" />, name: "Interview Scheduling" },
        { icon: <Zap className="h-4 w-4" />, name: "Talent Matching" },
      ],
    },
  ]

  return (
    <section id="products" className="w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">What We Build</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Specialized AI systems, modular by design, built on shared infrastructure to drive vertical growth.
          </p>
        </motion.div>

        {/* Shared Infrastructure Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12 relative"
        >
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
            <div className="text-forest-green font-bold mb-2">CLVR Core Infrastructure</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
              {[
                { icon: <Layers className="h-5 w-5" />, label: "Agent Orchestration" },
                { icon: <Database className="h-5 w-5" />, label: "Data Layer" },
                { icon: <MessageSquare className="h-5 w-5" />, label: "Communication" },
                { icon: <Zap className="h-5 w-5" />, label: "Analytics" },
              ].map((module, i) => (
                <div key={i} className="flex flex-col items-center text-center p-2">
                  <div className="bg-forest-green/10 rounded-full p-2 mb-1">{module.icon}</div>
                  <span className="text-xs text-gray-600">{module.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connecting lines */}
          <div className="hidden md:block absolute left-1/6 -bottom-6 w-2/3 h-6">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute left-1/6 top-0 w-0.5 h-full bg-gray-200 origin-top"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-200 origin-top"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute left-5/6 top-0 w-0.5 h-full bg-gray-200 origin-top"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index, isInView }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showMetric, setShowMetric] = useState(false)
  const isActive = product.status === "Production"
  const isMobile = useMediaQuery("(max-width: 768px)")

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

  // For mobile, make cards tappable
  const handleCardInteraction = () => {
    if (isMobile) {
      setIsHovered(!isHovered)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 * index + 0.7 }}
      className="h-full"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardInteraction}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.04 : 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "h-full rounded-lg overflow-hidden shadow-md transition-all duration-500",
          isActive ? "shadow-lg" : "shadow-sm",
        )}
      >
        {/* Card Header */}
        <div className={cn("p-4 sm:p-6 relative", isActive ? product.color : "bg-gray-100/50")}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3
                className={cn(
                  "text-xl sm:text-2xl font-bold font-serif mb-1",
                  isActive ? "text-forest-green" : "text-gray-600",
                )}
              >
                {product.title}
              </h3>
              <p className={cn("text-sm", isActive ? "text-forest-green/80" : "text-gray-500")}>
                {product.description}
              </p>
            </div>
            <Badge
              variant={isActive ? "default" : "outline"}
              className={cn(isActive ? "bg-forest-green text-white" : "text-gray-500 border-gray-300")}
            >
              {product.status}
            </Badge>
          </div>

          {/* System Modules (visible on hover) */}
          <AnimatePresence>
            {(isHovered || isMobile) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={cn("border-t mb-4 pt-4", isActive ? "border-forest-green/20" : "border-gray-200")}>
                  <p className={cn("text-xs mb-3", isActive ? "text-forest-green/70" : "text-gray-500")}>
                    System Modules
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {product.modules.map((module, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 * i }}
                        className={cn(
                          "rounded-lg p-2 flex flex-col items-center text-center",
                          isActive ? "bg-white/30" : "bg-white/50",
                        )}
                      >
                        <div className={cn("mb-1", isActive ? "text-forest-green" : "text-gray-500")}>
                          {module.icon}
                        </div>
                        <span className="text-xs text-gray-600">{module.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Metrics (appear after delay) */}
          <AnimatePresence>
            {showMetric && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={cn(
                    "rounded-lg p-2 flex items-center justify-center mb-4",
                    isActive ? "bg-white/40" : "bg-white/30",
                  )}
                >
                  <span className={cn("text-sm font-bold", isActive ? "text-forest-green" : "text-gray-600")}>
                    {product.metric}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Footer */}
        <div className="bg-white p-4 sm:p-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className={cn("w-2 h-2 rounded-full mr-2", isActive ? "bg-green-500" : "bg-gray-300")}></div>
            <span className="text-xs text-gray-500">{isActive ? "In Production" : "In Development"}</span>
          </div>
          {isActive ? (
            <a href={product.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="bg-forest-green text-white hover:bg-forest-green/90">
                <span className="mr-1">{product.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          ) : (
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600" disabled>
              <span className="mr-1">{product.cta}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Coming Soon Overlay */}
        {!isActive && (
          <div className="absolute inset-0 bg-white/10 pointer-events-none flex items-center justify-center">
            <div className="absolute bottom-1/3 right-4 rotate-12">
              {product.status === "Coming Q4 2025" ? (
                <Badge variant="outline" className="border-2 border-lavender/30 text-lavender bg-white/30 px-3 py-1.5">
                  Loading Q4 2025...
                </Badge>
              ) : (
                <Badge variant="outline" className="border-2 border-teal/30 text-teal bg-white/30 px-3 py-1.5">
                  Loading Q1 2026...
                </Badge>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

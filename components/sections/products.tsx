"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Shield,
  Heart,
  DollarSign,
  CheckCircle,
  FileCheck,
  RefreshCw,
  Wallet,
  Users,
  Zap,
  FileText,
  Receipt,
  CreditCard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const products = [
    {
      title: "CLVR Verified",
      description: "Mandatory approval gate + proof layer for money movement.",
      status: "Live / Pilot",
      statusColor: "bg-green-500",
      cta: "Start a Pilot",
      ctaLink: "https://verified.clvrautomations.com/",
      color: "bg-mint-green/20",
      icon: <Shield className="h-8 w-8" />,
      modules: [
        { icon: <CheckCircle className="h-4 w-4" />, name: "Gate" },
        { icon: <FileCheck className="h-4 w-4" />, name: "Proof" },
        { icon: <RefreshCw className="h-4 w-4" />, name: "Recon" },
      ],
    },
    {
      title: "Emilia AI",
      description: "Loyalty wallet + referrals + reactivation for beauty pros.",
      status: "Waitlist / Early Access",
      statusColor: "bg-amber-500",
      cta: "Join Waitlist",
      ctaLink: "https://emilia.clvrautomations.com/",
      color: "bg-lavender/20",
      icon: <Heart className="h-8 w-8" />,
      modules: [
        { icon: <Wallet className="h-4 w-4" />, name: "Wallet" },
        { icon: <Users className="h-4 w-4" />, name: "Referrals" },
        { icon: <Zap className="h-4 w-4" />, name: "Reactivation" },
      ],
    },
    {
      title: "MarginFlow",
      description: "Quote-to-cash operator for contractors: same-day quotes, signed extras, same-day invoices, collections.",
      status: "Live",
      statusColor: "bg-green-500",
      cta: "Book Walkthrough",
      ctaLink: "https://marginflow.clvrautomations.com/",
      color: "bg-teal/20",
      icon: <DollarSign className="h-8 w-8" />,
      modules: [
        { icon: <FileText className="h-4 w-4" />, name: "Quote Speed" },
        { icon: <Receipt className="h-4 w-4" />, name: "Change Orders" },
        { icon: <CreditCard className="h-4 w-4" />, name: "Collections" },
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
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">Operators</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Three operators, each owning a workflow choke point. Pick the one that matches your leak.
          </p>
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

function ProductCard({ product, index, isInView }: { product: any; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showModules, setShowModules] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Show modules after delay
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isHovered) {
      timer = setTimeout(() => {
        setShowModules(true)
      }, 500)
    } else {
      setShowModules(false)
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
      transition={{ duration: 0.6, delay: 0.2 * index }}
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
          "shadow-lg",
        )}
      >
        {/* Card Header */}
        <div className={cn("p-4 sm:p-6 relative", product.color)}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-forest-green/20 p-3 rounded-lg text-forest-green">
                {product.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-forest-green mb-1">
                  {product.title}
                </h3>
              </div>
            </div>
            <Badge
              variant="default"
              className={cn("text-white", product.statusColor)}
            >
              {product.status}
            </Badge>
          </div>
          
          <p className="text-sm text-forest-green/80 mb-4">
            {product.description}
          </p>

          {/* Operator Modules */}
          {(isHovered || isMobile) && (
            <div className="border-t border-forest-green/20 mb-4 pt-4 animate-in fade-in duration-300">
              <p className="text-xs text-forest-green/70 mb-3">
                Operator Modules
              </p>
              <div className="grid grid-cols-3 gap-2">
                {product.modules.map((module: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white/50 rounded-lg p-2 flex flex-col items-center text-center"
                  >
                    <div className="text-forest-green mb-1">
                      {module.icon}
                    </div>
                    <span className="text-xs text-gray-600">{module.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="bg-white p-4 sm:p-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className={cn("w-2 h-2 rounded-full mr-2", product.statusColor)}></div>
            <span className="text-xs text-gray-500">{product.status}</span>
          </div>
          <a href={product.ctaLink} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="bg-forest-green text-white hover:bg-forest-green/90">
              <span className="mr-1">{product.cta}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

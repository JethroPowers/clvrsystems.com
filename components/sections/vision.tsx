"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Shield, Heart, DollarSign } from "lucide-react"

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const operatorModules = [
    {
      operator: "CLVR Verified",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-mint-green/20 text-forest-green",
      modules: [
        { name: "Gate", description: "Approval workflow" },
        { name: "Proof", description: "Documentation layer" },
        { name: "Recon", description: "Reconciliation" },
      ],
    },
    {
      operator: "Emilia AI",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-lavender/20 text-forest-green",
      modules: [
        { name: "Wallet", description: "Loyalty credits" },
        { name: "Referrals", description: "Tracked invites" },
        { name: "Reactivation", description: "Win-back flows" },
      ],
    },
    {
      operator: "MarginFlow",
      icon: <DollarSign className="h-5 w-5" />,
      color: "bg-teal/20 text-forest-green",
      modules: [
        { name: "Quote Speed", description: "Same-day quotes" },
        { name: "Change Orders", description: "Signed extras" },
        { name: "Collections", description: "Invoice + collect" },
      ],
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 sm:grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-forest-green"></div>
          ))}
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">Operator Modules</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Each operator ships with specific modules that own their workflow choke points.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operatorModules.map((operator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Operator Header */}
                <div className={`p-4 ${operator.color} flex items-center gap-3`}>
                  <div className="bg-forest-green/10 p-2 rounded-lg">
                    {operator.icon}
                  </div>
                  <h3 className="font-bold font-serif text-forest-green">{operator.operator}</h3>
                </div>

                {/* Modules */}
                <div className="p-4">
                  {operator.modules.map((module, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 + index * 0.2 }}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <span className="font-medium text-forest-green">{module.name}</span>
                        <p className="text-xs text-gray-500">{module.description}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

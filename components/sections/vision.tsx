"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const timelineItems = [
    { year: "2024", product: "Emilia.io", status: "Production" },
    { year: "2025", product: "CommerceIQ", status: "Coming Q4" },
    { year: "2026", product: "TalentTunnel", status: "Coming Q1" },
    { year: "2026", product: "LegalFlow", status: "Coming Q3" },
    { year: "2027", product: "RealtySync", status: "Coming Q2" },
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
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">Vision for the Future</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Our roadmap for expanding AI system infrastructure across industries.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto">
          {isMobile ? (
            // Mobile timeline (vertical)
            <div className="relative pl-8">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-forest-green/20 transform origin-top"
              ></motion.div>

              {/* Timeline items */}
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="mb-10 relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      delay: 0.5 + index * 0.2,
                    }}
                    className="absolute left-0 top-0 -translate-x-[10px]"
                  >
                    <div className="w-4 h-4 rounded-full bg-forest-green border-4 border-white"></div>
                  </motion.div>
                  <div className="pl-4">
                    <div className="text-xl font-bold text-forest-green mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold font-serif text-forest-green">{item.product}</h3>
                    <p className="text-gray-600">{item.status}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Desktop timeline (horizontal)
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-forest-green/20 transform -translate-x-1/2 origin-top"
              ></motion.div>

              {/* Timeline items */}
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <h3 className="text-xl font-bold font-serif text-forest-green">{item.product}</h3>
                    <p className="text-gray-600">{item.status}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      delay: 0.5 + index * 0.2,
                    }}
                    className="relative"
                  >
                    <div className="w-4 h-4 rounded-full bg-forest-green border-4 border-white"></div>
                  </motion.div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
                    <div className="text-2xl font-bold text-forest-green">{item.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

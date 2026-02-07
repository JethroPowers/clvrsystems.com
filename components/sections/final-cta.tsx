"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function FinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section id="contact" className="w-full py-20 md:py-32 scroll-mt-20">
      <div ref={ref} className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-forest-green/70 mb-2">Next Step</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-6"
          >
            Ready to see what a system looks like?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Choose your next step: adopt a live operator or discuss systems infrastructure directly.
          </motion.p>

          {/* Primary and secondary paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-3 mb-6 w-full justify-center`}
          >
            <a href="#products">
              <Button
                size="lg"
                className="bg-mint-green text-forest-green hover:bg-mint-green/90 transition-all duration-300 w-full focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
              >
                Explore Operators
              </Button>
            </a>
            <a href="https://tally.so/r/mZGbo5" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-forest-green text-forest-green hover:bg-forest-green/10 transition-all duration-300 w-full bg-transparent focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
              >
                Talk to Us About Systems
              </Button>
            </a>
          </motion.div>

          <p className="text-xs text-gray-500 mb-3">Live operators</p>

          {/* Operator links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-3 mb-2 w-full justify-center`}
          >
            <a href="https://verified.clvrautomations.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="default"
                variant="outline"
                className="border-forest-green text-forest-green hover:bg-forest-green/10 transition-all duration-300 w-full bg-transparent focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
              >
                CLVR Verified
              </Button>
            </a>
            <a href="https://emilia.clvrautomations.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="default"
                variant="outline"
                className="border-forest-green text-forest-green hover:bg-forest-green/10 transition-all duration-300 w-full bg-transparent focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
              >
                Emilia AI
              </Button>
            </a>
            <a href="https://marginflow.clvrautomations.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="default"
                variant="outline"
                className="border-forest-green text-forest-green hover:bg-forest-green/10 transition-all duration-300 w-full bg-transparent focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
              >
                MarginFlow
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, X, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const comparisonData = [
    {
      capability: "System Ownership",
      tooltip: "Full control of your AI infrastructure with no vendor lock-in",
      clvr: true,
      agencies: false,
      genericSaas: false,
    },
    {
      capability: "Vertical Specialization",
      tooltip: "Deep industry knowledge built into every system component",
      clvr: true,
      agencies: true,
      genericSaas: false,
    },
    {
      capability: "Customization Depth",
      tooltip: "Ability to modify every aspect of the system to match your exact processes",
      clvr: true,
      agencies: false,
      genericSaas: false,
    },
    {
      capability: "Operational Control",
      tooltip: "Direct access to modify system behavior without vendor intervention",
      clvr: true,
      agencies: false,
      genericSaas: false,
    },
    {
      capability: "Data Ownership",
      tooltip: "Your data remains yours, with no third-party access or usage rights",
      clvr: true,
      agencies: false,
      genericSaas: true,
    },
    // Additional comparison rows
    {
      capability: "Scalability",
      tooltip: "Ability to handle growing workloads without performance degradation",
      clvr: true,
      agencies: true,
      genericSaas: true,
    },
    {
      capability: "Integration Flexibility",
      tooltip: "Seamless connection with existing tools and systems in your tech stack",
      clvr: true,
      agencies: false,
      genericSaas: true,
    },
    {
      capability: "Cost Predictability",
      tooltip: "Transparent pricing with no unexpected scaling costs or hidden fees",
      clvr: true,
      agencies: false,
      genericSaas: false,
    },
  ]

  return (
    <section id="comparison" className="w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">Our Position</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-2">
            Choosing the wrong provider costs you control, speed, and adaptability. Here's why CLVR builds differently.
          </p>
        </motion.div>

        {/* Responsive Table for All Devices */}
        <div ref={ref} className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 md:p-4 text-left font-serif bg-forest-green text-white rounded-tl-lg">
                    <span className="text-sm md:text-base">Capability</span>
                  </th>
                  <th className="p-3 md:p-4 text-center font-serif bg-forest-green text-white relative">
                    <div className="absolute inset-0 bg-mint-green/10 backdrop-blur-sm"></div>
                    <span className="relative z-10 text-sm md:text-base">CLVR</span>
                  </th>
                  <th className="p-3 md:p-4 text-center font-serif bg-forest-green text-white">
                    <span className="text-sm md:text-base">Agencies</span>
                  </th>
                  <th className="p-3 md:p-4 text-center font-serif bg-forest-green text-white rounded-tr-lg">
                    <span className="text-sm md:text-base">Generic SaaS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 md:p-4 border-b border-gray-100 font-medium text-forest-green">
                      <div className="flex items-center">
                        <span className="font-bold text-xs md:text-sm">{row.capability}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-3 w-3 md:h-4 md:w-4 text-gray-400 ml-1 md:ml-2 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-xs">{row.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="p-3 md:p-4 border-b border-gray-100 text-center relative">
                      <div className="absolute inset-0 bg-mint-green/5"></div>
                      <div className="relative z-10">
                        {row.clvr ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-mint-green/20 flex items-center justify-center">
                              <Check className="h-4 w-4 md:h-5 md:w-5 text-forest-green" />
                            </div>
                          </div>
                        ) : (
                          <X className="h-4 w-4 md:h-5 md:w-5 text-red-500 mx-auto opacity-50" />
                        )}
                      </div>
                    </td>
                    <td className="p-3 md:p-4 border-b border-gray-100 text-center">
                      {row.agencies ? (
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <X className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-3 md:p-4 border-b border-gray-100 text-center">
                      {row.genericSaas ? (
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <X className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-forest-green font-medium max-w-2xl mx-auto">
            With CLVR, you get a system you own, control, and can adapt as your business evolves—without dependency on
            external vendors or generic limitations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

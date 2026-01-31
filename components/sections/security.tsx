"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Lock, FileCheck, Eye, Database, Trash2 } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Security() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Security controls - honest wording without claiming certifications
  const securityControls = [
    {
      name: "Encryption",
      icon: <Lock className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Data encrypted at rest and in transit using AES-256",
    },
    {
      name: "Access Control",
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Least privilege access with role-based permissions",
    },
    {
      name: "Audit Logging",
      icon: <Eye className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Complete audit trail of all system actions and changes",
    },
    {
      name: "Data Retention",
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Configurable retention policies with secure archival",
    },
    {
      name: "Data Deletion",
      icon: <Trash2 className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Complete data deletion on request with verification",
    },
    {
      name: "Vendor Hygiene",
      icon: <FileCheck className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Vetted integrations with security-reviewed vendors only",
    },
  ]

  return (
    <section id="security" className="w-full py-16 sm:py-20 bg-forest-green text-white relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white mb-3 sm:mb-4">
            Security Controls
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            Our operators are designed to support enterprise security requirements with robust controls and practices.
          </p>
        </motion.div>

        {/* Security controls grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {securityControls.map((control, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="bg-white/10 rounded-full p-3 sm:p-4 mb-2 sm:mb-3">
                <div className="text-white">{control.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{control.name}</h3>
              <p className="text-xs sm:text-sm text-white/90">{control.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

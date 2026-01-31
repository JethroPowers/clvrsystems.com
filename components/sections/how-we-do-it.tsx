"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Network, Layers, Cpu, LineChart } from "lucide-react"

export default function HowWeDoIt() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Baseline the Leak",
      description:
        "Capture your current workflow and baseline KPIs—see exactly where revenue leaks or money stalls.",
      icon: <Network className="h-8 w-8 text-forest-green" />,
    },
    {
      number: "02",
      title: "Install the Operator",
      description: "Deploy integrations, rules, policies, and tests—configured for your specific workflow.",
      icon: <Layers className="h-8 w-8 text-forest-green" />,
    },
    {
      number: "03",
      title: "Run Automatically",
      description: "Operators enforce decisions with stop conditions and escalation paths—no daily user effort.",
      icon: <Cpu className="h-8 w-8 text-forest-green" />,
    },
    {
      number: "04",
      title: "Prove + Improve",
      description: "Weekly reporting shows outcomes. We tune the operator based on real data, not guesses.",
      icon: <LineChart className="h-8 w-8 text-forest-green" />,
    },
  ]

  return (
    <section id="how-we-do-it" className="w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">How We Do It</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Every operator follows the same deployment pipeline—baseline, install, run, prove.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Desktop connecting lines */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex flex-col items-center text-center"
              >
                {/* Step number with circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3 + index * 0.2,
                  }}
                  className="w-16 h-16 rounded-full bg-white border-2 border-forest-green flex items-center justify-center mb-6 shadow-sm"
                >
                  <span className="text-forest-green font-bold text-xl">{step.number}</span>
                </motion.div>

                {/* Icon */}
                <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {step.icon}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold font-serif text-forest-green mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Mobile divider */}
                {index < steps.length - 1 && <div className="md:hidden w-0.5 h-8 bg-gray-200 my-4 mx-auto"></div>}
              </motion.div>
            ))}
          </div>

          {/* Technical blueprint pattern background */}
          <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23064e3b' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>
        </div>

        {/* Technical terms badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mt-16"
        >
          {["Integrations", "Rules Engine", "Stop Conditions", "Escalations", "Weekly Reports", "Tuning"].map((term, index) => (
            <motion.span
              key={term}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-forest-green"
            >
              {term}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

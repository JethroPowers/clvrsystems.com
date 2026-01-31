"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useMediaQuery } from "@/hooks/use-media-query"

// Logo image component with error handling and fallback
function LogoImage({ domain, name, size = 32 }: { domain: string; name: string; size?: number }) {
  const [error, setError] = useState(false)
  const logoUrl = `https://logo.clearbit.com/${domain}`

  return error ? (
    <div
      className={`w-${size / 4} h-${size / 4} bg-gray-100 rounded-full flex items-center justify-center text-gray-400`}
    >
      <span className="text-xs font-medium">{name.charAt(0)}</span>
    </div>
  ) : (
    <div
      className={`w-${size / 4} h-${size / 4} bg-gray-100 rounded-full flex items-center justify-center overflow-hidden`}
    >
      <img
        src={logoUrl || "/placeholder.svg"}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-contain filter grayscale group-hover:filter-none transition-all duration-300"
        onError={() => setError(true)}
      />
    </div>
  )
}

// Tech stack data structure with domains added
const techStackData = [
  {
    title: "Core Stack (Infrastructure + AI)",
    layers: [
      {
        name: "Agent Orchestration",
        tools: "LangGraph",
        why: "Multi-agent workflow building (dynamic task flows, agent memory)",
        domain: "langchain.com",
      },
      {
        name: "Language Models",
        tools: "OpenAI GPT-4o, Claude 3 Sonnet (backup)",
        why: "Multi-modal advanced reasoning, fallback resilience",
        domain: "openai.com",
      },
      {
        name: "Vector Embeddings",
        tools: "OpenAI Ada-002, Supabase pgvector extension",
        why: "Searchable memory and embeddings for smart agent retrieval",
        domain: "supabase.com",
      },
      {
        name: "Multi-agent Scheduling",
        tools: "LangChain Scheduler + Supabase event triggers",
        why: "Asynchronous agent orchestration (tasks, bookings, reminders)",
        domain: "langchain.com",
      },
    ],
  },
  {
    title: "Data Layer",
    layers: [
      {
        name: "Primary Database",
        tools: "Supabase (Postgres)",
        why: "Realtime updates, relational scaling, multi-tenant separation",
        domain: "supabase.com",
      },
      {
        name: "Analytics & Metrics",
        tools: "Supabase Analytics + PostHog",
        why: "Full event tracking, cohort analytics, behavioral funnels",
        domain: "posthog.com",
      },
      {
        name: "Authentication",
        tools: "Supabase Auth (JWT, Magic Link, OAuth)",
        why: "Secure, fast, customizable user auth",
        domain: "supabase.com",
      },
    ],
  },
  {
    title: "Communication Layer",
    layers: [
      {
        name: "SMS & Voice",
        tools: "Twilio Programmable Messaging + Voice API",
        why: "Direct customer touchpoints across clinics, stores, candidates",
        domain: "twilio.com",
      },
      {
        name: "Email Delivery",
        tools: "Resend + SendGrid fallback",
        why: "Transactional + marketing email flows with deliverability control",
        domain: "resend.com",
      },
      {
        name: "WhatsApp Automation",
        tools: "Twilio WhatsApp Business API",
        why: "Lead capture and follow-up automation on WhatsApp for clinics and stores",
        domain: "twilio.com",
      },
    ],
  },
  {
    title: "Front-End Layer",
    layers: [
      {
        name: "Frontend Framework",
        tools: "Next.js 14 + App Router",
        why: "Fast dynamic routing, server components, SEO optimized",
        domain: "nextjs.org",
      },
      {
        name: "UI Library",
        tools: "TailwindCSS + shadcn/ui",
        why: "Modular, scalable design components",
        domain: "tailwindcss.com",
      },
      {
        name: "Hosting",
        tools: "Vercel",
        why: "Edge hosting, CI/CD, global scaling out of the box",
        domain: "vercel.com",
      },
      {
        name: "Chat Interfaces",
        tools: "Botpress",
        why: "Visual chatbot design + fallback to GPT logic",
        domain: "botpress.com",
      },
      {
        name: "CMS (Blog Soon)",
        tools: "Sanity.io",
        why: "Structured content for blogs, help docs, landing pages",
        domain: "sanity.io",
      },
    ],
  },
  {
    title: "Security Layer",
    layers: [
      {
        name: "Encryption",
        tools: "AES-256, TLS 1.3",
        why: "Enterprise-grade encryption",
        domain: "ssl.com",
      },
      {
        name: "Zero Trust Architecture",
        tools: "Supabase + Role-based Access Control (RBAC)",
        why: "Least privilege access enforcement",
        domain: "supabase.com",
      },
      {
        name: "Compliance Monitoring",
        tools: "Datadog + custom monitoring hooks",
        why: "Proactive anomaly detection, uptime tracking",
        domain: "datadog.com",
      },
      {
        name: "Backups & Disaster Recovery",
        tools: "Vercel + Supabase Continuous Backup",
        why: "Recovery from failure scenarios, RPO/RTO controls",
        domain: "vercel.com",
      },
    ],
  },
]

// Stats for the dynamic progress chart
const operationalGuarantees = [
  { label: "System Uptime", value: "99.9%", color: "bg-green-500" },
  { label: "Escalation Response", value: "<5min", color: "bg-blue-500" },
  { label: "Weekly Reports", value: "100%", color: "bg-purple-500" },
  { label: "Data Portability", value: "Full", color: "bg-yellow-500" },
]

// Technology ecosystem data
const techEcosystem = [
  { name: "LangGraph", domain: "langchain.com" },
  { name: "OpenAI", domain: "openai.com" },
  { name: "Supabase", domain: "supabase.com" },
  { name: "LangChain", domain: "langchain.com" },
  { name: "PostHog", domain: "posthog.com" },
  { name: "Twilio", domain: "twilio.com" },
  { name: "Resend", domain: "resend.com" },
  { name: "Next.js", domain: "nextjs.org" },
  { name: "TailwindCSS", domain: "tailwindcss.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Botpress", domain: "botpress.com" },
  { name: "Sanity.io", domain: "sanity.io" },
  { name: "Datadog", domain: "datadog.com" },
  { name: "Calendly", domain: "calendly.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Klaviyo", domain: "klaviyo.com" },
  { name: "Greenhouse", domain: "greenhouse.io" },
]

const performanceStats = [
  { label: "System Uptime", value: "99.9%", color: "bg-green-500" },
  { label: "Escalation Response", value: "<5min", color: "bg-blue-500" },
  { label: "Weekly Reports", value: "100%", color: "bg-purple-500" },
  { label: "Data Portability", value: "Full", color: "bg-yellow-500" },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <section id="stack" className="w-full py-16 sm:py-20 md:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-forest-green mb-4">Stack We Use</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Our technology stack is built for reliability, security, and scalability.
          </p>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-forest-green mb-4 sm:mb-6 text-center">
              Operational Guarantees
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {operationalGuarantees.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "100%" } : { width: "0%" }}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.2 }}
                      className={`h-2.5 rounded-full ${stat.color}`}
                    ></motion.div>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-forest-green">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Layers */}
        <div ref={ref} className="space-y-6 sm:space-y-12 max-w-5xl mx-auto">
          {techStackData.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <motion.div
                className="p-4 sm:p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleSection(section.title)}
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
              >
                <h3 className="text-lg sm:text-xl font-bold font-serif text-forest-green">{section.title}</h3>
                {expandedSections[section.title] ? (
                  <ChevronUp className="h-5 w-5 text-forest-green" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-forest-green" />
                )}
              </motion.div>

              {expandedSections[section.title] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    {section.layers && (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">
                                Layer
                              </th>
                              <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">
                                Tools / Technologies
                              </th>
                              <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">
                                Why It Matters
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.layers.map((layer, layerIndex) => (
                              <motion.tr
                                key={layer.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * layerIndex }}
                                className="border-b border-gray-100 hover:bg-gray-50 group"
                              >
                                <td className="py-3 px-2 sm:px-4">
                                  <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                      <LogoImage domain={layer.domain} name={layer.name} size={isMobile ? 24 : 32} />
                                    </div>
                                    <span className="font-medium text-forest-green text-sm sm:text-base">
                                      {layer.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">{layer.tools}</td>
                                <td className="py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">
                                  <div className="flex items-center">
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Info className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mr-1 sm:mr-2 cursor-pointer flex-shrink-0" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p className="max-w-xs text-xs sm:text-sm">{layer.why}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                    <span className="line-clamp-2 sm:line-clamp-none">{layer.why}</span>
                                  </div>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech Grid Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-lg sm:text-xl font-bold font-serif text-forest-green text-center mb-6 sm:mb-8">
            Technology Ecosystem
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {techEcosystem.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="flex flex-col items-center justify-center h-20 sm:h-24 bg-white rounded-lg shadow-sm p-2 hover:bg-gray-50 transition-all duration-300 group"
              >
                <LogoImage domain={tech.domain} name={tech.name} size={isMobile ? 24 : 32} />
                <span className="text-xs text-center text-gray-600 font-medium mt-2">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mt-8 sm:mt-12"
        >
          {["Enterprise-grade", "Scalable", "Secure", "Reliable", "Modular", "Extensible"].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            >
              <Badge variant="outline" className="bg-white text-forest-green border-forest-green/30 text-xs sm:text-sm">
                {badge}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

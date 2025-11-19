"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Faq() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const faqItems = [
    {
      question: "How does your AI system differ from off-the-shelf solutions?",
      answer:
        "Our AI systems are custom-built for specific vertical industries, with modular components that can be tailored to your exact business processes. Unlike generic solutions, we provide full ownership of your system infrastructure.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We currently specialize in healthcare (via Emilia.io), e-commerce (CommerceIQ), and HR/recruiting (TalentTunnel), with legal and real estate solutions on our roadmap.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation timelines vary based on complexity, but typically range from 4-12 weeks. Our modular approach allows us to deploy core functionality quickly and iteratively add capabilities.",
    },
    {
      question: "What security measures do you have in place?",
      answer:
        "We implement enterprise-grade security including AES-256 encryption, GDPR compliance, HIPAA-ready infrastructure, and SOC 2 verified controls. All data is encrypted both at rest and in transit.",
    },
    {
      question: "Can your systems integrate with our existing tools?",
      answer:
        "Yes, our systems are designed for seamless integration with popular platforms like Shopify, Calendly, Greenhouse, WordPress, and Airtable, as well as custom APIs and databases.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-forest-green mb-3 sm:mb-4">FAQ</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Common questions about our AI systems and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`mb-4 rounded-lg overflow-hidden ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } border border-gray-200 shadow-sm`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="font-bold font-serif text-forest-green text-sm sm:text-base">{question}</h3>
        <div className="flex-shrink-0 ml-2">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-forest-green" />
          ) : (
            <ChevronDown className="h-5 w-5 text-forest-green" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

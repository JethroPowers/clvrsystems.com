"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Faq() {
  const faqItems = [
    {
      question: "Do we need to change our existing tools?",
      answer:
        "No. Our operators integrate with your current tools—CRMs, calendars, payment systems, messaging platforms. We work alongside what you already use, not replace it.",
    },
    {
      question: "What access do you need to get started?",
      answer:
        "We need API access or admin credentials to the systems the operator will control (booking software, invoicing tools, etc.). We document every integration and follow least-privilege access principles.",
    },
    {
      question: "How fast can we go live?",
      answer:
        "Most operators are live within 2-4 weeks. Week 1 is baseline + setup. Week 2-3 is integration + testing. Week 4 is live with stop conditions in place.",
    },
    {
      question: "What happens when something fails or needs review?",
      answer:
        "Every operator has stop conditions and escalation paths. When a rule triggers a stop, the operator pauses and escalates to a human. You stay in control of edge cases.",
    },
    {
      question: "Can we pause or override the operator?",
      answer:
        "Yes. You can pause any operator instantly. You can also set manual override rules for specific scenarios or clients. The operator respects your boundaries.",
    },
    {
      question: "What does weekly reporting include?",
      answer:
        "Weekly reports show outcomes, not just activity. You'll see what the operator blocked, approved, collected, and recovered—plus recommendations for tuning based on real data.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50 scroll-mt-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-forest-green/70 mb-2">Operational Clarity</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-forest-green mb-3 sm:mb-4">FAQ</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Common questions about how our operators work.
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

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`mb-4 rounded-lg overflow-hidden ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } border border-gray-200 shadow-sm`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green/50 focus-visible:ring-inset"
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

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base">
            <p>{answer}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

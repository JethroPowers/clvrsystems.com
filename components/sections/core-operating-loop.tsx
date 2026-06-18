"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type CoreStep = {
  title: string
  description: string
}

const defaultSteps: CoreStep[] = [
  {
    title: "Understand",
    description: "Make the important state visible across the work, team, and tools.",
  },
  {
    title: "Decide",
    description: "Choose the next action from context, rules, timing, and priority.",
  },
  {
    title: "Execute",
    description: "Move work forward through prompts, tasks, messages, reviews, and handoffs.",
  },
  {
    title: "Record",
    description: "Keep decisions, actions, reviews, and outcomes attached to the workflow.",
  },
]

const softEase = [0.22, 1, 0.36, 1] as const

export default function CoreOperatingLoop({
  className,
  steps = defaultSteps,
}: {
  className?: string
  steps?: CoreStep[]
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.34 }}
      transition={{ duration: 0.75, ease: softEase }}
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071d15]/72 p-6 shadow-[0_34px_100px_-78px_rgba(0,0,0,0.92)] backdrop-blur-sm md:p-8",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(186,243,217,0.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(135deg,rgba(186,243,217,0.12),transparent_42%)]"
        aria-hidden
      />
      <div className="absolute inset-0 clvr-visual-grain opacity-[0.12]" aria-hidden />

      <div className="relative">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#baf3d9]/76">CLVR Core</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-[2rem]">
              Understand. Decide. Execute. Record.
            </h3>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/54">
            One loop that every applied system inherits.
          </p>
        </div>

        <div className="relative mt-8 hidden md:block">
          <div className="absolute left-0 right-0 top-[1.1rem] h-px bg-white/12" aria-hidden />
          <motion.div
            className="absolute left-0 right-0 top-[1.1rem] h-px origin-left bg-[#baf3d9]/70"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.46 }}
            transition={{ duration: 1.3, ease: softEase }}
            aria-hidden
          />

          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, delay: index * 0.11, ease: softEase }}
                className="group relative pt-12"
              >
                <span
                  className="absolute left-0 top-0 h-9 w-9 rounded-full border border-[#baf3d9]/42 bg-[#0f3326] shadow-[0_0_30px_rgba(186,243,217,0.16)] transition group-hover:scale-105 group-hover:bg-[#164634]"
                  aria-hidden
                />
                <h4 className="font-display text-2xl font-semibold leading-tight text-white transition group-hover:text-[#dffbeb]">
                  {step.title}
                </h4>
                <p className="mt-4 max-w-[14rem] text-sm leading-6 text-white/58">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 md:hidden">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/12" aria-hidden />
          <motion.div
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-[#baf3d9]/70"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.38 }}
            transition={{ duration: 1.1, ease: softEase }}
            aria-hidden
          />
          <div className="space-y-7">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.58, delay: index * 0.08, ease: softEase }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1 h-8 w-8 rounded-full border border-[#baf3d9]/42 bg-[#0f3326]" aria-hidden />
                <h4 className="font-display text-2xl font-semibold text-white">{step.title}</h4>
                <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

"use client"

import type { ComponentType } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

type GraphProps = {
  reducedMotion: boolean
}

const model: Array<{
  index: string
  title: string
  description: string
  Visual: ComponentType<GraphProps>
}> = [
  {
    index: "01",
    title: "Consulting surfaces the problem.",
    description:
      "We work directly with companies to uncover real operating friction, control gaps, and infrastructure needs inside live environments.",
    Visual: ConsultingGraph,
  },
  {
    index: "02",
    title: "Infrastructure turns the solution into an asset.",
    description:
      "Repeatable patterns are converted into systems, logic, verification layers, and operating assets that can persist beyond a single engagement.",
    Visual: InfrastructureGraph,
  },
  {
    index: "03",
    title: "Ventures scale the asset.",
    description:
      "When the infrastructure has independent value, we develop it into focused platforms and ventures inside the broader portfolio.",
    Visual: VenturesGraph,
  },
]

export default function OperatingModel() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section id="model" className="w-full py-32 md:py-36">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Model"
          title="One company. Three compounding functions."
          description="We use consulting, infrastructure building, and venture creation as a connected operating model rather than separate lines of business."
          className="max-w-[32rem]"
        />

        <div className="mx-auto mt-14 grid max-w-[62rem] gap-5 lg:grid-cols-3 lg:gap-6">
          {model.map((item, index) => {
            const Visual = item.Visual

            return (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="surface-panel flex h-full flex-col p-4"
              >
                <div className="relative h-[12.75rem] overflow-hidden rounded-[1.1rem] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(6,78,59,0.04),rgba(255,255,255,0.92))] md:h-[13.25rem]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,78,59,0.08),transparent_34%)]" />
                  <Visual reducedMotion={reducedMotion} />
                </div>

                <div className="mt-5 border-t border-black/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-black/36">{item.index}</p>
                  <h3 className="mt-3 text-[1.15rem] font-display leading-tight text-black md:text-[1.38rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.35rem] text-black/56">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ConsultingGraph({ reducedMotion }: GraphProps) {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 320 220" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="consulting-line" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,78,59,0.18)" />
            <stop offset="55%" stopColor="rgba(6,78,59,0.78)" />
            <stop offset="100%" stopColor="rgba(6,78,59,0.45)" />
          </linearGradient>
        </defs>

        <path d="M0 48 H320" stroke="rgba(0,0,0,0.04)" strokeDasharray="4 8" />
        <path d="M0 110 H320" stroke="rgba(0,0,0,0.04)" strokeDasharray="4 8" />
        <path d="M0 172 H320" stroke="rgba(0,0,0,0.04)" strokeDasharray="4 8" />

        {[
          "M-8 42 C 44 42, 72 72, 112 108 C 130 124, 146 128, 158 110",
          "M-4 110 C 54 110, 86 110, 122 110 C 138 110, 148 110, 158 110",
          "M12 182 C 62 188, 82 150, 120 118 C 138 104, 148 104, 158 110",
          "M162 110 C 198 110, 228 110, 324 110",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#consulting-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.35 }}
            animate={
              reducedMotion
                ? { pathLength: 1, opacity: 0.7 }
                : { pathLength: 1, opacity: [0.45, 0.95, 0.45] }
            }
            transition={
              reducedMotion
                ? { duration: 0.6, delay: index * 0.08 }
                : {
                    pathLength: { duration: 1.1, delay: index * 0.1, ease: "easeInOut" },
                    opacity: { duration: 3.4, delay: index * 0.08, repeat: Infinity, ease: "easeInOut" },
                  }
            }
          />
        ))}

        <motion.circle
          cx="158"
          cy="110"
          r="7"
          fill="rgba(6,78,59,0.18)"
          animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.45, 1, 0.45], scale: [1, 1.3, 1] }}
          transition={reducedMotion ? { duration: 0.2 } : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "158px 110px" }}
        />
      </svg>

      <div className="absolute inset-0">
        <SmallNode
          label="Ops"
          className="left-[14%] top-[18%]"
          reducedMotion={reducedMotion}
          delay={0}
        />
        <SmallNode
          label="Flow"
          className="left-[18%] top-[66%]"
          reducedMotion={reducedMotion}
          delay={0.2}
        />
        <SmallNode
          label="Risk"
          className="left-[32%] top-[46%]"
          reducedMotion={reducedMotion}
          delay={0.4}
        />

        <motion.div
          className="absolute left-[43%] top-[37%] flex h-14 w-14 items-center justify-center rounded-[1rem] border border-black/[0.06] bg-white/92 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-[0_18px_50px_-30px_rgba(6,78,59,0.4)]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1, 1.05, 1] }}
          transition={reducedMotion ? { duration: 0.3, delay: 0.3 } : { duration: 2.8, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        >
          Signal
        </motion.div>

        <motion.div
          className="absolute right-[9%] top-[43%] rounded-full border border-primary/15 bg-white/90 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-primary"
          initial={{ opacity: 0, x: -8 }}
          animate={reducedMotion ? { opacity: 1, x: 0 } : { opacity: [0.55, 1, 0.55], x: [0, 4, 0] }}
          transition={reducedMotion ? { duration: 0.3, delay: 0.5 } : { duration: 2.6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Problem
        </motion.div>
      </div>
    </div>
  )
}

function InfrastructureGraph({ reducedMotion }: GraphProps) {
  const pointSequence = [
    { cx: 38, cy: 148 },
    { cx: 84, cy: 132 },
    { cx: 118, cy: 92 },
    { cx: 156, cy: 160 },
    { cx: 202, cy: 110 },
    { cx: 246, cy: 92 },
    { cx: 286, cy: 132 },
  ]

  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 320 220" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="infra-fill" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,78,59,0.22)" />
            <stop offset="100%" stopColor="rgba(6,78,59,0)" />
          </linearGradient>
        </defs>

        {[60, 110, 160].map((y) => (
          <path key={y} d={`M0 ${y} H320`} stroke="rgba(0,0,0,0.04)" strokeDasharray="4 8" />
        ))}

        <motion.path
          d="M0 148 C 28 148, 52 162, 68 150 C 84 138, 90 116, 110 124 C 128 132, 132 82, 156 84 C 176 86, 176 178, 202 160 C 224 144, 236 90, 248 92 C 260 94, 266 134, 282 134 C 298 134, 304 146, 320 140"
          fill="none"
          stroke="rgba(6,78,59,0.78)"
          strokeWidth="2.75"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={reducedMotion ? { pathLength: 1, opacity: 0.85 } : { pathLength: 1, opacity: [0.55, 1, 0.55] }}
          transition={
            reducedMotion
              ? { duration: 0.8, ease: "easeInOut" }
              : {
                  pathLength: { duration: 1.35, ease: "easeInOut" },
                  opacity: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }
          }
        />

        <motion.path
          d="M0 220 L0 148 C 28 148, 52 162, 68 150 C 84 138, 90 116, 110 124 C 128 132, 132 82, 156 84 C 176 86, 176 178, 202 160 C 224 144, 236 90, 248 92 C 260 94, 266 134, 282 134 C 298 134, 304 146, 320 140 L320 220 Z"
          fill="url(#infra-fill)"
          initial={{ opacity: 0 }}
          animate={reducedMotion ? { opacity: 0.42 } : { opacity: [0.24, 0.4, 0.24] }}
          transition={reducedMotion ? { duration: 0.4, delay: 0.2 } : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {pointSequence.map((point, index) => (
          <motion.circle
            key={`${point.cx}-${point.cy}`}
            cx={point.cx}
            cy={point.cy}
            r={index === 2 || index === 4 ? "4.5" : "3.5"}
            fill={index === 2 || index === 4 ? "rgba(6,78,59,0.82)" : "rgba(6,78,59,0.36)"}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.35, 1, 0.35], scale: [1, 1.2, 1] }}
            transition={
              reducedMotion
                ? { duration: 0.2, delay: index * 0.08 }
                : { duration: 2.4, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }
            }
            style={{ transformOrigin: `${point.cx}px ${point.cy}px` }}
          />
        ))}

        {!reducedMotion && (
          <motion.circle
            r="5"
            fill="white"
            stroke="rgba(6,78,59,0.88)"
            strokeWidth="2"
            animate={{
              cx: pointSequence.map((point) => point.cx),
              cy: pointSequence.map((point) => point.cy),
            }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>

      <motion.div
        className="absolute right-[10%] top-[13%] rounded-full border border-primary/15 bg-white/90 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-primary"
        initial={{ opacity: 0, y: -8 }}
        animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: [0.55, 1, 0.55], y: [0, -3, 0] }}
        transition={reducedMotion ? { duration: 0.3, delay: 0.3 } : { duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
      >
        Asset
      </motion.div>
    </div>
  )
}

function VenturesGraph({ reducedMotion }: GraphProps) {
  const nodes = [
    { left: "68%", top: "18%", label: "V1", delay: 0.1 },
    { left: "72%", top: "40%", label: "V2", delay: 0.25 },
    { left: "68%", top: "62%", label: "V3", delay: 0.4 },
  ]

  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 320 220" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="venture-line" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,78,59,0.25)" />
            <stop offset="100%" stopColor="rgba(6,78,59,0.72)" />
          </linearGradient>
        </defs>

        {[74, 110, 146].map((y) => (
          <motion.path
            key={y}
            d={`M132 110 C 172 110, 182 ${y}, 216 ${y}`}
            fill="none"
            stroke="url(#venture-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={reducedMotion ? { pathLength: 1, opacity: 0.78 } : { pathLength: 1, opacity: [0.35, 0.95, 0.35] }}
            transition={
              reducedMotion
                ? { duration: 0.5, delay: (y - 74) / 160 }
                : {
                    pathLength: { duration: 1, delay: (y - 74) / 200, ease: "easeInOut" },
                    opacity: { duration: 3, delay: (y - 74) / 220, repeat: Infinity, ease: "easeInOut" },
                  }
            }
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-[20%] top-[38%] flex h-12 w-[4.4rem] items-center justify-center rounded-[0.95rem] border border-black/[0.06] bg-white/94 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-[0_16px_42px_-32px_rgba(6,78,59,0.35)]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1, 1.04, 1] }}
        transition={reducedMotion ? { duration: 0.3, delay: 0.2 } : { duration: 2.7, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
      >
        Asset
      </motion.div>

      <motion.div
        className="absolute left-[26%] top-[12%] rounded-full border border-primary/15 bg-white/90 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-black/70"
        initial={{ opacity: 0, y: -8 }}
        animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: [0.55, 1, 0.55], y: [0, -2, 0] }}
        transition={reducedMotion ? { duration: 0.3 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        the4five.co
      </motion.div>

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="absolute flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-black/[0.06] bg-white/92 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-[0_14px_32px_-26px_rgba(6,78,59,0.35)]"
          style={{ left: node.left, top: node.top }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.45, 1, 0.45], scale: [1, 1.08, 1] }}
          transition={
            reducedMotion
              ? { duration: 0.3, delay: node.delay }
              : { duration: 2.8, delay: node.delay, repeat: Infinity, ease: "easeInOut" }
          }
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  )
}

function SmallNode({
  label,
  className,
  reducedMotion,
  delay,
}: {
  label: string
  className: string
  reducedMotion: boolean
  delay: number
}) {
  return (
    <motion.div
      className={`absolute flex h-9 w-9 items-center justify-center rounded-[0.9rem] border border-black/[0.05] bg-white/88 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-black/56 shadow-[0_12px_28px_-26px_rgba(0,0,0,0.25)] ${className}`}
      initial={{ opacity: 0, scale: 0.86 }}
      animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.5, 1, 0.5], scale: [1, 1.06, 1] }}
      transition={
        reducedMotion
          ? { duration: 0.25, delay }
          : { duration: 2.7, delay, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {label}
    </motion.div>
  )
}

import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const systems = [
  {
    title: "Intake and qualification systems",
    description: "Capture demand cleanly, qualify faster, and route the right work to the right team.",
  },
  {
    title: "Routing and handoff systems",
    description: "Move work across people, stages, and tools without ambiguity around ownership.",
  },
  {
    title: "Booking and scheduling flows",
    description: "Reduce friction between enquiry, calendar, confirmation, and attendance.",
  },
  {
    title: "Document and approval workflows",
    description: "Keep sign-off, files, and decisions moving in the right order.",
  },
  {
    title: "Quote-to-cash systems",
    description: "Connect quoting, approval, invoicing, collection, and visibility as one controlled flow.",
  },
  {
    title: "Retention and referral systems",
    description: "Turn existing clients into repeat revenue and warmer introductions.",
  },
  {
    title: "Reporting and visibility layers",
    description: "Give leadership a live view of throughput, response time, and revenue control.",
  },
  {
    title: "Internal control systems",
    description: "Install checkpoints, rules, and escalations where operational drift is expensive.",
  },
]

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="w-full border-b border-black/10 py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="What We Build"
          title="Installed systems, not vague services."
          description="The work is practical. We design and install the operating systems that keep revenue, delivery, and client workflows moving with more control."
          align="center"
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {systems.map((system, index) => (
            <Reveal key={system.title} delay={index * 0.04} className="surface-muted p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Installed solution {index + 1}</p>
              <h3 className="mt-4 text-2xl font-display leading-tight text-black">{system.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/58 md:text-base">{system.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

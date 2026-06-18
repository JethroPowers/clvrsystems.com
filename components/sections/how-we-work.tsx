import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "Map where work, revenue, or communication is leaking.",
  },
  {
    number: "02",
    title: "Redesign",
    description: "Remove friction, ambiguity, and dependency on memory.",
  },
  {
    number: "03",
    title: "Install",
    description: "Implement the logic, automation, and interfaces required to run the process properly.",
  },
  {
    number: "04",
    title: "Measure",
    description: "Track throughput, response time, delivery control, cash collection, or retention impact.",
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="w-full border-b border-black/10 py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="A consulting model with implementation discipline."
          description="We do not stop at recommendation decks. The work ends when the workflow is redesigned, installed, and measurable."
          align="center"
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06} className="surface-muted p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{step.number}</p>
              <h3 className="mt-6 text-2xl font-display text-black">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/58 md:text-base">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

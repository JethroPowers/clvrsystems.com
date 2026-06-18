import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const areas = [
  {
    title: "Client Operations",
    description: "Cleaner intake, communication, scheduling, and visibility from first contact to handover.",
    outcome: "Outcome: better response times and a more consistent client experience.",
  },
  {
    title: "Revenue Operations",
    description: "Qualification, quoting, approvals, invoicing, and cash collection built as one controlled flow.",
    outcome: "Outcome: less revenue leakage and faster conversion into cash.",
  },
  {
    title: "Delivery Systems",
    description: "Execution designed around ownership, timing, and fewer missed steps across the operating team.",
    outcome: "Outcome: cleaner handoffs and stronger delivery control.",
  },
  {
    title: "Approval & Compliance Workflows",
    description: "Decisions, documents, and proof handled with proper controls where mistakes are expensive.",
    outcome: "Outcome: less drift, clearer accountability, and safer execution.",
  },
  {
    title: "Retention & Referral Infrastructure",
    description: "Post-delivery systems that support repeat business, referral capture, and structured follow-up.",
    outcome: "Outcome: more revenue from the clients you already have.",
  },
]

export default function SolutionAreas() {
  return (
    <section id="solution-areas" className="w-full border-b border-black/10 py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Solution Areas"
          title="Core areas where better systems change the business."
          description="Each engagement focuses on operational areas where clarity, control, and response time matter commercially."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05} className="surface-panel flex h-full flex-col p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Solution area</p>
              <h3 className="mt-4 text-2xl font-display leading-tight text-black">{area.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-black/58">{area.description}</p>
              <div className="editorial-rule my-5" />
              <p className="text-sm leading-7 text-black/68">{area.outcome}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

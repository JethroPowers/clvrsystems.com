import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const issues = [
  {
    title: "Leads sit too long",
    description:
      "New enquiries arrive, but response and qualification are inconsistent, so good opportunities cool before anyone takes ownership.",
  },
  {
    title: "Handoffs break between people",
    description:
      "Sales, delivery, and admin each see part of the work, but nobody sees the full process, so next steps get lost.",
  },
  {
    title: "Client communication varies",
    description:
      "Updates depend on whoever remembers to send them, which creates friction, avoidable questions, and a weaker client experience.",
  },
  {
    title: "Cash collection trails the work",
    description:
      "Quotes, approvals, invoices, and follow-up happen out of sequence, so money lands later than it should.",
  },
  {
    title: "Delivery depends on manual follow-up",
    description:
      "Projects move because someone keeps chasing, not because the process is designed to keep moving.",
  },
  {
    title: "Approvals and documents stall",
    description:
      "Sign-off, paperwork, and internal decisions wait in inboxes, holding up execution and obscuring accountability.",
  },
]

export default function WhatWeFix() {
  return (
    <section id="what-we-fix" className="w-full border-b border-black/10 py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <SectionHeading
            eyebrow="What We Fix"
            title="The places where operations quietly break."
            description="When work depends on memory, chasing, and individual heroics, the business slows down in quiet but expensive ways."
            className="lg:sticky lg:top-28 self-start"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {issues.map((issue, index) => (
              <Reveal key={issue.title} delay={index * 0.05} className="surface-muted p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-display leading-tight text-black">{issue.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/58 md:text-base">{issue.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

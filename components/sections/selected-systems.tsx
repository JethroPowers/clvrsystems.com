import { Button } from "@/components/ui/button"
import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const systems = [
  {
    title: "Emilia",
    description: "Retention, referral, and reactivation system for clinics that need tighter control after the initial sale.",
    href: "https://emilia.clvrautomations.com/",
  },
  {
    title: "MarginFlow",
    description: "Quote-to-cash system for trades and delivery businesses where speed, approvals, and collections need to stay aligned.",
    href: "https://marginflow.clvrautomations.com/",
  },
  {
    title: "Verified",
    description: "Approval and payment-control system for workflows where documentation, proof, and sign-off have to stay clean.",
    href: "https://verified.clvrautomations.com/",
  },
]

export default function SelectedSystems() {
  return (
    <section id="selected-systems" className="w-full border-b border-black/10 py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Systems"
            title="Focused platforms built under The4Five."
            description="A small selection of more specific systems built beneath the parent consultancy. They support credibility, but they are not the homepage offer."
            className="max-w-3xl"
          />
          <Reveal className="max-w-sm">
            <p className="text-sm leading-7 text-black/56">
              The main offer remains workflow diagnosis, redesign, installation, and measurement.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {systems.map((system, index) => (
            <Reveal key={system.title} delay={index * 0.06} className="surface-panel flex h-full flex-col p-10">
              <p className="section-label">Built by The4Five</p>
              <h3 className="mt-6 text-3xl font-display text-black">{system.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-black/58 md:text-base">{system.description}</p>

              <Button
                asChild
                variant="outline"
                className="mt-10 w-full rounded-sm border-black/12 bg-transparent text-sm font-semibold text-black hover:bg-black/[0.03]"
              >
                <a href={system.href} target="_blank" rel="noopener noreferrer">
                  View System
                </a>
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

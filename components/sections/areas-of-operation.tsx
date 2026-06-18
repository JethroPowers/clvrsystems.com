import type { LucideIcon } from "lucide-react"
import {
  Bot,
  CircleCheckBig,
  GitBranch,
  LayoutPanelTop,
  Rocket,
  ShieldCheck,
} from "lucide-react"
import { Timeline } from "@/components/ui/timeline"
import SectionHeading from "@/components/ui-custom/section-heading"

const areas = [
  {
    title: "AI Operations",
    description:
      "Operational structures for how AI-enabled work is orchestrated, reviewed, and made dependable inside real companies.",
    lead: "Where AI-enabled execution needs structure, review, and operational discipline.",
    signals: ["Orchestration", "Review logic", "Dependability"],
    icon: Bot,
  },
  {
    title: "Workflow Infrastructure",
    description:
      "The systems layer that controls routing, handoffs, approvals, and how execution moves across a business.",
    lead: "The layer that decides how work moves, who owns it, and where it can stall.",
    signals: ["Routing", "Handoffs", "Approvals"],
    icon: GitBranch,
  },
  {
    title: "Verification",
    description:
      "Proof, validation, documentation, and trust layers for workflows where accuracy, accountability, and sign-off matter.",
    lead: "Trust architecture for workflows where proof, validation, and sign-off cannot drift.",
    signals: ["Proof", "Validation", "Accountability"],
    icon: ShieldCheck,
  },
  {
    title: "Systems Design",
    description:
      "Interfaces, logic, reporting, and underlying structure that make operational systems legible, usable, and scalable.",
    lead: "The operating interface between people, logic, visibility, and system control.",
    signals: ["Interfaces", "Reporting", "Scalability"],
    icon: LayoutPanelTop,
  },
  {
    title: "Venture Creation",
    description:
      "Focused ventures built around infrastructure themes that can stand on their own beyond a single consulting context.",
    lead: "Where repeatable infrastructure themes become products, platforms, and standalone ventures.",
    signals: ["Incubation", "Platforms", "Scale"],
    icon: Rocket,
  },
]

export default function AreasOfOperation() {
  const data = areas.map((area) => ({
    title: area.title,
    content: (
      <AreaPanel
        lead={area.lead}
        description={area.description}
        signals={area.signals}
        icon={area.icon}
      />
    ),
  }))

  return (
    <section id="areas" className="w-full py-32 md:py-36">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Areas"
          title="We operate across five connected domains."
          description="These are not presented as agency service lines. They are the infrastructure themes we advise on, build through, and develop ventures around."
          className="max-w-[32rem]"
        />
      </div>

      <div className="mt-16">
        <Timeline data={data} className="px-4 md:px-6" />
      </div>
    </section>
  )
}

function AreaPanel({
  lead,
  description,
  signals,
  icon: Icon,
}: {
  lead: string
  description: string
  signals: string[]
  icon: LucideIcon
}) {
  return (
    <div className="surface-panel max-w-[34rem] p-5">
      <div className="flex items-start justify-between gap-5">
        <div className="max-w-lg space-y-4">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-black/[0.02] px-3.5 py-2">
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/48">
              Area of operation
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-[0.98rem] font-medium leading-6 text-black md:text-[1.02rem]">{lead}</p>
            <p className="text-sm leading-[1.35rem] text-black/56">{description}</p>
          </div>
        </div>

        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(6,78,59,0.08),rgba(255,255,255,0.96))] md:flex">
          <Icon className="h-[1.125rem] w-[1.125rem] text-primary" />
        </div>
      </div>

      <div className="editorial-rule my-5" />

      <div className="grid gap-2 sm:grid-cols-3">
        {signals.map((signal) => (
          <div
            key={signal}
            className="flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[0.68rem] uppercase tracking-[0.12em] text-black/56"
          >
            <CircleCheckBig className="h-3.5 w-3.5 text-primary" />
            <span>{signal}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

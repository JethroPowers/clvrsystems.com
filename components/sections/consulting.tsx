import { MoveRight } from "lucide-react"

import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const consultingSignals = [
  "Businesses where revenue, delivery, and client operations no longer stay aligned without a stronger system layer.",
  "Teams that need workflow redesign, reporting structure, and implementation discipline rather than a surface-level tool audit.",
  "Operating environments where direct consulting can turn repeated friction into infrastructure that lasts.",
]

export default function Consulting() {
  return (
    <section id="consulting" className="w-full py-[8.5rem] md:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[63rem] space-y-10 md:space-y-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Consulting"
              title="We still work directly with companies that need stronger operational systems."
              description="Consulting remains one operating arm of the business. It keeps us close to live environments, exposes real infrastructure problems, and creates the conditions for implementation that can actually hold."
              className="max-w-[42rem]"
            />

            <Reveal delay={0.08} className="max-w-[15rem]">
              <p className="text-sm leading-6 text-black/54">
                If the need is direct consulting rather than a venture or partnership conversation, this is the right channel.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <Reveal className="surface-panel space-y-4 p-5 md:p-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Best fit
              </p>

              <div className="space-y-3">
                {consultingSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1rem] border border-black/[0.08] bg-black/[0.02] px-4 py-3.5"
                  >
                    <p className="text-sm leading-6 text-black/60">{signal}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="surface-panel flex flex-col justify-between p-5 md:p-6">
              <div className="space-y-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Consulting inquiry
                </p>
                <h3 className="font-display text-[1.35rem] leading-tight text-black md:text-[1.55rem]">
                  Use the consulting channel for system redesign and implementation work.
                </h3>
                <p className="text-sm leading-6 text-black/56">
                  This is the right route for businesses that want direct support diagnosing operational friction, redesigning workflow logic, and installing the systems layer properly.
                </p>
              </div>

              <a
                href="https://tally.so/r/mZGbo5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-primary"
              >
                Start a consulting inquiry
                <MoveRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

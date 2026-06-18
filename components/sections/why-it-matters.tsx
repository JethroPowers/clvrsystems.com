import Reveal from "@/components/ui-custom/reveal"
import SectionHeading from "@/components/ui-custom/section-heading"

const before = [
  "Manual follow-up",
  "Unclear ownership",
  "Missed steps",
  "Slow cash collection",
  "Poor visibility",
]

const after = [
  "Clear flow",
  "Cleaner handoffs",
  "Controlled delivery",
  "Stronger revenue capture",
  "Faster execution and reporting clarity",
]

export default function WhyItMatters() {
  return (
    <section id="why-it-matters" className="w-full border-b border-black/10 py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Why It Matters"
          title="What changes when the workflow is built properly."
          description="This is not about adding more software. It is about making the business easier to run, easier to measure, and easier to buy from."
          align="center"
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal className="surface-muted p-10 md:p-12">
            <p className="section-label">Before</p>
            <ul className="mt-8 space-y-5">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-4 border-t border-black/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-black/24" aria-hidden="true" />
                  <span className="text-lg leading-8 text-black/58">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="surface-panel p-10 md:p-12">
            <p className="section-label">After</p>
            <ul className="mt-8 space-y-5">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-4 border-t border-black/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-lg leading-8 text-black">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

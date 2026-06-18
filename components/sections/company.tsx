import Reveal from "@/components/ui-custom/reveal"

export default function Company() {
  return (
    <section id="company" className="w-full py-32 md:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 pt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.78fr)] lg:gap-16">
          <Reveal className="space-y-5">
            <p className="section-label">Company</p>
            <h2 className="max-w-[32rem] text-balance font-display text-[2rem] leading-[1.03] text-black md:text-[2.85rem]">
              We are building the infrastructure future companies will run on.
            </h2>
            <p className="max-w-xl text-balance text-[0.96rem] leading-6 text-black/60 md:text-[1.02rem]">
              Part consulting firm, part infrastructure studio, part venture platform. We work with real
              operating environments to uncover repeatable problems, then build the systems and ventures that
              can scale beyond a single engagement.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6">
            <div className="border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Descriptor</p>
              <p className="mt-3 text-[0.96rem] leading-6 text-black/66 md:text-[1.02rem]">
                A hybrid parent company for infrastructure, ventures, and operational systems.
              </p>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Structure</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-black/56">
                Consulting keeps us close to live operating problems. Infrastructure turns those patterns
                into assets. Ventures scale what proves durable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

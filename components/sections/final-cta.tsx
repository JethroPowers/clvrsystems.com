import { Button } from "@/components/ui/button"
import Reveal from "@/components/ui-custom/reveal"

export default function FinalCta() {
  return (
    <section id="contact" className="w-full py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <Reveal className="surface-panel relative overflow-hidden px-6 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(6,78,59,0.14),transparent_72%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="section-label mb-5">Book a Systems Review</p>
            <h2 className="mx-auto max-w-4xl text-balance font-display text-4xl leading-tight text-black md:text-5xl">
              Bring structure to the parts of your business that still rely on memory, chasing, and manual coordination.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-black/58 md:text-lg">
              We diagnose where workflow, delivery, or revenue control is getting lost, then show what a cleaner operating system should look like.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-10 rounded-sm border border-black bg-black px-6 text-sm font-semibold text-white shadow-none hover:bg-black/90"
            >
              <a href="https://tally.so/r/mZGbo5" target="_blank" rel="noopener noreferrer">
                Book a Systems Review
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/ui-custom/reveal"
import { cn } from "@/lib/utils"

const structureRows = [
  {
    title: "CLVR Systems",
    body: "The parent company building operating systems for real-world business workflows.",
  },
  {
    title: "CLVR Core",
    body: "The shared model for understanding work, deciding the next action, executing, and recording what happened.",
  },
  {
    title: "Applied Systems",
    body: "Emilia, MarginFlow, and SupplierOps apply the same model to different operational areas.",
  },
  {
    title: "CLVR Verified",
    body: "The record layer that keeps decisions, reviews, actions, and outcomes visible.",
  },
]

const principles = [
  {
    title: "Build around the workflow",
    body: "The system starts with how work actually moves through people, tools, approvals, and follow-up.",
  },
  {
    title: "Keep control visible",
    body: "Important actions should be reviewable where judgment, risk, or trust matters.",
  },
  {
    title: "Attach records to outcomes",
    body: "The record should stay connected to what happened, not live as an afterthought.",
  },
  {
    title: "One core, many systems",
    body: "Different business areas can share the same operating model without becoming the same product.",
  },
]

const faqs = [
  {
    question: "What kind of company is CLVR?",
    answer:
      "CLVR is a systems company. It builds applied operating systems from a shared core rather than selling generic automation services or disconnected dashboards.",
  },
  {
    question: "Why does CLVR start with systems instead of tools?",
    answer:
      "Important work usually breaks when decisions, ownership, follow-up, and records are separated. CLVR starts with the workflow so those pieces stay connected.",
  },
  {
    question: "Where does Emilia fit?",
    answer:
      "Emilia is the first applied CLVR system. It focuses on retention and referral workflows for aesthetic clinics, but it is not the whole company.",
  },
  {
    question: "What comes next?",
    answer:
      "CLVR is building around a shared core that can support more operational areas over time, including MarginFlow, SupplierOps, and future systems.",
  },
]

function PrimaryLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-[0_18px_40px_-30px_rgba(0,0,0,0.65)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2",
        light
          ? "bg-white text-black hover:bg-white/90 focus-visible:ring-offset-[#041711]"
          : "bg-black text-white hover:bg-black/90 focus-visible:ring-offset-background",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  )
}

function SecondaryLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2",
        light
          ? "border-white/28 bg-white/10 text-white backdrop-blur-md hover:bg-white/16 focus-visible:ring-offset-[#041711]"
          : "border-black/[0.12] bg-white/[0.58] text-black hover:border-black/20 hover:bg-white focus-visible:ring-offset-background",
      )}
    >
      {children}
    </Link>
  )
}

export default function CompanyPage() {
  return (
    <>
      <section className="relative flex min-h-[84svh] items-end overflow-hidden bg-[#061710] px-4 pb-20 pt-32 text-white md:px-6 md:pb-28 md:pt-40">
        <div className="absolute inset-0 opacity-55">
          <Image
            src="/clvr-hero-reference.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-[1.08] object-cover object-center motion-safe:animate-[clvr-hero-drift_38s_ease-in-out_infinite]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,23,17,0.25),rgba(4,23,17,0.96))]" aria-hidden />
        <Reveal className="container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.3fr)] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase text-white/76">Company</p>
              <h1 className="mt-6 text-balance font-display text-[2.05rem] font-semibold leading-[1.05] md:text-[3.15rem] xl:text-[3.55rem]">
                Built for businesses where important work cannot disappear.
              </h1>
            </div>
            <div className="max-w-[27rem] space-y-6 lg:pb-2">
              <p className="text-base leading-7 text-white/76">
                CLVR Systems builds the operating layer behind workflows that need clear decisions, controlled execution, and recorded outcomes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <PrimaryLink href="/systems" light>
                  Explore Systems
                </PrimaryLink>
                <SecondaryLink href="/#contact" light>
                  Start a Conversation
                </SecondaryLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-32 md:py-44">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto max-w-5xl">
            <div className="space-y-8 text-balance font-display text-[1.95rem] font-semibold leading-[1.1] text-black md:text-[2.65rem] xl:text-[3.1rem]">
              <p>CLVR exists because important work often fails between systems, not inside one screen.</p>
              <p className="text-black/56">
                Teams can have more software than ever and still lose ownership, timing, approvals, follow-up, and outcomes.
              </p>
              <p className="text-primary">The company builds systems that make that work harder to miss.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#03140f] py-28 text-white transition-colors duration-700 md:py-40">
        <div className="absolute inset-0 clvr-visual-grain opacity-[0.13]" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(186,243,217,0.14),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.08),transparent_24%)]"
          aria-hidden
        />
        <div className="container relative px-4 md:px-6">
          <Reveal className="max-w-3xl space-y-5">
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.55rem]">
              Parent company first. Systems underneath.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base">
              CLVR is structured around one shared operating model, then applied to specific business areas where workflow control matters.
            </p>
          </Reveal>
          <Reveal className="mt-12 border-y border-white/10">
            {structureRows.map((row, index) => (
              <div key={row.title} className="grid gap-5 border-t border-white/10 py-7 transition duration-300 first:border-t-0 hover:-translate-y-0.5 hover:bg-white/[0.04] md:grid-cols-[0.72fr_1.28fr] md:items-center md:px-4">
                <h3 className="font-display text-[1.45rem] font-semibold leading-tight text-white md:text-[1.65rem]">
                  {row.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-base">{row.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-32 md:py-44">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <Reveal className="lg:pt-4">
            <h2 className="max-w-lg text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-black md:text-[2.55rem]">
              Operating principles.
            </h2>
          </Reveal>
          <div className="border-y border-black/[0.09]">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.03} className="border-t border-black/[0.07] first:border-t-0">
                <div className="py-6">
                  <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-black md:text-[1.55rem]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-black/[0.58] md:text-base">{principle.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f1] py-32 transition-colors duration-700 md:py-44">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <Reveal className="lg:pt-4">
            <h2 className="max-w-lg text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-black md:text-[2.55rem]">
              Company questions.
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.03}>
                <details className="group rounded-[1.2rem] border border-black/[0.06] bg-white/[0.64] px-6 py-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.82]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-black">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-black transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-black/[0.58]">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <Reveal className="container rounded-[1.65rem] border border-black/[0.07] bg-[#f8f7f2] px-6 py-16 shadow-[0_30px_90px_-78px_rgba(4,23,17,0.42)] md:px-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-[2rem] font-semibold leading-[1.05] text-black md:text-[2.95rem]">
              Start a systems conversation.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-black/[0.56] md:text-base">
              Talk to CLVR about workflows where decisions, execution, and records need to work as one system.
            </p>
            <div className="mt-9">
              <PrimaryLink href="mailto:hello@clvrsystems.com">Contact CLVR</PrimaryLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

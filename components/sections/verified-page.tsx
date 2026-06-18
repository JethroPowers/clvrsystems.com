import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Reveal from "@/components/ui-custom/reveal"
import { cn } from "@/lib/utils"

const recordRows = [
  {
    title: "Recommended",
    body: "What the system suggested and why the action mattered.",
  },
  {
    title: "Reviewed",
    body: "Where an operator approved, rejected, or adjusted the action.",
  },
  {
    title: "Completed",
    body: "The message, task, handoff, follow-up, or change that moved the work forward.",
  },
  {
    title: "Recorded",
    body: "The outcome that stays attached to the workflow after the work is done.",
  },
]

const faqs = [
  {
    question: "What is CLVR Verified?",
    answer:
      "CLVR Verified is the record layer across CLVR systems. It keeps decisions, reviews, actions, and outcomes attached to important workflows.",
  },
  {
    question: "Is Verified a standalone product?",
    answer:
      "Verified is a layer across CLVR systems. It supports Emilia, MarginFlow, SupplierOps, and future systems by keeping the operational record visible.",
  },
  {
    question: "Does this replace human review?",
    answer:
      "No. Verified helps preserve human review where judgment, trust, or risk matters. The record shows what was recommended, reviewed, completed, and changed.",
  },
  {
    question: "Why does this matter?",
    answer:
      "When work moves across tools and people, the record often gets separated from the action. Verified keeps the record with the workflow.",
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

function ProofRecordPanel() {
  return (
    <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_34px_100px_-78px_rgba(0,0,0,0.92)]">
      <div className="rounded-[1.25rem] border border-white/10 bg-[#061710]/82 p-5 text-white md:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-5">
          <div>
            <h2 className="font-display text-xl font-semibold md:text-2xl">Workflow record</h2>
            <p className="mt-1 text-sm text-white/54">Attached to the action, not stored somewhere else.</p>
          </div>
          <span className="rounded-full border border-[#baf3d9]/22 bg-[#baf3d9]/12 px-3 py-1 text-xs font-semibold text-[#dffbeb]">
            Verified
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {recordRows.map((row) => (
            <div key={row.title} className="grid gap-3 rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] md:grid-cols-[8rem_minmax(0,1fr)]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#baf3d9]" aria-hidden />
                <p className="font-display text-base font-semibold text-white">{row.title}</p>
              </div>
              <p className="text-sm leading-6 text-white/64">{row.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function VerifiedPage() {
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
              <p className="text-xs font-semibold uppercase text-white/76">CLVR Verified</p>
              <h1 className="mt-6 text-balance font-display text-[2.05rem] font-semibold leading-[1.05] md:text-[3.15rem] xl:text-[3.55rem]">
                Records that stay attached to the workflow.
              </h1>
            </div>
            <div className="max-w-[27rem] space-y-6 lg:pb-2">
              <p className="text-base leading-7 text-white/76">
                Verified keeps decisions, reviews, actions, and outcomes visible as CLVR systems move work forward.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <PrimaryLink href="/#contact" light>
                  Start a Conversation
                </PrimaryLink>
                <SecondaryLink href="/systems" light>
                  Explore Systems
                </SecondaryLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-[#03140f] py-28 text-white md:py-40">
        <div className="absolute inset-0 clvr-visual-grain opacity-[0.13]" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(186,243,217,0.14),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(3,20,15,0),rgba(0,0,0,0.18))]"
          aria-hidden
        />
        <div className="container relative grid gap-14 px-4 md:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal className="max-w-3xl space-y-5">
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.55rem]">
              Proof is useful when it is part of the work.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base">
              A record created after the fact is easy to miss. CLVR Verified keeps the record tied to the action while the workflow is still moving.
            </p>
          </Reveal>
          <Reveal>
            <ProofRecordPanel />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f6f1] py-32 transition-colors duration-700 md:py-44">
        <div className="container px-4 md:px-6">
          <Reveal className="max-w-3xl space-y-5">
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-black md:text-[2.55rem]">
              A record layer across CLVR systems.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-black/[0.58] md:text-base">
              Emilia, MarginFlow, and SupplierOps operate in different business areas. Verified gives each system the same structure for recorded decisions and outcomes.
            </p>
          </Reveal>
          <Reveal className="mt-12 border-y border-black/[0.09]">
            {["Applied Systems", "CLVR Core", "Verified Records"].map((layer, index) => (
              <div key={layer} className="grid gap-5 border-t border-black/[0.07] py-7 first:border-t-0 md:grid-cols-[0.72fr_1.28fr] md:items-center md:px-4">
                <h3 className="font-display text-[1.45rem] font-semibold leading-tight text-black md:text-[1.65rem]">
                  {layer}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-black/[0.58] md:text-base">
                  {index === 0
                    ? "The business-specific systems that move operational work forward."
                    : index === 1
                      ? "The shared model for understanding the workflow, deciding the next action, executing, and recording."
                      : "The record that stays visible after recommendations, reviews, actions, and outcomes occur."}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-32 md:py-44">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <Reveal className="lg:pt-4">
            <h2 className="max-w-lg text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-black md:text-[2.55rem]">
              Questions about Verified.
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
              Build with records from the start.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-black/[0.56] md:text-base">
              Talk to CLVR about systems where decisions, execution, and outcomes need to stay connected.
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

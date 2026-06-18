import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import CoreOperatingLoop from "@/components/sections/core-operating-loop"
import Reveal from "@/components/ui-custom/reveal"
import { cn } from "@/lib/utils"

type SystemRow = {
  name: string
  description: string
  details: string
  status: string
  href: string
  externalUrl?: string
  tone?: "layer"
}

type Step = {
  title: string
  description: string
}

const systems: SystemRow[] = [
  {
    name: "Emilia",
    description: "Retention and referral infrastructure for aesthetic clinics.",
    details: "Recall / rebooking / referrals / follow-up",
    status: "First applied system",
    href: "/systems#emilia",
    externalUrl: "https://emilia.clvrautomations.com/",
  },
  {
    name: "MarginFlow",
    description: "Quote-to-cash control for trades and service teams.",
    details: "Pricing / approvals / invoicing / collections",
    status: "In development",
    href: "/systems#marginflow",
    externalUrl: "https://marginflow.clvrautomations.com",
  },
  {
    name: "SupplierOps",
    description: "Supplier and returns control for B2B operations.",
    details: "Exceptions / returns / handoffs / reliability",
    status: "Emerging system",
    href: "/systems#supplierops",
  },
  {
    name: "CLVR Verified",
    description: "Proof records for decisions, approvals, actions, and outcomes.",
    details: "Recommendations / reviews / actions / outcomes",
    status: "Proof layer",
    href: "/verified",
    externalUrl: "https://verified.clvrautomations.com/",
    tone: "layer",
  },
]

const proofRecord = ["Action recommended", "Reviewed by operator", "Workflow completed", "Outcome recorded"]

const principles: Step[] = [
  {
    title: "Workflows before dashboards",
    description: "A system should help work move, not only display what is broken.",
  },
  {
    title: "Control before autonomy",
    description: "Important actions should remain visible and reviewable where judgment matters.",
  },
  {
    title: "Records over memory",
    description: "If the outcome matters, the record should stay attached to the workflow.",
  },
  {
    title: "Systems over scattered tools",
    description: "CLVR connects decisions, execution, and outcomes into one operating layer.",
  },
]

const faqs = [
  {
    question: "What does CLVR Systems build?",
    answer:
      "CLVR builds operating systems that help businesses control important workflows. The systems help teams understand what is happening, decide what should happen next, move the work forward, and record the outcome.",
  },
  {
    question: "Is CLVR an agency?",
    answer:
      "No. CLVR is a systems company. It builds applied systems from a shared operating model, rather than selling generic automation services.",
  },
  {
    question: "How does Emilia fit into CLVR?",
    answer:
      "Emilia is CLVR's first applied system. It focuses on retention and referral workflows for aesthetic clinics. It is one system built from the CLVR core, not the whole company.",
  },
  {
    question: "What is CLVR Verified?",
    answer:
      "CLVR Verified is the record layer across CLVR systems. It keeps track of decisions, reviews, actions, and outcomes so important work remains visible.",
  },
  {
    question: "Why does recording outcomes matter?",
    answer:
      "When work moves through different tools and people, it is easy to lose track of what happened. CLVR keeps the record attached to the workflow.",
  },
  {
    question: "Who is CLVR for?",
    answer:
      "CLVR is built for businesses where missed follow-up, weak handoffs, unclear decisions, or poor records create real operational cost.",
  },
]

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("text-xs font-semibold uppercase", light ? "text-white/78" : "text-primary")}>{children}</p>
  )
}

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

function SectionIntro({
  title,
  description,
  className,
}: {
  title: ReactNode
  description?: string
  className?: string
}) {
  return (
    <Reveal className={cn("max-w-3xl space-y-5", className)}>
      <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-black md:text-[2.55rem]">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-black/[0.56] md:text-base">{description}</p> : null}
    </Reveal>
  )
}

function SystemsIndex({ showCta = false }: { showCta?: boolean }) {
  return (
    <Reveal className="mt-14">
      <div className="border-y border-black/[0.09]">
        {systems.map((system, index) => (
          <Reveal key={system.name} delay={index * 0.07} className="border-t border-black/[0.07] first:border-t-0">
            <article
              className={cn(
                "group grid gap-5 py-7 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.46] md:grid-cols-[0.66fr_1.34fr] md:items-center md:px-4",
                system.tone === "layer" && "bg-primary/[0.03]",
              )}
            >
              <div>
                <Link
                  href={system.href}
                  className="inline-flex font-display text-[1.38rem] font-semibold leading-tight text-black transition duration-300 hover:translate-x-1 hover:text-primary md:text-[1.54rem]"
                >
                  {system.name}
                </Link>
                <p className="mt-2 text-xs font-semibold text-primary md:text-sm">{system.status}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-black/[0.62] md:text-[0.95rem]">{system.description}</p>
                <div className="mt-3 flex flex-col gap-3 text-xs leading-6 text-black/[0.44] md:flex-row md:items-center md:justify-between md:text-sm">
                  <p>{system.details}</p>
                  {system.externalUrl ? (
                    <Link
                      href={system.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 rounded-full border border-black/[0.09] bg-white/50 px-3 py-1.5 text-xs font-semibold text-black/58 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                    >
                      Visit system
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {showCta ? (
        <div className="mt-8">
          <SecondaryLink href="/systems">View Systems</SecondaryLink>
        </div>
      ) : null}
    </Reveal>
  )
}

function ProofRecordVisual() {
  return (
    <div className="rounded-[1.55rem] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_70px_-62px_rgba(0,0,0,0.86)] backdrop-blur-sm">
      <div className="rounded-[1.25rem] border border-white/12 bg-[#071d15]/72 p-5 md:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-5">
          <div>
            <h3 className="font-display text-xl font-semibold text-white md:text-2xl">Workflow record</h3>
            <p className="mt-1 text-sm text-white/54">Attached to the work as it moves.</p>
          </div>
          <span className="rounded-full border border-[#baf3d9]/22 bg-[#baf3d9]/12 px-3 py-1 text-xs font-semibold text-[#dffbeb]">
            Verified
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {proofRecord.map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#baf3d9]" aria-hidden />
              <span className="text-sm font-medium text-white/82">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[92svh] overflow-hidden bg-[#061710] text-white">
      <div className="absolute inset-0">
        <Image
          src="/clvr-hero-reference.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-[1.1] object-cover object-center opacity-[0.96] motion-safe:animate-[clvr-hero-drift_34s_ease-in-out_infinite]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,246,239,0.14)_0%,rgba(247,246,239,0.02)_28%,rgba(5,20,14,0.58)_70%,rgba(5,20,14,0.96)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.34),transparent_30%),radial-gradient(circle_at_12%_90%,rgba(4,58,39,0.86),transparent_34%)]"
        aria-hidden
      />
      <div
        className="absolute right-[9%] top-[18%] h-64 w-64 rounded-full bg-[#baf3d9]/10 blur-3xl motion-safe:animate-[clvr-float_22s_ease-in-out_infinite]"
        aria-hidden
      />

      <div className="container relative flex min-h-[92svh] items-end px-4 pb-14 pt-28 md:px-6 md:pb-24 md:pt-36">
        <Reveal className="grid w-full gap-9 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)] lg:items-end lg:gap-12">
          <div className="max-w-[62rem]">
            <Eyebrow light>CLVR Systems</Eyebrow>
            <h1 className="mt-6 max-w-5xl text-balance font-display text-[2.05rem] font-semibold leading-[1.05] text-white sm:text-[2.65rem] md:text-[3.15rem] xl:text-[3.55rem]">
              Operating systems for real-world business workflows.
            </h1>
          </div>

          <div className="max-w-[27rem] space-y-6 lg:pb-6">
            <p className="text-base leading-7 text-white/82">
              CLVR helps businesses control follow-up, decisions, execution, and recorded outcomes.
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
        </Reveal>
      </div>
    </section>
  )
}

function ThesisSection() {
  const lines = [
    "Most operational failure does not come from lack of software.",
    "It comes from work disappearing between tools, teams, approvals, and follow-up.",
    "CLVR turns those gaps into controlled systems.",
  ]

  return (
    <section className="py-36 md:py-52">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {lines.map((line, index) => (
            <Reveal key={line} delay={index * 0.12} distance={28} className="mt-6 first:mt-0">
              <p
                className={cn(
                  "text-balance font-display text-[1.42rem] font-semibold leading-[1.18] md:text-[2.05rem] xl:text-[2.35rem]",
                  index === 1 && "text-black/54",
                  index === 2 ? "text-primary" : "text-black",
                )}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoreSection() {
  return (
    <section id="core" className="relative overflow-hidden bg-[#03140f] py-32 text-white md:py-44">
      <div className="absolute inset-0 clvr-visual-grain opacity-[0.13]" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(186,243,217,0.14),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(3,20,15,0),rgba(0,0,0,0.18))]"
        aria-hidden
      />
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
          <Reveal className="max-w-3xl space-y-6">
            <Eyebrow light>CLVR Core</Eyebrow>
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.55rem]">
              One core. Multiple systems.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/64 md:text-base">
              Every CLVR system follows the same structure: understand the workflow, decide the next action,
              move the work forward, and record what happened.
            </p>
          </Reveal>
          <CoreOperatingLoop />
        </div>
      </div>
    </section>
  )
}

function SystemsPreviewSection() {
  return (
    <section id="systems" className="bg-[#f7f6f1] py-36 transition-colors duration-700 md:py-52">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            title="Systems built from the CLVR core."
            description="CLVR builds systems for areas where missed actions, weak handoffs, and poor records create real cost."
          />
          <Reveal className="md:pb-2">
            <SecondaryLink href="/systems">View Systems</SecondaryLink>
          </Reveal>
        </div>
        <SystemsIndex />
      </div>
    </section>
  )
}

function DifferenceSection() {
  const states = [
    {
      title: "Scattered tools",
      description: "Work sits across inboxes, CRMs, spreadsheets, tasks, approvals, and staff memory.",
      image: "/application-fragmented.svg",
    },
    {
      title: "Controlled workflow",
      description: "The next action, owner, status, review, and outcome stay connected.",
      image: "/application-structured.svg",
    },
  ]

  return (
    <section className="py-36 md:py-52">
      <div className="container px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <SectionIntro
            title="Most tools show the gap. CLVR helps close it."
            description="Important work still disappears when ownership, approvals, follow-up, and records are spread across disconnected systems."
          />

          <Reveal className="space-y-9" distance={28}>
            <p className="max-w-2xl text-sm leading-7 text-black/[0.58] md:text-base">
              CLVR systems are built around the workflow itself: what happened, what should happen next, who
              reviews it, and what outcome gets recorded.
            </p>
            <div className="grid gap-4">
              {states.map((state, index) => (
                <Reveal
                  key={state.title}
                  delay={index * 0.1}
                  className="grid gap-5 rounded-[1.35rem] border border-black/[0.07] bg-[#f8f7f2] p-5 transition duration-500 hover:-translate-y-1 hover:border-black/[0.1] md:grid-cols-[8.5rem_minmax(0,1fr)] md:items-center"
                >
                  <div className="relative aspect-[1.3] overflow-hidden rounded-[1rem] border border-black/[0.05] bg-white">
                    <Image src={state.image} alt="" fill sizes="160px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-black md:text-[1.55rem]">
                      {state.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-black/[0.56]">{state.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function VerifiedSection() {
  return (
    <section id="verified" className="relative overflow-hidden bg-[#041711] py-36 text-white md:py-52">
      <div className="absolute inset-0 clvr-visual-grain opacity-[0.16]" aria-hidden />
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center">
          <Reveal className="max-w-3xl space-y-6">
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.6rem]">
              Proof built into the workflow.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/68 md:text-base">
              When a CLVR system moves work forward, the record stays attached to the workflow.
            </p>
            <SecondaryLink href="/verified" light>
              Explore Verified
            </SecondaryLink>
          </Reveal>
          <Reveal>
            <ProofRecordVisual />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function PrinciplesSection() {
  return (
    <section className="bg-[#f7f6f1] py-36 transition-colors duration-700 md:py-52">
      <div className="container px-4 md:px-6">
        <SectionIntro title="Built around control, not noise." />
        <div className="mt-12 border-y border-black/[0.09]">
          {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07} className="border-t border-black/[0.07] first:border-t-0">
              <div className="grid gap-5 py-7 transition duration-500 hover:-translate-y-0.5 hover:bg-white/[0.38] md:grid-cols-[0.72fr_1.28fr] md:items-center md:px-4">
                <h3 className="font-display text-[1.45rem] font-semibold leading-tight text-black md:text-[1.65rem]">
                  {principle.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-black/[0.58] md:text-base">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-[#061710] py-28 text-white transition-colors duration-700 md:py-40">
      <div className="absolute inset-0 clvr-visual-grain opacity-[0.1]" aria-hidden />
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <Reveal className="lg:pt-4">
            <h2 className="max-w-lg text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.55rem]">
              Simple answers for operators.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/58 md:text-base">
              Clear answers for teams evaluating workflow control, records, and applied systems.
            </p>
          </Reveal>

          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.06}>
                <details className="group rounded-[1.2rem] border border-white/10 bg-white/[0.055] px-6 py-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-white">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] text-white transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#061710] px-4 pb-14 pt-0 text-white md:px-6 md:pb-24">
      <Reveal className="container relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.055] px-6 py-16 shadow-[0_30px_100px_-82px_rgba(0,0,0,0.92)] md:px-12 md:py-20">
        <div className="clvr-cta-plume absolute -right-24 -top-28 h-72 w-72 opacity-50 motion-safe:animate-[clvr-float_22s_ease-in-out_infinite]" aria-hidden />
        <div className="absolute inset-0 clvr-visual-grain opacity-[0.08]" aria-hidden />
        <div className="relative max-w-3xl">
          <Eyebrow light>Contact</Eyebrow>
          <h2 className="mt-7 text-balance font-display text-[2rem] font-semibold leading-[1.05] text-white md:text-[2.95rem]">
            Start a systems conversation.
          </h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
            For operators and teams building businesses where decisions, execution, and records need to work
            as one system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="mailto:hello@clvrsystems.com" light>Contact CLVR</PrimaryLink>
            <SecondaryLink href="/systems" light>Explore Systems</SecondaryLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function ClvrHomepage() {
  return (
    <>
      <HeroSection />
      <ThesisSection />
      <CoreSection />
      <SystemsPreviewSection />
      <DifferenceSection />
      <VerifiedSection />
      <PrinciplesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

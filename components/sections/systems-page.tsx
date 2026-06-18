import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import CoreOperatingLoop from "@/components/sections/core-operating-loop"
import Reveal from "@/components/ui-custom/reveal"
import { cn } from "@/lib/utils"

type SystemRow = {
  id: string
  name: string
  description: string
  details: string
  positioning: string
  externalUrl?: string
  tone?: "layer"
}

const systems: SystemRow[] = [
  {
    id: "emilia",
    name: "Emilia",
    description: "Retention and referral infrastructure for aesthetic clinics.",
    details: "Recall / rebooking / referrals / follow-up",
    positioning: "The first applied CLVR system.",
    externalUrl: "https://emilia.clvrautomations.com/",
  },
  {
    id: "marginflow",
    name: "MarginFlow",
    description: "Quote-to-cash control for trades and service teams.",
    details: "Pricing / approvals / invoicing / collections",
    positioning: "In development.",
    externalUrl: "https://marginflow.clvrautomations.com",
  },
  {
    id: "supplierops",
    name: "SupplierOps",
    description: "Supplier and returns control for B2B operations.",
    details: "Exceptions / returns / handoffs / reliability",
    positioning: "Emerging system.",
  },
  {
    id: "verified",
    name: "CLVR Verified",
    description: "Proof records for decisions, approvals, actions, and outcomes.",
    details: "Recommendations / reviews / actions / outcomes",
    positioning: "Record layer across CLVR systems.",
    externalUrl: "https://verified.clvrautomations.com/",
    tone: "layer",
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

function SystemsIndex() {
  return (
    <div className="border-y border-black/[0.09]">
      {systems.map((system, index) => (
        <Reveal key={system.name} delay={index * 0.07} className="border-t border-black/[0.07] first:border-t-0">
          <article
            id={system.id}
            className={cn(
              "group grid scroll-mt-28 gap-5 py-7 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.48] md:grid-cols-[0.66fr_1.34fr] md:items-center md:px-4",
              system.tone === "layer" && "bg-primary/[0.03]",
            )}
          >
            <div>
              <h2 className="font-display text-[1.48rem] font-semibold leading-tight text-black transition group-hover:translate-x-1 md:text-[1.65rem]">
                {system.name}
              </h2>
              <p className="mt-2 text-xs font-semibold text-primary md:text-sm">{system.positioning}</p>
            </div>
            <div>
              <p className="text-sm leading-7 text-black/[0.66] md:text-[0.96rem]">{system.description}</p>
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
  )
}

function RelationshipDiagram() {
  const layers = [
    {
      title: "Applied Systems",
      body: "Emilia, MarginFlow, and SupplierOps serve different operational areas.",
    },
    {
      title: "CLVR Core",
      body: "The shared model for understanding, deciding, executing, and recording.",
    },
    {
      title: "Verified Records",
      body: "The record layer that keeps decisions, reviews, actions, and outcomes visible.",
    },
  ]

  return (
    <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.055] p-3">
      <div className="space-y-3 rounded-[1.25rem] border border-white/10 bg-[#061710]/80 p-5 text-white md:p-6">
        {layers.map((layer) => (
          <div key={layer.title} className="rounded-[1rem] border border-white/12 bg-white/[0.07] px-5 py-3.5 transition duration-300 hover:bg-white/[0.1]">
            <p className="font-display text-lg font-semibold md:text-xl">{layer.title}</p>
            <p className="mt-2 text-xs leading-6 text-white/62 md:text-sm">{layer.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SystemsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#061710] px-4 pb-24 pt-32 text-white md:px-6 md:pb-32 md:pt-40">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/clvr-hero-reference.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-[1.08] object-cover object-center motion-safe:animate-[clvr-hero-drift_36s_ease-in-out_infinite]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,23,17,0.6),rgba(4,23,17,0.96))]" aria-hidden />
        <div
          className="absolute right-[8%] top-[20%] h-52 w-52 rounded-full bg-[#baf3d9]/10 blur-3xl motion-safe:animate-[clvr-float_20s_ease-in-out_infinite]"
          aria-hidden
        />
        <Reveal className="container relative">
          <div className="max-w-4xl">
            <h1 className="text-balance font-display text-[2.05rem] font-semibold leading-[1.05] md:text-[3.15rem] xl:text-[3.55rem]">
              Systems built from the CLVR core.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72">
              CLVR develops operating systems for business areas where missed actions, weak handoffs, and
              poor records create real cost.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/#contact" light>
                Start a Conversation
              </PrimaryLink>
              <SecondaryLink href="/" light>
                Back to Home
              </SecondaryLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="core" className="relative overflow-hidden bg-[#03140f] py-32 text-white md:py-44">
        <div className="absolute inset-0 clvr-visual-grain opacity-[0.13]" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(186,243,217,0.14),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(3,20,15,0),rgba(0,0,0,0.18))]"
          aria-hidden
        />
        <div className="container relative grid gap-14 px-4 md:px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
          <Reveal className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase text-white/76">CLVR Core</p>
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.55rem]">
              One shared operating model.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/64 md:text-base">
              Each system follows the same structure: understand the workflow, decide the next action, move
              the work forward, and record what happened.
            </p>
          </Reveal>
          <CoreOperatingLoop />
        </div>
      </section>

      <section className="bg-[#f7f6f1] py-36 transition-colors duration-700 md:py-52">
        <div className="container px-4 md:px-6">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-black md:text-[2.55rem]">
              Applied systems and record layer.
            </h2>
          </Reveal>
          <Reveal>
            <SystemsIndex />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061710] py-32 text-white md:py-44">
        <div className="absolute inset-0 clvr-visual-grain opacity-[0.1]" aria-hidden />
        <div className="container relative grid gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal className="max-w-3xl space-y-5">
            <h2 className="text-balance font-display text-[1.95rem] font-semibold leading-[1.05] text-white md:text-[2.55rem]">
              Different systems. Same operating model.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Each CLVR system serves a different operational area, but the structure stays consistent:
              understand the workflow, decide the next action, move the work forward, and record what
              happened.
            </p>
          </Reveal>
          <Reveal>
            <RelationshipDiagram />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <Reveal className="container rounded-[1.65rem] border border-black/[0.07] bg-[#f8f7f2] px-6 py-16 shadow-[0_30px_90px_-78px_rgba(4,23,17,0.42)] md:px-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-[2rem] font-semibold leading-[1.05] text-black md:text-[2.95rem]">
              Build around the workflow, not around another dashboard.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-black/[0.56] md:text-base">
              Talk to CLVR about systems where decisions, execution, and records need to work together.
            </p>
            <div className="mt-9">
              <PrimaryLink href="mailto:hello@clvrsystems.com">Start a Conversation</PrimaryLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

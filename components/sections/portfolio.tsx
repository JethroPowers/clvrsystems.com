'use client'

import {
  BarChart3,
  Building2,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'

import RadialOrbitalTimeline, {
  type OrbitalTimelineItem,
} from '@/components/ui/radial-orbital-timeline'
import Reveal from '@/components/ui-custom/reveal'
import SectionHeading from '@/components/ui-custom/section-heading'

const ventures: OrbitalTimelineItem[] = [
  {
    id: 1,
    title: 'the4five.co',
    label: 'Infrastructure, ventures, and operational systems',
    content:
      'We operate as the parent company across operational systems, workflow infrastructure, verification, and venture creation. We advise, build, and incubate.',
    icon: Building2,
    relatedIds: [2, 3, 4],
    status: 'parent',
    energy: 100,
  },
  {
    id: 2,
    title: 'Emilia',
    label: 'Client retention infrastructure',
    content:
      'Retention, referral, and reactivation platform for clinics that need tighter control after the initial sale.',
    icon: RefreshCw,
    relatedIds: [1],
    status: 'live',
    energy: 82,
    href: 'https://emilia.clvrautomations.com/',
  },
  {
    id: 3,
    title: 'MarginFlow',
    label: 'Revenue and workflow infrastructure',
    content:
      'Quote-to-cash platform for trades and delivery businesses where approvals, timing, and collections must stay aligned.',
    icon: BarChart3,
    relatedIds: [1],
    status: 'live',
    energy: 76,
    href: 'https://marginflow.clvrautomations.com/',
  },
  {
    id: 4,
    title: 'Verified',
    label: 'Verification and payment control',
    content:
      'Approval and payment-control platform for workflows where documentation, proof, and sign-off have to stay clean.',
    icon: ShieldCheck,
    relatedIds: [1],
    status: 'live',
    energy: 72,
    href: 'https://verified.clvrautomations.com/',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden py-[8.5rem] md:py-40"
    >
      <div className="absolute left-1/2 top-8 h-[19rem] w-[19rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,78,59,0.08),transparent_72%)] blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="mx-auto flex max-w-[63rem] flex-col gap-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Portfolio"
              title="A parent company with ventures forming around the same infrastructure themes."
              description="Direct work exposes recurring infrastructure problems. The strongest solutions become ventures that sit beneath the parent company rather than apart from it."
              className="max-w-[43rem]"
            />

            <Reveal delay={0.08} className="max-w-[15rem]">
              <p className="text-sm leading-6 text-black/54">
                This section maps the relationship between the parent company and
                the ventures already taking shape beneath it.
              </p>
            </Reveal>
          </div>

          <RadialOrbitalTimeline timelineData={ventures} centerId={1} />
        </div>
      </div>
    </section>
  )
}

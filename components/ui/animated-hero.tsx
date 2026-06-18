"use client"

import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Particles } from "@/components/ui/particles"
import Reveal from "@/components/ui-custom/reveal"

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.86)_44%,rgba(255,255,255,0.98)_100%)]" />
        <div className="absolute left-[-8rem] top-[-4rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(6,78,59,0.08),rgba(6,78,59,0.03)_42%,transparent_74%)] blur-3xl" />
        <div className="absolute right-[-18rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(6,78,59,0.22),rgba(6,78,59,0.1)_30%,rgba(6,78,59,0.03)_52%,transparent_74%)] blur-3xl" />
        <div className="absolute right-[8%] top-[16%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(6,78,59,0.12),rgba(6,78,59,0.03)_42%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-full bg-hero-grid bg-[size:96px_96px] opacity-[0.035] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.24),transparent_88%)]" />
        <div className="absolute inset-y-[-8%] right-[-6%] w-[74%] opacity-55 [mask-image:radial-gradient(circle_at_58%_46%,black_12%,transparent_64%)]">
          <Particles
            className="size-full"
            quantity={190}
            ease={96}
            color="#064E3B"
            size={1.55}
            staticity={60}
            refresh
            vx={0.008}
            vy={-0.004}
          />
        </div>
        <div className="absolute inset-y-[6%] right-[6%] w-[48%] opacity-78 [mask-image:radial-gradient(circle_at_58%_50%,black_18%,transparent_68%)]">
          <Particles
            className="size-full"
            quantity={130}
            ease={84}
            color="#064E3B"
            size={1}
            staticity={46}
            refresh
            vx={0.005}
            vy={-0.003}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_32%,rgba(255,255,255,0.44)_62%,rgba(255,255,255,0.12)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex min-h-[calc(86svh-3.5rem)] items-end justify-center py-16 md:py-20 xl:py-24">
          <div className="flex w-full max-w-[48rem] flex-col items-center gap-7 text-center">
            <Reveal className="flex max-w-[46rem] flex-col items-center space-y-4 pb-2 md:space-y-5">
              <p className="section-label">the4five.co</p>

              <h1 className="max-w-[44rem] text-balance font-display text-[2.5rem] leading-[0.95] text-black md:text-[4rem] xl:text-[4.35rem]">
                Building autonomous infrastructure and scalable ventures.
              </h1>

              <p className="max-w-[35rem] text-balance text-[0.96rem] leading-6 text-black/60 md:text-[1.02rem]">
                We operate across AI operations, workflow infrastructure, verification, systems design,
                and venture creation. We advise, build, and incubate.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-black shadow-[0_10px_40px_-24px_rgba(0,0,0,0.28)] backdrop-blur-md hover:bg-white/80"
              >
                Portfolio overview
                <MoveRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }

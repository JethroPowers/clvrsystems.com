'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { GripVertical } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type FeatureWithImageComparisonProps = {
  eyebrow: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeLabel: string
  afterLabel: string
  beforeTitle: string
  beforeBody: string
  beforePoints: string[]
  afterTitle: string
  afterBody: string
  afterPoints: string[]
  defaultInset?: number
  instruction?: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

const MIN_INSET = 18
const MAX_INSET = 84

function clampInset(value: number) {
  return Math.min(MAX_INSET, Math.max(MIN_INSET, value))
}

export function FeatureWithImageComparison({
  eyebrow,
  title,
  description,
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  beforeTitle,
  beforeBody,
  beforePoints,
  afterTitle,
  afterBody,
  afterPoints,
  defaultInset = 40,
  instruction = 'Drag the divider or use arrow keys to compare the operating context with the structured implementation state.',
  beforeAlt = beforeLabel,
  afterAlt = afterLabel,
  className,
}: FeatureWithImageComparisonProps) {
  const [inset, setInset] = useState(clampInset(defaultInset))
  const [isDragging, setIsDragging] = useState(false)
  const instructionsId = useId()

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!isDragging) return

    const frame = event.currentTarget.parentElement
    if (!frame) return

    const rect = frame.getBoundingClientRect()
    const nextInset = ((event.clientX - rect.left) / rect.width) * 100
    setInset(clampInset(nextInset))
  }

  const handlePointerEnd = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    setIsDragging(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault()
      setInset((current) => clampInset(current - 4))
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault()
      setInset((current) => clampInset(current + 4))
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setInset(MIN_INSET)
    }

    if (event.key === 'End') {
      event.preventDefault()
      setInset(MAX_INSET)
    }
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="rounded-full border-primary/12 bg-primary/[0.04] px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-primary"
        >
          {eyebrow}
        </Badge>

        <div className="space-y-3">
          <h2 className="max-w-[42rem] text-balance font-display text-[1.95rem] leading-[1.03] text-black md:text-[2.45rem] xl:text-[2.75rem]">
            {title}
          </h2>
          <p className="max-w-[37rem] text-balance text-sm leading-6 text-black/56 md:text-[0.96rem]">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-10 md:pt-12">
        <div className="surface-panel overflow-hidden border-black/[0.08] p-2.5 md:p-3">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[1.35rem] border border-black/[0.08] bg-[#f5f6f3] sm:aspect-[4/3] lg:aspect-[16/10]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.12)_28%,rgba(255,255,255,0.08)_100%)]" />

            <Image
              src={beforeImage}
              alt={beforeAlt}
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 100vw, 76vw"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${inset}%)` }}
            >
              <div className="absolute inset-0 bg-[#0b5c44]" />
              <Image
                src={afterImage}
                alt={afterAlt}
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, 76vw"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.16)_100%)]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between px-5 pt-5 md:px-7 md:pt-7">
              <div className="rounded-full border border-black/[0.08] bg-white/94 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-black/64 backdrop-blur-sm">
                {beforeLabel}
              </div>

              <div className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-white/88 backdrop-blur-sm">
                {afterLabel}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-full">
              <div className="flex h-full w-full items-end px-5 pb-5 pt-20 md:px-7 md:pb-7 md:pt-24">
                <div className="max-w-[11.5rem] rounded-[1.2rem] border border-black/[0.08] bg-white/92 p-3.5 shadow-[0_22px_44px_-34px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:max-w-[15rem] sm:p-4 lg:max-w-[19rem] lg:p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-black/42">
                    Where it&apos;s used
                  </p>
                  <h3 className="mt-3 font-display text-[1rem] leading-[1.02] text-black sm:text-[1.15rem] md:text-[1.4rem]">
                    {beforeTitle}
                  </h3>
                  <p className="mt-3 text-[0.8rem] leading-5 text-black/60 sm:text-[0.88rem] sm:leading-6">
                    {beforeBody}
                  </p>
                  <div className="mt-4 space-y-2.5">
                    {beforePoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-[0.95rem] border border-black/[0.07] bg-black/[0.02] px-3.5 py-3"
                      >
                        <p className="text-[0.74rem] leading-4 text-black/56 sm:text-[0.8rem] sm:leading-5">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${inset}%)` }}
            >
              <div className="flex h-full w-full items-end justify-end px-5 pb-5 pt-20 md:px-7 md:pb-7 md:pt-24">
                <div className="max-w-[11.5rem] rounded-[1.2rem] border border-white/12 bg-white/10 p-3.5 shadow-[0_28px_56px_-38px_rgba(0,0,0,0.42)] backdrop-blur-md sm:max-w-[15rem] sm:p-4 lg:max-w-[19rem] lg:p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-white/64">
                    How to use it effectively
                  </p>
                  <h3 className="mt-3 font-display text-[1rem] leading-[1.02] text-white sm:text-[1.15rem] md:text-[1.4rem]">
                    {afterTitle}
                  </h3>
                  <p className="mt-3 text-[0.8rem] leading-5 text-white/76 sm:text-[0.88rem] sm:leading-6">
                    {afterBody}
                  </p>
                  <div className="mt-4 space-y-2.5">
                    {afterPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-[0.95rem] border border-white/10 bg-black/12 px-3.5 py-3"
                      >
                        <p className="text-[0.74rem] leading-4 text-white/80 sm:text-[0.8rem] sm:leading-5">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 z-20 w-[3px] bg-white/72 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
              style={{ left: `${inset}%` }}
            >
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary/55" />
            </div>

            <button
              type="button"
              role="slider"
              aria-label="Adjust system comparison"
              aria-describedby={instructionsId}
              aria-valuemin={MIN_INSET}
              aria-valuemax={MAX_INSET}
              aria-valuenow={Math.round(inset)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerEnd}
              onPointerCancel={handlePointerEnd}
              onKeyDown={handleKeyDown}
              className={cn(
                'absolute top-1/2 z-30 flex h-14 w-10 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-black shadow-[0_18px_40px_-26px_rgba(0,0,0,0.3)] outline-none transition-transform focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                isDragging && 'scale-105',
              )}
              style={{ left: `${inset}%` }}
            >
              <span className="absolute inset-[4px] rounded-full border border-primary/12 bg-primary/[0.04]" />
              <GripVertical className="relative h-4 w-4 text-primary" />
            </button>
          </div>
        </div>

        <p id={instructionsId} className="mt-3 text-xs leading-5 text-black/42">
          {instruction}
        </p>
      </div>
    </div>
  )
}

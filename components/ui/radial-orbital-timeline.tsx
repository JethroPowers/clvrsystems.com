'use client'

import {
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Link2, Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type OrbitalTimelineStatus = 'parent' | 'live' | 'building'

export interface OrbitalTimelineItem {
  id: number
  title: string
  label: string
  content: string
  icon: LucideIcon
  relatedIds: number[]
  status: OrbitalTimelineStatus
  energy: number
  href?: string
}

interface RadialOrbitalTimelineProps {
  timelineData: OrbitalTimelineItem[]
  centerId: number
  className?: string
}

const statusLabel: Record<OrbitalTimelineStatus, string> = {
  parent: 'Parent company',
  live: 'Live venture',
  building: 'In development',
}

const statusClasses: Record<OrbitalTimelineStatus, string> = {
  parent: 'border-primary/15 bg-primary/[0.08] text-primary',
  live: 'border-black/[0.08] bg-black/[0.03] text-black/80',
  building: 'border-black/[0.08] bg-black/[0.03] text-black/60',
}

export default function RadialOrbitalTimeline({
  timelineData,
  centerId,
  className,
}: RadialOrbitalTimelineProps) {
  const prefersReducedMotion = useReducedMotion()
  const visualizationRef = useRef<HTMLDivElement>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [activeId, setActiveId] = useState(centerId)
  const [autoRotate, setAutoRotate] = useState(!prefersReducedMotion)
  const [canvasSize, setCanvasSize] = useState(440)

  const centerItem = useMemo(
    () => timelineData.find((item) => item.id === centerId) ?? null,
    [centerId, timelineData],
  )
  const orbitItems = useMemo(
    () => timelineData.filter((item) => item.id !== centerId),
    [centerId, timelineData],
  )
  const activeItem = useMemo(
    () => timelineData.find((item) => item.id === activeId) ?? centerItem,
    [activeId, centerItem, timelineData],
  )
  const activeRelatedIds = new Set(activeItem?.relatedIds ?? [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setAutoRotate(false)
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    const node = visualizationRef.current

    if (!node || typeof ResizeObserver === 'undefined') {
      return
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) return
      const nextSize = Math.min(entry.contentRect.width, entry.contentRect.height)
      setCanvasSize(nextSize > 0 ? nextSize : 440)
    })

    resizeObserver.observe(node)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !autoRotate) {
      return
    }

    const timer = window.setInterval(() => {
      setRotationAngle((previous) => previous + 0.16)
    }, 50)

    return () => {
      window.clearInterval(timer)
    }
  }, [autoRotate, prefersReducedMotion])

  if (!centerItem || orbitItems.length === 0) {
    return null
  }

  const center = canvasSize / 2
  const radius = Math.max(Math.min(canvasSize * 0.33, 172), 108)

  const positions = orbitItems.map((item, index) => {
    const baseAngle = (index / orbitItems.length) * 360 - 90
    const totalAngle = baseAngle + rotationAngle
    const angleInRadians = (totalAngle * Math.PI) / 180

    return {
      item,
      baseAngle,
      x: center + Math.cos(angleInRadians) * radius,
      y: center + Math.sin(angleInRadians) * radius,
    }
  })

  const resetView = () => {
    setActiveId(centerId)

    if (!prefersReducedMotion) {
      setAutoRotate(true)
    }
  }

  const focusNode = (id: number) => {
    setActiveId(id)

    if (id === centerId) {
      if (!prefersReducedMotion) {
        setAutoRotate(true)
      }

      return
    }

    const nodeIndex = orbitItems.findIndex((item) => item.id === id)
    if (nodeIndex === -1) return

    const baseAngle = (nodeIndex / orbitItems.length) * 360 - 90
    setRotationAngle(-90 - baseAngle)
    setAutoRotate(false)
  }

  const handleVisualizationClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      resetView()
    }
  }

  return (
    <div
      className={cn(
        'surface-panel relative overflow-hidden border-black/[0.08] bg-white px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-[12%] top-0 h-36 bg-[radial-gradient(circle_at_center,rgba(6,78,59,0.14),rgba(6,78,59,0.04)_42%,transparent_78%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[24%] bottom-8 h-28 bg-[radial-gradient(circle_at_center,rgba(6,78,59,0.08),transparent_72%)] blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_19rem] xl:gap-8">
        <div
          className="relative flex min-h-[24rem] items-center justify-center overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,248,247,0.92))] px-3 py-5 sm:min-h-[27rem] sm:px-5"
          onClick={handleVisualizationClick}
        >
          <div
            ref={visualizationRef}
            className="relative aspect-square w-full max-w-[31rem] sm:max-w-[34rem]"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${canvasSize} ${canvasSize}`}
              aria-hidden="true"
            >
              <circle
                cx={center}
                cy={center}
                r={radius + 28}
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeDasharray="4 10"
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="rgba(0,0,0,0.08)"
              />
              <circle
                cx={center}
                cy={center}
                r={radius - 28}
                fill="none"
                stroke="rgba(0,0,0,0.04)"
                strokeDasharray="3 12"
              />

              {positions.map(({ item, x, y }) => {
                const isActive = item.id === activeId
                const isConnected =
                  isActive || activeRelatedIds.has(item.id) || item.relatedIds.includes(activeId)

                return (
                  <line
                    key={`line-${item.id}`}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke={isConnected ? 'rgba(6,78,59,0.42)' : 'rgba(0,0,0,0.09)'}
                    strokeWidth={isConnected ? 1.6 : 1}
                  />
                )
              })}
            </svg>

            <motion.button
              type="button"
              onClick={() => focusNode(centerId)}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'absolute left-1/2 top-1/2 z-20 flex h-[5.6rem] w-[5.6rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center shadow-[0_18px_45px_-30px_rgba(6,78,59,0.55)] backdrop-blur',
                activeId === centerId
                  ? 'border-primary/20 bg-primary/[0.08] text-primary'
                  : 'border-black/[0.08] bg-white/90 text-black',
              )}
            >
              <centerItem.icon className="h-4 w-4" />
              <span className="mt-1 px-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em]">
                {centerItem.title}
              </span>
            </motion.button>

            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? { scale: 1, opacity: 0.7 }
                  : { scale: [1, 1.06, 1], opacity: [0.55, 0.9, 0.55] }
              }
              transition={{
                duration: 5.4,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[8.5rem] w-[8.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,78,59,0.18),rgba(6,78,59,0.08)_34%,transparent_70%)] blur-xl"
            />

            {positions.map(({ item, x, y }) => {
              const isActive = item.id === activeId
              const isConnected =
                isActive || activeRelatedIds.has(item.id) || item.relatedIds.includes(activeId)

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: x - center,
                    y: y - center,
                    scale: isActive ? 1.08 : isConnected ? 1.03 : 1,
                    opacity: isActive ? 1 : isConnected ? 0.92 : 0.78,
                  }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: 'easeInOut' }}
                  className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    type="button"
                    onClick={() => focusNode(item.id)}
                    className="group flex flex-col items-center text-center"
                  >
                    <span
                      className={cn(
                        'relative flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300',
                        isActive
                          ? 'border-primary/25 bg-primary/[0.1] text-primary shadow-[0_16px_40px_-24px_rgba(6,78,59,0.55)]'
                          : isConnected
                            ? 'border-primary/16 bg-white text-black'
                            : 'border-black/[0.08] bg-white/88 text-black/78',
                      )}
                    >
                      <span
                        className={cn(
                          'absolute inset-[-0.32rem] rounded-full bg-[radial-gradient(circle,rgba(6,78,59,0.16),transparent_72%)] transition-opacity duration-300',
                          isConnected ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                      <item.icon className="relative h-4 w-4" />
                    </span>
                    <span
                      className={cn(
                        'mt-3 max-w-[7rem] text-[0.66rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 sm:text-[0.68rem]',
                        isActive ? 'text-black' : 'text-black/56 group-hover:text-black/72',
                      )}
                    >
                      {item.title}
                    </span>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="flex">
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
                className="w-full"
              >
                <Card className="h-full rounded-[1.25rem] border-black/[0.08] bg-white/96 shadow-[0_20px_54px_-42px_rgba(6,78,59,0.2)] backdrop-blur-sm">
                  <CardHeader className="space-y-4 p-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge
                        variant="outline"
                        className={cn(
                          'rounded-full px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em]',
                          statusClasses[activeItem.status],
                        )}
                      >
                        {statusLabel[activeItem.status]}
                      </Badge>

                      <p className="text-[0.68rem] uppercase tracking-[0.16em] text-black/38">
                        {activeItem.label}
                      </p>
                    </div>

                    <CardTitle className="text-[1.12rem] leading-tight text-black sm:text-[1.22rem]">
                      {activeItem.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-5 p-5 pt-0 text-sm leading-6 text-black/58 sm:p-6 sm:pt-0">
                    <p>{activeItem.content}</p>

                    <div className="rounded-[1rem] border border-black/[0.06] bg-black/[0.02] p-4">
                      <div className="mb-2 flex items-center justify-between gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-black/46">
                        <span className="inline-flex items-center gap-2">
                          <Zap className="h-3.5 w-3.5 text-primary" />
                          Venture energy
                        </span>
                        <span>{activeItem.energy}%</span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-black/[0.07]">
                        <motion.div
                          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(6,78,59,0.72),rgba(6,78,59,0.92))]"
                          initial={{ width: 0 }}
                          animate={{ width: `${activeItem.energy}%` }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>

                    {activeItem.relatedIds.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-black/42">
                          <Link2 className="h-3.5 w-3.5 text-primary" />
                          Connected nodes
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {activeItem.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (item) => item.id === relatedId,
                            )

                            if (!relatedItem) {
                              return null
                            }

                            return (
                              <Button
                                key={relatedId}
                                variant="outline"
                                size="sm"
                                className="h-8 rounded-full border-black/[0.08] bg-white px-3 text-[0.72rem] text-black/70 hover:border-primary/18 hover:bg-primary/[0.05] hover:text-primary"
                                onClick={() => focusNode(relatedId)}
                              >
                                {relatedItem.title}
                              </Button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {activeItem.href && (
                      <Button
                        asChild
                        variant="outline"
                        className="h-10 rounded-full border-black/[0.08] bg-white px-4 text-[0.76rem] font-semibold text-black hover:border-primary/18 hover:bg-primary/[0.05] hover:text-primary"
                      >
                        <a
                          href={activeItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit venture
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

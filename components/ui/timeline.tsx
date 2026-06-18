"use client"

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[]
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const element = ref.current
    const updateHeight = () => {
      setHeight(element.getBoundingClientRect().height)
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(element)
    window.addEventListener("resize", updateHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 12%", "end 58%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className={cn("w-full font-sans", className)} ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-[58rem] pb-8 md:pb-10">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="relative flex justify-start pt-12 md:gap-8 md:pt-24"
          >
            <div className="sticky top-20 z-20 hidden h-fit w-full max-w-[12.5rem] self-start md:block lg:max-w-[14rem]">
              <div className="pl-14">
                <p className="text-xs uppercase tracking-[0.16em] text-black/34">
                  0{index + 1}
                </p>
                <h3 className="mt-2.5 text-[1.55rem] font-display leading-[1.04] text-black/34 lg:text-[2.15rem]">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative w-full pl-12 md:pl-4">
              <div className="absolute left-[0.45rem] top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white md:left-0 md:h-7 md:w-7">
                <div className="h-2.5 w-2.5 rounded-full border border-primary/15 bg-primary shadow-[0_0_0_5px_rgba(6,78,59,0.08)]" />
              </div>

              <h3 className="mb-3 block text-[1.15rem] font-display leading-tight text-black md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-[1rem] top-0 w-px overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.08)_10%,rgba(0,0,0,0.08)_90%,transparent_100%)] md:left-[0.85rem]"
        >
          <motion.div
            style={{
              height: shouldReduceMotion ? height : heightTransform,
              opacity: shouldReduceMotion ? 1 : opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-primary/20 via-primary to-primary/10"
          />
        </div>
      </div>
    </div>
  )
}

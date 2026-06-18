"use client"

import type { FC, ReactNode } from "react"
import { useRef } from "react"
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealByWordProps {
  text: string
  className?: string
  textClassName?: string
  stickyClassName?: string
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  textClassName,
  stickyClassName,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.82", "end 0.38"],
  })
  const words = text.split(" ")

  if (shouldReduceMotion) {
    return (
      <div className={cn("relative z-0", className)}>
        <div
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-center bg-transparent px-4 py-4 md:px-6",
            stickyClassName,
          )}
        >
          <p
            className={cn(
              "text-balance text-center font-display text-[1.8rem] leading-[1.06] text-black md:text-[2.45rem] xl:text-[3.15rem]",
              textClassName,
              "text-black",
            )}
          >
            {text}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[96vh] md:h-[108vh] xl:h-[124vh]", className)}>
      <div
        className={cn(
          "sticky top-20 mx-auto flex h-[32vh] max-w-5xl items-center justify-center bg-transparent px-4 py-5 md:top-24 md:h-[36vh] md:px-6 xl:h-[40vh]",
          stickyClassName,
        )}
      >
        <p
          className={cn(
            "flex flex-wrap justify-center text-center font-display text-[1.8rem] leading-[1.06] md:text-[2.45rem] xl:text-[3.2rem]",
            textClassName,
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length

            return (
              <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mx-1.5 my-1 inline-block lg:mx-2.5">
      <span className="absolute left-0 top-0 text-black/20">{children}</span>
      <motion.span style={{ opacity }} className="relative text-black">
        {children}
      </motion.span>
    </span>
  )
}

export { TextRevealByWord }

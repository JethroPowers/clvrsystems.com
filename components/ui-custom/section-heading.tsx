import { cn } from "@/lib/utils"
import Reveal from "@/components/ui-custom/reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const isCentered = align === "center"

  return (
    <Reveal className={cn("space-y-3", isCentered && "text-center", className)}>
      <p className="section-label">{eyebrow}</p>
      <div className={cn("space-y-3", isCentered && "mx-auto max-w-[42rem]")}>
        <h2
          className={cn(
            "text-balance font-display text-[2rem] leading-[1.03] text-black md:text-[2.55rem] xl:text-[2.9rem]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-lg text-balance text-sm leading-6 text-black/56 md:text-[0.96rem]",
            isCentered && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </Reveal>
  )
}

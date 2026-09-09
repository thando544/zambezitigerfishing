import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/useReveal"

type SectionProps = {
  eyebrow?: string
  heading?: string
  lede?: string
  children?: ReactNode
  className?: string
  tone?: "ivory" | "ink" | "forest"
  id?: string
}

const tones = {
  ivory: "bg-ivory text-ink",
  ink: "bg-ink text-ivory",
  forest: "bg-forest text-ivory",
}

export function Section({ eyebrow, heading, lede, children, className, tone = "ivory", id }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} id={id} className={cn("reveal px-6 py-20 md:px-10 md:py-28 lg:py-32", tones[tone], className)}>
      <div className="mx-auto max-w-6xl">
        {eyebrow || heading || lede ? (
          <header className={cn("max-w-3xl", children ? "mb-12 md:mb-16" : "")}>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {heading ? (
              <h2 className="display mt-4 text-4xl text-balance sm:text-5xl md:text-6xl">{heading}</h2>
            ) : null}
            {lede ? (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
                  tone === "ivory" ? "text-charcoal/80" : "text-ivory/75",
                )}
              >
                {lede}
              </p>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}

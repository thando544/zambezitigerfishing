import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

type Variant = "gold" | "ivory" | "outline" | "ghost" | "forest"
type Size = "md" | "lg"

type ButtonProps = {
  to?: string
  href?: string
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
  external?: boolean
}

const variants: Record<Variant, string> = {
  gold: "bg-bronze text-ink hover:bg-bronze-soft",
  ivory: "bg-ivory text-ink hover:bg-paper",
  outline: "border border-bronze/50 text-ivory hover:border-bronze hover:bg-ivory/5",
  ghost: "text-current hover:text-bronze",
  forest: "bg-forest text-ivory hover:bg-forest-mid",
}

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.68rem]",
  lg: "px-8 py-3.5 text-[0.72rem]",
}

export function Button({
  to,
  href,
  variant = "gold",
  size = "md",
  className,
  children,
  type = "button",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.22em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

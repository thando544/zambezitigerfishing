import { Link } from "react-router-dom"
import mwenjeLogo from "@/assets/mwenje.png"
import zambeziLogo from "@/assets/zambezitiger.png"
import { cn } from "@/lib/utils"

type LogoImgProps = {
  className?: string
  onDark?: boolean
}

export function ZambeziLogo({ className, onDark = false }: LogoImgProps) {
  return (
    <img
      src={zambeziLogo}
      alt="Zambezi Tiger Adventures"
      className={cn(
        "w-auto max-w-none object-contain object-left",
        onDark ? "rounded-sm bg-ivory p-1.5" : "mix-blend-multiply",
        className,
      )}
      width={320}
      height={120}
    />
  )
}

export function MwenjeLogo({ className, onDark = false }: LogoImgProps) {
  return (
    <img
      src={mwenjeLogo}
      alt="Mwenje Guest House"
      className={cn(
        "w-auto max-w-none object-contain",
        onDark ? "rounded-sm bg-ivory p-1.5" : "mix-blend-multiply",
        className,
      )}
      width={160}
      height={160}
    />
  )
}

export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="block min-w-0 shrink no-underline" aria-label="Zambezi Tiger Adventures home">
      <ZambeziLogo className={cn(compact ? "h-10 sm:h-11" : "h-11 sm:h-12 md:h-[3.25rem]")} />
    </Link>
  )
}

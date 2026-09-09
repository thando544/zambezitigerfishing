import { Link } from "react-router-dom"
import mwenjeLogo from "@/assets/mwenje.jpg"
import zambeziLogo from "@/assets/zambezitiger.jpg"
import { cn } from "@/lib/utils"

type LogoImgProps = {
  className?: string
}

export function ZambeziLogo({ className }: LogoImgProps) {
  return (
    <img
      src={zambeziLogo}
      alt="Zambezi Tiger Adventures"
      className={cn("h-full w-auto max-w-none object-contain object-left", className)}
      width={320}
      height={120}
    />
  )
}

export function MwenjeLogo({ className }: LogoImgProps) {
  return (
    <img
      src={mwenjeLogo}
      alt="Mwenje Guest House"
      className={cn("h-full w-auto max-w-none object-contain", className)}
      width={160}
      height={160}
    />
  )
}

export function SiteLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <Link to="/" className="block min-w-0 shrink no-underline" aria-label="Zambezi Tiger Adventures home">
        <ZambeziLogo className={cn("max-h-none", compact ? "h-10 sm:h-12" : "h-11 sm:h-12 md:h-14")} />
      </Link>
      <span className="hidden h-8 w-px shrink-0 bg-current/25 sm:block" aria-hidden="true" />
      <Link to="/stay" className="hidden shrink-0 no-underline sm:block" aria-label="Mwenje Guest House">
        <MwenjeLogo className={compact ? "h-9" : "h-10 md:h-11"} />
      </Link>
    </div>
  )
}

import { useState, type ImgHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ImageSlotProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string
  alt: string
  fallbackSrc?: string
  placeholderLabel?: string
}

export function ImageSlot({
  src,
  alt,
  fallbackSrc,
  placeholderLabel,
  className,
  loading = "lazy",
  decoding = "async",
  ...props
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false)
  const [fallbackFailed, setFallbackFailed] = useState(false)
  const activeSrc = !failed ? src : fallbackSrc
  const showPlaceholder = failed && (!fallbackSrc || fallbackFailed)

  if (showPlaceholder) {
    return (
      <div
        className={cn(
          "flex h-full min-h-48 w-full flex-col items-center justify-center bg-ink-soft px-6 text-center text-ivory",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <p className="eyebrow text-bronze">Mwenje Guest House</p>
        <p className="display mt-3 text-2xl text-ivory">{placeholderLabel ?? "Photography coming"}</p>
        <p className="mt-3 max-w-xs text-xs tracking-[0.16em] text-sand uppercase">
          Replace with an approved original
        </p>
      </div>
    )
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={cn("h-full w-full object-cover", className)}
      onError={() => {
        if (!failed) setFailed(true)
        else setFallbackFailed(true)
      }}
      {...props}
    />
  )
}

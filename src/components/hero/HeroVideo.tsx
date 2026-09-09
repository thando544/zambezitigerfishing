import { useEffect, useRef, useState } from "react"
import { usePrefersReducedMotion, useMediaQuery } from "@/hooks/useMedia"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

type HeroVideoProps = {
  desktopSrc?: string
  mobileSrc?: string
  posterSrc?: string
  fallbackImage?: string
  eyebrow?: string
  headline: string
  supporting?: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
}

async function mediaExists(path: string) {
  try {
    const response = await fetch(path, { method: "HEAD" })
    if (!response.ok) return false
    const type = response.headers.get("content-type") ?? ""
    return !type.includes("text/html")
  } catch {
    return false
  }
}

export function HeroVideo({
  desktopSrc = "/media/hero-desktop.mp4",
  mobileSrc = "/media/hero-mobile.mp4",
  posterSrc = "/media/hero-poster.webp",
  fallbackImage = "/images/destination/hero-still.jpg",
  eyebrow = "Victoria Falls · Zimbabwe",
  headline,
  supporting,
  primaryCta,
  secondaryCta,
}: HeroVideoProps) {
  const reducedMotion = usePrefersReducedMotion()
  const isMobile = useMediaQuery("(max-width: 767px)")
  const videoRef = useRef<HTMLVideoElement>(null)
  const [poster, setPoster] = useState(fallbackImage)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    function isBundledAsset(path: string) {
      return !path.startsWith("/media/")
    }

    async function resolveSources() {
      const posterOk = await mediaExists(posterSrc)
      if (!cancelled && posterOk) setPoster(posterSrc)

      if (reducedMotion) return

      const preferred = isMobile ? mobileSrc : desktopSrc
      const alternate = isMobile ? desktopSrc : mobileSrc

      if (isBundledAsset(preferred)) {
        if (!cancelled) setVideoSrc(preferred)
        return
      }

      const preferredOk = await mediaExists(preferred)
      if (!cancelled && preferredOk) {
        setVideoSrc(preferred)
        return
      }
      const alternateOk = await mediaExists(alternate)
      if (!cancelled && alternateOk) setVideoSrc(alternate)
    }

    void resolveSources()
    return () => {
      cancelled = true
    }
  }, [desktopSrc, isMobile, mobileSrc, posterSrc, reducedMotion])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !videoSrc || reducedMotion) return
    const play = async () => {
      try {
        await video.play()
      } catch {
        setVideoFailed(true)
      }
    }
    void play()
  }, [reducedMotion, videoSrc])

  const showVideo = Boolean(videoSrc) && !videoFailed && !reducedMotion

  return (
    <section className="relative isolate h-[100svh] min-h-[38rem] overflow-hidden bg-ink text-ivory">
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        onError={(event) => {
          event.currentTarget.src = fallbackImage
        }}
      />

      {showVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc ?? undefined} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,14,0.18)_0%,rgba(18,16,14,0.12)_42%,rgba(18,16,14,0.62)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-28">
        <p className="eyebrow text-bronze-soft">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl text-5xl text-balance sm:text-7xl md:text-8xl">{headline}</h1>
        {supporting ? (
          <p className="mt-6 max-w-xl text-base text-ivory/82 md:text-lg">{supporting}</p>
        ) : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {primaryCta ? (
            <Button to={primaryCta.to} variant="gold" size="lg">
              {primaryCta.label}
            </Button>
          ) : null}
          {secondaryCta ? (
            <Button to={secondaryCta.to} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>

      <a
        href="#two-experiences"
        className={cn(
          "absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 no-underline",
        )}
      >
        <span className="text-[0.62rem] tracking-[0.28em] uppercase">Scroll</span>
        <span className="block h-10 w-px bg-ivory/50" aria-hidden="true" />
        <span className="sr-only">Continue to content</span>
      </a>
    </section>
  )
}

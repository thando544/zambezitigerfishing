import { useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { GalleryItem } from "@/types"
import { ImageSlot } from "@/components/ui/ImageSlot"

type LightboxProps = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const item = items[index]

  useEffect(() => {
    if (!item) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onIndexChange((index + 1) % items.length)
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [index, item, items.length, onClose, onIndexChange])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-ivory hover:text-bronze"
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>
      <button
        type="button"
        onClick={() => onIndexChange((index - 1 + items.length) % items.length)}
        className="absolute left-3 text-ivory hover:text-bronze md:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} />
      </button>
      <figure className="max-h-[85vh] max-w-5xl">
        <ImageSlot
          src={item.src}
          fallbackSrc={item.fallbackSrc}
          alt={item.alt}
          placeholderLabel={item.caption}
          className="max-h-[78vh] w-auto object-contain"
        />
        <figcaption className="mt-4 text-center text-sm text-ivory/80">
          {item.caption ?? item.alt}
          {item.placeholder ? (
            <span className="mt-1 block text-xs tracking-[0.18em] text-bronze uppercase">Placeholder photography</span>
          ) : null}
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={() => onIndexChange((index + 1) % items.length)}
        className="absolute right-3 text-ivory hover:text-bronze md:right-6"
        aria-label="Next image"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  )
}

import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import type { GalleryCategory, GalleryItem } from "@/types"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Lightbox } from "@/components/ui/Lightbox"
import { cn } from "@/lib/utils"

const filters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fishing", label: "Fishing" },
  { id: "zambezi", label: "Zambezi" },
  { id: "mwenje", label: "Mwenje" },
  { id: "victoria-falls", label: "Victoria Falls" },
]

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [params, setParams] = useSearchParams()
  const requested = params.get("cat")
  const active = filters.some((item) => item.id === requested) ? requested : "all"
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = useMemo(
    () => items.filter((item) => active === "all" || item.category === active),
    [active, items],
  )

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={active === filter.id}
            className={cn(
              "px-4 py-2 text-[0.68rem] tracking-[0.2em] uppercase",
              active === filter.id ? "bg-ink text-ivory" : "border border-bronze/30 text-ink hover:border-bronze",
            )}
            onClick={() => {
              const next = new URLSearchParams(params)
              if (filter.id === "all") next.delete("cat")
              else next.set("cat", filter.id)
              setParams(next, { replace: true })
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="masonry">
        {visible.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="masonry-item group w-full text-left"
            onClick={() => setLightbox(index)}
          >
            <span className="image-reveal is-visible block overflow-hidden">
              <ImageSlot
                src={item.src}
                fallbackSrc={item.fallbackSrc}
                alt={item.alt}
                placeholderLabel={item.caption}
                className="w-full"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </span>
            <span className="mt-3 block font-sans text-[0.65rem] tracking-[0.18em] text-earth uppercase">
              {item.caption}
            </span>
          </button>
        ))}
      </div>
      {lightbox !== null ? (
        <Lightbox items={visible} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
      ) : null}
    </div>
  )
}

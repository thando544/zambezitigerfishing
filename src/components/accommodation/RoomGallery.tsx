import { useState } from "react"
import type { RoomPhoto } from "@/types"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Lightbox } from "@/components/ui/Lightbox"
import { cn } from "@/lib/utils"

export function RoomGallery({ photos, roomName }: { photos: RoomPhoto[]; roomName: string }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const current = photos[active] ?? photos[0]
  const lightboxItems = photos.map((photo, index) => ({
    id: `${roomName}-${index}`,
    src: photo.src,
    alt: photo.alt,
    caption: photo.caption,
    category: "mwenje" as const,
    published: true,
  }))

  if (!current) return null

  return (
    <div>
      <button
        type="button"
        className="block w-full overflow-hidden text-left"
        onClick={() => setLightbox(active)}
        aria-label={`Open ${roomName} gallery`}
      >
        <ImageSlot
          src={current.src}
          alt={current.alt}
          className="aspect-4/3 h-auto w-full object-cover"
        />
      </button>
      <p className="mt-3 text-[0.68rem] tracking-[0.18em] text-earth uppercase">{current.caption}</p>
      {photos.length > 1 ? (
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "overflow-hidden border",
                index === active ? "border-ink" : "border-transparent opacity-80 hover:opacity-100",
              )}
              aria-label={photo.caption}
              aria-current={index === active ? "true" : undefined}
            >
              <ImageSlot src={photo.src} alt="" className="aspect-square h-auto w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
      {lightbox !== null ? (
        <Lightbox
          items={lightboxItems}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      ) : null}
    </div>
  )
}

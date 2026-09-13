import { Link } from "react-router-dom"
import type { Room } from "@/types"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="flex h-full flex-col border border-bronze/20 bg-paper">
      <Link to={`/stay/rooms/${room.slug}`} className="block overflow-hidden">
        <ImageSlot
          src={room.image}
          fallbackSrc={room.imageFallback}
          alt={`${room.name} at Mwenje Guest House`}
          placeholderLabel={room.name}
          className="aspect-4/3 h-auto w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col px-6 py-7">
        <p className="eyebrow">Mwenje Guest House</p>
        <h3 className="display mt-3 text-3xl">
          <Link to={`/stay/rooms/${room.slug}`} className="no-underline">
            {room.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-charcoal/80">{room.bedConfiguration}</p>
        <p className="mt-2 text-sm text-charcoal/80">{room.bathroom} · up to {room.maxGuests} guests</p>
        <p className="mt-4 text-[0.68rem] tracking-[0.18em] text-earth uppercase">
          {room.gallery.length} photographs
        </p>
        <Button to={`/stay/rooms/${room.slug}`} variant="forest" className="mt-6 w-fit">
          View room
        </Button>
      </div>
    </article>
  )
}

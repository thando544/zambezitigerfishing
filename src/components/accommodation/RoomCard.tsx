import { Link } from "react-router-dom"
import type { Room } from "@/types"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"

export function RoomCard({ room }: { room: Room }) {
  const verified = room.amenities.filter((item) => item.verified)

  return (
    <article className="grid overflow-hidden border border-bronze/20 md:grid-cols-2">
      <Link to={`/stay/rooms/${room.slug}`} className="min-h-64">
        <ImageSlot
          src={room.image}
          fallbackSrc={room.imageFallback}
          alt={`${room.name} at Mwenje Guest House`}
          placeholderLabel={room.name}
        />
      </Link>
      <div className="flex flex-col bg-paper px-6 py-8 md:px-10 md:py-12">
        <p className="eyebrow">Mwenje Guest House</p>
        <h3 className="display mt-3 text-4xl">
          <Link to={`/stay/rooms/${room.slug}`} className="no-underline">
            {room.name}
          </Link>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{room.description}</p>
        <ul className="mt-6 space-y-2 text-sm text-charcoal/85">
          <li>{room.bedConfiguration}</li>
          <li>{room.bathroom}</li>
          <li>Up to {room.maxGuests} guests</li>
          <li>{room.countOnProperty} of this room type on the property</li>
          {verified.map((item) => (
            <li key={item.key}>{item.label}</li>
          ))}
        </ul>
        <p className="mt-6 text-[0.68rem] tracking-[0.18em] text-earth uppercase">Confirm availability</p>
        <Button to={`/book?interest=accommodation&room=${room.slug}`} variant="forest" className="mt-5 w-fit">
          Enquire now
        </Button>
      </div>
    </article>
  )
}

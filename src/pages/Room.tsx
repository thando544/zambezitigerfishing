import { Navigate, useParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { rooms } from "@/data/rooms"

export default function Room() {
  const { slug } = useParams()
  const room = rooms.find((item) => item.slug === slug)
  if (!room) return <Navigate to="/stay/rooms" replace />

  return (
    <>
      <Seo
        title={`${room.name} | Mwenje Guest House`}
        description={room.description}
        path={`/stay/rooms/${room.slug}`}
      />
      <section className="bg-paper pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-2 md:px-10">
          <ImageSlot
            src={room.image}
            fallbackSrc={room.imageFallback}
            alt={room.name}
            placeholderLabel={room.name}
            className="h-[28rem] w-full object-cover"
          />
          <div>
            <p className="eyebrow">Mwenje Guest House</p>
            <h1 className="display mt-4 text-5xl">{room.name}</h1>
            <p className="mt-5 text-charcoal/80">{room.description}</p>
            <ul className="mt-8 space-y-2 text-sm">
              <li>{room.bedConfiguration}</li>
              <li>{room.bathroom}</li>
              <li>Maximum {room.maxGuests} guests</li>
            </ul>
            <h2 className="mt-10 font-sans text-xs tracking-[0.2em] uppercase">Listed facilities</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {room.amenities.map((item) => (
                <li key={item.key} className="flex justify-between gap-4 border-b border-bronze/15 py-2">
                  <span>{item.label}</span>
                  <span className="text-mist">{item.verified ? "Included" : "Confirm on enquiry"}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.68rem] tracking-[0.18em] text-earth uppercase">Confirm availability</p>
            <Button to={`/book?interest=accommodation&room=${room.slug}`} variant="forest" className="mt-5">
              Enquire now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

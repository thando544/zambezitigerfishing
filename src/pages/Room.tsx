import { Link, Navigate, useParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { Button } from "@/components/ui/Button"
import { RoomGallery } from "@/components/accommodation/RoomGallery"
import { rooms } from "@/data/rooms"

export default function Room() {
  const { slug } = useParams()
  const room = rooms.find((item) => item.slug === slug)
  if (!room) return <Navigate to="/stay/rooms" replace />

  const others = rooms.filter((item) => item.id !== room.id)

  return (
    <>
      <Seo
        title={`${room.name} | Mwenje Guest House`}
        description={room.description}
        path={`/stay/rooms/${room.slug}`}
        image={room.image}
      />
      <section className="bg-paper pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-2 md:px-10">
          <RoomGallery photos={room.gallery} roomName={room.name} />
          <div>
            <p className="eyebrow">Mwenje Guest House · one of six rooms</p>
            <h1 className="display mt-4 text-5xl">{room.name}</h1>
            <p className="mt-5 text-charcoal/80">{room.description}</p>
            <ul className="mt-8 space-y-2 text-sm">
              <li>{room.bedConfiguration}</li>
              <li>{room.bathroom}</li>
              <li>Maximum {room.maxGuests} guests</li>
            </ul>
            <h2 className="mt-10 font-sans text-xs tracking-[0.2em] uppercase">In every room</h2>
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
      <section className="border-t border-bronze/15 bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="eyebrow">The other rooms</p>
          <h2 className="display mt-3 text-3xl">Six ensuite rooms, each with its own gallery</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/stay/rooms/${item.slug}`}
                  className="block border border-bronze/20 bg-paper px-5 py-4 no-underline hover:border-bronze"
                >
                  <p className="display text-2xl">{item.name}</p>
                  <p className="mt-1 text-sm text-charcoal/70">{item.bedConfiguration}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

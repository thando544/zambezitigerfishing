import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { MwenjeLogo } from "@/components/brand/Logos"
import { propertyFacts, propertySpaces, rooms } from "@/data/rooms"

export default function Accommodation() {
  return (
    <>
      <Seo
        title="Mwenje Guest House Victoria Falls"
        description="Ensuite guest house in Victoria Falls with six rooms: five for singles or couples, and one twin. Free Wi-Fi and television in every room."
        path="/stay"
        image="/images/mwenje/room-double-2.jpg"
      />
      <section className="bg-forest pt-32 pb-20 text-ivory">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <MwenjeLogo onDark className="mb-6 h-20" />
          <p className="eyebrow text-bronze-soft">Mwenje Guest House</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">Your home in Victoria Falls</h1>
          <p className="mt-6 max-w-xl text-ivory/78">
            A comfortable Victoria Falls base with ensuite rooms — five for a single guest or a couple, and one twin — plus free Wi-Fi and television in every room.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          {propertyFacts.map((fact) => (
            <div key={fact.label} className="border-t border-bronze/30 pt-4">
              <p className="display text-4xl">{fact.value}</p>
              <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-earth uppercase">{fact.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section heading="The property" className="pt-0">
        <div className="grid gap-8 md:grid-cols-2">
          {propertySpaces.map((space) => (
            <article key={space.title}>
              <ImageSlot
                src={space.image}
                alt={`${space.title} at Mwenje Guest House`}
                className="h-72 w-full object-cover"
              />
              <h2 className="display mt-5 text-3xl">{space.title}</h2>
              <p className="mt-3 text-sm text-charcoal/80">{space.copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section heading="Rooms" tone="ivory">
        <div className="space-y-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <Button to="/book?interest=accommodation" variant="forest" className="mt-12">
          Stay at Mwenje
        </Button>
      </Section>
    </>
  )
}

import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { rooms } from "@/data/rooms"

export default function Rooms() {
  return (
    <>
      <Seo
        title="Rooms at Mwenje Guest House"
        description="Six ensuite rooms at Mwenje Guest House, Victoria Falls: five doubles and one twin. Each room has its own photograph gallery."
        path="/stay/rooms"
      />
      <Section className="pt-32" eyebrow="Mwenje Guest House" heading="Six rooms">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          Five double ensuites and one twin. Every room has a private bathroom, free Wi-Fi, television and air
          conditioning. Each room has its own gallery. Some bedroom photographs have not yet been matched to a room
          number — those pages show in-room spaces and the shared ensuite and garden areas. We confirm the exact room
          when you enquire.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Section>
    </>
  )
}

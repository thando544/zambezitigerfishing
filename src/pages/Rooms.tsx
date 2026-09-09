import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { rooms } from "@/data/rooms"

export default function Rooms() {
  return (
    <>
      <Seo
        title="Rooms at Mwenje Guest House"
        description="Double ensuite and twin ensuite rooms at Mwenje Guest House, Victoria Falls. Confirm availability when you enquire."
        path="/stay/rooms"
      />
      <Section className="pt-32" eyebrow="Mwenje Guest House" heading="Rooms">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          Four double ensuite rooms and two twin ensuite rooms. We do not show live inventory. Confirm availability for
          your dates.
        </p>
        <div className="space-y-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Section>
    </>
  )
}

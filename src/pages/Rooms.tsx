import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { rooms } from "@/data/rooms"

export default function Rooms() {
  return (
    <>
      <Seo
        title="Rooms at Mwenje Guest House"
        description="Five double ensuite rooms for singles or couples, and one twin ensuite with two beds. Free Wi-Fi and TV in every room."
        path="/stay/rooms"
      />
      <Section className="pt-32" eyebrow="Mwenje Guest House" heading="Rooms">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          Five ensuite rooms for a single guest or a couple, and one twin room with two beds. Free Wi-Fi and television in every room. Confirm availability for your dates.
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

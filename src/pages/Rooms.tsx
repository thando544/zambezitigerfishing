import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { rooms } from "@/data/rooms"
import { breadcrumbJsonLd, lodgingBusiness, roomsItemListJsonLd } from "@/lib/seo"

export default function Rooms() {
  return (
    <>
      <Seo
        title="Rooms at Mwenje Guest House Victoria Falls | King, Double & Twin"
        description="Six ensuite bedrooms at Mwenje Guest House, Victoria Falls: three kings, one double and two twins. Sleeps 12. Each room has its own gallery. Enquire for current rates."
        path="/stay/rooms"
        image="/images/mwenje/exterior.jpg"
        imageAlt="The brick guest house at Mwenje in Victoria Falls"
        titleTemplate={false}
        jsonLd={[
          lodgingBusiness(),
          roomsItemListJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mwenje Guest House", path: "/stay" },
            { name: "Rooms", path: "/stay/rooms" },
          ]),
        ]}
      />
      <section className="relative min-h-[48vh] bg-forest pt-28 text-ivory">
        <ImageSlot
          src="/images/mwenje/exterior.jpg"
          alt="The brick guest house at Mwenje in Victoria Falls"
          className="absolute inset-0 h-full w-full object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-6 pb-14 md:px-10">
          <p className="eyebrow text-bronze-soft">Mwenje Guest House · Victoria Falls</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-6xl">Six ensuite rooms</h1>
        </div>
      </section>
      <Section eyebrow="The rooms" heading="Sleeps 12, six bedrooms">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          Six bedrooms, sleeping 12. Rooms 1, 3 and 5 have a king bed. Room 4 has a double. Rooms 2 and 6 have two
          single beds. Every room has a private bathroom, free Wi-Fi, television and air conditioning. Each room has
          its own gallery. Some bedroom photographs have not yet been matched to a room number — those pages show
          in-room spaces and the shared ensuite and garden areas. We confirm the exact room when you enquire.
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

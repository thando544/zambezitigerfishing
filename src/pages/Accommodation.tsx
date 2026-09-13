import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { FaqList } from "@/components/seo/FaqList"
import { MwenjeLogo } from "@/components/brand/Logos"
import { propertyFacts, propertySpaces, rooms } from "@/data/rooms"
import {
  breadcrumbJsonLd,
  faqJsonLd,
  LISTINGS,
  lodgingBusiness,
  roomsItemListJsonLd,
  stayFaqs,
} from "@/lib/seo"

export default function Accommodation() {
  const faqs = stayFaqs()

  return (
    <>
      <Seo
        title="Mwenje Guest House Victoria Falls | 6 Bedrooms, Sleeps 12"
        description="Mwenje Guest House in Victoria Falls, Zimbabwe: six ensuite bedrooms sleeping 12 — three kings, one double and two twins. Pool, free Wi-Fi and TV. Listed on major holiday-rental platforms. Enquire for current rates."
        path="/stay"
        image="/images/mwenje/exterior.jpg"
        imageAlt="Exterior of Mwenje Guest House in Victoria Falls"
        titleTemplate={false}
        jsonLd={[
          lodgingBusiness(),
          roomsItemListJsonLd(),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mwenje Guest House", path: "/stay" },
          ]),
        ]}
      />
      <section className="relative min-h-[70vh] bg-forest pt-28 text-ivory">
        <ImageSlot
          src="/images/mwenje/exterior.jpg"
          alt="The brick guest house at Mwenje in Victoria Falls"
          className="absolute inset-0 h-full w-full object-cover object-[center_80%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-6 pb-16 md:px-10">
          <MwenjeLogo onDark className="mb-6 h-20" />
          <p className="eyebrow text-bronze-soft">Mwenje Guest House · Victoria Falls</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">Mwenje Guest House Victoria Falls</h1>
          <p className="mt-6 max-w-xl text-ivory/78">
            A six-bedroom guest house in Victoria Falls, Zimbabwe, with ensuite rooms. Sleeps 12 — three kings, one
            double and two twins. Swimming pool, free Wi-Fi and television. Enquire here for a direct stay.
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
      <Section
        heading="The six rooms"
        tone="ivory"
        lede="Three kings, one double and two twins. Sleeps 12. Open a room to see its gallery."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <Button to="/book?interest=accommodation" variant="forest" className="mt-12">
          Stay at Mwenje
        </Button>
      </Section>
      <Section heading="A guest house already known in Victoria Falls" className="pt-0">
        <p className="max-w-2xl text-sm leading-relaxed text-charcoal/80">
          Mwenje is already listed on the holiday-rental platforms travellers use when they search Victoria Falls. This
          site is the official place to enquire directly — six numbered rooms, the pool, and the option to pair the stay
          with guided tiger fishing on the Upper Zambezi.
        </p>
        <p className="mt-4 text-sm text-charcoal/80">
          Also listed on{" "}
          <a href={LISTINGS.vrbo} rel="noopener noreferrer" target="_blank">
            Vrbo
          </a>{" "}
          and{" "}
          <a href={LISTINGS.airbnb} rel="noopener noreferrer" target="_blank">
            Airbnb
          </a>. Public listings give check-in at 14:00 and check-out at 10:00 — confirm both when you enquire.
        </p>
      </Section>
      <Section heading="Mwenje Guest House questions" className="pt-0">
        <FaqList items={faqs} />
      </Section>
    </>
  )
}

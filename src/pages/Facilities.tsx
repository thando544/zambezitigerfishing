import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { propertySpaces } from "@/data/rooms"
import { breadcrumbJsonLd, lodgingBusiness } from "@/lib/seo"

export default function Facilities() {
  return (
    <>
      <Seo
        title="Mwenje Guest House Facilities | Pool, Wi-Fi & Ensuite Rooms"
        description="Facilities at Mwenje Guest House, Victoria Falls: swimming pool, lounge, reception and six ensuite bedrooms with free Wi-Fi, television and air conditioning."
        path="/stay/facilities"
        image="/images/mwenje/exterior.jpg"
        imageAlt="The brick guest house at Mwenje in Victoria Falls"
        titleTemplate={false}
        jsonLd={[
          lodgingBusiness(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mwenje Guest House", path: "/stay" },
            { name: "Facilities", path: "/stay/facilities" },
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
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-6xl">Facilities</h1>
        </div>
      </section>
      <Section eyebrow="The property" heading="What comes with a stay">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          A six-bedroom guest house in Victoria Falls with a swimming pool, lounge and reception. Every room is ensuite,
          air-conditioned, and has free Wi-Fi and television.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {propertySpaces.map((space) => (
            <article key={space.title}>
              <ImageSlot
                src={space.image}
                alt={space.title}
                className="h-64 w-full object-cover"
              />
              <h2 className="display mt-5 text-3xl">{space.title}</h2>
              <p className="mt-3 text-sm text-charcoal/80">{space.copy}</p>
            </article>
          ))}
        </div>
        <Button to="/book?interest=accommodation" variant="forest" className="mt-12">
          Stay with us
        </Button>
      </Section>
    </>
  )
}

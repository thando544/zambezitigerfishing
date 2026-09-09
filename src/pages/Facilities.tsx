import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { propertySpaces } from "@/data/rooms"

export default function Facilities() {
  return (
    <>
      <Seo
        title="Facilities | Mwenje Guest House"
        description="Swimming pool, garden, lounge, dining area, kitchen facilities, breakfast, Wi-Fi, parking and air-conditioned ensuite rooms at Mwenje Guest House, Victoria Falls."
        path="/stay/facilities"
      />
      <Section className="pt-32" eyebrow="Mwenje Guest House" heading="Facilities">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          Shared spaces and property amenities drawn from public listings. Confirm anything essential to your stay when you
          enquire.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {propertySpaces.map((space) => (
            <article key={space.title}>
              <ImageSlot
                src={space.image}
                fallbackSrc={space.fallback}
                alt={`Placeholder for ${space.title}`}
                placeholderLabel={space.title}
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

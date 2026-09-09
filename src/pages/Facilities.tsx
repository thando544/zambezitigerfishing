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
        description="Ensuite bathrooms, free Wi-Fi and television in every room at Mwenje Guest House, Victoria Falls."
        path="/stay/facilities"
      />
      <Section className="pt-32" eyebrow="Mwenje Guest House" heading="Facilities">
        <p className="mb-12 max-w-2xl text-charcoal/80">
          Six ensuite rooms. Five are for a single guest or a couple. One is a twin with two beds. Free Wi-Fi and a television in every room.
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

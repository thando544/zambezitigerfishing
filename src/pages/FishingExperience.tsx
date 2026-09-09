import { Navigate, useParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { experiences } from "@/data/experiences"

export default function FishingExperience() {
  const { slug } = useParams()
  const experience = experiences.find((item) => item.slug === slug)
  if (!experience) return <Navigate to="/fishing" replace />

  return (
    <>
      <Seo
        title={`${experience.name} | Upper Zambezi`}
        description={`${experience.shortDescription} Enquire for current rates.`}
        path={`/fishing/${experience.slug}`}
        image={experience.image}
      />
      <section className="bg-ink pt-32 pb-16 text-ivory">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="eyebrow">Zambezi Tiger Adventures</p>
            <h1 className="display mt-4 text-5xl md:text-6xl">{experience.name}</h1>
            <p className="mt-6 text-ivory/78">{experience.description}</p>
            <p className="mt-8 text-[0.7rem] tracking-[0.22em] text-bronze uppercase">Enquire for current rates</p>
            <Button to={`/book?interest=fishing&experience=${experience.slug}`} variant="gold" className="mt-6">
              Enquire now
            </Button>
          </div>
          <ImageSlot src={experience.image} alt={experience.name} className="h-[28rem] w-full object-cover" />
        </div>
      </section>
      <Section>
        <dl className="grid gap-8 md:grid-cols-3">
          <div>
            <dt className="eyebrow">Duration</dt>
            <dd className="mt-3 text-lg">{experience.duration}</dd>
          </div>
          <div>
            <dt className="eyebrow">Start time</dt>
            <dd className="mt-3 text-lg">{experience.startTime}</dd>
          </div>
          <div>
            <dt className="eyebrow">Guests</dt>
            <dd className="mt-3 text-lg">{experience.guestCapacity}</dd>
          </div>
        </dl>
        <h2 className="display mt-16 text-4xl">Included</h2>
        <ul className="mt-6 space-y-3 text-charcoal/80">
          {experience.inclusions.map((item) => (
            <li key={item} className="border-b border-bronze/15 pb-3">
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}

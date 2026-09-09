import { Link } from "react-router-dom"
import type { Experience } from "@/types"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="flex h-full flex-col border border-bronze/20 bg-ivory">
      <Link to={`/fishing/${experience.slug}`} className="image-reveal is-visible block aspect-[5/3] overflow-hidden">
        <ImageSlot src={experience.image} alt={`${experience.name} on the Upper Zambezi`} />
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="eyebrow">{experience.duration}</p>
        <h3 className="display mt-3 text-3xl">
          <Link to={`/fishing/${experience.slug}`} className="no-underline">
            {experience.name}
          </Link>
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/80">{experience.shortDescription}</p>
        <dl className="mt-6 space-y-3 text-sm">
          <div>
            <dt className="text-[0.65rem] tracking-[0.18em] text-earth uppercase">Start time</dt>
            <dd className="mt-1 text-charcoal/80">{experience.startTime}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] tracking-[0.18em] text-earth uppercase">Guests</dt>
            <dd className="mt-1 text-charcoal/80">{experience.guestCapacity}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] tracking-[0.18em] text-earth uppercase">Included</dt>
            <dd className="mt-1 text-charcoal/80">{experience.inclusions.join(" ")}</dd>
          </div>
        </dl>
        <p className="mt-6 text-[0.68rem] tracking-[0.2em] text-earth uppercase">Enquire for current rates</p>
        <Button to={`/book?interest=fishing&experience=${experience.slug}`} variant="forest" className="mt-5">
          Enquire now
        </Button>
      </div>
    </article>
  )
}

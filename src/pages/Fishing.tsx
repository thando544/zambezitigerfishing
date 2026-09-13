import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ExperienceCard } from "@/components/fishing/ExperienceCard"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { FaqList } from "@/components/seo/FaqList"
import { ZambeziLogo } from "@/components/brand/Logos"
import { experiences } from "@/data/experiences"
import {
  breadcrumbJsonLd,
  faqJsonLd,
  fishingFaqs,
  fishingOfferCatalogJsonLd,
  fishingOrganization,
} from "@/lib/seo"

export default function Fishing() {
  const faqs = fishingFaqs()

  return (
    <>
      <Seo
        title="Tiger Fishing Victoria Falls"
        description="Guided tiger fishing on the Upper Zambezi at Victoria Falls, Zimbabwe. 3-hour, half-day and full-day trips for beginners and experienced anglers. Enquire for current rates."
        path="/fishing"
        image="/images/fishing/guide-boat.jpg"
        imageAlt="Guide at the helm of a Zambezi Tiger Adventures fishing boat on the Upper Zambezi"
        jsonLd={[
          fishingOrganization(),
          fishingOfferCatalogJsonLd(),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tiger fishing Victoria Falls", path: "/fishing" },
          ]),
        ]}
      />
      <section className="relative min-h-[70vh] bg-ink pt-28 text-ivory">
        <ImageSlot
          src="/images/fishing/guide-boat.jpg"
          alt="Guide at the helm of a Zambezi Tiger Adventures fishing boat on the Upper Zambezi"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-6 pb-16 md:px-10">
          <ZambeziLogo onDark className="mb-6 h-16 w-auto md:h-20" />
          <p className="eyebrow">Zambezi Tiger Adventures</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">Tiger fishing Victoria Falls</h1>
          <p className="mt-6 max-w-xl text-ivory/80">
            Guided sport fishing for African tigerfish on the Upper Zambezi, above the Falls. Three durations. Rates on
            enquiry.
          </p>
        </div>
      </section>
      <Section
        heading="Why fish the Upper Zambezi"
        lede="The African tigerfish is the reason most guests come to this river. We fish the stretch above Victoria Falls — channels, islands and current — with time, tackle and inclusions confirmed when you write to us."
      >
        <div className="grid gap-8 md:grid-cols-3">
          <article className="border-t border-bronze/25 pt-6">
            <h3 className="display text-3xl">The fish</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Tigerfish are a fast freshwater predator. Other species are present in the system. What you catch depends
              on the river that day, not a promise on a website.
            </p>
          </article>
          <article className="border-t border-bronze/25 pt-6">
            <h3 className="display text-3xl">The river</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              The Upper Zambezi sits above Victoria Falls. Days are guided. Wildlife may be seen along the banks.
              Sightings are a possibility, never an itinerary item.
            </p>
          </article>
          <article className="border-t border-bronze/25 pt-6">
            <h3 className="display text-3xl">Who it is for</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Beginners and experienced anglers both come here. Tell us the truth about your level so the trip can be
              shaped around it. Rates, start times and boat capacity are confirmed on enquiry.
            </p>
          </article>
        </div>
      </Section>
      <Section heading="Guided tiger fishing trips" lede="Three ways to fish. Enquire for current rates — this is not an instant booking.">
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
        <Button to="/book?interest=fishing" variant="forest" className="mt-12">
          Enquire about tiger fishing
        </Button>
      </Section>
      <Section heading="Tiger fishing questions" className="pt-0">
        <FaqList items={faqs} />
      </Section>
    </>
  )
}

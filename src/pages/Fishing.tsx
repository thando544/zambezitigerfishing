import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ExperienceCard } from "@/components/fishing/ExperienceCard"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { experiences } from "@/data/experiences"

export default function Fishing() {
  return (
    <>
      <Seo
        title="Tiger fishing Victoria Falls"
        description="Guided 3-hour, half-day and full-day tiger fishing on the Upper Zambezi at Victoria Falls, Zimbabwe. Enquire for current rates."
        path="/fishing"
        image="/images/fishing/boat.jpg"
      />
      <section className="relative min-h-[70vh] bg-ink pt-28 text-ivory">
        <ImageSlot
          src="/images/fishing/mist.jpg"
          alt="Mist and dark water, standing in for the Upper Zambezi fishing atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-6 pb-16 md:px-10">
          <p className="eyebrow">Zambezi Tiger Adventures</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">Tiger fishing on the Upper Zambezi</h1>
          <p className="mt-6 max-w-xl text-ivory/80">
            Guided sport fishing above Victoria Falls. Three durations. Rates on enquiry.
          </p>
        </div>
      </section>
      <Section lede="The African tigerfish is the reason most guests come to the river. We fish the Upper Zambezi — the stretch above the Falls — with time, tackle and inclusions confirmed when you write to us.">
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
        <Button to="/book?interest=fishing" variant="forest" className="mt-12">
          Enquire now
        </Button>
      </Section>
    </>
  )
}

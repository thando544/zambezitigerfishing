import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"

const places = [
  {
    title: "Victoria Falls",
    copy: "The waterfall that gives the town its name. How you visit — walkways, viewpoints, time of day — is yours to plan. We do not publish unverified entry details here.",
  },
  {
    title: "Victoria Falls National Park",
    copy: "The park protects the Zimbabwean side of the Falls and the immediate landscape around them.",
  },
  {
    title: "The Zambezi River",
    copy: "The river above the Falls is where we fish. It is also the reason the town exists where it does.",
  },
  {
    title: "David Livingstone Statue",
    copy: "A familiar landmark on the Zimbabwean side, near the Falls.",
  },
  {
    title: "The Big Tree",
    copy: "A known local landmark in Victoria Falls. Ask us for current visiting notes if it matters to your day.",
  },
]

export default function VictoriaFalls() {
  return (
    <>
      <Seo
        title="Victoria Falls destination guide"
        description="Victoria Falls, the Zambezi River, the National Park and the town — a calm introduction for guests staying at Mwenje or fishing with Zambezi Tiger Adventures."
        path="/victoria-falls"
        image="/images/destination/victoria-falls.jpg"
      />
      <section className="relative min-h-[70vh] bg-ink pt-28 text-ivory">
        <ImageSlot
          src="/images/destination/victoria-falls.jpg"
          alt="Victoria Falls at sunrise"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-6 pb-16 md:px-10">
          <p className="eyebrow">Destination</p>
          <h1 className="display mt-4 text-5xl md:text-7xl">Welcome to Victoria Falls</h1>
        </div>
      </section>
      <Section lede="The Falls, the river and the town sit together. We do not invent distances or travel times. If timing matters to your day, ask us.">
        <div className="grid gap-10 md:grid-cols-2">
          {places.map((place) => (
            <article key={place.title} className="border-t border-bronze/25 pt-6">
              <h2 className="display text-3xl">{place.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{place.copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <section id="zambezi" className="bg-ink px-6 py-24 text-ivory md:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <ImageSlot
            src="/images/destination/river-wide.jpg"
            alt="Wide river country"
            className="h-[26rem] w-full object-cover"
          />
          <div>
            <p className="eyebrow">The river</p>
            <h2 className="display mt-4 text-5xl">The Zambezi</h2>
            <p className="mt-6 text-ivory/78">
              Upstream of the Falls the river opens into channels and islands. This is fishing country, and it is also
              landscape. Wildlife may be seen from the water. Treat that as a possibility, not an itinerary item.
            </p>
            <Button to="/fishing" variant="gold" className="mt-8">
              Fish the Zambezi
            </Button>
          </div>
        </div>
      </section>
      <Section heading="Around town">
        <p className="max-w-2xl text-charcoal/80">
          Victoria Falls is a small town built around a very large waterfall. Activities in the area include time at the
          Falls, river time, and wildlife experiences in the surrounding parks. We can help you think through a day. We
          will not sell you a list of unverified add-ons as if they were ours.
        </p>
        <Button to="/plan" variant="forest" className="mt-10">
          Plan your trip
        </Button>
      </Section>
    </>
  )
}

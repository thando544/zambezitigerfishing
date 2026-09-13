import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { FaqList } from "@/components/seo/FaqList"
import { faqs } from "@/data/navigation"
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo"

export default function Plan() {
  return (
    <>
      <Seo
        title="Plan a Victoria Falls Trip | Tiger Fishing & Mwenje Guest House"
        description="When to go tiger fishing on the Upper Zambezi, what to bring, and how a stay at Mwenje Guest House works. Practical notes for Victoria Falls, Zimbabwe."
        path="/plan"
        titleTemplate={false}
        jsonLd={[
          faqJsonLd(faqs.filter((item) => item.published)),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Plan your trip", path: "/plan" },
          ]),
        ]}
      />
      <Section
        className="pt-32"
        eyebrow="Travel notes"
        heading="Plan your Victoria Falls experience"
        lede="Use this as a briefing, then enquire. Transport times, park fees and in-room extras should be confirmed for your dates."
      >
        <div className="grid gap-10 md:grid-cols-2">
          <article>
            <h2 className="display text-3xl">When to visit</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Fishing on the Upper Zambezi is not limited to a single month. Water levels and weather change. The river
              fishes differently in high water and low water. Ask us what the river is doing when you have dates in mind.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl">What to bring on the water</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Bring a hat, polarised sunglasses, sun protection, a long-sleeved shirt, layers for cool mornings, and
              boat-sensible shoes. If you have a preferred rod, say so. Confirm whether tackle is provided when you
              enquire.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl">Experience level</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Beginners and experienced anglers both come to this river. Tell us the truth about your level so the day can
              be planned properly.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl">Accommodation</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Mwenje has six bedrooms, sleeping 12: three kings, one double and two twins. Each room has its own gallery. Free Wi-Fi and television in every room. Public listings give check-in at 14:00 and check-out at 10:00 — confirm when you enquire.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl">Location</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Victoria Falls, Zimbabwe. Public listings place the guest house in town, near Victoria Falls National Park.
              We will not invent walking minutes. Ask us for current access notes.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl">How to enquire</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Use the form. Choose fishing, accommodation, or both. You will receive a reference, not a booking
              confirmation.
            </p>
          </article>
        </div>
        <Button to="/book" variant="forest" className="mt-12">
          Plan your trip
        </Button>
      </Section>
      <Section heading="Questions" className="pt-0">
        <FaqList items={faqs.filter((item) => item.published)} />
      </Section>
    </>
  )
}

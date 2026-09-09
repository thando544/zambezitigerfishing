import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { faqs } from "@/data/navigation"

export default function Plan() {
  return (
    <>
      <Seo
        title="Plan your Victoria Falls trip"
        description="When to visit, what to bring fishing, staying at Mwenje Guest House, and how to enquire — a practical page for Victoria Falls."
        path="/plan"
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
              Fishing on the Upper Zambezi is not limited to a single month. Water levels and weather change. High water
              and low water fish differently. Ask us what the river is doing when you have dates in mind.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl">What to bring fishing</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              Hat, polarised sunglasses, sun protection, a long-sleeved shirt, layers for cool mornings, and boat-sensible
              shoes. If you have a preferred rod, say so. Confirm whether tackle is provided when you enquire.
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
              Mwenje has six ensuite rooms and space for about twelve guests. Breakfast is listed as available. Check-in
              times, parking and kitchen use should be confirmed. We do not publish an unverified house policy here.
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
        <dl className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-t border-bronze/20 pt-6">
              <dt className="font-sans text-sm tracking-[0.08em]">{faq.question}</dt>
              <dd className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal/80">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}

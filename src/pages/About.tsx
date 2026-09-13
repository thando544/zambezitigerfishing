import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { MwenjeLogo, ZambeziLogo } from "@/components/brand/Logos"

export default function About() {
  return (
    <>
      <Seo
        title="About | Zambezi Tiger Adventures & Mwenje Guest House"
        description="Zambezi Tiger Adventures runs guided tiger fishing on the Upper Zambezi. Mwenje Guest House is a six-bedroom ensuite stay in Victoria Falls, Zimbabwe."
        path="/about"
        titleTemplate={false}
      />
      <Section className="pt-32" eyebrow="About" heading="A river. A house. One destination.">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ZambeziLogo className="mb-6 h-16" />
            <h2 className="display text-4xl">Zambezi Tiger Adventures</h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">
              Guided tiger fishing on the Upper Zambezi at Victoria Falls. Three-hour, half-day and full-day trips for
              African tigerfish. We do not publish unverified records, guide biographies or prices. If you want the river,
              write to us.
            </p>
          </div>
          <div>
            <MwenjeLogo className="mb-6 h-20" />
            <h2 className="display text-4xl">Mwenje Guest House</h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">
              A six-bedroom ensuite guest house in Victoria Falls, sleeping 12 — three kings, one double and two twins.
              Already listed on the holiday-rental platforms travellers use. Each room has its own photograph gallery. Free
              Wi-Fi, television and a swimming pool.
            </p>
          </div>
        </div>
        <p className="mt-12 max-w-2xl text-sm text-mist">
          Company history, ownership and awards are omitted until the client supplies them. This page will grow with
          verified facts, not invented ones.
        </p>
        <Button to="/contact" variant="forest" className="mt-10">
          Contact
        </Button>
      </Section>
    </>
  )
}

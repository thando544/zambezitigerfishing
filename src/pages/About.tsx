import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { MwenjeLogo, ZambeziLogo } from "@/components/brand/Logos"

export default function About() {
  return (
    <>
      <Seo
        title="About Zambezi Tiger Adventures and Mwenje"
        description="A Victoria Falls pairing: guided tiger fishing on the Upper Zambezi and ensuite rooms at Mwenje Guest House."
        path="/about"
      />
      <Section className="pt-32" eyebrow="About" heading="A river. A house. One destination.">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ZambeziLogo className="mb-6 h-16" />
            <h2 className="display text-4xl">Zambezi Tiger Adventures</h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">
              Guided sport fishing on the Upper Zambezi at Victoria Falls. Three-hour, half-day and full-day trips. We do
              not publish unverified records, guide biographies or prices. If you want the river, write to us.
            </p>
          </div>
          <div>
            <MwenjeLogo className="mb-6 h-20" />
            <h2 className="display text-4xl">Mwenje Guest House</h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">
              Six ensuite rooms in Victoria Falls — four double, two twin — with space for about twelve guests. Pool,
              garden, lounge, dining, breakfast, Wi-Fi, parking and air-conditioned rooms. A quiet place to come back to.
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

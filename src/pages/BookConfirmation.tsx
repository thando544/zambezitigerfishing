import { Link, useSearchParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { siteSettings } from "@/data/site"
import { whatsappLink } from "@/lib/utils"

export default function BookConfirmation() {
  const [params] = useSearchParams()
  const reference = params.get("ref") ?? "—"
  const status = params.get("status")
  const reason = params.get("reason")
  const received = status === "received"
  const whatsapp = siteSettings.whatsapp
    ? whatsappLink(siteSettings.whatsapp, `Hello — following up on enquiry ${reference}.`)
    : "/contact"

  return (
    <>
      <Seo
        title="Enquiry received"
        description="Your Victoria Falls enquiry has been logged. This is not a confirmed booking."
        path="/book/confirmation"
        noIndex
      />
      <Section className="pt-32" eyebrow="Enquiry" heading={received ? "We have your enquiry." : "Send this to us directly."}>
        <p className="max-w-2xl text-lg text-charcoal/80">
          {received
            ? "This is not a confirmed booking. We will come back to you with availability, rates and next steps."
            : reason || "The online enquiry service is not connected yet. Please WhatsApp or email us with your dates."}
        </p>
        <p className="mt-8 font-sans text-sm tracking-[0.2em] text-earth uppercase">Reference {reference}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsapp} variant="gold" external={whatsapp.startsWith("http")}>
            WhatsApp us
          </Button>
          <Button to="/" variant="forest">
            Back to the beginning
          </Button>
        </div>
        <p className="mt-10 text-sm">
          <Link to="/contact">Prefer email? Use the contact page.</Link>
        </p>
      </Section>
    </>
  )
}

import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { EnquiryForm } from "@/components/booking/EnquiryForm"

export default function Book() {
  return (
    <>
      <Seo
        title="Enquire | Fishing and Mwenje stays"
        description="Enquire about tiger fishing on the Upper Zambezi, a stay at Mwenje Guest House, or both. Submitting this form creates an enquiry — it does not confirm a booking."
        path="/book"
      />
      <Section
        className="pt-32"
        eyebrow="Enquire"
        heading="Plan your Victoria Falls trip"
        lede="Tell us what you want — fishing, a room, or both. We will reply with availability and current rates. This is not an instant confirmation."
      >
        <EnquiryForm />
      </Section>
    </>
  )
}

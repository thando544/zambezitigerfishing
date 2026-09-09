import { Link } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." path="/404" noIndex />
      <Section className="pt-32" heading="This page is not on the map.">
        <p className="max-w-xl text-charcoal/80">
          The path you followed does not exist. Return to the river, the house, or send an enquiry.
        </p>
        <div className="mt-10 flex gap-3">
          <Button to="/" variant="forest">
            Home
          </Button>
          <Link to="/contact" className="self-center text-sm">
            Contact
          </Link>
        </div>
      </Section>
    </>
  )
}

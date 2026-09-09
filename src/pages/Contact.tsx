import { useState, type FormEvent } from "react"
import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { siteSettings } from "@/data/site"
import { submitContactMessage } from "@/lib/enquiry"
import { whatsappLink } from "@/lib/utils"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle")
  const [note, setNote] = useState("")
  const [pending, setPending] = useState(false)

  const whatsapp = siteSettings.whatsapp
    ? whatsappLink(siteSettings.whatsapp, "Hello — I would like to get in touch about Victoria Falls.")
    : "/book"

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setPending(true)
    const result = await submitContactMessage({ name, email, phone, message })
    setPending(false)
    if (result.ok) {
      setStatus("sent")
      setNote("Message received. We will reply to the email you gave us.")
      return
    }
    setStatus("error")
    setNote(result.message)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Enquire about tiger fishing on the Upper Zambezi or a stay at Mwenje Guest House, Victoria Falls."
        path="/contact"
      />
      <Section className="pt-32" eyebrow="Contact" heading="Write to us">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-charcoal/80">
              Use the enquiry form for fishing and accommodation dates. This page is for general messages.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>{siteSettings.locationLabel}</li>
              <li>{siteSettings.email ? siteSettings.email : "Email available on enquiry"}</li>
              <li>{siteSettings.phone ? siteSettings.phone : "Phone available on enquiry"}</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/book" variant="forest">
                Book / Enquire
              </Button>
              <Button href={whatsapp} variant="gold" external={whatsapp.startsWith("http")}>
                WhatsApp us
              </Button>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="block text-sm">
              Name
              <input required className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="block text-sm">
              Email
              <input type="email" required className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="block text-sm">
              Phone / WhatsApp
              <input className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className="block text-sm">
              Message
              <textarea required rows={5} className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3" value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <Button type="submit" variant="forest" disabled={pending}>
              {pending ? "Sending…" : "Send message"}
            </Button>
            {status !== "idle" ? <p className="text-sm text-earth">{note}</p> : null}
          </form>
        </div>
      </Section>
    </>
  )
}

import type { ReactNode } from "react"
import { experiences } from "@/data/experiences"
import { rooms } from "@/data/rooms"
import { faqs, reviews } from "@/data/navigation"
import { galleryItems } from "@/data/gallery"

type AdminPageProps = {
  title: string
  intro: string
  children?: ReactNode
}

function Shell({ title, intro, children }: AdminPageProps) {
  return (
    <section>
      <p className="eyebrow">CMS</p>
      <h1 className="display mt-3 text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-sm text-charcoal/80">{intro}</p>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function Empty({ label }: { label: string }) {
  return <p className="border border-dashed border-bronze/30 px-5 py-8 text-sm text-mist">{label}</p>
}

export function AdminBookings() {
  return (
    <Shell
      title="Bookings"
      intro="Enquiries land here as NEW. Move them through CONTACTED, QUOTED, CONFIRMED, COMPLETED, CANCELLED or DECLINED. Nothing is auto-confirmed."
    >
      <Empty label="No enquiries loaded. Connect Supabase and query the bookings table." />
    </Shell>
  )
}

export function AdminExperiences() {
  return (
    <Shell title="Fishing experiences" intro="Seeded from the static content file until the experiences table is populated.">
      <ul className="space-y-3">
        {experiences.map((item) => (
          <li key={item.id} className="border border-bronze/20 bg-ivory px-5 py-4">
            <p className="font-sans text-xs tracking-[0.16em] uppercase">{item.duration}</p>
            <p className="display mt-1 text-2xl">{item.name}</p>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function AdminRooms() {
  return (
    <Shell title="Rooms" intro="Room copy and verified amenities. Unverified in-room extras stay hidden on the public site.">
      <ul className="space-y-3">
        {rooms.map((item) => (
          <li key={item.id} className="border border-bronze/20 bg-ivory px-5 py-4">
            <p className="display text-2xl">{item.name}</p>
            <p className="mt-1 text-sm text-mist">
              {item.countOnProperty} rooms · max {item.maxGuests} guests
            </p>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function AdminAvailability() {
  return (
    <Shell
      title="Availability"
      intro="The availability table is ready in the migration. This screen will show blocked dates per room once data exists. Do not invent inventory."
    >
      <Empty label="No availability rows yet." />
    </Shell>
  )
}

export function AdminReports() {
  return (
    <Shell
      title="Fishing reports"
      intro="River notes for a given date. Publish only what the operation is willing to stand behind — no invented catches."
    >
      <Empty label="No fishing reports published." />
    </Shell>
  )
}

export function AdminGallery() {
  return (
    <Shell title="Gallery" intro="Public gallery items. Replace Mwenje placeholders with approved originals in /public/images/mwenje.">
      <p className="text-sm">{galleryItems.length} items in the current seed.</p>
    </Shell>
  )
}

export function AdminReviews() {
  return (
    <Shell
      title="Reviews"
      intro="Reviews stay unpublished until permission and a source are recorded. The public site will not invent testimonials."
    >
      <Empty label={reviews.length === 0 ? "No reviews in the seed, by design." : `${reviews.length} reviews`} />
    </Shell>
  )
}

export function AdminBlog() {
  return (
    <Shell title="Blog" intro="Travel guides and journal posts. The public /plan page currently holds evergreen notes.">
      <Empty label="No blog posts published." />
    </Shell>
  )
}

export function AdminFaqs() {
  return (
    <Shell title="FAQs" intro="Questions shown on the planning page. Edit via the faqs table once Supabase is live.">
      <ul className="space-y-3">
        {faqs.map((item) => (
          <li key={item.id} className="border border-bronze/20 bg-ivory px-5 py-4 text-sm">
            {item.question}
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function AdminSettings() {
  return (
    <Shell
      title="Site settings"
      intro="Phone, WhatsApp, email, address and social URLs. Official social links should be added only when accounts are confirmed. Use environment variables or the site_settings table — never a service-role key in the browser."
    >
      <Empty label="Fill VITE_CONTACT_EMAIL, VITE_CONTACT_PHONE and VITE_WHATSAPP_NUMBER, or the site_settings row." />
    </Shell>
  )
}

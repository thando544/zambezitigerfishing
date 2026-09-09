import { BookingStatus } from "@/types"
import { isSupabaseConfigured } from "@/lib/supabase"

const modules = [
  "Bookings and enquiries",
  "Fishing experiences",
  "Rooms and amenities",
  "Availability calendars",
  "Fishing reports",
  "Gallery uploads",
  "Permissioned reviews",
  "Travel journal / blog",
  "FAQs",
  "Contact details and site settings",
]

export default function AdminDashboard() {
  return (
    <section>
      <p className="eyebrow">Overview</p>
      <h1 className="display mt-3 text-4xl">Dashboard</h1>
      <p className="mt-4 max-w-2xl text-sm text-charcoal/80">
        This is the CMS shell. It is ready for Supabase Auth and table writes. No sample bookings or invented reviews are
        shown.
      </p>
      <p className="mt-4 text-sm text-earth">
        {isSupabaseConfigured() ? "The browser client is configured." : "Supabase environment variables are not set yet."}
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {modules.map((item) => (
          <li key={item} className="border border-bronze/20 bg-ivory px-5 py-4 text-sm">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <h2 className="font-sans text-xs tracking-[0.2em] uppercase">Enquiry statuses</h2>
        <p className="mt-3 flex flex-wrap gap-2 text-[0.65rem] tracking-[0.16em] uppercase">
          {Object.values(BookingStatus).map((status) => (
            <span key={status} className="border border-bronze/30 px-3 py-1">
              {status}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

import { NavLink, Outlet } from "react-router-dom"
import { isSupabaseConfigured } from "@/lib/supabase"
import { Seo } from "@/components/seo/Seo"
import { cn } from "@/lib/utils"

const links = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/bookings", label: "Bookings" },
  { to: "/admin/experiences", label: "Fishing Experiences" },
  { to: "/admin/rooms", label: "Rooms" },
  { to: "/admin/availability", label: "Availability" },
  { to: "/admin/reports", label: "Fishing Reports" },
  { to: "/admin/gallery", label: "Gallery" },
  { to: "/admin/reviews", label: "Reviews" },
  { to: "/admin/blog", label: "Blog" },
  { to: "/admin/faqs", label: "FAQs" },
  { to: "/admin/settings", label: "Site Settings" },
]

export function AdminLayout() {
  const connected = isSupabaseConfigured()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Seo title="Admin" description="Private CMS for Zambezi Tiger Adventures and Mwenje Guest House." path="/admin" noIndex />
      <div className="grid lg:grid-cols-[16rem_1fr]">
        <aside className="border-b border-bronze/20 bg-ink px-5 py-8 text-ivory lg:min-h-screen lg:border-r lg:border-b-0">
          <p className="eyebrow text-bronze">CMS</p>
          <p className="display mt-2 text-2xl">Studio</p>
          <nav className="mt-8 flex flex-col gap-1" aria-label="Admin">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-[0.72rem] tracking-[0.14em] uppercase no-underline",
                    isActive ? "bg-ivory/10 text-bronze" : "text-ivory/70 hover:text-ivory",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-10 text-xs text-ivory/50">
            {connected ? "Supabase connected" : "Connect VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable writes."}
          </p>
        </aside>
        <div className="px-6 py-10 md:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

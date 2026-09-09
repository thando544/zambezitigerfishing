import { useEffect, useId, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import { navItems } from "@/data/navigation"
import { siteSettings } from "@/data/site"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Header() {
  const location = useLocation()
  const locationKey = `${location.pathname}${location.search}`
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [seenLocation, setSeenLocation] = useState(locationKey)
  const desktopNavId = useId()

  if (seenLocation !== locationKey) {
    setSeenLocation(locationKey)
    setOpen(false)
    setOpenMenu(null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const overHero = location.pathname === "/" && !scrolled
  const bar = overHero
    ? "bg-transparent text-ivory"
    : "bg-ivory/95 text-ink shadow-[0_1px_0_rgba(18,16,14,0.08)] backdrop-blur-md"

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-colors duration-500", bar)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="min-w-0 no-underline" aria-label="Zambezi Tiger Adventures and Mwenje Guest House home">
          <span className="block font-sans text-[0.62rem] tracking-[0.32em] uppercase opacity-80">Victoria Falls</span>
          <span className="display mt-0.5 block text-[1.35rem] leading-none tracking-[0.08em] md:text-[1.5rem]">
            Zambezi Tiger
          </span>
          <span className="mt-1 block font-sans text-[0.58rem] tracking-[0.28em] uppercase opacity-75">
            {siteSettings.stayBrand}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary" id={desktopNavId}>
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={cn("nav-link inline-flex items-center gap-1", openMenu === item.label && "is-open")}
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                {openMenu === item.label ? (
                  <div className="absolute top-full left-0 z-20 min-w-56 bg-ivory pt-4 text-ink shadow-[0_18px_40px_rgba(18,16,14,0.16)]">
                    <ul className="border-t border-bronze/25 py-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className="block px-5 py-2.5 font-sans text-[0.72rem] tracking-[0.16em] uppercase no-underline hover:text-earth"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("nav-link", isActive && "is-open")}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/book" variant={overHero ? "gold" : "forest"} className="hidden sm:inline-flex">
            Book / Enquire
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[4.75rem] z-40 overflow-y-auto bg-ink text-ivory lg:hidden"
        >
          <nav className="flex flex-col gap-2 px-6 py-8" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-ivory/10 py-3">
                <Link to={item.to} className="display block text-3xl no-underline">
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mt-3 space-y-2 pl-1">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className="block text-[0.78rem] tracking-[0.18em] text-ivory/70 uppercase no-underline"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <Button to="/book" variant="gold" size="lg" className="mt-8">
              Book / Enquire
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

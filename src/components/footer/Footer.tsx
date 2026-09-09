import { Link } from "react-router-dom"
import { MwenjeLogo, ZambeziLogo } from "@/components/brand/Logos"
import { siteSettings } from "@/data/site"
import { whatsappLink } from "@/lib/utils"

export function Footer() {
  const whatsapp = siteSettings.whatsapp
    ? whatsappLink(
        siteSettings.whatsapp,
        "Hello — I would like to enquire about fishing and/or staying at Mwenje Guest House.",
      )
    : "/book"

  return (
    <footer className="bg-ink px-6 pt-16 pb-24 text-ivory md:px-10 md:pt-20 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-center gap-6 border-b border-ivory/10 pb-10">
          <Link to="/" className="no-underline" aria-label="Zambezi Tiger Adventures home">
            <ZambeziLogo onDark className="h-12 max-w-[220px] sm:h-14" />
          </Link>
          <span className="hidden h-10 w-px bg-ivory/20 sm:block" aria-hidden="true" />
          <Link to="/stay" className="no-underline" aria-label="Mwenje Guest House">
            <MwenjeLogo onDark className="h-14 max-w-[120px]" />
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Zambezi Tiger Adventures</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/75">
              <li>
                <Link to="/fishing" className="no-underline hover:text-bronze">
                  Fishing
                </Link>
              </li>
              <li>
                <Link to="/fishing/3-hour-fishing" className="no-underline hover:text-bronze">
                  3-Hour Fishing
                </Link>
              </li>
              <li>
                <Link to="/fishing/half-day-fishing" className="no-underline hover:text-bronze">
                  Half-Day Fishing
                </Link>
              </li>
              <li>
                <Link to="/fishing/full-day-fishing" className="no-underline hover:text-bronze">
                  Full-Day Fishing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Mwenje Guest House</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/75">
              <li>
                <Link to="/stay" className="no-underline hover:text-bronze">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link to="/stay/rooms" className="no-underline hover:text-bronze">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/stay/facilities" className="no-underline hover:text-bronze">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery?cat=mwenje" className="no-underline hover:text-bronze">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/book?interest=accommodation" className="no-underline hover:text-bronze">
                  Stay With Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Destination</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/75">
              <li>
                <Link to="/victoria-falls" className="no-underline hover:text-bronze">
                  Victoria Falls
                </Link>
              </li>
              <li>
                <Link to="/victoria-falls#zambezi" className="no-underline hover:text-bronze">
                  The Zambezi
                </Link>
              </li>
              <li>
                <Link to="/plan" className="no-underline hover:text-bronze">
                  Travel Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/75">
              {siteSettings.phone ? (
                <li>
                  <a href={`tel:${siteSettings.phone}`} className="no-underline hover:text-bronze">
                    {siteSettings.phone}
                  </a>
                </li>
              ) : (
                <li>Phone available on enquiry</li>
              )}
              <li>
                <a href={whatsapp} className="no-underline hover:text-bronze">
                  WhatsApp
                </a>
              </li>
              {siteSettings.email ? (
                <li>
                  <a href={`mailto:${siteSettings.email}`} className="no-underline hover:text-bronze">
                    {siteSettings.email}
                  </a>
                </li>
              ) : (
                <li>Email available on enquiry</li>
              )}
              <li>{siteSettings.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-xs tracking-[0.14em] text-ivory/45 uppercase md:flex-row md:justify-between">
          <p>Victoria Falls, Zimbabwe</p>
          <p>Enquiries are not confirmed bookings.</p>
        </div>
      </div>
    </footer>
  )
}

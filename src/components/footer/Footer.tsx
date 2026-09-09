import { Link } from "react-router-dom"
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
    <footer className="bg-ink px-6 pt-20 pb-10 text-ivory md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-3 border-t border-ivory/10 pt-6 text-xs tracking-[0.14em] text-ivory/45 uppercase md:flex-row md:justify-between">
        <p>Victoria Falls, Zimbabwe</p>
        <p>Enquiries are not confirmed bookings.</p>
      </div>
    </footer>
  )
}

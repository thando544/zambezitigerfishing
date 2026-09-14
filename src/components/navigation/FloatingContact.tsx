import { Mail } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { defaultWhatsAppMessage, siteSettings } from "@/data/site"
import { whatsappLink } from "@/lib/utils"

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2m0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.23 8.22m4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.3.18-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.3.37-.44.13-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.75 2.67 4.23 3.74 1.49.64 2.07.7 2.81.59.43-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28" />
    </svg>
  )
}

export function FloatingContact() {
  const { pathname } = useLocation()
  if (pathname.startsWith("/admin")) return null

  const whatsapp = siteSettings.whatsapp
    ? whatsappLink(siteSettings.whatsapp, defaultWhatsAppMessage)
    : ""
  const emailHref = siteSettings.email ? `mailto:${siteSettings.email}` : "/contact"

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col items-center gap-3 md:right-6 md:bottom-6">
      {whatsapp ? (
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(18,16,14,0.28)] transition-transform hover:scale-105"
        >
          <WhatsAppIcon />
        </a>
      ) : null}
      {emailHref.startsWith("mailto:") ? (
        <a
          href={emailHref}
          aria-label="Email us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory shadow-[0_10px_28px_rgba(18,16,14,0.22)] transition-transform hover:scale-105"
        >
          <Mail size={20} strokeWidth={1.75} />
        </a>
      ) : (
        <Link
          to={emailHref}
          aria-label="Email us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory shadow-[0_10px_28px_rgba(18,16,14,0.22)] transition-transform hover:scale-105"
        >
          <Mail size={20} strokeWidth={1.75} />
        </Link>
      )}
    </div>
  )
}

import { siteSettings } from "@/data/site"
import { whatsappLink } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

export function StickyCta() {
  const whatsapp = siteSettings.whatsapp
    ? whatsappLink(siteSettings.whatsapp, "Hello — I would like to enquire about a Victoria Falls trip.")
    : "/book"

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bronze/25 bg-ink/95 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Button to="/book" variant="gold" className="w-full">
          Book
        </Button>
        <Button href={whatsapp} variant="outline" className="w-full" external={whatsapp.startsWith("http")}>
          WhatsApp
        </Button>
      </div>
    </div>
  )
}

import type { SiteSettings } from "@/types"

function envText(value: string | undefined, fallback = "") {
  const trimmed = value?.trim()
  return trimmed || fallback
}

export const siteSettings: SiteSettings = {
  fishingBrand: "Zambezi Tiger Adventures",
  stayBrand: "Mwenje Guest House",
  tagline: "Tiger fishing, riverside adventure and a comfortable stay in Victoria Falls.",
  locationLabel: "Victoria Falls, Zimbabwe",
  email: envText(import.meta.env.VITE_CONTACT_EMAIL),
  phone: envText(import.meta.env.VITE_CONTACT_PHONE, "+263 77 233 8412"),
  whatsapp: envText(import.meta.env.VITE_WHATSAPP_NUMBER, "263772338412"),
  address: "Victoria Falls, Zimbabwe",
}

export const defaultWhatsAppMessage =
  "Hello — I would like to enquire about fishing and/or staying at Mwenje Guest House in Victoria Falls."

export const contentNotes = {
  amenities:
    "Room facilities listed here are limited to details that can be corroborated from public listings. In-room extras should be confirmed before publishing.",
  photography:
    "Mwenje property photographs are the client's originals in /public/images/mwenje.",
  reviews: "Guest reviews are unpublished until permission and attribution are in place.",
}

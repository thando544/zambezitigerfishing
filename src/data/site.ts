import type { SiteSettings } from "@/types"

export const siteSettings: SiteSettings = {
  fishingBrand: "Zambezi Tiger Adventures",
  stayBrand: "Mwenje Guest House",
  tagline: "Tiger fishing, riverside adventure and a comfortable stay in Victoria Falls.",
  locationLabel: "Victoria Falls, Zimbabwe",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "",
  phone: import.meta.env.VITE_CONTACT_PHONE ?? "",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
  address: "Victoria Falls, Zimbabwe",
}

export const defaultWhatsAppMessage =
  "Hello — I would like to enquire about fishing and/or staying at Mwenje Guest House in Victoria Falls."

export const contentNotes = {
  amenities:
    "Room facilities listed here are limited to details that can be corroborated from public listings. In-room extras should be confirmed before publishing.",
  photography:
    "Mwenje property images are local placeholders until approved originals are supplied. Destination photographs are used for Victoria Falls and Zambezi atmosphere only.",
  reviews: "Guest reviews are unpublished until permission and attribution are in place.",
}

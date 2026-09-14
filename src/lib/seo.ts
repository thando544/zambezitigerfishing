import { experiences } from "@/data/experiences"
import { faqs } from "@/data/navigation"
import { rooms } from "@/data/rooms"
import { siteSettings } from "@/data/site"
import type { Experience, Faq, Room } from "@/types"

export const SITE_NAME = `${siteSettings.fishingBrand} & ${siteSettings.stayBrand}`
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.zambezitigeradventures.com").replace(/\/$/, "")

export const PLACE = {
  locality: "Victoria Falls",
  region: "Matabeleland North",
  country: "ZW",
  countryName: "Zimbabwe",
} as const

export const LISTINGS = {
  booking: "https://www.booking.com/hotel/zw/mwenje-guest-house.en-gb.html",
  vrbo: "https://www.vrbo.com/en-gb/p4190161vb",
  airbnb: "https://www.airbnb.com/rooms/1094112859831770168",
} as const

export type SeoConfig = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: "website" | "article"
  noIndex?: boolean
  titleTemplate?: boolean
  jsonLd?: unknown
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function pageTitle(title: string, useTemplate = true) {
  if (!useTemplate || title === SITE_NAME) return title
  return `${title} | ${SITE_NAME}`
}

export const defaultOgImage = "/images/fishing/guide-boat.jpg"
export const defaultOgImageAlt = "Guide at the helm of a Zambezi Tiger Adventures fishing boat on the Upper Zambezi"

const address = {
  "@type": "PostalAddress",
  addressLocality: PLACE.locality,
  addressRegion: PLACE.region,
  addressCountry: PLACE.country,
}

const stayAmenities = [
  { "@type": "LocationFeatureSpecification", name: "Swimming pool" },
  { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
  { "@type": "LocationFeatureSpecification", name: "Free television" },
  { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
  { "@type": "LocationFeatureSpecification", name: "Ensuite bathroom" },
  { "@type": "LocationFeatureSpecification", name: "Parking" },
]

export function fishingOrganization() {
  return {
    "@type": ["TouristInformationCenter", "SportsActivityLocation", "LocalBusiness"],
    "@id": absoluteUrl("/fishing#business"),
    name: siteSettings.fishingBrand,
    description:
      "Guided tiger fishing on the Upper Zambezi at Victoria Falls, Zimbabwe. Three-hour, half-day and full-day sport fishing trips. Rates are confirmed on enquiry.",
    url: absoluteUrl("/fishing"),
    image: absoluteUrl("/images/fishing/guide-boat.jpg"),
    areaServed: {
      "@type": "Place",
      name: "Upper Zambezi, Victoria Falls, Zimbabwe",
    },
    address,
    touristType: ["Anglers", "Sport fishing guests"],
    knowsAbout: ["Tiger fishing", "African tigerfish", "Upper Zambezi", "Victoria Falls sport fishing"],
  }
}

export function lodgingBusiness() {
  return {
    "@type": "LodgingBusiness",
    "@id": absoluteUrl("/stay#business"),
    name: siteSettings.stayBrand,
    description:
      "Mwenje Guest House in Victoria Falls, Zimbabwe. Six ensuite bedrooms sleeping 12: three kings, one double and two twins. Swimming pool, free Wi-Fi and television. Listed on major holiday-rental platforms. Rates are confirmed on enquiry.",
    url: absoluteUrl("/stay"),
    image: absoluteUrl("/images/mwenje/exterior.jpg"),
    numberOfRooms: 6,
    petsAllowed: false,
    amenityFeature: stayAmenities,
    address,
    knowsAbout: ["Mwenje Guest House", "Victoria Falls guest house", "Victoria Falls holiday rental"],
    sameAs: [LISTINGS.booking, LISTINGS.vrbo, LISTINGS.airbnb],
    checkinTime: "14:00",
    checkoutTime: "10:00",
  }
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Official site for guided tiger fishing on the Upper Zambezi and Mwenje Guest House stays in Victoria Falls, Zimbabwe.",
    inLanguage: "en-GB",
    publisher: { "@id": absoluteUrl("/#organization") },
  }
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    address,
    department: [{ "@id": absoluteUrl("/fishing#business") }, { "@id": absoluteUrl("/stay#business") }],
  }
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), fishingOrganization(), lodgingBusiness()],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.filter((item) => item.published).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function experienceJsonLd(experience: Experience) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: experience.name,
    description: experience.description,
    url: absoluteUrl(`/fishing/${experience.slug}`),
    image: absoluteUrl(experience.image),
    touristType: "Anglers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Guided tiger fishing on the Upper Zambezi, above Victoria Falls",
        },
      ],
    },
    provider: { "@id": absoluteUrl("/fishing#business") },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/book?interest=fishing&experience=${experience.slug}`),
      availability: "https://schema.org/PreOrder",
      description: "Current rates are confirmed on enquiry. Submitting the form does not confirm a booking.",
    },
  }
}

function bedType(room: Room) {
  if (room.bedConfiguration.includes("king")) return { numberOfBeds: 1, typeOfBed: "King" }
  if (room.bedConfiguration.includes("double")) return { numberOfBeds: 1, typeOfBed: "Double" }
  return { numberOfBeds: 2, typeOfBed: "Single" }
}

export function roomSeoTitle(room: Room) {
  const bed = bedType(room)
  const kind = bed.typeOfBed === "Single" ? "twin" : bed.typeOfBed.toLowerCase()
  return `${room.name} ${kind} ensuite | Mwenje Guest House Victoria Falls`
}

export function roomJsonLd(room: Room) {
  const bed = bedType(room)
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: `${room.name}, ${siteSettings.stayBrand}`,
    description: room.description,
    url: absoluteUrl(`/stay/rooms/${room.slug}`),
    image: room.gallery.map((photo) => absoluteUrl(photo.src)),
    occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests },
    bed: {
      "@type": "BedDetails",
      numberOfBeds: bed.numberOfBeds,
      typeOfBed: bed.typeOfBed,
    },
    amenityFeature: room.amenities
      .filter((item) => item.verified)
      .map((item) => ({ "@type": "LocationFeatureSpecification", name: item.label })),
    containedInPlace: { "@id": absoluteUrl("/stay#business") },
  }
}

export function fishingOfferCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Tiger fishing trips, Victoria Falls",
    itemListElement: experiences.filter((item) => item.published).map((experience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: experience.name,
        url: absoluteUrl(`/fishing/${experience.slug}`),
        description: experience.shortDescription,
      },
    })),
  }
}

export function roomsItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rooms at Mwenje Guest House",
    numberOfItems: rooms.length,
    itemListElement: rooms.map((room, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/stay/rooms/${room.slug}`),
      name: `${room.name} — ${room.bedConfiguration}`,
    })),
  }
}

export function fishingFaqs() {
  return faqs.filter((item) => item.published && (item.category === "fishing" || item.category === "planning"))
}

export function stayFaqs() {
  return faqs.filter(
    (item) => item.published && (item.category === "stay" || item.id === "faq-combine" || item.id === "faq-booking"),
  )
}

export const jsonLdGraph = homeJsonLd()

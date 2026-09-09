import { siteSettings } from "@/data/site"

export const SITE_NAME = `${siteSettings.fishingBrand} & ${siteSettings.stayBrand}`
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.zambezitigeradventures.com").replace(/\/$/, "")

export type SeoConfig = {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
  noIndex?: boolean
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function pageTitle(title: string) {
  if (title === SITE_NAME) return title
  return `${title} | ${SITE_NAME}`
}

export const defaultOgImage = "/images/destination/victoria-falls.jpg"

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TouristInformationCenter", "SportsActivityLocation"],
      name: siteSettings.fishingBrand,
      description:
        "Guided tiger fishing and sport fishing experiences on the Upper Zambezi at Victoria Falls, Zimbabwe.",
      areaServed: "Victoria Falls, Zimbabwe",
      url: absoluteUrl("/fishing"),
    },
    {
      "@type": "LodgingBusiness",
      name: siteSettings.stayBrand,
      description:
        "Ensuite guest house in Victoria Falls with six rooms, a swimming pool, garden and breakfast.",
      numberOfRooms: 6,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Swimming pool" },
        { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
        { "@type": "LocationFeatureSpecification", name: "Parking" },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Victoria Falls",
        addressCountry: "ZW",
      },
      url: absoluteUrl("/stay"),
    },
  ],
}

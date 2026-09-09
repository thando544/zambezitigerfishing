export const BookingStatus = {
  NEW: "NEW",
  CONTACTED: "CONTACTED",
  QUOTED: "QUOTED",
  CONFIRMED: "CONFIRMED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  DECLINED: "DECLINED",
} as const

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

export const EnquiryType = {
  FISHING: "fishing",
  ACCOMMODATION: "accommodation",
  COMBINED: "combined",
} as const

export type EnquiryType = (typeof EnquiryType)[keyof typeof EnquiryType]

export type Experience = {
  id: string
  slug: string
  name: string
  duration: string
  shortDescription: string
  description: string
  startTime: string
  guestCapacity: string
  inclusions: string[]
  image: string
  published: boolean
}

export type RoomAmenity = {
  key: string
  label: string
  verified: boolean
}

export type Room = {
  id: string
  slug: string
  name: string
  bedConfiguration: string
  bathroom: string
  maxGuests: number
  description: string
  image: string
  imageFallback?: string
  amenities: RoomAmenity[]
  countOnProperty: number
  published: boolean
}

export type GalleryCategory = "fishing" | "zambezi" | "mwenje" | "victoria-falls"

export type GalleryItem = {
  id: string
  src: string
  fallbackSrc?: string
  alt: string
  category: GalleryCategory
  caption?: string
  placeholder?: boolean
  published: boolean
}

export type Review = {
  id: string
  guestName: string
  country: string
  rating: number
  body: string
  date: string
  source: string
  published: boolean
}

export type Faq = {
  id: string
  question: string
  answer: string
  category: "fishing" | "stay" | "planning"
  published: boolean
}

export type SiteSettings = {
  fishingBrand: string
  stayBrand: string
  tagline: string
  locationLabel: string
  email: string
  phone: string
  whatsapp: string
  address: string
  instagram?: string
  facebook?: string
  checkIn?: string
  checkOut?: string
}

export type EnquiryInput = {
  type: EnquiryType
  experienceId: string
  preferredDate: string
  preferredStartTime: string
  guestCount: number
  experienceLevel: string
  checkIn: string
  checkOut: string
  roomPreference: string
  specialRequests: string
  customerName: string
  email: string
  phone: string
  country: string
  consent: boolean
}

export type BookingRecord = {
  id?: string
  reference: string
  type: EnquiryType
  experience_id: string | null
  room_id: string | null
  booking_date: string | null
  preferred_start_time: string | null
  check_in: string | null
  check_out: string | null
  guest_count: number
  customer_name: string
  email: string
  phone: string
  country: string
  experience_level: string | null
  special_requests: string | null
  status: BookingStatus
  admin_notes: string | null
}

export type NavChild = {
  label: string
  to: string
}

export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

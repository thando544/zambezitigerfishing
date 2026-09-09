import { experiences as staticExperiences } from "@/data/experiences"
import { faqs as staticFaqs } from "@/data/navigation"
import { galleryItems as staticGallery } from "@/data/gallery"
import { reviews as staticReviews } from "@/data/navigation"
import { rooms as staticRooms } from "@/data/rooms"
import { siteSettings as staticSettings } from "@/data/site"
import { getSupabase } from "@/lib/supabase"
import type { Experience, Faq, GalleryItem, Review, Room, SiteSettings } from "@/types"

export async function getExperiences(): Promise<Experience[]> {
  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
    if (!error && data && data.length > 0) {
      return data.map((row) => ({
        id: row.id,
        slug: row.slug,
        name: row.name,
        duration: row.duration ?? "",
        shortDescription: row.short_description ?? "",
        description: row.description ?? "",
        startTime: row.start_time ?? "",
        guestCapacity: row.guest_capacity ?? "",
        inclusions: row.inclusions ?? [],
        image: row.image ?? "/images/fishing/boat.jpg",
        published: Boolean(row.published),
      }))
    }
  }
  return staticExperiences.filter((item) => item.published)
}

export async function getRooms(): Promise<Room[]> {
  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase
      .from("rooms")
      .select("*, room_amenities(*)")
      .eq("published", true)
    if (!error && data && data.length > 0) {
      return data.map((row) => ({
        id: row.id,
        slug: row.slug,
        name: row.name,
        bedConfiguration: row.bed_configuration ?? "",
        bathroom: row.bathroom ?? "En suite bathroom",
        maxGuests: row.max_guests ?? 2,
        description: row.description ?? "",
        image: row.image ?? "",
        imageFallback: row.image_fallback ?? undefined,
        countOnProperty: row.count_on_property ?? 1,
        published: Boolean(row.published),
        amenities: (row.room_amenities ?? []).map((amenity: { key: string; label: string; verified: boolean }) => ({
          key: amenity.key,
          label: amenity.label,
          verified: Boolean(amenity.verified),
        })),
      }))
    }
  }
  return staticRooms.filter((item) => item.published)
}

export async function getGallery(): Promise<GalleryItem[]> {
  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase
      .from("gallery_items")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
    if (!error && data && data.length > 0) {
      return data.map((row) => ({
        id: row.id,
        src: row.src,
        fallbackSrc: row.fallback_src ?? undefined,
        alt: row.alt,
        category: row.category,
        caption: row.caption ?? undefined,
        placeholder: Boolean(row.placeholder),
        published: Boolean(row.published),
      }))
    }
  }
  return staticGallery.filter((item) => item.published)
}

export async function getReviews(): Promise<Review[]> {
  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("published", true)
      .order("date", { ascending: false })
    if (!error && data) {
      return data.map((row) => ({
        id: row.id,
        guestName: row.guest_name,
        country: row.country ?? "",
        rating: row.rating ?? 0,
        body: row.body,
        date: row.date,
        source: row.source ?? "",
        published: Boolean(row.published),
      }))
    }
  }
  return staticReviews.filter((item) => item.published)
}

export async function getFaqs(): Promise<Faq[]> {
  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase.from("faqs").select("*").eq("published", true)
    if (!error && data && data.length > 0) {
      return data.map((row) => ({
        id: row.id,
        question: row.question,
        answer: row.answer,
        category: row.category,
        published: Boolean(row.published),
      }))
    }
  }
  return staticFaqs.filter((item) => item.published)
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase.from("site_settings").select("*").limit(1).maybeSingle()
    if (!error && data) {
      return {
        fishingBrand: data.fishing_brand ?? staticSettings.fishingBrand,
        stayBrand: data.stay_brand ?? staticSettings.stayBrand,
        tagline: data.tagline ?? staticSettings.tagline,
        locationLabel: data.location_label ?? staticSettings.locationLabel,
        email: data.email ?? staticSettings.email,
        phone: data.phone ?? staticSettings.phone,
        whatsapp: data.whatsapp ?? staticSettings.whatsapp,
        address: data.address ?? staticSettings.address,
        instagram: data.instagram ?? undefined,
        facebook: data.facebook ?? undefined,
        checkIn: data.check_in ?? undefined,
        checkOut: data.check_out ?? undefined,
      }
    }
  }
  return staticSettings
}

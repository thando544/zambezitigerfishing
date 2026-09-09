import { getSupabase, isSupabaseConfigured } from "@/lib/supabase"
import { generateEnquiryReference } from "@/lib/utils"
import { BookingStatus, type BookingRecord, type EnquiryInput } from "@/types"

export type EnquiryResult =
  | { ok: true; reference: string }
  | { ok: false; message: string; reference: string }

function toRow(input: EnquiryInput, reference: string): BookingRecord {
  const fishing = input.type === "fishing" || input.type === "combined"
  const stay = input.type === "accommodation" || input.type === "combined"

  return {
    reference,
    type: input.type,
    experience_id: fishing && input.experienceId ? input.experienceId : null,
    room_id: stay && input.roomPreference ? input.roomPreference : null,
    booking_date: fishing && input.preferredDate ? input.preferredDate : null,
    preferred_start_time: fishing && input.preferredStartTime ? input.preferredStartTime : null,
    check_in: stay && input.checkIn ? input.checkIn : null,
    check_out: stay && input.checkOut ? input.checkOut : null,
    guest_count: input.guestCount,
    customer_name: input.customerName.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    country: input.country.trim(),
    experience_level: fishing ? input.experienceLevel || null : null,
    special_requests: input.specialRequests.trim() || null,
    status: BookingStatus.NEW,
    admin_notes: null,
  }
}

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const reference = generateEnquiryReference()

  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      reference,
      message:
        "Online enquiries are not connected yet. Please WhatsApp or email us with your dates and we will reply directly.",
    }
  }

  const supabase = getSupabase()
  if (!supabase) {
    return {
      ok: false,
      reference,
      message: "The enquiry service is unavailable. Please contact us by WhatsApp or email.",
    }
  }

  const { error } = await supabase.from("bookings").insert(toRow(input, reference))
  if (error) {
    return {
      ok: false,
      reference,
      message: "We could not save this enquiry. Please WhatsApp or email us and we will take it from there.",
    }
  }

  return { ok: true, reference }
}

export async function submitContactMessage(input: {
  name: string
  email: string
  phone: string
  message: string
}) {
  if (!isSupabaseConfigured()) {
    return { ok: false as const, message: "The contact form is not connected yet. Please use WhatsApp or email." }
  }
  const supabase = getSupabase()
  if (!supabase) {
    return { ok: false as const, message: "Unable to send your message. Please use WhatsApp or email." }
  }
  const { error } = await supabase.from("contact_messages").insert({
    name: input.name,
    email: input.email,
    phone: input.phone,
    message: input.message,
    status: "NEW",
  })
  if (error) {
    return { ok: false as const, message: "We could not send your message. Please WhatsApp or email us." }
  }
  return { ok: true as const }
}

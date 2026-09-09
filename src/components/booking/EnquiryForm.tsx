import { useMemo, useState, type FormEvent } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { experiences } from "@/data/experiences"
import { rooms } from "@/data/rooms"
import { submitEnquiry } from "@/lib/enquiry"
import { Button } from "@/components/ui/Button"
import { EnquiryType, type EnquiryInput } from "@/types"
import { cn } from "@/lib/utils"

const empty: EnquiryInput = {
  type: EnquiryType.FISHING,
  experienceId: "",
  preferredDate: "",
  preferredStartTime: "",
  guestCount: 2,
  experienceLevel: "",
  checkIn: "",
  checkOut: "",
  roomPreference: "",
  specialRequests: "",
  customerName: "",
  email: "",
  phone: "",
  country: "",
  consent: false,
}

const interests: { id: EnquiryInput["type"]; label: string; copy: string }[] = [
  { id: "fishing", label: "Fishing", copy: "Tiger fishing on the Upper Zambezi." },
  { id: "accommodation", label: "Accommodation", copy: "A stay at Mwenje Guest House." },
  { id: "combined", label: "Fishing + Accommodation", copy: "Stay and fish from the same enquiry." },
]

export function EnquiryForm() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const initialType = interests.some((item) => item.id === params.get("interest"))
    ? (params.get("interest") as EnquiryInput["type"])
    : EnquiryType.FISHING
  const experienceFromQuery = experiences.find((item) => item.slug === params.get("experience"))
  const roomFromQuery = rooms.find((item) => item.slug === params.get("room"))

  const [form, setForm] = useState<EnquiryInput>({
    ...empty,
    type: initialType,
    experienceId: experienceFromQuery?.id ?? "",
    roomPreference: roomFromQuery?.id ?? "",
  })
  const [pending, setPending] = useState(false)

  const fishing = form.type === "fishing" || form.type === "combined"
  const stay = form.type === "accommodation" || form.type === "combined"

  const canSubmit = useMemo(() => {
    if (!form.customerName || !form.email || !form.phone || !form.consent) return false
    if (form.guestCount < 1) return false
    return true
  }, [form])

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setPending(true)
    const result = await submitEnquiry(form)
    setPending(false)
    if (result.ok) {
      navigate(`/book/confirmation?ref=${encodeURIComponent(result.reference)}&status=received`)
      return
    }
    navigate(
      `/book/confirmation?ref=${encodeURIComponent(result.reference)}&status=manual&reason=${encodeURIComponent(result.message)}`,
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <fieldset>
        <legend className="eyebrow">What are you interested in?</legend>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {interests.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn(
                "border px-5 py-6 text-left transition-colors",
                form.type === item.id ? "border-bronze bg-ink text-ivory" : "border-bronze/25 bg-paper hover:border-bronze",
              )}
              onClick={() => update("type", item.id)}
              aria-pressed={form.type === item.id}
            >
              <span className="display block text-2xl">{item.label}</span>
              <span className="mt-2 block text-sm opacity-80">{item.copy}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {fishing ? (
        <fieldset className="grid gap-5 md:grid-cols-2">
          <legend className="eyebrow mb-4 w-full md:col-span-2">Fishing</legend>
          <label className="block text-sm">
            Experience
            <select
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.experienceId}
              onChange={(event) => update("experienceId", event.target.value)}
            >
              <option value="">Select an experience</option>
              {experiences.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            Preferred date
            <input
              type="date"
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.preferredDate}
              onChange={(event) => update("preferredDate", event.target.value)}
            />
          </label>
          <label className="block text-sm">
            Preferred start time
            <input
              type="time"
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.preferredStartTime}
              onChange={(event) => update("preferredStartTime", event.target.value)}
            />
          </label>
          <label className="block text-sm">
            Fishing experience
            <select
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.experienceLevel}
              onChange={(event) => update("experienceLevel", event.target.value)}
            >
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Some experience</option>
              <option value="experienced">Experienced</option>
            </select>
          </label>
        </fieldset>
      ) : null}

      {stay ? (
        <fieldset className="grid gap-5 md:grid-cols-2">
          <legend className="eyebrow mb-4 w-full md:col-span-2">Accommodation</legend>
          <label className="block text-sm">
            Check-in
            <input
              type="date"
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.checkIn}
              onChange={(event) => update("checkIn", event.target.value)}
            />
          </label>
          <label className="block text-sm">
            Check-out
            <input
              type="date"
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.checkOut}
              onChange={(event) => update("checkOut", event.target.value)}
            />
          </label>
          <label className="block text-sm md:col-span-2">
            Room preference
            <select
              className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
              value={form.roomPreference}
              onChange={(event) => update("roomPreference", event.target.value)}
            >
              <option value="">No preference</option>
              {rooms.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      ) : null}

      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="eyebrow mb-4 w-full md:col-span-2">Your details</legend>
        <label className="block text-sm">
          Number of guests
          <input
            type="number"
            min={1}
            max={12}
            required
            className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
            value={form.guestCount}
            onChange={(event) => update("guestCount", Number(event.target.value))}
          />
        </label>
        <label className="block text-sm">
          Name
          <input
            required
            className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
            value={form.customerName}
            onChange={(event) => update("customerName", event.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            type="email"
            required
            className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="block text-sm">
          Phone / WhatsApp
          <input
            type="tel"
            required
            className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
          />
        </label>
        <label className="block text-sm md:col-span-2">
          Country
          <input
            className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
            value={form.country}
            onChange={(event) => update("country", event.target.value)}
            autoComplete="country-name"
          />
        </label>
        <label className="block text-sm md:col-span-2">
          Special requests
          <textarea
            rows={4}
            className="mt-2 w-full border border-bronze/25 bg-ivory px-3 py-3"
            value={form.specialRequests}
            onChange={(event) => update("specialRequests", event.target.value)}
          />
        </label>
      </fieldset>

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          className="mt-1"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
          required
        />
        <span>
          I agree to be contacted about this enquiry. Submitting this form creates an enquiry only — it does not confirm a
          booking.
        </span>
      </label>

      <Button type="submit" variant="forest" size="lg" disabled={!canSubmit || pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  )
}

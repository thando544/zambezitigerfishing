import type { Review } from "@/types"
import { formatDate } from "@/lib/utils"

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="border-t border-bronze/25 pt-6">
      <p className="text-sm leading-relaxed text-charcoal/85">“{review.body}”</p>
      <p className="mt-4 font-sans text-xs tracking-[0.16em] uppercase">
        {review.guestName}
        {review.country ? ` · ${review.country}` : ""}
      </p>
      <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-mist uppercase">
        {review.rating ? `${review.rating} / 5` : null}
        {review.date ? ` · ${formatDate(review.date)}` : null}
        {review.source ? ` · ${review.source}` : null}
      </p>
    </article>
  )
}

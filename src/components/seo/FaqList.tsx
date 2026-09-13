import type { Faq } from "@/types"

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <dl className="space-y-8">
      {items.map((item) => (
        <div key={item.id} className="border-t border-bronze/20 pt-6">
          <dt className="display text-2xl md:text-3xl">{item.question}</dt>
          <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/80">{item.answer}</dd>
        </div>
      ))}
    </dl>
  )
}

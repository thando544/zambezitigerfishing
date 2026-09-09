import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function generateEnquiryReference(now = new Date()) {
  const year = now.getFullYear()
  const token = crypto
    .getRandomValues(new Uint8Array(3))
    .reduce((acc, n) => acc + n.toString(36).padStart(2, "0"), "")
    .slice(0, 4)
    .toUpperCase()
  return `ZTA-${year}-${token}`
}

export function whatsappLink(phone: string, message: string) {
  const digits = phone.replace(/[^\d]/g, "")
  if (!digits) return "/book"
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")
}

export function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

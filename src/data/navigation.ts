import type { Faq, NavItem, Review } from "@/types"

export const reviews: Review[] = []

export const faqs: Faq[] = [
  {
    id: "faq-experience",
    question: "Do I need fishing experience?",
    answer:
      "Tell us your level when you enquire. The river and the fish are serious; the trip can be shaped around beginners or experienced anglers. We do not publish unverified skill requirements here.",
    category: "fishing",
    published: true,
  },
  {
    id: "faq-rates",
    question: "What does a fishing trip cost?",
    answer:
      "Rates are not listed on this site. Enquire for current rates, what is included, and any park or permit fees that may apply.",
    category: "fishing",
    published: true,
  },
  {
    id: "faq-bring",
    question: "What should I bring on the water?",
    answer:
      "Plan for sun, glare and changing temperature: a hat, polarised sunglasses, sun protection, a long-sleeved shirt, and layers for cool mornings. Shoes suitable for a boat. Confirm whether tackle is provided when you enquire. Bring a camera if you want one — wildlife along the banks is possible, never promised.",
    category: "fishing",
    published: true,
  },
  {
    id: "faq-season",
    question: "When is the best time to fish?",
    answer:
      "Tiger fishing is practised on the Upper Zambezi through the year. Water levels and conditions change with the seasons. Ask us for current river advice when you plan your dates rather than relying on a fixed calendar published here.",
    category: "planning",
    published: true,
  },
  {
    id: "faq-rooms",
    question: "How many guests can stay at Mwenje?",
    answer:
      "Six ensuite rooms — four double and two twin — with capacity for approximately twelve guests. Confirm the exact arrangement for your dates.",
    category: "stay",
    published: true,
  },
  {
    id: "faq-combine",
    question: "Can I stay at Mwenje and fish the Zambezi?",
    answer:
      "Yes. That pairing is the point of the two offerings. Use the enquiry form and choose Fishing + Accommodation so both sides of the trip are planned together.",
    category: "planning",
    published: true,
  },
  {
    id: "faq-booking",
    question: "If I submit the form, is my trip confirmed?",
    answer:
      "No. The form creates an enquiry. We respond with availability, rates and next steps. Nothing is confirmed until it is agreed in writing.",
    category: "planning",
    published: true,
  },
]

export const navItems: NavItem[] = [
  {
    label: "Experiences",
    to: "/fishing",
    children: [
      { label: "Fishing", to: "/fishing" },
      { label: "3-Hour Fishing", to: "/fishing/3-hour-fishing" },
      { label: "Half-Day Fishing", to: "/fishing/half-day-fishing" },
      { label: "Full-Day Fishing", to: "/fishing/full-day-fishing" },
    ],
  },
  {
    label: "Stay",
    to: "/stay",
    children: [
      { label: "Mwenje Guest House", to: "/stay" },
      { label: "Rooms", to: "/stay/rooms" },
      { label: "Facilities", to: "/stay/facilities" },
      { label: "Gallery", to: "/gallery?cat=mwenje" },
    ],
  },
  { label: "Victoria Falls", to: "/victoria-falls" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

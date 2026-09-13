import type { Faq, NavItem, Review } from "@/types"

export const reviews: Review[] = []

export const faqs: Faq[] = [
  {
    id: "faq-what-is-tiger",
    question: "What is tiger fishing in Victoria Falls?",
    answer:
      "Tiger fishing here means guided sport fishing for African tigerfish on the Upper Zambezi, the stretch of river above Victoria Falls. The tigerfish is a serious freshwater predator. What you catch on a given day depends on the river, not a promise.",
    category: "fishing",
    published: true,
  },
  {
    id: "faq-where-fish",
    question: "Where do you go tiger fishing from Victoria Falls?",
    answer:
      "On the Upper Zambezi, the stretch of river above the Falls. Meeting point, launch and transfers are confirmed when you enquire.",
    category: "fishing",
    published: true,
  },
  {
    id: "faq-trips",
    question: "What tiger fishing trips do you run?",
    answer:
      "Three guided trips: 3-hour, half-day and full-day tiger fishing on the Upper Zambezi. Rates, start times and boat capacity are confirmed on enquiry.",
    category: "fishing",
    published: true,
  },
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
    id: "faq-checkin",
    question: "What are check-in and check-out times at Mwenje Guest House?",
    answer:
      "Public listings give check-in at 14:00 and check-out at 10:00. Confirm both when you enquire — this is not a locked booking rule on this site.",
    category: "stay",
    published: true,
  },
  {
    id: "faq-where-stay",
    question: "Where is Mwenje Guest House?",
    answer:
      "Victoria Falls, Zimbabwe. Public listings place the house in town, near Victoria Falls National Park. We will not invent a street address or walking times. Ask us for current access notes.",
    category: "stay",
    published: true,
  },
  {
    id: "faq-listings",
    question: "Is Mwenje Guest House listed on holiday-rental platforms?",
    answer:
      "Yes. The house is listed on major holiday-rental platforms including Vrbo and Airbnb. You can also enquire here for a direct stay. A listing is not a confirmed booking on this site.",
    category: "stay",
    published: true,
  },
  {
    id: "faq-pool-wifi",
    question: "Does Mwenje Guest House have a pool and Wi-Fi?",
    answer:
      "Yes. There is a swimming pool on the property, and free Wi-Fi and television in every room. Rooms are ensuite and air-conditioned.",
    category: "stay",
    published: true,
  },
  {
    id: "faq-rooms",
    question: "How many guests can stay at Mwenje?",
    answer:
      "Six bedrooms, sleeping 12: three kings, one double and two twins. Each room has its own gallery. Free Wi-Fi and television in every room. Confirm the exact room for your dates.",
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
      { label: "3-Hour Tiger Fishing", to: "/fishing/3-hour-fishing" },
      { label: "Half-Day Tiger Fishing", to: "/fishing/half-day-fishing" },
      { label: "Full-Day Tiger Fishing", to: "/fishing/full-day-fishing" },
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
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

import type { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    id: "exp-3-hour",
    slug: "3-hour-fishing",
    name: "3-Hour Fishing",
    duration: "3 hours",
    shortDescription:
      "A focused session on the Upper Zambezi — time on the water without committing the whole day.",
    description:
      "A three-hour guided fishing trip on the Upper Zambezi, above Victoria Falls. Designed for guests who want a serious introduction to tiger fishing, or a shorter window on the river between other plans. Start times, meeting point and what is provided on the boat are confirmed when you enquire.",
    startTime: "Start times are confirmed on enquiry. Morning and afternoon windows may be available.",
    guestCapacity: "Boat capacity is confirmed when you enquire.",
    inclusions: [
      "Guided sport fishing on the Upper Zambezi",
      "Further inclusions, transfers and equipment are confirmed on enquiry",
    ],
    image: "/images/fishing/cast.jpg",
    published: true,
  },
  {
    id: "exp-half-day",
    slug: "half-day-fishing",
    name: "Half-Day Fishing",
    duration: "Half day",
    shortDescription:
      "More hours on the river to work the channels, the light and the conditions.",
    description:
      "A half-day guided fishing experience on the Upper Zambezi. Extra time on the water gives more room to adjust to the river and to fish with the conditions rather than against the clock. Exact duration, departure time and inclusions are confirmed when you enquire — we do not list unverified details here.",
    startTime: "Preferred start time can be requested. Availability is confirmed on enquiry.",
    guestCapacity: "Boat capacity is confirmed when you enquire.",
    inclusions: [
      "Guided sport fishing on the Upper Zambezi",
      "Further inclusions, transfers and equipment are confirmed on enquiry",
    ],
    image: "/images/fishing/boat.jpg",
    published: true,
  },
  {
    id: "exp-full-day",
    slug: "full-day-fishing",
    name: "Full-Day Fishing",
    duration: "Full day",
    shortDescription:
      "A full day given to the Zambezi — the most complete way to fish this stretch of river.",
    description:
      "A full-day guided fishing trip on the Upper Zambezi. This is the trip for guests who want the river, not a snapshot of it. Wildlife may be seen along the banks; sightings are never guaranteed. Lunch, equipment and timing are confirmed when you enquire.",
    startTime: "A morning departure is typical for a full day. The exact time is confirmed on enquiry.",
    guestCapacity: "Boat capacity is confirmed when you enquire.",
    inclusions: [
      "Guided sport fishing on the Upper Zambezi",
      "Further inclusions, transfers, meals and equipment are confirmed on enquiry",
    ],
    image: "/images/fishing/water.jpg",
    published: true,
  },
]

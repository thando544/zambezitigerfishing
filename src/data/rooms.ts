import type { Room } from "@/types"

export const rooms: Room[] = [
  {
    id: "room-double",
    slug: "double-ensuite",
    name: "Double Ensuite",
    bedConfiguration: "Double bed",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 4,
    description:
      "A private ensuite room with a double bed. Public listings describe four double ensuite rooms on the property. Air conditioning and Wi-Fi are listed at property level. Confirm in-room facilities and configuration when you enquire.",
    image: "/images/mwenje/room-double.webp",
    imageFallback: "/images/mwenje/room-double.svg",
    amenities: [
      { key: "ensuite", label: "En suite bathroom", verified: true },
      { key: "ac", label: "Air conditioning", verified: true },
      { key: "wifi", label: "Wi-Fi", verified: true },
      { key: "tv", label: "Television", verified: false },
      { key: "tea", label: "Tea and coffee", verified: false },
      { key: "fridge", label: "Refrigerator", verified: false },
    ],
    published: true,
  },
  {
    id: "room-twin",
    slug: "twin-ensuite",
    name: "Twin Ensuite",
    bedConfiguration: "Twin beds",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 2,
    description:
      "A private ensuite room with twin beds — suited to friends or family who prefer separate beds. Public listings describe two twin ensuite rooms. Confirm the current layout when you enquire.",
    image: "/images/mwenje/room-twin.webp",
    imageFallback: "/images/mwenje/room-twin.svg",
    amenities: [
      { key: "ensuite", label: "En suite bathroom", verified: true },
      { key: "ac", label: "Air conditioning", verified: true },
      { key: "wifi", label: "Wi-Fi", verified: true },
      { key: "tv", label: "Television", verified: false },
      { key: "tea", label: "Tea and coffee", verified: false },
      { key: "fridge", label: "Refrigerator", verified: false },
    ],
    published: true,
  },
]

export const propertyFacts = [
  { value: "6", label: "Ensuite rooms" },
  { value: "12", label: "Guest capacity" },
  { value: "Pool", label: "Swimming pool" },
  { value: "Breakfast", label: "Available" },
  { value: "Wi-Fi", label: "Free Wi-Fi" },
  { value: "Parking", label: "Private parking" },
] as const

export const propertySpaces = [
  {
    title: "Garden",
    copy: "Outdoor garden space on the property.",
    image: "/images/mwenje/garden.webp",
    fallback: "/images/mwenje/garden.svg",
  },
  {
    title: "Swimming pool",
    copy: "A swimming pool for use during your stay.",
    image: "/images/mwenje/pool.webp",
    fallback: "/images/mwenje/pool.svg",
  },
  {
    title: "Lounge",
    copy: "A shared lounge for slowing down between days on the river or at the Falls.",
    image: "/images/mwenje/lounge.webp",
    fallback: "/images/mwenje/lounge.svg",
  },
  {
    title: "Dining",
    copy: "A dining area, with breakfast available. Kitchen facilities are listed on the property.",
    image: "/images/mwenje/dining.webp",
    fallback: "/images/mwenje/dining.svg",
  },
] as const

import type { Room } from "@/types"

const sharedAmenities = [
  { key: "ensuite", label: "En suite bathroom", verified: true },
  { key: "ac", label: "Air conditioning", verified: true },
  { key: "wifi", label: "Free Wi-Fi", verified: true },
  { key: "tv", label: "Free television", verified: true },
] as const

export const rooms: Room[] = [
  {
    id: "room-double",
    slug: "double-ensuite",
    name: "Double Ensuite",
    bedConfiguration: "Double bed — for one guest or a couple",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 5,
    description:
      "A private ensuite room with a double bed, suited to a single traveller or a couple. Five rooms of this type. Free Wi-Fi and a television in every room.",
    image: "/images/mwenje/room-double-2.jpg",
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-twin",
    slug: "twin-ensuite",
    name: "Twin Ensuite",
    bedConfiguration: "Two single beds",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description:
      "A private ensuite room with two single beds. One room of this type on the property. Free Wi-Fi and a television, as in every room at Mwenje.",
    image: "/images/mwenje/room-twin-1.jpg",
    amenities: [...sharedAmenities],
    published: true,
  },
]

export const propertyFacts = [
  { value: "6", label: "Ensuite rooms" },
  { value: "5", label: "For singles or couples" },
  { value: "1", label: "Twin room" },
  { value: "Wi-Fi", label: "Free in every room" },
  { value: "TV", label: "Free in every room" },
  { value: "Pool", label: "Swimming pool" },
] as const

export const propertySpaces = [
  {
    title: "Double rooms",
    copy: "Five ensuite rooms with a double bed — for one guest or a couple.",
    image: "/images/mwenje/room-double-2.jpg",
  },
  {
    title: "Twin room",
    copy: "One ensuite room with two single beds.",
    image: "/images/mwenje/room-twin-1.jpg",
  },
  {
    title: "Ensuite bathrooms",
    copy: "Private bathrooms with bath or shower.",
    image: "/images/mwenje/bathroom-bath.jpg",
  },
  {
    title: "In-room comfort",
    copy: "Free Wi-Fi and television in every room.",
    image: "/images/mwenje/room-tv.jpg",
  },
] as const

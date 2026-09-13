import type { Room, RoomPhoto } from "@/types"

const sharedAmenities = [
  { key: "ensuite", label: "En suite bathroom", verified: true },
  { key: "ac", label: "Air conditioning", verified: true },
  { key: "wifi", label: "Free Wi-Fi", verified: true },
  { key: "tv", label: "Free television", verified: true },
] as const

function photo(src: string, alt: string, caption: string): RoomPhoto {
  return { src, alt, caption }
}

const ensuiteNotes = {
  vanity: photo(
    "/images/mwenje/bathroom-vanity.jpg",
    "Ensuite bathroom vanity at Mwenje Guest House",
    "Ensuite bathroom",
  ),
  shower: photo(
    "/images/mwenje/bathroom-shower.jpg",
    "Glass-enclosed shower in an ensuite bathroom at Mwenje Guest House",
    "Ensuite shower",
  ),
  bath: photo(
    "/images/mwenje/bathroom-bath.jpg",
    "Clawfoot bath in an ensuite bathroom at Mwenje Guest House",
    "Ensuite bath",
  ),
}

const sharedSpaces = {
  tv: photo("/images/mwenje/room-tv.jpg", "Wall-mounted television in a room at Mwenje Guest House", "Television"),
  desk: photo("/images/mwenje/room-desk.jpg", "In-room desk at Mwenje Guest House", "Desk"),
  sitting: photo(
    "/images/mwenje/room-sitting.jpg",
    "Sitting corner with a television and desk at Mwenje Guest House",
    "Sitting corner",
  ),
  armchair: photo(
    "/images/mwenje/room-armchair.jpg",
    "Armchair and open wardrobe in a room at Mwenje Guest House",
    "In-room seating",
  ),
  pool: photo("/images/mwenje/pool.jpg", "Swimming pool at Mwenje Guest House", "Swimming pool"),
  terrace: photo(
    "/images/mwenje/pool-terrace.jpg",
    "Covered terrace and loungers beside the pool at Mwenje Guest House",
    "Pool terrace",
  ),
}

const doubleCopy =
  "A private ensuite room with a double bed, for one guest or a couple. Free Wi-Fi, television and air conditioning. Ensuite bathrooms on the property have a bath or a shower — we confirm which with the room."

const unmatchedNote =
  " A dedicated bedroom photograph for this numbered room has not yet been matched. The gallery shows in-room spaces and the ensuite and garden areas that come with a stay at Mwenje."

export const rooms: Room[] = [
  {
    id: "room-1",
    slug: "room-1",
    name: "Room 1",
    bedConfiguration: "Double bed — for one guest or a couple",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `${doubleCopy} This room is shown with a carved wooden headboard.`,
    image: "/images/mwenje/room-double-2.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-double-2.jpg",
        "Room 1 at Mwenje Guest House, a double ensuite with a carved wooden headboard",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-double-5.jpg",
        "Room 1 double bed, carved headboard and sitting bench at Mwenje Guest House",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-double-4.jpg",
        "Room 1 double bed and carved headboard at Mwenje Guest House",
        "Bedroom",
      ),
      ensuiteNotes.vanity,
      sharedSpaces.tv,
      sharedSpaces.pool,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-2",
    slug: "room-2",
    name: "Room 2",
    bedConfiguration: "Double bed — for one guest or a couple",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `${doubleCopy} This room is shown with an oak slat headboard.`,
    image: "/images/mwenje/room-double-oak.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-double-oak.jpg",
        "Room 2 at Mwenje Guest House, a double ensuite with an oak slat headboard",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-double-3.jpg",
        "Room 2 double bed, oak headboard and sitting bench at Mwenje Guest House",
        "Bedroom",
      ),
      ensuiteNotes.bath,
      sharedSpaces.sitting,
      sharedSpaces.terrace,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-3",
    slug: "room-3",
    name: "Room 3",
    bedConfiguration: "Double bed — for one guest or a couple",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `${doubleCopy} This room is shown with a navy runner and a curved wooden headboard.`,
    image: "/images/mwenje/room-double-1.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-double-1.jpg",
        "Room 3 at Mwenje Guest House, a double ensuite with a navy runner",
        "Bedroom",
      ),
      ensuiteNotes.shower,
      sharedSpaces.desk,
      sharedSpaces.pool,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-4",
    slug: "room-4",
    name: "Room 4",
    bedConfiguration: "Double bed — for one guest or a couple",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `${doubleCopy}${unmatchedNote}`,
    image: "/images/mwenje/room-sitting.jpg",
    gallery: [
      sharedSpaces.sitting,
      sharedSpaces.armchair,
      ensuiteNotes.vanity,
      sharedSpaces.tv,
      sharedSpaces.pool,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-5",
    slug: "room-5",
    name: "Room 5",
    bedConfiguration: "Double bed — for one guest or a couple",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `${doubleCopy}${unmatchedNote}`,
    image: "/images/mwenje/room-tv.jpg",
    gallery: [
      sharedSpaces.tv,
      sharedSpaces.desk,
      ensuiteNotes.shower,
      sharedSpaces.armchair,
      sharedSpaces.terrace,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-6",
    slug: "room-6",
    name: "Room 6",
    bedConfiguration: "Two single beds",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description:
      "The twin ensuite at Mwenje — two single beds in a private room. For friends, family or colleagues who want separate beds. Free Wi-Fi, television and air conditioning. Ensuite bathrooms on the property have a bath or a shower — we confirm which with the room.",
    image: "/images/mwenje/room-twin-2.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-twin-2.jpg",
        "Room 6 at Mwenje Guest House, the twin ensuite with two single beds",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-twin-1.jpg",
        "Two single beds in the twin ensuite at Mwenje Guest House",
        "Bedroom",
      ),
      ensuiteNotes.vanity,
      sharedSpaces.desk,
      sharedSpaces.pool,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
]

export const propertyFacts = [
  { value: "6", label: "Ensuite rooms" },
  { value: "5", label: "Double rooms" },
  { value: "1", label: "Twin room" },
  { value: "Wi-Fi", label: "Free in every room" },
  { value: "TV", label: "Free in every room" },
  { value: "Pool", label: "Swimming pool" },
] as const

export const propertySpaces = [
  {
    title: "The house",
    copy: "A brick guest house in Victoria Falls, with a covered terrace and a swimming pool.",
    image: "/images/mwenje/exterior.jpg",
  },
  {
    title: "Reception",
    copy: "A thatched reception building at the entrance to the property.",
    image: "/images/mwenje/reception.jpg",
  },
  {
    title: "Lounge",
    copy: "A thatched sitting area with sofas and a small bar counter.",
    image: "/images/mwenje/lounge.jpg",
  },
  {
    title: "Swimming pool",
    copy: "A swimming pool and covered terrace with loungers.",
    image: "/images/mwenje/pool-terrace.jpg",
  },
  {
    title: "Double rooms",
    copy: "Five ensuite rooms with a double bed — for one guest or a couple. Each room has its own gallery.",
    image: "/images/mwenje/room-double-2.jpg",
  },
  {
    title: "Twin room",
    copy: "One ensuite room with two single beds.",
    image: "/images/mwenje/room-twin-2.jpg",
  },
] as const

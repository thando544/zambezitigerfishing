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

const ensuiteLine =
  "Private ensuite bathroom, free Wi-Fi, television and air conditioning. Whether the bathroom has a bath or a shower is confirmed with the room."

const unmatchedNote =
  " A dedicated bedroom photograph for this numbered room has not yet been matched. The gallery shows in-room spaces and the ensuite and garden areas that come with a stay at Mwenje."

const twinPhotos = [
  photo(
    "/images/mwenje/room-twin-2.jpg",
    "Twin ensuite at Mwenje Guest House with two single beds",
    "Bedroom",
  ),
  photo(
    "/images/mwenje/room-twin-1.jpg",
    "Two single beds in a twin ensuite at Mwenje Guest House",
    "Bedroom",
  ),
]

export const rooms: Room[] = [
  {
    id: "room-1",
    slug: "room-1",
    name: "Room 1",
    bedConfiguration: "1 king bed",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `King ensuite. Sleeps two. ${ensuiteLine} Shown with a carved wooden headboard.`,
    image: "/images/mwenje/room-double-2.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-double-2.jpg",
        "Room 1 at Mwenje Guest House, king ensuite with a carved wooden headboard",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-double-5.jpg",
        "Room 1 king bed, carved headboard and sitting bench at Mwenje Guest House",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-double-4.jpg",
        "Room 1 king bed and carved headboard at Mwenje Guest House",
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
    bedConfiguration: "2 single beds",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `Twin ensuite. Two single beds. Sleeps two. ${ensuiteLine} Rooms 2 and 6 are both twins; these photographs show that room type.`,
    image: "/images/mwenje/room-twin-2.jpg",
    gallery: [...twinPhotos, ensuiteNotes.vanity, sharedSpaces.desk, sharedSpaces.pool],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-3",
    slug: "room-3",
    name: "Room 3",
    bedConfiguration: "1 king bed",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `King ensuite. Sleeps two. ${ensuiteLine} Shown with an oak slat headboard.`,
    image: "/images/mwenje/room-double-oak.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-double-oak.jpg",
        "Room 3 at Mwenje Guest House, king ensuite with an oak slat headboard",
        "Bedroom",
      ),
      photo(
        "/images/mwenje/room-double-3.jpg",
        "Room 3 king bed, oak headboard and sitting bench at Mwenje Guest House",
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
    id: "room-4",
    slug: "room-4",
    name: "Room 4",
    bedConfiguration: "1 double bed",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `Double ensuite. Sleeps two. ${ensuiteLine} Shown with a navy runner and a curved wooden headboard.`,
    image: "/images/mwenje/room-double-1.jpg",
    gallery: [
      photo(
        "/images/mwenje/room-double-1.jpg",
        "Room 4 at Mwenje Guest House, double ensuite with a navy runner",
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
    id: "room-5",
    slug: "room-5",
    name: "Room 5",
    bedConfiguration: "1 king bed",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `King ensuite. Sleeps two. ${ensuiteLine}${unmatchedNote}`,
    image: "/images/mwenje/room-tv.jpg",
    gallery: [
      sharedSpaces.tv,
      sharedSpaces.armchair,
      ensuiteNotes.shower,
      sharedSpaces.sitting,
      sharedSpaces.terrace,
    ],
    amenities: [...sharedAmenities],
    published: true,
  },
  {
    id: "room-6",
    slug: "room-6",
    name: "Room 6",
    bedConfiguration: "2 single beds",
    bathroom: "En suite bathroom",
    maxGuests: 2,
    countOnProperty: 1,
    description: `Twin ensuite. Two single beds. Sleeps two. ${ensuiteLine} Rooms 2 and 6 are both twins; these photographs show that room type.`,
    image: "/images/mwenje/room-twin-1.jpg",
    gallery: [...twinPhotos, ensuiteNotes.vanity, sharedSpaces.desk, sharedSpaces.pool],
    amenities: [...sharedAmenities],
    published: true,
  },
]

export const propertyFacts = [
  { value: "6", label: "Bedrooms" },
  { value: "12", label: "Guests" },
  { value: "3", label: "King rooms" },
  { value: "2", label: "Twin rooms" },
  { value: "1", label: "Double room" },
  { value: "Pool", label: "Swimming pool" },
] as const

export const propertySpaces = [
  {
    title: "The house",
    copy: "A brick guest house in Victoria Falls, with a covered terrace and a swimming pool. Six bedrooms, sleeping up to 12.",
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
    title: "King rooms",
    copy: "Rooms 1, 3 and 5 — one king bed in each. Sleeps two per room.",
    image: "/images/mwenje/room-double-2.jpg",
  },
  {
    title: "Twin rooms",
    copy: "Rooms 2 and 6 — two single beds in each. Sleeps two per room.",
    image: "/images/mwenje/room-twin-2.jpg",
  },
] as const

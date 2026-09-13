import { Link } from "react-router-dom"
import { HeroVideo } from "@/components/hero/HeroVideo"
import { ExperienceCard } from "@/components/fishing/ExperienceCard"
import { RoomCard } from "@/components/accommodation/RoomCard"
import { ImageSlot } from "@/components/ui/ImageSlot"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Seo } from "@/components/seo/Seo"
import { experiences } from "@/data/experiences"
import { galleryItems } from "@/data/gallery"
import { propertyFacts, rooms } from "@/data/rooms"
import { reviews } from "@/data/navigation"
import { homeJsonLd } from "@/lib/seo"
import { ReviewCard } from "@/components/reviews/ReviewCard"
import { MwenjeLogo, ZambeziLogo } from "@/components/brand/Logos"
import bannerVideo from "@/assets/banner.mp4"

export default function Home() {
  const previewGallery = [
    ...galleryItems.filter((item) => item.category === "mwenje").slice(0, 3),
    ...galleryItems.filter((item) => item.category !== "mwenje").slice(0, 3),
  ]

  return (
    <>
      <Seo
        title="Tiger Fishing Victoria Falls & Mwenje Guest House"
        description="Guided tiger fishing on the Upper Zambezi at Victoria Falls, Zimbabwe, and Mwenje Guest House — six ensuite bedrooms sleeping 12. Enquire for current rates."
        path="/"
        titleTemplate={false}
        image="/images/fishing/guide-boat.jpg"
        jsonLd={homeJsonLd()}
      />
      <HeroVideo
        desktopSrc={bannerVideo}
        mobileSrc={bannerVideo}
        headline="Tiger fishing Victoria Falls"
        supporting="Guided trips on the Upper Zambezi and a six-bedroom stay at Mwenje Guest House."
        primaryCta={{ label: "Fish the Zambezi", to: "/fishing" }}
        secondaryCta={{ label: "Stay at Mwenje", to: "/stay" }}
      />

      <Section
        id="two-experiences"
        eyebrow="Victoria Falls"
        heading="Two ways to experience Victoria Falls"
        className="pb-8 md:pb-10"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="group relative min-h-128 overflow-hidden bg-ink text-ivory">
            <ImageSlot
              src="/images/fishing/guide-boat.jpg"
              alt="Guide at the helm of a Zambezi Tiger Adventures fishing boat on the Upper Zambezi"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-ink/10" />
            <div className="relative flex h-full min-h-128 flex-col justify-end p-8 md:p-10">
              <ZambeziLogo onDark className="mb-6 h-14 w-auto md:h-16" />
              <p className="eyebrow">Zambezi Tiger Adventures</p>
              <h3 className="display mt-3 text-4xl md:text-5xl">Tiger fishing Victoria Falls</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/80">
                Guided tiger fishing on the Upper Zambezi — 3-hour, half-day and full-day trips for beginners and
                experienced anglers. Rates are confirmed on enquiry.
              </p>
              <Button to="/fishing" variant="gold" className="mt-8 w-fit">
                Explore fishing
              </Button>
            </div>
          </article>
          <article className="group relative min-h-128 overflow-hidden bg-forest text-ivory">
            <ImageSlot
              src="/images/mwenje/exterior.jpg"
              alt="Mwenje Guest House in Victoria Falls"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest via-forest/50 to-forest/20" />
            <div className="relative flex h-full min-h-128 flex-col justify-end p-8 md:p-10">
              <MwenjeLogo onDark className="mb-6 h-16 w-auto" />
              <p className="eyebrow">Mwenje Guest House</p>
              <h3 className="display mt-3 text-4xl md:text-5xl">Mwenje Guest House</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/80">
                Six ensuite bedrooms in Victoria Falls, sleeping 12 — three kings, one double and two twins. Pool, free
                Wi-Fi and television. Already listed on the holiday-rental platforms travellers use.
              </p>
              <Button to="/stay" variant="ivory" className="mt-8 w-fit">
                Explore Mwenje
              </Button>
            </div>
          </article>
        </div>
      </Section>

      <Section
        tone="ink"
        eyebrow="Zambezi Tiger Adventures"
        heading="Tiger fishing on the Upper Zambezi"
        lede="Guided 3-hour, half-day and full-day tiger fishing trips at Victoria Falls."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Section>

      <section className="relative min-h-144 overflow-hidden bg-ink text-ivory">
        <ImageSlot
          src="/images/fishing/river-boat.jpg"
          alt="Guided fishing boat underway on the Upper Zambezi"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow">The river</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">The Zambezi</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ivory/85 md:col-span-7 md:text-lg">
            <p>
              The Upper Zambezi, above Victoria Falls, is a broad, working river of channels, islands and current. This is
              the water we fish.
            </p>
            <p>
              The African tigerfish is the fish that draws anglers here — a fast freshwater predator with a reputation that
              does not need inflating. Other species are present in the system. What you catch on a given day depends on
              the river, not a promise.
            </p>
            <p>
              Days on the water are guided. Along the banks, wildlife and birdlife are part of the same landscape; sightings
              are a possibility, never a guarantee. Victoria Falls town sits at the downstream end of this stretch of river.
            </p>
            <Button to="/fishing" variant="outline" className="mt-4">
              Explore fishing
            </Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Mwenje Guest House" heading="Your home in Victoria Falls">
        <figure className="mb-14 overflow-hidden">
          <ImageSlot
            src="/images/mwenje/exterior.jpg"
            alt="The brick guest house at Mwenje in Victoria Falls"
            className="h-80 w-full object-cover object-[center_80%] md:h-112"
          />
          <figcaption className="mt-3 text-[0.68rem] tracking-[0.18em] text-earth uppercase">
            The lodge
          </figcaption>
        </figure>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {propertyFacts.map((fact) => (
            <div key={fact.label} className="border-t border-bronze/30 pt-5">
              <p className="display text-4xl md:text-5xl">{fact.value}</p>
              <p className="mt-2 text-[0.68rem] tracking-[0.18em] text-earth uppercase">{fact.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { src: "/images/mwenje/reception.jpg", label: "Reception" },
            { src: "/images/mwenje/room-double-2.jpg", label: "King ensuite" },
            { src: "/images/mwenje/room-twin-2.jpg", label: "Twin ensuite" },
            { src: "/images/mwenje/pool-terrace.jpg", label: "Swimming pool" },
          ].map((item) => (
            <figure key={item.label} className="min-h-52 overflow-hidden">
              <ImageSlot
                src={item.src}
                alt={`${item.label} at Mwenje Guest House`}
                className="h-64 w-full object-cover"
              />
              <figcaption className="mt-3 text-[0.68rem] tracking-[0.18em] text-earth uppercase">{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <Button to="/stay" variant="forest" className="mt-8">
          Stay at Mwenje
        </Button>
      </Section>

      <Section
        className="bg-paper"
        heading="The six rooms"
        lede="Three king rooms, one double and two twins. Sleeps 12. Each room has its own gallery."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Section>

      <Section tone="forest" heading="Stay. Fish. Explore.">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              title: "Sleep at Mwenje",
              copy: "Six bedrooms, sleeping 12 — three kings, one double and two twins. Free Wi-Fi and television. Each room has its own gallery.",
            },
            {
              title: "Fish the Zambezi",
              copy: "Three-hour, half-day and full-day guided fishing on the Upper Zambezi, shaped around the conditions of the day.",
            },
            {
              title: "Explore the destination",
              copy: "Victoria Falls, the river, the National Park and the town sit around the same stay. We help you plan the days without overpromising them.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-bronze/30 pt-6">
              <h3 className="display text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/78">{item.copy}</p>
            </div>
          ))}
        </div>
        <Button to="/book?interest=combined" variant="gold" className="mt-12">
          Plan your stay
        </Button>
      </Section>

      <Section tone="ink" heading="Gallery" lede="Fishing on the Upper Zambezi and the rooms at Mwenje.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previewGallery.map((item) => (
            <Link key={item.id} to="/gallery" className="image-reveal is-visible block aspect-4/3 overflow-hidden">
              <ImageSlot src={item.src} alt={item.alt} />
            </Link>
          ))}
        </div>
        <Button to="/gallery" variant="outline" className="mt-10">
          Open the gallery
        </Button>
      </Section>

      {reviews.length > 0 ? (
        <Section heading="Guest notes" lede="Published only with permission and a named source.">
          <div className="grid gap-10 md:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section
        heading="Plan your Victoria Falls experience"
        lede="A few honest notes before you write to us. Nothing here replaces a conversation about your dates."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "When to visit",
              copy: "Tiger fishing is practised on the Upper Zambezi through the year. Water levels change. Ask us for current river advice when you choose dates.",
            },
            {
              title: "What to bring on the water",
              copy: "Bring sun protection, polarised sunglasses, a hat, layers for cool mornings, and shoes that belong on a boat. Confirm tackle when you enquire.",
            },
            {
              title: "Experience level",
              copy: "Tell us whether you are new to fishing or already at home on a river. The trip can be planned around that.",
            },
            {
              title: "Staying at Mwenje",
              copy: "Six bedrooms, sleeping 12 — three kings, one double and two twins. Each room has its own gallery. Free Wi-Fi and television in every room.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-bronze/25 pt-6">
              <h3 className="font-sans text-sm tracking-[0.18em] uppercase">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{item.copy}</p>
            </div>
          ))}
        </div>
        <Button to="/plan" variant="forest" className="mt-12">
          Plan your trip
        </Button>
      </Section>

      <section className="relative min-h-112 overflow-hidden bg-ink text-ivory">
        <ImageSlot
          src="/images/fishing/guide-boat.jpg"
          alt="Guide at the helm of a Zambezi Tiger Adventures fishing boat"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto flex min-h-112 max-w-6xl flex-col items-start justify-center px-6 py-24 md:px-10">
          <h2 className="display text-5xl md:text-7xl">The Zambezi is waiting.</h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/book?interest=fishing" variant="gold" size="lg">
              Book fishing
            </Button>
            <Button to="/book?interest=accommodation" variant="outline" size="lg">
              Book your stay
            </Button>
            <Button to="/book" variant="outline" size="lg">
              WhatsApp us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

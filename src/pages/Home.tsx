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
import { SITE_NAME } from "@/lib/seo"
import { ReviewCard } from "@/components/reviews/ReviewCard"
import bannerVideo from "@/assets/banner.mp4"

export default function Home() {
  const previewGallery = galleryItems.filter((item) => !item.placeholder).slice(0, 6)

  return (
    <>
      <Seo
        title={SITE_NAME}
        description="Tiger fishing on the Upper Zambezi and ensuite guest house stays at Mwenje in Victoria Falls, Zimbabwe."
        path="/"
      />
      <HeroVideo
        desktopSrc={bannerVideo}
        mobileSrc={bannerVideo}
        headline="Experience the Zambezi"
        supporting="Tiger fishing, riverside adventure and a comfortable stay in Victoria Falls."
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
          <article className="group relative min-h-[32rem] overflow-hidden bg-ink text-ivory">
            <ImageSlot
              src="/images/fishing/boat.jpg"
              alt="Open water from a small fishing boat, standing in for Upper Zambezi sport fishing"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
            <div className="relative flex h-full min-h-[32rem] flex-col justify-end p-8 md:p-10">
              <p className="eyebrow">Zambezi Tiger Adventures</p>
              <h3 className="display mt-3 text-4xl md:text-5xl">Fish the Upper Zambezi</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/80">
                Chase tigerfish on the Upper Zambezi with guided sport fishing experiences designed around the river, the
                conditions and the catch.
              </p>
              <Button to="/fishing" variant="gold" className="mt-8 w-fit">
                Explore fishing
              </Button>
            </div>
          </article>
          <article className="group relative min-h-[32rem] overflow-hidden bg-forest text-ivory">
            <ImageSlot
              src="/images/mwenje/exterior.webp"
              fallbackSrc="/images/mwenje/exterior.svg"
              alt="Placeholder for Mwenje Guest House exterior"
              placeholderLabel="Mwenje exterior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-forest/20" />
            <div className="relative flex h-full min-h-[32rem] flex-col justify-end p-8 md:p-10">
              <p className="eyebrow">Mwenje Guest House</p>
              <h3 className="display mt-3 text-4xl md:text-5xl">A base in Victoria Falls</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/80">
                A comfortable Victoria Falls base with ensuite rooms, garden spaces, a swimming pool and a relaxed
                atmosphere.
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
        heading="Chase the tiger"
        lede="Sport fishing on the Upper Zambezi."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Section>

      <section className="relative min-h-[36rem] overflow-hidden bg-ink text-ivory">
        <ImageSlot
          src="/images/destination/river-wide.jpg"
          alt="Wide river landscape suggesting the scale of the Zambezi"
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
            { src: "/images/mwenje/pool.webp", fallback: "/images/mwenje/pool.svg", label: "Pool" },
            { src: "/images/mwenje/garden.webp", fallback: "/images/mwenje/garden.svg", label: "Garden" },
            { src: "/images/mwenje/lounge.webp", fallback: "/images/mwenje/lounge.svg", label: "Lounge" },
            { src: "/images/mwenje/dining.webp", fallback: "/images/mwenje/dining.svg", label: "Dining" },
          ].map((item) => (
            <figure key={item.label} className="min-h-52 overflow-hidden">
              <ImageSlot
                src={item.src}
                fallbackSrc={item.fallback}
                alt={`Placeholder for ${item.label} at Mwenje Guest House`}
                placeholderLabel={item.label}
                className="h-64 w-full object-cover"
              />
              <figcaption className="mt-3 text-[0.68rem] tracking-[0.18em] text-earth uppercase">{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-mist">
          Property facts are drawn from public listings and still require final client verification before they are treated
          as published operational detail. Photography of Mwenje is placeholder until approved originals are supplied.
        </p>
        <Button to="/stay" variant="forest" className="mt-8">
          Stay at Mwenje
        </Button>
      </Section>

      <Section className="bg-paper" heading="Rooms" lede="Two ensuite room types. Confirm availability for your dates.">
        <div className="space-y-8">
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
              copy: "Ensuite rooms, a pool and a garden — a quiet base in Victoria Falls between days on the river and at the Falls.",
            },
            {
              title: "Fish the Zambezi",
              copy: "Three-hour, half-day and full-day guided fishing on the Upper Zambezi, shaped around the conditions of the day.",
            },
            {
              title: "Walk the destination",
              copy: "Victoria Falls, the river, the National Park and the town sit around the same stay. We help you plan the days, not overpromise them.",
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

      <Section eyebrow="Destination" heading="Welcome to Victoria Falls">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ImageSlot
            src="/images/destination/victoria-falls.jpg"
            alt="Victoria Falls at sunrise with mist in the gorge"
            className="h-[28rem] w-full object-cover"
          />
          <div>
            <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
              Victoria Falls is both a town and one of the great waterfalls of the world. The river that feeds it is the
              same river we fish. Guests often combine a stay, time on the water, and time at the Falls themselves.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Victoria Falls",
                "Victoria Falls National Park",
                "The Zambezi River",
                "David Livingstone Statue",
                "The Big Tree",
              ].map((place) => (
                <li key={place} className="border-b border-bronze/15 pb-3 tracking-[0.04em]">
                  {place}
                </li>
              ))}
            </ul>
            <Button to="/victoria-falls" variant="forest" className="mt-8">
              Explore the destination
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="ink" heading="Gallery" lede="River, Falls and atmosphere. Mwenje property photography will replace placeholders when originals are approved.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previewGallery.map((item) => (
            <Link key={item.id} to="/gallery" className="image-reveal is-visible block aspect-[4/3] overflow-hidden">
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
              title: "What to bring fishing",
              copy: "Sun protection, polarised sunglasses, a hat, layers for cool mornings, and shoes that belong on a boat. Confirm tackle when you enquire.",
            },
            {
              title: "Experience level",
              copy: "Tell us whether you are new to fishing or already at home on a river. The trip can be discussed around that.",
            },
            {
              title: "Staying at Mwenje",
              copy: "Six ensuite rooms, about twelve guests. Breakfast, Wi-Fi, parking, a pool and a garden. Confirm room mix and check-in details when you enquire.",
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

      <section className="relative min-h-[28rem] overflow-hidden bg-ink text-ivory">
        <ImageSlot
          src="/images/destination/african-dusk.jpg"
          alt="Trees against an African dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col items-start justify-center px-6 py-24 md:px-10">
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

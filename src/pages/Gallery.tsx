import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { galleryItems } from "@/data/gallery"

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Victoria Falls fishing and Mwenje"
        description="Photographs of Victoria Falls, the Zambezi and fishing atmosphere, with reserved slots for approved Mwenje Guest House originals."
        path="/gallery"
      />
      <Section
        className="pt-32"
        eyebrow="Look"
        heading="Gallery"
        lede="Destination and river photographs are used for atmosphere. Mwenje images are placeholders until approved property photography is supplied. Nothing here is scraped from booking platforms."
      >
        <GalleryGrid items={galleryItems} />
      </Section>
    </>
  )
}

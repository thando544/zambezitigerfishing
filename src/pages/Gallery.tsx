import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { galleryItems } from "@/data/gallery"

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Victoria Falls fishing and Mwenje"
        description="Photographs of Victoria Falls, the Zambezi, and Mwenje Guest House."
        path="/gallery"
      />
      <Section
        className="pt-32"
        eyebrow="Look"
        heading="Gallery"
        lede="The river, the Falls, and the rooms at Mwenje."
      >
        <GalleryGrid items={galleryItems} />
      </Section>
    </>
  )
}

import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { galleryItems } from "@/data/gallery"

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Fishing and Mwenje"
        description="Original photographs of Zambezi Tiger Adventures fishing boats and Mwenje Guest House."
        path="/gallery"
      />
      <Section
        className="pt-32"
        eyebrow="Look"
        heading="Gallery"
        lede="Fishing on the Upper Zambezi, and the rooms at Mwenje."
      >
        <GalleryGrid items={galleryItems} />
      </Section>
    </>
  )
}

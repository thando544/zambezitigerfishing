import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/ui/Section"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { galleryItems } from "@/data/gallery"

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Tiger Fishing Victoria Falls & Mwenje Guest House"
        description="Original photographs of guided tiger fishing on the Upper Zambezi and Mwenje Guest House in Victoria Falls, Zimbabwe."
        path="/gallery"
        titleTemplate={false}
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

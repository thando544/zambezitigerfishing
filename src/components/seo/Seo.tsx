import { Helmet } from "react-helmet-async"
import {
  absoluteUrl,
  defaultOgImage,
  defaultOgImageAlt,
  jsonLdGraph,
  pageTitle,
  SITE_NAME,
  SITE_URL,
  type SeoConfig,
} from "@/lib/seo"

type SeoProps = SeoConfig

export function Seo({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt = defaultOgImageAlt,
  type = "website",
  noIndex,
  titleTemplate = true,
  jsonLd,
}: SeoProps) {
  const canonical = absoluteUrl(path)
  const ogImage = absoluteUrl(image)
  const fullTitle = pageTitle(title, titleTemplate)
  const graphs = (jsonLd === undefined ? (path === "/" ? [jsonLdGraph] : []) : Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map(
    (graph) => {
      if (graph && typeof graph === "object" && !("@context" in graph)) {
        return { "@context": "https://schema.org", ...graph }
      }
      return graph
    },
  )

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow, max-image-preview:large" />}

      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="ZW-MN" />
      <meta name="geo.placename" content="Victoria Falls" />
      <meta name="language" content="en" />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <link rel="alternate" href={SITE_URL} hrefLang="en" />
      <link rel="alternate" href={SITE_URL} hrefLang="en-GB" />
      <link rel="alternate" href={SITE_URL} hrefLang="x-default" />
      <link rel="llms-txt" href={absoluteUrl("/llms.txt")} />

      {graphs.map((graph, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(graph)}
        </script>
      ))}
    </Helmet>
  )
}

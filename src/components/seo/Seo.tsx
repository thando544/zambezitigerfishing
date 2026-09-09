import { Helmet } from "react-helmet-async"
import { absoluteUrl, defaultOgImage, jsonLdGraph, pageTitle, SITE_NAME, SITE_URL, type SeoConfig } from "@/lib/seo"

type SeoProps = SeoConfig

export function Seo({ title, description, path, image = defaultOgImage, type = "website", noIndex }: SeoProps) {
  const canonical = absoluteUrl(path)
  const ogImage = absoluteUrl(image)
  const fullTitle = pageTitle(title)

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {path === "/" ? <script type="application/ld+json">{JSON.stringify(jsonLdGraph)}</script> : null}
      <link rel="alternate" href={SITE_URL} hrefLang="en" />
    </Helmet>
  )
}

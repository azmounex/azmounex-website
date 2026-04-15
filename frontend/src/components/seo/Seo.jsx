import { Helmet } from "react-helmet-async";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://www.azmounex.com";

function Seo({
  title,
  description,
  path = "/",
  image = "/hero_section/hero_section_image_1.png",
  noindex = false,
  schema,
}) {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const imageUrl = image.startsWith("http") ? image : new URL(image, siteUrl).toString();

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl,
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(schema || defaultSchema)}</script>
    </Helmet>
  );
}

export default Seo;
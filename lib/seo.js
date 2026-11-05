const SITE = 'https://www.tigertigerfoods.com'
const BRAND = 'Tiger Tiger Foods'
// Change to '/og-default.jpg' once that file exists in /public
const FALLBACK_IMAGE = '/og-default.png'

export function buildMeta({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
}) {
  // Do not add the brand twice if the title already carries it
  const fullTitle = title.includes(BRAND) ? title : title + ' | ' + BRAND
  const img = image || FALLBACK_IMAGE
  const isArticle = type === 'article'

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: BRAND,
      locale: 'en_GB',
      images: [{ url: img, width: 1200, height: 630, alt: imageAlt || title }],
      ...(isArticle && publishedTime ? { publishedTime } : {}),
      ...(isArticle && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [img],
    },
  }
}
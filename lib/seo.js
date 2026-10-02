const SITE = 'https://www.tigertigerfoods.com'
const BRAND = 'Tiger Tiger Foods'
const FALLBACK_IMAGE = '/og-default.png'

export function buildMeta({ title, description, path, image }) {
  const fullTitle = title + ' | ' + BRAND
  const img = image || FALLBACK_IMAGE

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      title: fullTitle,
      description,
      siteName: BRAND,
      locale: 'en_GB',
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [img],
    },
  }
}
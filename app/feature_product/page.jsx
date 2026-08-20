import Script from 'next/script';
import FeatureProductPageClient from "./FeatureProductPageClient";
import Image from "next/image";

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const manualProductLinkMap = {
  "PULP+ LYCHEE JUICE": { slug: "pulp-lychee-juice", sku: "800769" },
  "PULP+ MANGO JUICE": { slug: "pulp-mango-juice", sku: "800770" },
  "PULP+ PINK GUAVA JUICE": { slug: "pulp-pink-guava-juice", sku: "801064" },
  "PULP+ COCONUT WATER": { slug: "pulp-coconut-water", sku: "800768" },
  "POPPING CANDY BISCUITS STICK MILK TEA": { slug: "popping-candy-biscuits-stick-milk-tea", sku: "800981" },
  "POPPING CANDY BISCUITS STICK BANANA": { slug: "popping-candy-biscuits-stick-banana", sku: "800978" },
  "POPPING CANDY BISCUITS STICK CAPPUCCINO": { slug: "popping-candy-biscuits-stick-cappuccino", sku: "800979" },
  "POPPING CANDY BISCUITS STICK COOKIES": { slug: "popping-candy-biscuits-stick-cookies", sku: "800980" },
  "COCO CHOO CLASSIC": { slug: "coco-choo-classic", sku: "800777" },
  "COCO CHOO HAZELNUT": { slug: "coco-choo-hazelnut", sku: "800778" },
  "COCO CHOO DARK": { slug: "coco-choo-dark", sku: "800779" },
};

const mapItemToHref = (item) => {
  // COCO CHOO ke liye special redirection
  if (item.name.startsWith("COCO CHOO")) {
    return {
      ...item,
      href: "/coming-soon",
    };
  }

  const manual = manualProductLinkMap[item.name];
  if (manual?.slug && manual?.sku) {
    return {
      ...item,
      href: `/feature_product/products/${manual.slug}/${manual.sku}`,
    };
  }

  const slug = slugify(item.name || item.id);
  return {
    ...item,
    href: `/feature_product/products/${slug}/${slug}`,
  };
};

export default function FeatureProductPage() {
  const featuredProductsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.tigertigerfoods.com/feature_product/#webpage",
        "url": "https://www.tigertigerfoods.com/feature_product/",
        "name": "Featured Products | Tiger Tiger Foods",
        "description": "Award-winning and standout Tiger Tiger products, including Pulp+, Coco Choo and Wow Chow.",
        "isPartOf": {
          "@id": "https://www.tigertigerfoods.com/#website"
        },
        "about": {
          "@id": "https://www.tigertigerfoods.com/#organization"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tigertigerfoods.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Featured Products",
            "item": "https://www.tigertigerfoods.com/feature_product/"
          }
        ]
      }
    ]
  };

  const sections = [
    {
      title: "Pulp Plus",
      features: [
        { id: 1, Image: "/pulp-feature_1.webp", name: "PULP+ LYCHEE JUICE" },
        { id: 2, Image: "/pulpfeature_2.webp", name: "PULP+ MANGO JUICE" },
        { id: 3, Image: "/pulpfeature_3.webp", name: "PULP+ PINK GUAVA JUICE" },
      ],
      listings: [
        { id: 4, name: "PULP+ LYCHEE JUICE", Image: "/feature_guava.webp" },
        { id: 5, name: "PULP+ MANGO JUICE", Image: "/featured_guava.webp" },
        { id: 6, name: "PULP+ PINK GUAVA JUICE", Image: "/featured_mango.webp" },
        { id: 7, name: "PULP+ COCONUT WATER", Image: "/featured_coconut.webp" },
      ],
    },
    {
      title: "Popping Candy ",
      features: [
        { id: 8, Image: "/popping feature 1.webp", name: "POPPING CANDY BISCUITS STICK MILK TEA" },
        { id: 9, Image: "/popping feature 2.webp", name: "POPPING CANDY BISCUITS STICK BANANA" },
      ],
      listings: [
        { id: 11, name: "POPPING CANDY BISCUITS STICK MILK TEA", Image: "/feature_product.webp" },
        { id: 12, name: "POPPING CANDY BISCUITS STICK BANANA", Image: "/banana.webp" },
        { id: 13, name: "POPPING CANDY BISCUITS STICK CAPPUCCINO", Image: "/coffee.webp" },
        { id: 14, name: "POPPING CANDY BISCUITS STICK COOKIES", Image: "/biscuit.webp" },
      ],
    },
    {
      title: "COCO CHOO (Coming Soon)",
      features: [
        { id: 15, Image: "/cocochoo-feature-1.webp", name: "COCO CHOO CLASSIC" },
        { id: 16, Image: "/coco choo 2.webp", name: "COCO CHOO HAZELNUT" },
        { id: 17, Image: "/coco choo 3.webp", name: "COCO CHOO DARK" },
      ],
      listings: [
        { id: 18, name: "COCO CHOO CLASSIC", Image: "/chow1.webp" },
        { id: 19, name: "COCO CHOO HAZELNUT", Image: "/chow2.webp" },
        { id: 20, name: "COCO CHOO DARK", Image: "/chow3.webp" },
      ],
    },
  ];

  const sectionsWithLinks = sections.map((section) => ({
    ...section,
    id: slugify(section.title),
    features: section.features.map((item) => mapItemToHref(item)),
    listings: section.listings.map((item) => mapItemToHref(item)),
  }));

  return (
    <>
      <Script
        id="featured-products-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredProductsSchema) }}
      />
      <FeatureProductPageClient sections={sectionsWithLinks} />
    </>
  );
}
import FeatureProductPageClient from "./FeatureProductPageClient";

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const manualProductLinkMap = {
  "PULP+ LYCHEE JUICE": { slug: "pulp-lychee-juice", sku: "800769" },
  "PULP+ MANGO JUICE": { slug: "pulp-mango-juice", sku: "800770" },
  "PULP+ PINK GUAVA JUICE": { slug: "pulp-pink-guava-juice", sku: "800771" },
  "PULP+ COCONUT WATER": { slug: "pulp-coconut-water", sku: "800772" },
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
  const sections = [
    {
      title: "Pulp Plus",
      features: [
        { id: 1, img: "/pulp-feature_1.webp", name: "PULP+ LYCHEE JUICE" },
        { id: 2, img: "/pulpfeature_2.webp", name: "PULP+ MANGO JUICE" },
        { id: 3, img: "/pulpfeature_3.webp", name: "PULP+ PINK GUAVA JUICE" },
      ],
      listings: [
        { id: 4, name: "PULP+ LYCHEE JUICE", img: "/feature_guava.webp" },
        { id: 5, name: "PULP+ MANGO JUICE", img: "/featured_guava.webp" },
        { id: 6, name: "PULP+ PINK GUAVA JUICE", img: "/featured_mango.webp" },
        { id: 7, name: "PULP+ COCONUT WATER", img: "/featured_coconut.webp" },
      ],
    },
    {
      title: "Popping Candy",
      features: [
        { id: 8, img: "/popping feature 1.webp", name: "POPPING CANDY BISCUITS STICK MILK TEA" },
        { id: 9, img: "/popping feature 2.webp", name: "POPPING CANDY BISCUITS STICK BANANA" },
        { id: 10, img: "/popping feature 3.webp", name: "POPPING CANDY BISCUITS STICK CAPPUCCINO" },
      ],
      listings: [
        { id: 11, name: "POPPING CANDY BISCUITS STICK MILK TEA", img: "/feature_product.webp" },
        { id: 12, name: "POPPING CANDY BISCUITS STICK BANANA", img: "/banana.webp" },
        { id: 13, name: "POPPING CANDY BISCUITS STICK CAPPUCCINO", img: "/coffee.webp" },
        { id: 14, name: "POPPING CANDY BISCUITS STICK COOKIES", img: "/biscuit.webp" },
      ],
    },
    {
      title: "COCO CHOO",
      features: [
        { id: 15, img: "/cocochoo-feature-1.webp", name: "COCO CHOO CLASSIC" },
        { id: 16, img: "/coco choo 2.webp", name: "COCO CHOO HAZELNUT" },
        { id: 17, img: "/coco choo 3.webp", name: "COCO CHOO DARK" },
      ],
      listings: [
        { id: 18, name: "COCO CHOO CLASSIC", img: "/chow1.webp" },
        { id: 19, name: "COCO CHOO HAZELNUT", img: "/chow2.webp" },
        { id: 20, name: "COCO CHOO DARK", img: "/chow3.webp" },
      ],
    },
  ];

  const sectionsWithLinks = sections.map((section) => ({
    ...section,
    features: section.features.map((item) => mapItemToHref(item)),
    listings: section.listings.map((item) => mapItemToHref(item)),
  }));

  return <FeatureProductPageClient sections={sectionsWithLinks} />;
}
import ProductDetailClient from "../../../Components/ProductDetail"; 
import { fetchAllProducts } from "../../../action";
import { notFound } from "next/navigation";
import { buildMeta } from "@/lib/seo";

// Page revalidation for ISR (1 hour)
export const revalidate = 3600;

// Removes HTML tags, common entities and collapses whitespace
const stripHtml = (text) =>
  typeof text === "string"
    ? text
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;|&apos;/gi, "'")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/\s+/g, " ")
        .trim()
    : "";

// Best available plain-text description for schema (full text)
const getProductDescription = (product) =>
  stripHtml(product.page_description) ||
  stripHtml(product.description) ||
  stripHtml(product.product_description) ||
  stripHtml(product.body_text);

// Plain text ko 155 characters tak lafz ki hadd par kaatta hai
const toMetaDescription = (text, max = 155) => {
  if (!text) return "";
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const safe = lastSpace > 100 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[\s,.;:\-–]+$/, "") + "…";
};

// Title ke end se "| Tiger Tiger Foods" hata deta hai (buildMeta brand khud lagata hai)
const BRAND_SUFFIX = /\s*[|\-–]\s*Tiger Tiger Foods\s*$/i;

// FORTUNE COOKIES -> Fortune Cookies (jab SEO title khali ho)
const toTitleCase = (text) =>
  typeof text === "string"
    ? text.toLowerCase().replace(/(^|\s)(\S)/g, (m, space, char) => space + char.toUpperCase())
    : "";

// Helper function to get product data
async function getProductData(sku) {
  const allProducts = await fetchAllProducts() || [];
  return allProducts.find(p => String(p.SKU) === String(sku));
}

export async function generateMetadata({ params }) {
  const { productslug, sku } = await params;
  const product = await getProductData(sku);

  if (!product) return { title: "Product Not Found | Tiger Tiger Foods" };

  const pagePath = `/products/${product.slug || productslug}/${sku}/`;

  // SEO title pehle (brand suffix hata kar), warna name ko Title Case mein
  const seoTitle =
    typeof product.title === "string" ? product.title.replace(BRAND_SUFFIX, "").trim() : "";
  const displayName = toTitleCase(product.name);

  // 1) page_description / description / body_text  2) generic line
  const metaDescription =
    toMetaDescription(getProductDescription(product)) ||
    `${displayName} in bulk from Tiger Tiger Foods. Open a trade account to order for UK restaurants, takeaways and Asian grocers.`;

  return buildMeta({
    title: seoTitle || displayName,
    description: metaDescription,
    path: pagePath,
    image: product.images?.[0] || product.image,
  });
}

export default async function Page({ params }) {
  const { sku } = await params;
  const allProducts = await fetchAllProducts() || [];
  const currentProduct = allProducts.find(p => String(p.SKU) === String(sku));

  // Show 404 if the product is not found
  if (!currentProduct) {
    notFound();
  }

  // Related products: same category first, then fill up to 4.
  // Only the fields the slider needs are sent to the client component.
  const others = allProducts.filter(p => String(p.SKU) !== String(sku));
  const sameCategory = others.filter(
    p => p.categories && p.categories === currentProduct.categories
  );
  const related = [...sameCategory, ...others.filter(p => !sameCategory.includes(p))]
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      SKU: p.SKU,
      slug: p.slug,
      name: p.name,
      images: p.images,
      image: p.image,
      quantity: p.quantity,
      categories: p.categories,
    }));

  // JSON-LD Schema (for Google SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": currentProduct.name,
    "sku": String(currentProduct.SKU),
    "description": getProductDescription(currentProduct),
    "image": currentProduct.images
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProductDetailClient 
        product={currentProduct} 
        relatedProducts={related} 
      />
    </>
  );
}
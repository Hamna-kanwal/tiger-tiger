import ProductDetailClient from "../../../Components/ProductDetail"; 
import { fetchAllProducts } from "../../../action";
import { notFound } from "next/navigation";
import { buildMeta } from "@/lib/seo";

// Page revalidation for ISR (1 hour)
export const revalidate = 3600;

const SITE_URL = "https://www.tigertigerfoods.com";
const BACKEND_URL = "https://backend.tigertigerfoods.com";

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

// Trims plain text to 155 characters at a word boundary
const toMetaDescription = (text, max = 155) => {
  if (!text) return "";
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const safe = lastSpace > 100 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[\s,.;:\-–]+$/, "") + "…";
};

// Removes "| Tiger Tiger Foods" from the end of a title (buildMeta adds the brand itself)
const BRAND_SUFFIX = /\s*[|\-–]\s*Tiger Tiger Foods\s*$/i;

// FORTUNE COOKIES -> Fortune Cookies (used when the SEO title is empty)
const toTitleCase = (text) =>
  typeof text === "string"
    ? text.toLowerCase().replace(/(^|\s)(\S)/g, (m, space, char) => space + char.toUpperCase())
    : "";

// Converts a relative image path into an absolute URL
const toAbsoluteUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) return null;
  if (/^https?:\/\//i.test(value)) return value;
  return `${BACKEND_URL}${value.startsWith("/") ? "" : "/"}${value}`;
};

// Returns all product images as absolute URLs
const getProductImages = (product) => {
  const list = Array.isArray(product.images) ? product.images : [product.images || product.image];
  return list.map(toAbsoluteUrl).filter(Boolean);
};

// Keeps only digits and accepts valid GTIN lengths (8, 12, 13, 14)
const toGtin = (value) => {
  const digits = String(value || "").replace(/\D/g, "");
  return [8, 12, 13, 14].includes(digits.length) ? digits : null;
};

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

  // SEO title first (brand suffix removed), otherwise the name in Title Case
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
  const { productslug, sku } = await params;
  const allProducts = await fetchAllProducts() || [];
  const currentProduct = allProducts.find(p => String(p.SKU) === String(sku));

  // Show 404 if the product is not found
  if (!currentProduct) {
    notFound();
  }

  // Price must never reach the client component (it would be embedded in the page source)
  const { price, ...safeProduct } = currentProduct;

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

  // Canonical product URL, images and barcode for the schema
  const productUrl = `${SITE_URL}/products/${currentProduct.slug || productslug}/${sku}/`;
  const images = getProductImages(currentProduct);
  const gtin = toGtin(currentProduct.single_unit_barcode);

  // JSON-LD Schema (Product + Breadcrumbs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        "url": productUrl,
        "name": currentProduct.name,
        "sku": String(currentProduct.SKU),
        ...(currentProduct.jk_code ? { "mpn": String(currentProduct.jk_code) } : {}),
        ...(gtin ? { "gtin": gtin } : {}),
        "description": getProductDescription(currentProduct),
        ...(images.length ? { "image": images } : {}),
        ...(currentProduct.categories ? { "category": String(currentProduct.categories) } : {}),
        "brand": {
          "@type": "Brand",
          "name": currentProduct.brand || "Tiger Tiger"
        },
        "manufacturer": {
          "@id": `${SITE_URL}/#organization`
        },
        "mainEntityOfPage": {
          "@id": productUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${productUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "All Products",
            "item": `${SITE_URL}/products/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": currentProduct.name,
            "item": productUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProductDetailClient 
        product={safeProduct} 
        relatedProducts={related} 
      />
    </>
  );
}

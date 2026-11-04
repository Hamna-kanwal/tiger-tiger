import ProductDetailClient from "../../../Components/ProductDetail"; 
import { fetchAllProducts } from "../../../action";
import { notFound } from "next/navigation";
import { buildMeta } from "@/lib/seo";

// Page revalidation for ISR (1 hour)
export const revalidate = 3600;

// Removes HTML tags and collapses whitespace
const stripHtml = (text) =>
  typeof text === "string"
    ? text.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim()
    : "";

// Best available plain-text description for meta and schema
const getProductDescription = (product) =>
  stripHtml(product.page_description) ||
  stripHtml(product.description) ||
  stripHtml(product.body_text);

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

  return buildMeta({
    title: product.name,
    description: getProductDescription(product).slice(0, 155),
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
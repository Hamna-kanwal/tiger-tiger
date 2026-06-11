import ProductDetailClient from "../../../Components/ProductDetail"; 
import { fetchAllProducts } from "../../../action";
import { notFound } from "next/navigation";

// 1. ISR: Page har 1 ghante mein revalidate hoga
export const revalidate = 3600;

// 2. Static Paths pre-generate karne ke liye
export async function generateStaticParams() {
  const allProducts = await fetchAllProducts();
  return allProducts.map((product) => ({
    slug: product.slug,
    sku: String(product.SKU),
  }));
}

// 3. SEO Metadata
export async function generateMetadata({ params }) {
  const { sku } = await params;
  const allProducts = await fetchAllProducts();
  const product = allProducts?.find(p => String(p.SKU) === String(sku));

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Tiger Tiger Foods`,
    description: product.description?.slice(0, 150),
    alternates: { canonical: `https://www.tigertigerfoods.com/products/${product.slug}/${sku}/` }
  };
}

export default async function Page({ params }) {
  const { slug, sku } = await params;
  const allProducts = await fetchAllProducts();
  const currentProduct = allProducts?.find(p => String(p.SKU) === String(sku));

  if (!currentProduct) notFound();

  const related = allProducts?.filter(p => p.SKU !== sku).slice(0, 4);

  // 4. JSON-LD Schema (Server-rendered)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": currentProduct.name,
    "sku": String(currentProduct.SKU),
    "description": currentProduct.description,
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
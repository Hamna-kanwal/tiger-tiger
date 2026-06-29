import ProductDetailClient from "../../../Components/ProductDetail"; 
import { fetchAllProducts } from "../../../action";
import { notFound } from "next/navigation";

// Page revalidation for ISR (1 hour)
export const revalidate = 3600;

// Helper function to get product data
async function getProductData(sku) {
  const allProducts = await fetchAllProducts() || [];
  return allProducts.find(p => String(p.SKU) === String(sku));
}

export async function generateMetadata({ params }) {
  const { sku } = await params;
  const product = await getProductData(sku);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Tiger Tiger Foods`,
    description: product.description?.slice(0, 150),
    alternates: { 
      canonical: `https://www.tigertigerfoods.com/products/${product.slug}/${sku}/` 
    }
  };
}

export default async function Page({ params }) {
  const { slug, sku } = await params;
  const allProducts = await fetchAllProducts() || [];
  const currentProduct = await getProductData(sku);

  // Agar product nahi mila to 404 show karein
  if (!currentProduct) {
    notFound();
  }

  // Related products ka logic (Current product ko chor kar baaki 4 products)
  const related = allProducts
    .filter(p => String(p.SKU) !== String(sku))
    .slice(0, 4);

  // JSON-LD Schema (Google SEO ke liye)
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
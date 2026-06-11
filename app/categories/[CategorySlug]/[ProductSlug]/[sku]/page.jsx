import { getProductDetail, getRelatedProducts, fetchAllProducts } from "../../../../action";
import ProductDetail from "../../../../Components/ProductDetail";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  try {
    const allProducts = await fetchAllProducts();
    
    if (!allProducts || !Array.isArray(allProducts)) return [];

    return allProducts
      .filter((p) => p?.categorySlug && p?.slug && p?.SKU)
      .map((p) => ({
        CategorySlug: String(p.categorySlug),
        ProductSlug: String(p.slug),
        sku: String(p.SKU),
      }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function Page({ params }) {
  // Next.js 15+ ke mutabiq params ko await karna zaroori hai
  const resolvedParams = await params;
  const { CategorySlug, ProductSlug, sku } = resolvedParams;

  // SKU ke zariye product fetch karein
  const product = await getProductDetail(sku);

  // Agar product nahi mila toh 404 page show karein
  if (!product) {
    return notFound();
  }

  // Related products fetch karein
  let relatedData = [];
  try {
    relatedData = await getRelatedProducts(product.id);
  } catch (e) {
    relatedData = [];
  }

  return (
    <ProductDetail 
      product={product} 
      categorySlug={CategorySlug} 
      relatedProducts={relatedData || []} 
    />
  );
}
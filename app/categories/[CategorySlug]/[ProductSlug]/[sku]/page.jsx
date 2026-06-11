import { getProductDetail, getRelatedProducts, getAllProducts } from "../../../../action";
import ProductDetail from "../../../../Components/ProductDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allProducts = await getAllProducts(); 
  return allProducts.map((p) => ({
    CategorySlug: p.categorySlug, 
    ProductSlug: p.slug,
    sku: String(p.SKU),
  }));
}

export default async function Page({ params }) {
  const { slug, sku } = await params;
  const { CategorySlug, ProductSlug, sku } = await params;
  
  const product = await getProductDetail(sku);

  if (!product) {
    return notFound();
  }

  const relatedData = await getRelatedProducts(product.id);

  return (
    <ProductDetail 
      product={product} 
      categorySlug={CategorySlug} 
      relatedProducts={relatedData || []} 
    />
  );
}
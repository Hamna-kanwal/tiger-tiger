import { getProductDetail, getRelatedProducts } from "../../../../action";
import ProductDetailClient from "../../../../Components/ProductDetail"; 
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  // Params ko await karna Next.js 15+ mein zaroori hai
  const { CategorySlug, ProductSlug, sku } = await params;
  
  // 1. Product details fetch karein SKU ke zariye
  const product = await getProductDetail(sku);
  
  // Safety Check: Agar product nahi milta toh 404 page dikhayein
  if (!product || !product.id) {
    return notFound();
  }

  // 2. Related products mangwayein product ID se
  // Note: ensure karein ke action.js mein getRelatedProducts sahi endpoint hit kar raha hai
  const relatedData = await getRelatedProducts(product.id);

  return (
    <ProductDetailClient 
      product={product} 
      categorySlug={CategorySlug} // URL se aane wala category name
      relatedProducts={relatedData || []} // Slider ke liye data
    />
  );
}
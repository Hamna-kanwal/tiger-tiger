import ProductDetailClient from "../../../Components/ProductDetail"; // Check path carefully
import { fetchAllProducts } from "../../../action";

export default async function Page({ params }) {
  const { productslug, sku } = await params;

  // 1. Data Fetch karein
  const allProducts = await fetchAllProducts();
  
  // 2. SKU ke mutabik wo product dhoondein jis par click hua
  const currentProduct = allProducts?.find(p => String(p.SKU) === String(sku));

  // 3. Related Products (Usi category ke ya random 4)
  const related = allProducts?.filter(p => p.SKU !== sku).slice(0, 4);

  return (
    <ProductDetailClient 
      product={currentProduct} 
      relatedProducts={related} 
    />
  );
}
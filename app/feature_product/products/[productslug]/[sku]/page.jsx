import ProductDetailClient from "../../../../Components/ProductDetail"; 
import { fetchAllProducts, getProductDetail } from "../../../../action";

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function Page({ params }) {
  const { slug, sku } = await params;
  // FIXED: Next.js 15+ ke rules ke mutabiq params ko pehle await kiya hy
  const resolvedParams = await params;
  
  const productslug = resolvedParams.productslug || resolvedParams.ProductSlug || resolvedParams.productSlug;
  const sku = resolvedParams.sku || resolvedParams.SKU;

  // Pehle exact product detail fetch karne ki koshish karein
  let currentProduct = null;
  try {
    if (sku) {
      currentProduct = await getProductDetail(sku);
    }
  } catch (e) {
    // ignore
  }

  // Agar direct detail nahi milti toh poori list mein se search karein
  let allProducts = [];
  if (!currentProduct) {
    try {
      allProducts = await fetchAllProducts();
      currentProduct = allProducts?.find(
        (p) =>
          String(p.SKU).trim() === String(sku).trim() ||
          slugify(String(p.SKU)) === String(sku).trim() ||
          slugify(String(p.name)) === String(sku).trim() ||
          slugify(String(p.slug || "")) === String(sku).trim()
      );
    } catch (e) {
      allProducts = [];
    }
  }

  // Fallback data: Agar database mein product bilkul na mile toh minimal static data load ho
  if (!currentProduct) {
    const humanize = (s) =>
      String(s || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    currentProduct = {
      id: sku || productslug || "unknown",
      name: humanize(productslug) || humanize(sku) || "Product",
      SKU: sku || "",
      k_code: "---",
      palette_quantity: "---",
      case_barcode: "---",
      single_unit_barcode: "---",
      brand: "TIGER TIGER",
      categories: "Drinks",
      quantity: "12x320ml",
      images: ["/product_image.png"],
    };

    return <ProductDetailClient product={currentProduct} relatedProducts={[]} />;
  }

  // Related products nikaalna
  const related = (allProducts || []).filter((p) => p.SKU !== currentProduct.SKU).slice(0, 4);

  return <ProductDetailClient product={currentProduct} relatedProducts={related} />;
}
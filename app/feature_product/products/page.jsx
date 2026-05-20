import ProductDetailClient from "../../Components/ProductDetail"; // Path check kar lein agar adjustments chahiye hon
import { fetchAllProducts } from "../../action";
import { notFound } from "next/navigation";

// Hamare specific array list jo sirf featured items ko match karega
const VALID_FEATURED_SKUS = [
  "pulp-lychee-juice/800769", "pulp-mango-juice", "pulp-pink-guava-juice", "pulp-coconut-water",
  "popping-candy-milk-tea", "popping-candy-banana", "popping-candy-cappuccino", "popping-candy-cookies",
  "coco-choo-classic", "coco-choo-hazelnut", "coco-choo-dark"
];

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function Page({ params }) {
  // Folder keys ke mutabik params read kiye
  const { productslug, sku } = await params;

  // 1. Data Fetch karein database action se
  const allProducts = await fetchAllProducts();
  
  // 2. Poore data me se sirf featured items ko filter out karein
  const featuredProducts = allProducts?.filter(product => {
    const dbSkuSlug = slugify(product.SKU || product.name || "");
    return VALID_FEATURED_SKUS.includes(dbSkuSlug);
  });

  // 3. Current product match karein clicked entry ke SKU/Name se
  const currentProduct = featuredProducts?.find(p => {
    return slugify(p.SKU || "") === sku || slugify(p.name || "") === sku;
  });

  // Safety Break: Agar matching entry nahi milti toh return 404
  if (!currentProduct) {
    return notFound();
  }

  // 4. Related Items Slider: Sirf featured stack me se recommendations dikhayein
  const related = featuredProducts
    ?.filter(p => String(p.SKU) !== String(currentProduct.SKU))
    .slice(0, 4);

  return (
    <ProductDetailClient 
      product={currentProduct} 
      relatedProducts={related || []} 
    />
  );
}
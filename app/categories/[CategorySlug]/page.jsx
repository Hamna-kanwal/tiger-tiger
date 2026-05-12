// page.jsx
import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory } from "../../action"; // Path check karlein

export default async function CategoryProductsPage({ params }) {
  const { CategorySlug } = await params;
  
const initialData = await getProductsByCategory(CategorySlug);
return <CategoryProductsClient slug={CategorySlug} initialData={initialData} />;
}
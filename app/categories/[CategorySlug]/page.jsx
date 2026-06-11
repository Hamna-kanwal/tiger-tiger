import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";
export const revalidate = 3600;
export async function generateMetadata({ params }) {
  const { sku } = await params;
  const { CategorySlug } = await params;
  return {
    title: `${CategorySlug.toUpperCase()} | Tiger Tiger Foods`,
    description: `Browse our ${CategorySlug} collection. Premium Asian food ingredients for trade in the UK.`,
    alternates: { canonical: `https://www.tigertigerfoods.com/categories/${CategorySlug}/` }
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({
    CategorySlug: cat.slug,
  }));
}

export default async function CategoryProductsPage({ params }) {
  const { CategorySlug } = await params;
  

  const initialData = await getProductsByCategory(CategorySlug);

  if (!initialData || initialData.length === 0) {
  
  }

  return <CategoryProductsClient slug={CategorySlug} initialData={initialData} />;
}
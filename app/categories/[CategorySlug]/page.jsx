import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";
export const revalidate = 3600;
export async function generateMetadata({ params }) {
  // Promise ko await karna zaroori hai
  const resolvedParams = await params;
  const slug = resolvedParams.CategorySlug;

  // Agar slug missing hai, toh fallback return karein
  if (!slug) {
    return { title: "Categories | Tiger Tiger Foods" };
  }

  // Slug ko clean format mein convert karein
  const formattedTitle = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: `${formattedTitle} | Tiger Tiger Foods`,
    description: `Browse our ${formattedTitle} collection. Premium Asian food ingredients for trade in the UK.`,
    alternates: { 
      // Canonical URL hamesha lowercase aur clean hona chahiye
      canonical: `https://www.tigertigerfoods.com/categories/${slug.toLowerCase()}/` 
    },
    // Open Graph bhi add kar dein SEO ke liye
    openGraph: {
      title: `${formattedTitle} | Tiger Tiger Foods`,
      url: `https://www.tigertigerfoods.com/categories/${slug.toLowerCase()}/`,
    }
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
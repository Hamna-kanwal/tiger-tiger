import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.CategorySlug;

  // Agar slug "undefined" string hai ya null hai, to metadata bhi block karein
  if (!slug || slug === 'undefined') {
    return { title: "Not Found | Tiger Tiger Foods" };
  }

  const formattedTitle = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: `${formattedTitle} | Tiger Tiger Foods`,
    description: `Browse our ${formattedTitle} collection. Premium Asian food ingredients for trade in the UK.`,
    alternates: { 
      canonical: `https://www.tigertigerfoods.com/categories/${slug.toLowerCase()}/` 
    },
    openGraph: {
      title: `${formattedTitle} | Tiger Tiger Foods`,
      url: `https://www.tigertigerfoods.com/categories/${slug.toLowerCase()}/`,
    }
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  // Ensure we only return valid slugs
  return categories.filter(cat => cat.slug).map((cat) => ({
    CategorySlug: cat.slug,
  }));
}

export default async function CategoryProductsPage({ params }) {
  const { CategorySlug } = await params;

  // --- STRICT VALIDATION ---
  // Agar CategorySlug "undefined" hai ya khali hai, toh 404 page dikhayein
  if (!CategorySlug || CategorySlug === 'undefined' || CategorySlug === 'null') {
    notFound();
  }

  const initialData = await getProductsByCategory(CategorySlug);

  // Agar data nahi milta, toh bhi 404
  if (!initialData || initialData.length === 0) {
    notFound();
  }

  return <CategoryProductsClient slug={CategorySlug} initialData={initialData} />;
}
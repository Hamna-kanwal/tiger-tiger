import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";

export const revalidate = 3600;

// Exact description mapping for Canned, Drinks, and Frozen as you provided
const categorySchemaMap = {
  canned: {
    name: "Canned",
    description: "Canned pan-Asian ingredients: coconut milk, water chestnuts, bamboo shoots, sauces and pastes in bulk for trade."
  },
  drinks: {
    name: "Drinks",
    description: "Asian drinks in bulk: lychee, guava, coconut water, aloe vera and more for retail and foodservice."
  },
  frozen: {
    name: "Frozen",
    description: "Frozen Asian foods: spring rolls, bao buns, dumplings and party starters in case quantities."
  }
};

export async function generateMetadata({ params }) {
  const { CategorySlug } = await params;
  const formattedName = CategorySlug.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${formattedName} | Tiger Tiger Foods`,
    description: `Browse our ${CategorySlug.replace(/-/g, ' ')} collection. Premium Asian food ingredients for trade in the UK.`,
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
    notFound();
  }

  // Fetch specific schema mapping or fallback gracefully
  const schemaInfo = categorySchemaMap[CategorySlug.toLowerCase()] || {
    name: CategorySlug.charAt(0).toUpperCase() + CategorySlug.slice(1),
    description: `Browse our ${CategorySlug} collection. Premium Asian food ingredients for trade in the UK.`
  };

  // Sub-Category Schema Markup integration
  const subCategorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://www.tigertigerfoods.com/categories/${CategorySlug}/#webpage`,
        "url": `https://www.tigertigerfoods.com/categories/${CategorySlug}/`,
        "name": `${schemaInfo.name} | Tiger Tiger Foods`,
        "description": schemaInfo.description,
        "isPartOf": {
          "@id": "https://www.tigertigerfoods.com/#website"
        },
        "about": {
          "@id": "https://www.tigertigerfoods.com/#organization"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tigertigerfoods.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Categories",
            "item": "https://www.tigertigerfoods.com/categories/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": schemaInfo.name,
            "item": `https://www.tigertigerfoods.com/categories/${CategorySlug}/`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subCategorySchema) }}
      />
      <CategoryProductsClient slug={CategorySlug} initialData={initialData} />
    </>
  );
}
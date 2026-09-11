import Script from 'next/script';
import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";

export const revalidate = 3600;

// All category schemas and descriptions mapped accurately
const categorySchemaMap = {
  canned: {
    name: "Canned Asian Foods",
    description: "Canned pan-Asian ingredients: coconut milk, water chestnuts, bamboo shoots, sauces and pastes in bulk for trade."
  },
  drinks: {
    name: "Asian Beverages & Drinks",
    description: "Asian drinks in bulk: lychee, guava, coconut water, aloe vera and more for retail and foodservice."
  },
  frozen: {
    name: "Frozen Asian Foods",
    description: "Frozen Asian foods: spring rolls, bao buns, dumplings and party starters in case quantities."
  },
  noodles: {
    name: "Authentic Asian Noodles",
    description: "Asian noodles wholesale: udon, rice noodles, egg noodles and more for restaurants and retailers."
  },
  rice: {
    name: "Authentic Asian Rice",
    description: "Asian rice wholesale: jasmine, sushi, glutinous and long-grain rice by the sack."
  },
  sauces: {
    name: "Asian Cooking Sauces",
    description: "Premium Asian cooking sauces: soy sauce, oyster sauce, fish sauce and specialty sauces for authentic Asian cooking."
  },
  "dried-products": {
    name: "Dried Asian Ingredients",
    description: "Dried Asian ingredients: mushrooms, seafood, vegetables and herbs for authentic recipes."
  },
  "coconut-products": {
    name: "Coconut Products",
    description: "Coconut products: coconut milk, cream, desiccated coconut and coconut-based ingredients for Asian cuisine."
  },
  pastes: {
    name: "Asian Curry & Cooking Pastes",
    description: "Asian curry and cooking pastes: curry paste, chili paste, miso and specialty pastes for restaurants and retailers."
  },
  "preserve-and-pickles": {
    name: "Asian Preserves & Pickles",
    description: "Asian preserves and pickles: kimchi, pickled vegetables, preserved fruits and specialty condiments."
  },
  "instant-noodles": {
    name: "Instant Asian Noodles",
    description: "Instant Asian noodles: quick-cook ramen, udon, and specialty noodle products for convenient meals."
  },
  spices: {
    name: "Asian Seasonings & Spices",
    description: "Asian seasonings and spices: premium spice blends, curry powders, and specialty seasonings for authentic cooking."
  }
};

export async function generateMetadata({ params }) {
  const { CategorySlug } = await params;
  const schemaInfo = categorySchemaMap[CategorySlug.toLowerCase()] || {
    name: CategorySlug.charAt(0).toUpperCase() + CategorySlug.slice(1),
    description: `Browse our ${CategorySlug.replace(/-/g, ' ')} collection. Premium Asian food ingredients for trade in the UK.`
  };
  
  return {
    title: `${schemaInfo.name} | Tiger Tiger Foods`,
    description: schemaInfo.description,
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
            "item": "https://www.tigertigerfoods.com/"
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
      <Script
        id={`category-schema-${CategorySlug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subCategorySchema) }}
      />
      <CategoryProductsClient slug={CategorySlug} categoryName={schemaInfo.name} initialData={initialData} />
    </>
  );
}
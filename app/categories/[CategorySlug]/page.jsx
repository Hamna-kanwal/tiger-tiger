import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";

export const revalidate = 3600;

// All category schemas, meta titles, descriptions, and intro paragraphs mapped accurately
const categorySchemaMap = {
  alcohol: {
    name: "Alcohol",
    metaTitle: "Shaoxing Wine & Rice Wine Wholesale",
    description: "Shaoxing cooking wine and rice wine in bulk for UK restaurants, takeaways and Chinese kitchens. Open a Tiger Tiger trade account to order.",
    intro: "Shaoxing wine is the Chinese cooking wine used in stir fries, braises and marinades. Tiger Tiger supplies Shaohsing cooking wine and rice wine in bulk to restaurants, takeaways and food businesses across the UK."
  },
  canned: {
    name: "Canned Asian Foods",
    metaTitle: "Bamboo Shoots, Baby Corn & Canned Asian Food",
    description: "Bamboo shoots, water chestnuts, baby corn, straw mushrooms, lychees and luncheon meat in bulk for UK kitchens. Open a trade account to order.",
    intro: "Stock the canned staples of Chinese and Thai cooking: bamboo shoots, water chestnuts, baby corn, straw mushrooms, beansprouts and stir fry vegetables. The range also covers lychees, longan, rambutan, mango slices and luncheon meat, all in bulk for trade."
  },
  "coconut-products": {
    name: "Coconut Products",
    metaTitle: "Creamed Coconut & Coconut Milk Wholesale ",
    description: "Coconut milk, low fat coconut milk and creamed coconut in bulk for curries, soups and desserts. Supplying UK restaurants and food businesses.",
    intro: "Coconut milk and creamed coconut are the base of Thai curries, laksa and many desserts. Tiger Tiger supplies full fat coconut milk, low fat coconut milk and creamed coconut in bulk to UK kitchens."
  },
  "dried-products": {
    name: "Dried Asian Ingredients",
    metaTitle: "Cashew Nuts, Peanuts, Sesame Seeds & Pappadums",
    description: "Cashew nuts, blanched peanuts, peanut kernels, sesame seeds and Madras pappadums in bulk for UK restaurants, takeaways and food makers.",
    intro: "Cashew nuts, peanuts and sesame seeds go into stir fries, satay, sauces and toppings across Asian menus. Order cashew nuts, blanched peanuts, peanut kernels, sesame seeds and Madras pappadums in bulk for your kitchen."
  },
  drinks: {
    name: "Asian Beverages & Drinks",
    metaTitle: "Aloe Vera Drink & Lychee Juice Wholesale",
    description: "Aloe vera drink, lychee, mango and guava juice, nata de coco drinks, coconut water and bubble tea in bulk for UK shops, cafes and restaurants.",
    intro: "Asian soft drinks for shelves, fridges and menus. The range includes aloe vera drink, Pulp+ lychee, mango and pink guava juice, juices with nata de coco, coconut water and bubble tea, all supplied in bulk for trade."
  },
  frozen: {
    name: "Frozen Asian Foods",
    metaTitle: "Frozen Gyoza, Dim Sum & Bao Buns Wholesale",
    description: "Frozen gyoza, dim sum, bao buns, spring roll pastry, dumpling wrappers, fish balls and edamame in bulk for UK restaurants and takeaways.",
    intro: "Frozen gyoza, dim sum and bao buns need little prep before service. Tiger Tiger supplies gyoza, ha kau, sui mai, gua bao, mantou, spring roll and dumpling pastry, fish balls, edamame and frozen Thai herbs in bulk."
  },
  "instant-noodles": {
    name: "Instant Asian Noodles",
    metaTitle: "Tteokbokki & Instant Noodles Wholesale",
    description: "Instant tteokbokki, Korean stir fry noodles, tom yum and pho noodles in bulk for UK convenience stores, Asian grocers and cafes.",
    intro: "Korean and Southeast Asian instant noodles for shop shelves and quick menus. Order instant tteokbokki, Korean hot chicken and spicy beef stir fry noodles, tom yum, chicken pho and Asia Street noodles in bulk."
  },
  noodles: {
    name: "Authentic Asian Noodles",
    metaTitle: "Udon, Rice & Egg Noodles Wholesale",
    description: "Udon, soba, ramen, egg noodles, pad thai rice noodles and rice vermicelli in bulk for UK restaurants, takeaways and Asian grocers.",
    intro: "Noodles for Japanese, Chinese, Thai and Korean dishes. Tiger Tiger supplies udon, soba and ramen noodles, egg noodles, pad thai rice noodles, rice sticks, Singapore rice vermicelli and Korean rice cakes in bulk to UK food businesses."
  },
  oils: {
    name: "Oils",
    metaTitle: "Crispy Chilli Oil & Sesame Oil Wholesale",
    description: "Sichuan crispy chilli oil, chilli oil with peanuts or black beans, and pure or blended sesame oil in bulk for UK restaurants and takeaways.",
    intro: "Crispy chilli oil and sesame oil finish noodles, dumplings and stir fries. Order Sichuan crispy chilli oil, crispy chilli oil with peanuts or black beans, and pure or blended sesame oil in bulk for your kitchen or shelves."
  },
  pastes: {
    name: "Asian Curry & Cooking Pastes",
    metaTitle: "Katsu Curry, Thai Curry Paste & Gochujang",
    description: "Katsu curry sauce, Thai red and green curry paste, gochujang, doenjang, ssamjang and lemongrass paste in bulk for UK kitchens.",
    intro: "Ready-made pastes for Japanese, Thai and Korean dishes. Tiger Tiger supplies katsu curry in mild and hot, Thai red and green curry paste, gochujang, doenjang, ssamjang, and minced lemongrass, galangal and basil in bulk."
  },
  "preserve-and-pickles": {
    name: "Asian Preserves & Pickles",
    metaTitle: "Kimchi & Sushi Ginger Wholesale",
    description: "Kimchi and pink or white pickled sushi ginger in bulk for UK sushi bars, Korean restaurants, takeaways and Asian grocers.",
    intro: "Kimchi goes with Korean dishes and pickled ginger is served with sushi. Order kimchi and pink or white sushi ginger in bulk for sushi bars, Korean restaurants and grocery shelves."
  },
  rice: {
    name: "Authentic Asian Rice",
    metaTitle: "Jasmine, Sushi & Glutinous Rice Wholesale",
    description: "Jasmine, sushi, glutinous, black and brown jasmine rice by the sack for UK restaurants, takeaways and Asian grocers.",
    intro: "Rice for Thai, Japanese, Chinese and Korean dishes. Tiger Tiger supplies jasmine rice, sushi rice, Thai glutinous (sticky) rice, black rice, red cargo rice and brown jasmine rice in bulk to UK food businesses."
  },
  sauces: {
    name: "Asian Cooking Sauces",
    metaTitle: "Oyster Sauce, Satay & Fish Sauce Wholesale",
    description: "Oyster sauce, soy sauce, fish sauce, satay, sriracha, sweet chilli, rice vinegar and tamarind in bulk for UK restaurants and takeaways.",
    intro: "Sauces for Chinese, Thai and Malaysian cooking. Order oyster sauce, light and dark soy sauce, fish sauce, Malaysian satay sauce, sriracha, sweet chilli, rice vinegar, laksa sauce and tamarind in bulk."
  },
  seasoning: {
    name: "Seasoning",
    metaTitle: "MSG Seasoning & Palm Sugar Wholesale",
    description: "MSG seasoning and palm sugar in bulk for UK restaurants, takeaways and Asian grocers. Open a Tiger Tiger trade account to order.",
    intro: "MSG adds savoury depth to soups, stir fries and fried rice. Palm sugar balances Thai curries, sauces and desserts. Tiger Tiger supplies both in bulk to UK food businesses."
  },
  snacks: {
    name: "Snacks",
    metaTitle: "Fortune Cookies & Asian Snacks Wholesale",
    description: "Fortune cookies, dried mango, roasted chestnuts, chilli peanuts, roasted chickpeas and seed bars in bulk for UK takeaways and shops.",
    intro: "Fortune cookies to send out with takeaway orders, plus snacks for shop shelves. Tiger Tiger supplies fortune cookies, dried mango, roasted chestnuts, chilli peanuts, flavoured chickpeas, popping candy biscuit sticks and seed bars in bulk."
  },
  spices: {
    name: "Asian Seasonings & Spices",
    metaTitle: "Star Anise, Gochugaru & Asian Spices Wholesale",
    description: "Star anise, gochugaru, white pepper, cassia bark, garlic granules, chilli and crispy fried onions in bulk for UK kitchens.",
    intro: "Whole and ground spices for Chinese, Korean and Malaysian cooking. Order star anise, cassia bark, gochugaru, white pepper, garlic granules, chilli powder, Malaysian curry powder and crispy fried onions and shallots in bulk."
  },
  "taste-japan": {
    name: "Japanese Ingredients",
    metaTitle: "Panko, Mirin & Japanese Ingredients Wholesale",
    description: "Panko breadcrumbs, mirin, teriyaki sauce, Japanese mayo, tempura batter, sushi nori and wasabi in bulk for UK sushi bars and restaurants.",
    intro: "Japanese ingredients for sushi bars and Japanese menus. Order panko breadcrumbs, tempura batter, mirin, teriyaki sauce, Japanese mayo, sesame dressing, wasabi paste, sushi nori, sushi mats and sushi kits in bulk."
  }
};

export async function generateMetadata({ params }) {
  const { CategorySlug } = await params;
  const schemaInfo = categorySchemaMap[CategorySlug.toLowerCase()] || {
    name: CategorySlug.charAt(0).toUpperCase() + CategorySlug.slice(1),
    metaTitle: CategorySlug.charAt(0).toUpperCase() + CategorySlug.slice(1) + " Wholesale | Tiger Tiger",
    description: `Browse our ${CategorySlug.replace(/-/g, ' ')} collection. Premium Asian food ingredients for trade in the UK.`,
    intro: `Explore our premium range of ${CategorySlug.replace(/-/g, ' ')} ingredients supplied in bulk across the UK.`
  };
  
  const pageUrl = `https://www.tigertigerfoods.com/categories/${CategorySlug}/`;

  return {
    title: schemaInfo.metaTitle,
    description: schemaInfo.description,
    openGraph: {
      url: pageUrl,
    },
    alternates: { 
      canonical: pageUrl 
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
  if (!initialData?.success || !initialData.data?.length) {
    notFound();
  }

  // Fetch specific schema mapping or fallback gracefully
  const schemaInfo = categorySchemaMap[CategorySlug.toLowerCase()] || {
    name: CategorySlug.charAt(0).toUpperCase() + CategorySlug.slice(1),
    metaTitle: CategorySlug.charAt(0).toUpperCase() + CategorySlug.slice(1) + " Wholesale | Tiger Tiger",
    description: `Browse our ${CategorySlug} collection. Premium Asian food ingredients for trade in the UK.`,
    intro: `Explore our premium range of ${CategorySlug} ingredients supplied in bulk across the UK.`
  };

  // Sub-Category Schema Markup integration
  const subCategorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://www.tigertigerfoods.com/categories/${CategorySlug}/#webpage`,
        "url": `https://www.tigertigerfoods.com/categories/${CategorySlug}/`,
        "name": schemaInfo.metaTitle,
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
      
      {/* Client component ke andar heading aur uske neeche intro paragraph bheja hai */}
      <CategoryProductsClient 
        slug={CategorySlug} 
        categoryName={schemaInfo.name} 
        categoryIntro={schemaInfo.intro}
        initialData={initialData} 
      />
    </>
  );
}
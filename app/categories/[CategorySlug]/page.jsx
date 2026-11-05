import Link from "next/link";
import CategoryProductsClient from "../../Components/CategoryProductsClient";
import { getProductsByCategory, getCategories } from "../../action"; 
import { notFound } from "next/navigation";
import { buildMeta } from "@/lib/seo";

export const revalidate = 3600;

// All category schemas, meta titles, descriptions, and intro paragraphs mapped accurately
const categorySchemaMap = {
  alcohol: {
    name: "Alcohol",
    metaTitle: "Shaoxing Wine & Rice Wine Wholesale",
    description: "Shaoxing cooking wine and rice wine in bulk for UK restaurants, takeaways and Chinese kitchens. Open a Tiger Tiger trade account to order.",
    intro: "Shaoxing wine is the Chinese cooking wine used in stir fries, braises and marinades. Tiger Tiger supplies {{shaohsing-cooking-wine|Shaohsing cooking wine}} and {{rice-wine|rice wine}} in bulk to restaurants, takeaways and food businesses across the UK."
  },
  canned: {
    name: "Canned Asian Foods",
    metaTitle: "Bamboo Shoots, Baby Corn & Canned Asian Food",
    description: "Bamboo shoots, water chestnuts, baby corn, straw mushrooms, lychees and luncheon meat in bulk for UK kitchens. Open a trade account to order.",
    intro: "Stock the canned staples of Chinese and Thai cooking: {{bamboo-shoots-sliced|bamboo shoots}}, {{water-chestnuts-whole|water chestnuts}}, {{whole-baby-corn|baby corn}}, {{straw-mushrooms-whole|straw mushrooms}}, {{beansprouts|beansprouts}} and {{stir-fry-vegetables|stir fry vegetables}}. The range also covers {{lychees|lychees}}, {{longan|longan}}, {{rambutan|rambutan}}, {{mango-slices|mango slices}} and {{luncheon-meat|luncheon meat}}, all in bulk for trade."
  },
  "coconut-product": {
    name: "Coconut Products",
    metaTitle: "Creamed Coconut & Coconut Milk Wholesale",
    description: "Coconut milk, low fat coconut milk and creamed coconut in bulk for curries, soups and desserts. Supplying UK restaurants and food businesses.",
    intro: "Coconut milk and creamed coconut are the base of Thai curries, laksa and many desserts. Tiger Tiger supplies full fat {{coconut-milk|coconut milk}}, {{coconut-milk-low-fat|low fat coconut milk}} and {{creamed-coconut|creamed coconut}} in bulk to UK kitchens."
  },
  "dried-products": {
    name: "Dried Asian Ingredients",
    metaTitle: "Cashew Nuts, Peanuts, Sesame Seeds & Pappadums",
    description: "Cashew nuts, blanched peanuts, peanut kernels, sesame seeds and Madras pappadums in bulk for UK restaurants, takeaways and food makers.",
    intro: "Cashew nuts, peanuts and sesame seeds go into stir fries, satay, sauces and toppings across Asian menus. Order {{cashew-nuts|cashew nuts}}, {{blanched-peanut|blanched peanuts}}, {{peanut-kernels|peanut kernels}}, {{sesame-seeds|sesame seeds}} and {{madras-pappadums|Madras pappadums}} in bulk for your kitchen."
  },
  drinks: {
    name: "Asian Beverages & Drinks",
    metaTitle: "Aloe Vera Drink & Lychee Juice Wholesale",
    description: "Aloe vera drink, lychee, mango and guava juice, nata de coco drinks, coconut water and bubble tea in bulk for UK shops, cafes and restaurants.",
    intro: "Asian soft drinks for shelves, fridges and menus. The range includes {{aloe-vera|aloe vera drink}}, {{pulp-lychee-juice|Pulp+ lychee}}, {{pulp-mango-juice|mango}} and {{pulp-pink-guava-juice|pink guava juice}}, {{lychee-juice-with-nata-de-coco|juices with nata de coco}}, {{coconut-water|coconut water}} and {{bubble-tea-brown-sugar|bubble tea}}, all supplied in bulk for trade."
  },
  frozen: {
    name: "Frozen Asian Foods",
    metaTitle: "Frozen Gyoza, Dim Sum & Bao Buns Wholesale",
    description: "Frozen gyoza, dim sum, bao buns, spring roll pastry, dumpling wrappers, fish balls and edamame in bulk for UK restaurants and takeaways.",
    intro: "Frozen gyoza, dim sum and bao buns need little prep before service. Tiger Tiger supplies {{vegetable-gyoza|gyoza}}, {{premium-ha-kau|ha kau}}, {{sui-mai|sui mai}}, {{gua-bao|gua bao}}, {{large-mantou|mantou}}, {{spring-roll-pastry-10x10|spring roll}} and {{dumpling-pastry|dumpling pastry}}, {{fish-ball|fish balls}}, {{shelled-edamame|edamame}} and frozen Thai herbs in bulk."
  },
  "instant-noodles": {
    name: "Instant Asian Noodles",
    metaTitle: "Tteokbokki & Instant Noodles Wholesale",
    description: "Instant tteokbokki, Korean stir fry noodles, tom yum and pho noodles in bulk for UK convenience stores, Asian grocers and cafes.",
    intro: "Korean and Southeast Asian instant noodles for shop shelves and quick menus. Order {{tteok-bokki-sweet-spicy|instant tteokbokki}}, {{korean-hot-chicken-stir-fry|Korean hot chicken}} and {{korean-spicy-beef|spicy beef stir fry noodles}}, {{hot-n-sour-tom-yum|tom yum}}, {{chicken-pho|chicken pho}} and {{asia-street-noodles-teriyaki|Asia Street noodles}} in bulk."
  },
  noodles: {
    name: "Authentic Asian Noodles",
    metaTitle: "Udon, Rice & Egg Noodles Wholesale",
    description: "Udon, soba, ramen, egg noodles, pad thai rice noodles and rice vermicelli in bulk for UK restaurants, takeaways and Asian grocers.",
    intro: "Noodles for Japanese, Chinese, Thai and Korean dishes. Tiger Tiger supplies {{udon-noodle|udon}}, {{soba-noodle|soba}} and {{ramen-noodle|ramen noodles}}, {{egg-noodles|egg noodles}}, {{pad-thai-rice-noodles|pad thai rice noodles}}, {{rice-sticks-5mm|rice sticks}}, {{singapore-rice-vermicelli|Singapore rice vermicelli}} and {{sliced-rice-cake|Korean rice cakes}} in bulk to UK food businesses."
  },
  oils: {
    name: "Oils",
    metaTitle: "Crispy Chilli Oil & Sesame Oil Wholesale",
    description: "Sichuan crispy chilli oil, chilli oil with peanuts or black beans, and pure or blended sesame oil in bulk for UK restaurants and takeaways.",
    intro: "Crispy chilli oil and sesame oil finish noodles, dumplings and stir fries. Order {{sichuan-crispy-chilli-oil|Sichuan crispy chilli oil}}, {{crispy-chilli-oil-with-peanuts|crispy chilli oil with peanuts}} or {{crispy-chilli-oil-with-black-beans|black beans}}, and {{pure-sesame-oil|pure}} or {{blended-sesame-oil|blended sesame oil}} in bulk for your kitchen or shelves."
  },
  pastes: {
    name: "Asian Curry & Cooking Pastes",
    metaTitle: "Katsu Curry, Thai Curry Paste & Gochujang",
    description: "Katsu curry sauce, Thai red and green curry paste, gochujang, doenjang, ssamjang and lemongrass paste in bulk for UK kitchens.",
    intro: "Ready-made pastes for Japanese, Thai and Korean dishes. Tiger Tiger supplies katsu curry in {{katsu-curry-mild|mild}} and {{katsu-curry-hot|hot}}, Thai {{red-curry-paste|red}} and {{green-curry-paste|green curry paste}}, {{gochujang-hot-pepper-paste|gochujang}}, {{doenjang-soybean-paste|doenjang}}, {{ssamjang-garlic-soybean-paste|ssamjang}}, and minced {{minced-lemongrass|lemongrass}}, {{minced-galangal|galangal}} and {{minced-basil|basil}} in bulk."
  },
  "preserve-and-pickles": {
    name: "Asian Preserves & Pickles",
    metaTitle: "Kimchi & Sushi Ginger Wholesale",
    description: "Kimchi and pink or white pickled sushi ginger in bulk for UK sushi bars, Korean restaurants, takeaways and Asian grocers.",
    intro: "Kimchi goes with Korean dishes and pickled ginger is served with sushi. Order {{kimchi|kimchi}} and {{pink-sushi-ginger|pink}} or {{white-sushi-ginger|white sushi ginger}} in bulk for sushi bars, Korean restaurants and grocery shelves."
  },
  rice: {
    name: "Authentic Asian Rice",
    metaTitle: "Jasmine, Sushi & Glutinous Rice Wholesale",
    description: "Jasmine, sushi, glutinous, black and brown jasmine rice by the sack for UK restaurants, takeaways and Asian grocers.",
    intro: "Rice for Thai, Japanese, Chinese and Korean dishes. Tiger Tiger supplies {{jasmine-rice|jasmine rice}}, {{sushi-rice|sushi rice}}, {{thai-glutinous-rice|Thai glutinous (sticky) rice}}, {{black-rice|black rice}}, {{red-cargo-rice|red cargo rice}} and {{brown-jasmine-rice|brown jasmine rice}} in bulk to UK food businesses."
  },
  sauces: {
    name: "Asian Cooking Sauces",
    metaTitle: "Oyster Sauce, Satay & Fish Sauce Wholesale",
    description: "Oyster sauce, soy sauce, fish sauce, satay, sriracha, sweet chilli, rice vinegar and tamarind in bulk for UK restaurants and takeaways.",
    intro: "Sauces for Chinese, Thai and Malaysian cooking. Order {{oyster-sauce|oyster sauce}}, {{light-soy-sauce|light}} and {{dark-soy-sauce|dark soy sauce}}, {{fish-sauce|fish sauce}}, {{malaysian-satay-sauce|Malaysian satay sauce}}, {{sriracha-chilli-sauce|sriracha}}, {{sweet-chilli-sauce|sweet chilli}}, {{rice-vinegar|rice vinegar}}, {{laksa-sauce|laksa sauce}} and {{tamarind-concentrate|tamarind}} in bulk."
  },
  seasoning: {
    name: "Seasoning",
    metaTitle: "MSG Seasoning & Palm Sugar Wholesale",
    description: "MSG seasoning and palm sugar in bulk for UK restaurants, takeaways and Asian grocers. Open a Tiger Tiger trade account to order.",
    intro: "{{msg|MSG}} adds savoury depth to soups, stir fries and fried rice. {{palm-sugar|Palm sugar}} balances Thai curries, sauces and desserts. Tiger Tiger supplies both in bulk to UK food businesses."
  },
  snacks: {
    name: "Snacks",
    metaTitle: "Fortune Cookies & Asian Snacks Wholesale",
    description: "Fortune cookies, dried mango, roasted chestnuts, chilli peanuts, roasted chickpeas and seed bars in bulk for UK takeaways and shops.",
    intro: "Fortune cookies to send out with takeaway orders, plus snacks for shop shelves. Tiger Tiger supplies {{fortune-cookies|fortune cookies}}, {{dried-preserved-mango|dried mango}}, {{roasted-chestnut|roasted chestnuts}}, {{chilli-peanut|chilli peanuts}}, flavoured {{chick-peas-bbq-flavour|chickpeas}}, {{popping-candy-biscuits-sticks-cappuccino|popping candy biscuit sticks}} and {{mixed-seed-and-peanut-bar|seed bars}} in bulk."
  },
  spices: {
    name: "Asian Seasonings & Spices",
    metaTitle: "Star Anise, Gochugaru & Asian Spices Wholesale",
    description: "Star anise, gochugaru, white pepper, cassia bark, garlic granules, chilli and crispy fried onions in bulk for UK kitchens.",
    intro: "Whole and ground spices for Chinese, Korean and Malaysian cooking. Order {{star-anise|star anise}}, {{cassia-bark-cinnamon|cassia bark}}, {{red-pepper-powder-gochugaru|gochugaru}}, {{white-pepper-powder|white pepper}}, {{garlic-granules|garlic granules}}, {{chilli-powder|chilli powder}}, {{malaysian-curry-powder|Malaysian curry powder}} and {{crispy-fried-onions|crispy fried onions}} and {{crispy-fried-shallots|shallots}} in bulk."
  },
  "taste-japan": {
    name: "Japanese Ingredients",
    metaTitle: "Panko, Mirin & Japanese Ingredients Wholesale",
    description: "Panko breadcrumbs, mirin, teriyaki sauce, Japanese mayo, tempura batter, sushi nori and wasabi in bulk for UK sushi bars and restaurants.",
    intro: "Japanese ingredients for sushi bars and Japanese menus. Order {{panko-breadcrumbs|panko breadcrumbs}}, {{tempura-batter-mix|tempura batter}}, {{mirin|mirin}}, {{teriyaki-sauce|teriyaki sauce}}, {{japanese-mayo|Japanese mayo}}, {{roasted-sesame-dressing|sesame dressing}}, {{wasabi-paste|wasabi paste}}, {{sushi-nori|sushi nori}}, {{sushi-mats|sushi mats}} and {{sushi-meal-kit|sushi kits}} in bulk."
  }
};

// {{product-slug|link text}} ko asli product links mein badalta hai.
// URL: /categories/<category>/<product-slug>/<SKU> (SKU products ke data se aata hai)
function renderIntroWithLinks(text, categorySlug, products) {
  if (!text) return null;
  const parts = text.split(/\{\{([^|}]+)\|([^}]+)\}\}/g);
  const out = [];
  for (let i = 0; i < parts.length; i += 3) {
    out.push(parts[i]);
    if (i + 2 < parts.length) {
      const productSlug = parts[i + 1].trim();
      const label = parts[i + 2];
      const product = products.find((p) => p.slug === productSlug);
      out.push(
        product ? (
                  <Link
            key={`${productSlug}-${i}`}
            href={`/products/${product.slug}/${product.SKU}/`}
            className="font-semibold text-[#431A4F]"
          >
            {label}
          </Link>
        ) : (
          label
        )
      );
    }
  }
  return out;
}

export async function generateMetadata({ params }) {
  const { CategorySlug } = await params;
  const readable = CategorySlug.replace(/-/g, ' ');
  const prettyName = readable.charAt(0).toUpperCase() + readable.slice(1);

  const schemaInfo = categorySchemaMap[CategorySlug.toLowerCase()] || {
    metaTitle: `${prettyName} Wholesale`,
    description: `Browse our ${readable} collection. Premium Asian food ingredients for trade in the UK.`,
  };

  // buildMeta adds the full OG and Twitter tags and the canonical URL
  return buildMeta({
    title: schemaInfo.metaTitle,
    description: schemaInfo.description,
    path: `/categories/${CategorySlug}/`,
  });
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

  // Intro text mein product links generate karo
  const introWithLinks = renderIntroWithLinks(schemaInfo.intro, CategorySlug, initialData.data);

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
        categoryIntro={introWithLinks}
        initialData={initialData} 
      />
    </>
  );
}
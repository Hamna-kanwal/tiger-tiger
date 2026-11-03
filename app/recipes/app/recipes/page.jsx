import Image from 'next/image';
import Link from 'next/link';
import { allRecipes } from './recipes-data';
import RecipesExplorer from './RecipesExplorer';

// Server Component: H1, hero, schema and the full recipe link list are all in the initial HTML.

const stats = [
  { label: "RECIPES", value: "50+" },
  { label: "CUISINES", value: "10+" },
  { label: "TT PRODUCTS", value: "200+" },
  { label: "QUICKEST DISH", value: "15 min" },
];

const recipesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.tigertigerfoods.com/recipes/#webpage",
      "url": "https://www.tigertigerfoods.com/recipes/",
      "name": "Recipes | Tiger Tiger Foods",
      "description": "Pan-Asian recipes across Japanese, Chinese, Korean, Thai and Vietnamese cuisines using Tiger Tiger ingredients.",
      "isPartOf": { "@id": "https://www.tigertigerfoods.com/#website" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tigertigerfoods.com/" },
        { "@type": "ListItem", "position": 2, "name": "Recipes", "item": "https://www.tigertigerfoods.com/recipes/" }
      ]
    }
  ]
};

export default function RecipesPage() {
  return (
    <>
      {/* Plain script tag so the schema is in the server HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipesPageSchema).replace(/</g, '\\u003c') }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-10  md:mt-10">
        <div>
          <h1 className="text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
            Authentic Asian Recipes
          </h1>
        </div>
        <div className="relative h-[400px] md:h-[600px] rounded-[20px] md:rounded-[30px] overflow-hidden">
          <Image src="/receipes.png" alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />

          <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-20 z-10">
            <div className="max-w-xl">
              {/* was a second <h1>; now h2 so the page has a single H1 */}
              <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
                Cook Bold. <br />
                Cook Authentic.
              </h2>
              <p className="text-white/90 text-sm md:text-lg font-light mb-8 md:mb-12 max-w-md leading-relaxed">
                Each recipe is crafted around a Tiger Tiger product discover flavours from Japan, China, Korea, Thai and Many more.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-8 w-full md:w-fit flex overflow-x-auto md:overflow-visible no-scrollbar gap-6 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col min-w-fit border-r border-white/10 last:border-0 pr-6 md:pr-8 last:pr-0">
                  <span className="text-white text-xl md:text-3xl font-bold mb-1">{stat.value}</span>
                  <span className="text-white/60 text-[9px] md:text-xs tracking-[0.2em] font-bold uppercase whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & GRID (client component) --- */}
      <RecipesExplorer />

      {/* --- Crawlable links to every recipe (server-rendered) --- */}
   
    </>
  );
}

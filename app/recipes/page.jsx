"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { Search } from 'lucide-react'; 

export const allRecipes = [
  { 
    id: "chicken-katsu", 
    title: "Chicken Katsu Curry With Rice", 
    cuisine: "Japanese", 
    product: "Sauces", 
    time: "30 min", 
    servings: "5 Serving", 
    calories: "320", 
    image: "/curry.png",
    ingredients: [
      "1 tablespoon vegetable oil",
      "1 medium yellow onion, thinly sliced",
      "1 medium carrot, peeled and cut into small chunks",
      "1 large potato, peeled and cut into medium chunks",
      "2½ cups (600ml) water",
      "1 box (4 blocks) Tiger Tiger Golden Katsu Curry Japanese Style HOT Curry Mix Block"
    ],
    method: [
      "Simmer Vegetables: Sauté 1 sliced onion and chunks of 1 carrot and 1 potato in a pot with a little oil. Add 2½ cups of water, bring to a boil, and simmer until tender (approx. 15-20 min)." ,
      "Dissolve Curry Blocks: Turn off the heat. Break the Tiger Tiger Golden Katsu Curry Mix Blocks into the pot. Stir until fully dissolved. Turn heat back on low and simmer 5-10 minutes until thick. Keep warm.",
      "Prepare Chicken Katsu: Season 2 flattened chicken breasts with salt and pepper. Dredge in flour, dip in beaten egg, and coat thoroughly with Panko breadcrumbs.",
      "Fry Katsu: Heat 1 inch of oil in a skillet over medium-high heat. Fry each breaded chicken breast until deep golden brown and cooked through (4-5 minutes per side). Drain on paper towels.",
      "Serve: Slice the chicken katsu. Serve with cooked white rice, and ladle the rich Tiger Tiger Katsu Curry Sauce over the rice and katsu"
    ]
  },
  { 
    id: "miso-ramen", 
    title: "Authentic Miso Ramen", 
    cuisine: "Japanese", 
    product: "Noodles", 
    time: "20 min", 
    servings: "2 Serving", 
    calories: "450", 
    image: "/receipes.png",
    ingredients: ["Ramen Noodles", "Miso Paste", "Soft boiled egg", "Green onions", "Nori sheets", "Sliced bamboo shoots"],
    method: ["Prepare Broth: Combine dashi stock with miso paste in a pot and bring to a gentle simmer.", "Cook Noodles: Boil ramen noodles until al dente.", "Assemble: Place noodles in a bowl, pour over broth.", "Garnish: Top with egg, onions, nori, and bamboo shoots."]
  },
  { 
    id: "thai-green-curry", 
    title: "Thai Green Curry", 
    cuisine: "Thai", 
    product: "Sauces", 
    time: "25 min", 
    servings: "4 Serving", 
    calories: "410", 
    image: "/receipes.png",
    ingredients: ["Tiger Tiger Green Curry Paste", "400ml Coconut Milk", "Bamboo shoots", "Chicken/Tofu", "Basil", "Fish sauce"],
    method: ["Sauté Paste: Fry paste until fragrant.", "Add Protein: Stir in your protein.", "Simmer: Add coconut milk and bamboo shoots. Simmer 10-15 min.", "Finish: Stir in basil and fish sauce."]
  },
  { id: "kimchi-noodles", title: "Spicy Kimchi Noodles", cuisine: "Korean", product: "Noodles", time: "15 min", servings: "2 Serving", calories: "380", image: "/receipes.png", ingredients: ["Korean Noodles", "Kimchi", "Gochujang", "Sesame oil"], method: ["Boil noodles.", "Mix with kimchi and sauce."] },
  { id: "bulgogi-beef", title: "Korean BBQ Bulgogi", cuisine: "Korean", product: "Spices & Seasonings", time: "35 min", servings: "4 Serving", calories: "520", image: "/receipes.png", ingredients: ["Beef slices", "Bulgogi marinade", "Onions", "Sesame seeds"], method: ["Marinate beef.", "Grill or pan-fry with onions."] },
  { id: "egg-fried-rice", title: "Special Fried Rice", cuisine: "Chinese", product: "Rice", time: "20 min", servings: "3 Serving", calories: "350", image: "/receipes.png", ingredients: ["Cooked Rice", "Eggs", "Soy Sauce", "Mixed Veggies"], method: ["Scramble eggs.", "Stir fry veggies and rice with soy sauce."] },
  { id: "dim-sum", title: "Steamed Prawn Dim Sum", cuisine: "Chinese", product: "Frozen", time: "12 min", servings: "3 Serving", calories: "180", image: "/receipes.png", ingredients: ["Tiger Tiger Frozen Dim Sum", "Soy dipping sauce"], method: ["Steam for 10-12 minutes.", "Serve hot."] },
  { id: "butter-chicken", title: "Butter Chicken Masala", cuisine: "Indian", product: "Sauces", time: "40 min", servings: "4 Serving", calories: "550", image: "/receipes.png", ingredients: ["Chicken chunks", "Butter Chicken Paste", "Cream", "Butter"], method: ["Fry chicken.", "Add paste and cream, simmer until thick."] },
];

const RecipeHero = () => {
  const stats = [
    { label: "RECIPES", value: "50+" },
    { label: "CUISINES", value: "5" },
    { label: "TT PRODUCTS", value: "200+" },
    { label: "QUICKEST DISH", value: "15 min" },
  ];

  const cuisines = [
    { name: "Japanese", count: 12 },
    { name: "Korean", count: 11 },
    { name: "Thai", count: 13 },
    { name: "Chinese", count: 11 },
    { name: "Indian", count: "08" },
  ];

  const productTypes = ["All", "Sauces", "Noodles", "Spices & Seasonings", "Rice", "Frozen"];

  const [activeCuisine, setActiveCuisine] = useState("Japanese");
  const [activeProduct, setActiveProduct] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      const matchesCuisine = recipe.cuisine === activeCuisine;
      const matchesProduct = activeProduct === "All" || recipe.product === activeProduct;
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCuisine && matchesProduct && matchesSearch;
    });
  }, [activeCuisine, activeProduct, searchQuery]);

  return (
    <> 
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-10 mt-20 md:mt-30">
        <div className="relative h-[400px] md:h-[600px] rounded-[20px] md:rounded-[30px] overflow-hidden">
          <Image src="/receipes.png" alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />

          <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-20 z-10">
            <div className="max-w-xl">
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
                Cook Bold. <br />
                Cook Authentic.
              </h1>
              <p className="text-white/90 text-sm md:text-lg font-light mb-8 md:mb-12 max-w-md leading-relaxed">
                Each recipe is crafted around a Tiger Tiger product—discover flavours from Japan, China, Korea, and India.
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

      {/* --- FILTER & GRID SECTION --- */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-6 md:gap-10 border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
          {cuisines.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveCuisine(item.name);
                setActiveProduct("All"); 
              }}
              className={`pb-4 text-[14px] md:text-lg font-medium transition-all relative whitespace-nowrap ${
                activeCuisine === item.name ? "text-[#431A4F]" : "text-gray-400"
              }`}
            >
              {item.name} <span className="ml-1 text-xs opacity-80">({item.count})</span>
              {activeCuisine === item.name && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#431A4F] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            <span className="text-gray-500 text-[10px] md:text-sm font-semibold mr-2 uppercase tracking-wider">Products:</span>
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveProduct(type)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all border whitespace-nowrap ${
                  activeProduct === type ? "bg-[#431A4F] text-white border-[#431A4F]" : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-[320px]">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search...`} 
              className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none bg-gray-50/50" 
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, idx) => (
              <Link href={`/recipes/${recipe.id}`} key={idx}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300 transform md:hover:-translate-y-1">
                  <div className="relative h-48 md:h-56 w-full">
                    <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="text-[#431A4F] text-[10px] md:text-xs font-bold uppercase">{recipe.cuisine}</p>
                    <h3 className="text-gray-900 font-bold text-base md:text-[18px] mt-1 mb-4 group-hover:text-[#431A4F] transition-colors line-clamp-1">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-gray-400 text-[11px] md:text-[13px]">
                      <span>{recipe.time}</span>
                      <span>{recipe.servings}</span>
                      <span className="font-medium text-[#431A4F]/70">{recipe.calories} Kcal</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400">
              No recipes found for this selection.
            </div>
          )}
        </div>
      </section>

      {/* --- BANNER SECTION (Fixed Mobile Overflow) --- */}
      <section className="relative w-full py-8 md:py-12 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl relative  h-[500px] md:h-[400px] flex items-center justify-center">
          
          {/* Background Image - Made sure it covers everything */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/receipes.png" 
              alt="Background" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-black/75 md:bg-black/70 backdrop-blur-[2px]"></div>
          </div>

          {/* Floating Image 1 (Wow Chow) - Adjusted to stay inside */}
          <div className="absolute left-[-20px] bottom-[-30px] w-44 md:w-64 z-20 opacity-80 md:opacity-100 transform md:rotate-12">
            <img src="/wow chow.png" alt="Wow Chow" className="w-full h-auto" />
          </div>

          {/* Content - Centered */}
          <div className="relative z-10 text-center px-6 max-w-2xl">
            <p className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">Tiger Tiger Products</p>
            <h2 className="text-white text-3xl md:text-[55px] font-extrabold mb-8 tracking-tight leading-tight">
              SHOP THE <span className="text-[#F1B335] md:text-white">INGREDIENTS</span>
            </h2>
            <Link href="/products">
              <button className="group px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-full font-bold text-sm md:text-lg hover:bg-[#431A4F] hover:text-white transition-all duration-300 shadow-xl flex items-center mx-auto">
                VIEW PRODUCTS 
                <svg className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Floating Image 2 (Mayo) - Adjusted to stay inside */}
          <div className="absolute right-[-10px] top-[320px] md:bottom-2 md:top-auto w-32 md:w-44 z-20 opacity-80 md:opacity-100 transform -rotate-12">
            <img src="/mayo.png" alt="Mayo" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeHero;
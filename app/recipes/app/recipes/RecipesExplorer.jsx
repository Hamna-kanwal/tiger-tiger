"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { allRecipes } from './recipes-data';

const CUISINES = ["Japanese", "Korean", "Thai", "Chinese", "Others"];

const productTypes = ["All", "Sauces", "Noodles", "Spices & Seasonings", "Rice", "Frozen"];

const cuisineHeadings = {
  "Japanese": "Authentic Japanese Recipes",
  "Korean": "Authentic Korean Recipes",
  "Thai": "Authentic Thai Recipes",
  "Chinese": "Authentic Chinese Recipes",
  "Others": "Specialty & Global Recipes"
};

// Counts are calculated from the data, so they can never go out of sync
const cuisines = CUISINES.map((name) => ({
  name,
  count: allRecipes.filter((r) => r.cuisine === name).length,
}));

export default function RecipesExplorer() {
  const [activeCuisine, setActiveCuisine] = useState("Japanese");
  const [activeProduct, setActiveProduct] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ?cuisine=Korean support: read from the URL after mount (no useSearchParams, so no Suspense needed)
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('cuisine');
    if (fromUrl && CUISINES.includes(fromUrl)) {
      setActiveCuisine(fromUrl);
    }
  }, []);

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      const matchesCuisine = recipe.cuisine === activeCuisine;
      const matchesProduct = activeProduct === "All" || recipe.product === activeProduct;
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCuisine && matchesProduct && matchesSearch;
    });
  }, [activeCuisine, activeProduct, searchQuery]);

  return (
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

      <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter text-[#431A4F]">
        {cuisineHeadings[activeCuisine]}
      </h2>

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
            placeholder="Search..."
            aria-label="Search recipes"
            className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none bg-gray-50/50"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Link href={`/recipes/${recipe.id}/`} key={recipe.id}>
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
  );
}

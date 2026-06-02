"use client";

import React, { use } from 'react';
import Image from 'next/image';
import { allRecipes } from '../page'; 

export default function RecipeDetailPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const recipe = allRecipes.find((r) => r.id === id) || allRecipes[0];

  // If this entry is a collection (has nested `recipes`), pick the first sub-recipe
  // but keep the original object as `recipe` for title/meta.
  const isCollection = Array.isArray(recipe?.recipes) && recipe.recipes.length > 0;
  const displayRecipe = isCollection ? recipe.recipes[0] : recipe;

  return (
    <div className="bg-white min-h-screen pb-20 pt-32">
      <section className="max-w-6xl mx-auto px-4">
        
        {/* 1. Banner Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden mb-12 shadow-sm">
          <Image 
            src={recipe.image} 
            alt={recipe.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* 2. Recipe Title & Info Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#431A4F] text-lg font-medium mb-4 uppercase tracking-wider">
            {recipe.cuisine}
          </p>
          <h1 className="text-[#1A1A1A] text-4xl md:text-5xl font-bold mb-12">
            {recipe.title}
          </h1>
          
          {/* 3 Badges: Time, Servings, and Calories */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="bg-[#E5D5BC] p-6 rounded-2xl w-32 shadow-sm">
                <p className="text-2xl font-bold text-[#431A4F]">
                  {recipe.time?.split(' ')[0]}
                </p>
                <p className="text-[20px] font-bold uppercase text-[#431A4F]/80">Mins</p>
            </div>
            <div className="bg-[#E5D5BC] p-6 rounded-2xl w-32 shadow-sm">
                <p className="text-2xl font-bold text-[#431A4F]">
                  {recipe.servings?.split(' ')[0]}
                </p>
                <p className="text-[20px] font-bold uppercase text-[#431A4F]/80">Serves</p>
            </div>
            {/* New Calories Badge */}
            <div className="bg-[#E5D5BC] p-6 rounded-2xl w-32 shadow-sm">
                <p className="text-2xl font-bold text-[#431A4F]">
                  {recipe.calories || "---"}
                </p>
                <p className="text-[20px] font-bold uppercase text-[#431A4F]/80">Kcal</p>
            </div>
          </div>
        </div>

        {/* 3. Ingredients & Method Section */}
        <div className="max-w-6xl mx-auto bg-white overflow-hidden">
          
          <div className="grid grid-cols-2 border-t-2 border-b-2 bg-white" style={{ borderColor: '#D0B989' }}>
            <div className="py-6 text-center text-xl font-bold text-[#431A4F] border-r-2" style={{ borderColor: '#D0B989' }}>
              Ingredients
            </div>
            <div className="py-6 text-center text-xl font-bold text-[#431A4F]">
              Method
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:border-r-2" style={{ borderColor: '#D0B989' }}>
              <ul className="space-y-5">
                {(displayRecipe?.ingredients || []).map((item, index) => (
                  <li key={index} className="text-gray-700 text-[15px] flex items-start">
                    <span className="mr-3 text-black font-bold text-lg leading-none">•</span> 
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-white">
              <ul className="space-y-8">
                {(
                  // Normalize method into an array of strings for display.
                  Array.isArray(displayRecipe?.method)
                    ? displayRecipe.method
                    : (typeof displayRecipe?.method === 'string' ? displayRecipe.method.split(/\n|\.|;|\d+\)/).map(s => s.trim()).filter(Boolean) : [])
                ).map((m, index) => (
                  <li key={index} className="flex items-start text-gray-700 text-[15px] leading-relaxed">
                    <span className="mr-4 text-black font-bold text-lg leading-none mt-1">•</span>
                    <p>{m}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
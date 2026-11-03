import React from 'react';
import Image from 'next/image';
import { normalizeMethod } from '../recipes-data';

// Server Component (no "use client"): everything below is in the initial HTML.

const stripNumber = (name) => String(name || '').replace(/^\d+\.\s*/, '');

export default function RecipeDetailContent({ recipe }) {
  // A collection (e.g. spring rolls) renders ALL its sub-recipes, not just the first one
  const isCollection = Array.isArray(recipe?.recipes) && recipe.recipes.length > 0;
  const sections = isCollection ? recipe.recipes : [recipe];

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
            <div className="bg-[#E5D5BC] p-6 rounded-2xl w-32 shadow-sm">
              <p className="text-2xl font-bold text-[#431A4F]">
                {recipe.calories || "---"}
              </p>
              <p className="text-[20px] font-bold uppercase text-[#431A4F]/80">Kcal</p>
            </div>
          </div>
        </div>

        {/* 3. Ingredients & Method: one block per (sub-)recipe */}
        {sections.map((r, i) => (
          <div key={i} className="max-w-6xl mx-auto bg-white overflow-hidden mb-16">
            {isCollection && (
              <h2 className="text-[#431A4F] text-2xl md:text-3xl font-bold text-center mb-8">
                {stripNumber(r.recipe_name)}
              </h2>
            )}

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
                  {(r?.ingredients || []).map((item, index) => (
                    <li key={index} className="text-gray-700 text-[15px] flex items-start">
                      <span className="mr-3 text-black font-bold text-lg leading-none">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-white">
                <ul className="space-y-8">
                  {normalizeMethod(r?.method).map((m, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-[15px] leading-relaxed">
                      <span className="mr-4 text-black font-bold text-lg leading-none mt-1">•</span>
                      <p>{m}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* 4. Tips (collections like spring rolls have them in the data) */}
        {Array.isArray(recipe.tips_for_success) && recipe.tips_for_success.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#431A4F] text-2xl font-bold mb-4">Tips for Success</h2>
            <ul className="space-y-3">
              {recipe.tips_for_success.map((tip, index) => (
                <li key={index} className="flex items-start text-gray-700 text-[15px] leading-relaxed">
                  <span className="mr-4 text-black font-bold text-lg leading-none mt-1">•</span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

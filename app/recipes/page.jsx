"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react'; 

const RecipeHero = () => {
  // Data as per your images
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

  // Dummy Recipe Data exactly like your screenshot
  const recipes = Array(6).fill({
    title: "Chicken Katsu Curry with Rice",
    cuisine: "Japanese",
    time: "30 min",
    servings: "5 Serving",
    image: "/receipes.png" 
  });

  const [activeCuisine, setActiveCuisine] = useState("Japanese");
  const [activeProduct, setActiveProduct] = useState("All");

  return (
    <> 
      {/* Hero Section - No changes to your padding/margin */}
   <section className="max-w-7xl mx-auto px-4 py-10 mt-30">
      <div className="relative md:[750px] h-[500px] md:h-[600px] rounded-[30px] overflow-hidden ">
        
        {/* Background Image */}
        <Image 
          src="/receipes.png" // Apni image ka path yahan dein
          alt="Asian Food Spread"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 z-10">
          
          {/* Main Titles */}
          <div className="max-w-xl">
            <h1 className="text-white text-5xl md:[32px] font-bold leading-tight mb-2">
              Cook Bold. <br />
              Cook Authentic.
            </h1>
            <p className="text-white/90 text-lg md:text-[16px] font-light mb-12 max-w-md leading-relaxed">
              Each recipe is crafted around a Tiger Tiger product—discover flavours from Japan, China, Korea, and India.
            </p>
          </div>

          {/* Stats Box */}
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 w-fit flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col border-r border-white/10 last:border-0 pr-8 last:pr-0">
                <span className="text-white text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </span>
                <span className="text-white/60 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

      {/* Filter & Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Cuisine Tabs */}
        <div className="flex items-center gap-10 border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
          {cuisines.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveCuisine(item.name)}
              className={`pb-4 text-[15px] md:text-lg font-medium transition-all relative whitespace-nowrap ${
                activeCuisine === item.name ? "text-[#4e1a51]" : "text-gray-400"
              }`}
            >
              {item.name} <span className="ml-1 text-sm opacity-80">({item.count})</span>
              {activeCuisine === item.name && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4e1a51] rounded-t-full" />}
            </button>
          ))}
        </div>

        {/* Product Pills & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            <span className="text-gray-500 text-sm font-semibold mr-2 uppercase tracking-wider">Products:</span>
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveProduct(type)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap ${
                  activeProduct === type ? "bg-[#4e1a51] text-white border-[#4e1a51]" : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-[320px]">
            <input type="text" placeholder={`Search ${activeCuisine.toLowerCase()} recipes...`} className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none bg-gray-50/50" />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Recipes Grid - Matches your screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-56 w-full">
                <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-[#4e1a51] text-xs font-bold uppercase">{recipe.cuisine}</p>
                <h3 className="text-gray-900 font-bold text-[18px] mt-1 mb-4">{recipe.title}</h3>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-gray-400 text-[13px]">
                  <span>{recipe.time}</span>
                  <span>{recipe.servings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecipeHero;
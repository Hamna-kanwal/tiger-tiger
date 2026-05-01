"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeSection = () => {
  const cuisines = [
    { name: 'Japanese', image: '/japnese_receipes.png' },
    { name: 'Chinese', image: '/chinese.png' },
    { name: 'Korean', image: '/korean_receipes.png' },
    { name: 'Thai', image: '/thai.png' },
    { name: 'Indian', image: '/indian.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="mb-10">
        <h2 className="text-[32px] md:text-[45px] font-black text-[#4B164C] uppercase tracking-tighter">
          Explore Recipes
        </h2>
        <p className="text-gray-500 max-w-xl">
          Discover the authentic taste of Asia with our curated traditional recipes.
        </p>
      </div>

      {/* Main Grid Container */}
      {/* 'group/main' ko sirf hover par blur activate karne ke liye use kiya hai */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[750px] group/main">
        {cuisines.map((item, index) => {
          // URL-friendly slug for recipes
          const slug = item.name.toLowerCase();

          return (
            <Link 
              key={item.name} 
              href={`/recipes/${slug}`}
              className={`relative overflow-hidden rounded-[2.5rem] bg-gray-200 transition-all duration-500 ease-in-out
                /* Default State: No blur */
                /* When hovering the container, blur ALL items */
                group-hover/main:blur-[2px] 
                /* But for the specific hovered item: Remove blur, scale up, and show shadow */
                hover:!blur-none hover:scale-[1.02] hover:z-20 hover:shadow-2xl
                ${index === 0 
                  ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' 
                  : 'h-[250px] md:h-full'
                }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Label Button */}
              <div className="absolute bottom-8 left-8 z-10 transition-all duration-500 group-hover:-translate-y-2">
                <span className="bg-white text-[#4B164C] px-8 py-3 rounded-2xl font-black text-xl shadow-xl block border border-white/20 uppercase tracking-tight">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeSection;
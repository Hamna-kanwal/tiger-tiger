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
        <div className="w-20 h-1.5 bg-[#4B164C] mt-2 mb-4"></div>
        <p className="text-gray-500 max-w-xl">
          Discover the authentic taste of Asia with our curated traditional recipes.
        </p>
      </div>

      {/* Main Grid Container (Blur Logic Hata Diya Gaya Hai) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[750px]">
        {cuisines.map((item, index) => {
          const slug = item.name.toLowerCase();

          return (
            <Link 
              key={item.name} 
              href={`/recipes/${slug}`}
              className={`relative group overflow-hidden rounded-[2.5rem] bg-gray-100 transition-all duration-500 ease-in-out shadow-md
                /* Hover effect: Sirf Scale aur Shadow barhega */
                hover:scale-[1.02] hover:shadow-2xl hover:z-10
                ${index === 0 
                  ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' 
                  : 'h-[250px] md:h-full'
                }`}
            >
              {/* Image with Zoom effect on Hover */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Solid Gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Label Button with Slide-up */}
              <div className="absolute bottom-8 left-8 z-10 transition-all duration-500 group-hover:-translate-y-2">
                <span className="bg-white text-[#4B164C] px-8 py-3 rounded-2xl font-black text-xl shadow-xl block border border-white/20 uppercase tracking-tight transition-colors duration-300 group-hover:bg-[#4B164C] group-hover:text-white">
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
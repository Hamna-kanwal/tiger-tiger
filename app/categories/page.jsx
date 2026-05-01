"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
   { title: 'Alcohol', image: '/ALCOHOL.png' },
  { title: 'Canned', image: '/Canned.png' },
   { title: 'Dried Products', image: '/dried_products.png' },
  { title: 'Drinks', image: '/categories drinks.png' },
  { title: 'Frozen', image: '/categories-frozen.png' },
   { title: 'Instant Noodles', image: '/instant_noodles.png' },
  { title: 'Noodles', image: '/catrtegories_noodles.png' },
    { title: 'Oils', image: '/oil.png' },
    { title: 'Pastes', image: '/pastes.png' },
     { title: 'Rice', image: '/categories_rice.png' },
      { title: 'Sauces', image: '/categories_sauces.png' },
       { title: 'Snacks', image: '/categories_snacks.png' },
 { title: 'Taste Of Asia', image: '/categories_asia.png' },
 
 
];

export default function CategorySection() {
  const brandPurple = "#4e1a51";

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 mt-10">
      {/* Header Row */}
      <div className="mb-8 mt-8">
        <h2 className="text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
          Product Categories
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-[#431A4F] mb-6 opacity-90">
          We have wide variety of products ranging from drinks to noodles and frozen. You name it, we got it.
        </p>
      </div>

      {/* 9 Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => {
          // Logic to create a URL-friendly slug (e.g., "Taste Of Asia" -> "taste-of-asia")
          const categorySlug = category.title.toLowerCase().replace(/\s+/g, '-');

          return (
            <Link key={category.title} href={`/categories/${categorySlug}`}>
              <div className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-[2rem] cursor-pointer shadow-lg bg-gray-100">
                {/* Image Container */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/10" />

                {/* Label Button Overlay with Hover Invert Effect */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-fit z-20">
                  <div className="bg-white px-10 py-3 rounded-md shadow-md transition-all duration-300 hover:!bg-[#4e1a51] group/btn">
                    <span 
                      className="text-xl font-semibold whitespace-nowrap transition-colors duration-300 text-[#4e1a51] group-hover/btn:!text-white"
                    >
                      {category.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
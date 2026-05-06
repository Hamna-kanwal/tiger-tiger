"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { title: 'Canned', image: '/Canned.webp' },
  { title: 'Drinks', image: '/categories-drinks.webp' }, // Space ko hyphen se replace karein
  { title: 'Frozen', image: '/categories-frozen.webp' },
];

function CategorySection() {
  const brandPurple = "#4e1a51";
  const charcoalBlack = "#333333";
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 
          style={{ color: charcoalBlack }}
          className="eczar text-3xl font-black tracking-tighter"
        >
          Our Categories
        </h2>
        
        <Link href="/categories">
          <button 
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            style={{ 
              backgroundColor: isBtnHovered ? "white" : brandPurple,
              color: isBtnHovered ? brandPurple : "white",
              borderColor: brandPurple,
              borderWidth: "2px"
            }}
            className="font-bold py-2 px-6 md:py-4 md:px-10 rounded-xl md:rounded-2xl transition-all duration-300 text-xs sm:text-sm md:text-xl shadow-md eczar whitespace-nowrap cursor-pointer"
          >
            All Categories
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={category.title} 
            className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer shadow-lg bg-gray-200" // Placeholder background color
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              // Sizes prop ko mazeed optimize kiya
              sizes="(max-width: 768px) 100vw, 33vw"
              className="transition-transform duration-500 group-hover:scale-105"
              style={{ objectFit: 'cover' }}
              // Sirf pehli image ko priority dein agar ye viewport mein hai
              priority={index === 0} 
              // Quality ko 80-85 par rakhein (default 75 hai) file size chota rakhne ke liye
              quality={85}
            />
            
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-fit">
              <div className="bg-white px-10 py-3 rounded-md shadow-md">
                <span 
                  style={{ color: brandPurple }}
                  className="text-xl font-semibold whitespace-nowrap"
                >
                  {category.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Canned',
    image: '/Canned.png',
  },
  {
    title: 'Drinks',
    image: '/categories drinks.png', 
  },
  {
    title: 'Frozen',
    image: '/categories-frozen.png',
  },
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
              borderWidth: "2px",
              borderStyle: "solid"
            }}
            className="font-bold py-2 px-4 md:py-4 md:px-10 rounded-xl md:rounded-2xl transition-all duration-300 text-xs sm:text-sm md:text-xl shadow-md eczar whitespace-nowrap cursor-pointer"
          >
            All Categories
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div 
            key={category.title} 
            className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer shadow-lg"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-fit">
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
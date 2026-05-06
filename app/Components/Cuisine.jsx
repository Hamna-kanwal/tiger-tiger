import React from 'react';
import Image from 'next/image';

const RecipeSection = () => {
  const cuisines = [
    { name: 'Japanese', image: '/japnese_receipes.webp' },
    { name: 'Chinese', image: '/chinese.webp' },
    { name: 'Korean', image: '/korean_receipes.webp' },
    { name: 'Thai', image: '/thai.webp' },
    { name: 'Indian', image: '/indian.webp' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#4B164C] mb-4">Explore Recipes</h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          We bring together the rich culinary traditions of Asia under one brand.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[700px]">
        {cuisines.map((item, index) => (
          <div
            key={item.name}
            className={`relative overflow-hidden rounded-2xl group shadow-sm bg-gray-100 
              ${index === 0 ? 'md:row-span-2 h-[500px] md:h-full' : 'h-[350px] md:h-full'}`}
          >
            {/* Optimized Next.js Image Component */}
            <Image
              src={item.image}
              alt={`${item.name} cuisine recipes`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              priority={index === 0} // Optimizes Largest Contentful Paint for the first image
              className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:bg-black/20 transition-all duration-300" />

            {/* Label */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-white text-[#4B164C] px-6 py-2 rounded-xl font-bold text-lg shadow-lg inline-block">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;
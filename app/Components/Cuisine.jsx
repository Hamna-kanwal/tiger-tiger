import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeSection = () => {
  // Cuisines ka data (6 items = 3 rows x 2 columns)
  const cuisines = [
    { name: 'Japanese', image: '/change_japnese (1).jpeg' },
   
    { name: 'Chinese', image: '/chinese.webp' },
    { name: 'Korean', image: '/korean_receipes.webp' },
     { name: 'Vitenam', image: '/vitenam.jpeg' },
    { name: 'Thai', image: '/thai.webp' },
    { name: 'Others', image: '/others.jpeg' },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4B164C] mb-4 uppercase tracking-tight">
          Explore Recipes
        </h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Uniting the diverse culinary traditions of Pan-Asian cuisine under one brand.
        </p>
      </div>

    {/* Grid Layout: 2 Rows, 3 Columns */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {cuisines.map((item) => (
    <Link
      key={item.name}
      href={`/recipes?cuisine=${item.name}`}
      // md:grid-cols-3 hone ki wajah se ye automatically 3 columns ban jayenge
      className="block relative overflow-hidden rounded-3xl group shadow-lg bg-gray-100 aspect-[4/3]"
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={`${item.name} cuisine recipes`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
        className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:bg-black/40 transition-all duration-300" />
    <div className="absolute bottom-6 left-6 z-10">

              <span className="bg-white text-[#4B164C] px-6 py-2 rounded-xl font-bold text-lg shadow-lg inline-block">

                {item.name}

              </span>

            </div>
    </Link>
  ))}
</div>
    </section>
  );
};

export default RecipeSection;
import React from 'react';

const RecipeSection = () => {
  const cuisines = [
    { name: 'Japanese', image: '/japnese_receipes.png' },
    { name: 'Chinese', image: '/chinese.png' },
    { name: 'Korean', image: '/korean_receipes.png' },
    { name: 'Thai', image: '/thai.png' },
    { name: 'Indian', image: '/indian.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#4B164C] mb-4">Explore Recipes</h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          We bring together the rich culinary traditions of Asia under one brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[700px]">
        {cuisines.map((item, index) => (
          <div
            key={item.name}
            className={`relative overflow-hidden rounded-2xl group shadow-sm bg-gray-100
              ${index === 0 ? 'md:row-span-2 h-[500px] md:h-full' : 'h-[350px] md:h-full'}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ minHeight: '100%', display: 'block' }}
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-white text-[#4B164C] px-6 py-2 rounded-xl font-bold text-lg shadow-lg block">
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
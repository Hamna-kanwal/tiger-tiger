import React from 'react';

const RecipeSection = () => {
  const cuisines = [
    { name: 'Japanese', image: '/japnese.png', gridClass: 'md:row-span-2' },
    { name: 'Chinese', image: '/chinese.png' },
    { name: 'Thai', image: '/thai.png' },
    { name: 'Korean', image: '/korean.png' },
    { name: 'Indian', image: '/indian.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#4B164C] mb-4 text-center md:text-left">Explore Recipes</h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed text-center md:text-left mx-auto md:mx-0">
          We bring together the rich culinary traditions of Asia under one brand. Our product 
          range supports a variety of cuisines, including:
        </p>
      </div>

      {/* Yahan 'md:grid-cols-[2.5fr,1fr,1fr]' use kiya hai taake 
          Japanese image (first column) layout ka zyada area cover kare.
      */}
      {/* 'md:h-[600px]' ya 'md:h-[700px]' add karne se Japanese image niche tak full ho jayegi */}
<div className="grid grid-cols-1 md:grid-cols-[1.9fr,1.1fr,1.1fr] md:grid-rows-2 gap-4 md:h-[500px] md:grid-flow-col-dense">
        {cuisines.map((item) => (
          <div 
            key={item.name} 
            className={`relative overflow-hidden rounded-2xl group ${item.gridClass || ''} 
              h-[350px] md:h-full min-h-[200px] shadow-sm`}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 duration-300 z-0" />
            
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-white text-[#4B164C] px-6 py-2 rounded-xl font-bold text-lg shadow-lg">
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
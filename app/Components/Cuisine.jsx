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

      {/* Grid Container: 'group/container' add kiya hai taake hover par baki images blur ho sakein */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[700px] group/container">
        {cuisines.map((item, index) => (
          <div 
            key={item.name} 
            className={`relative overflow-hidden rounded-2xl group shadow-sm bg-gray-100 transition-all duration-500
              /* Hover effect: Jab container par hover ho to sab blur hon, lekin jis par mouse ho wo clear rahe */
              hover:!blur-none group-hover/container:blur-[2px]
              ${index === 0 
                ? 'md:col-span-2 md:row-span-2 h-[500px] md:h-full' 
                : 'md:col-span-1 h-[300px] md:h-full'
              }`}
          >
            {/* Image with Zoom Transition */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              style={{ minHeight: '100%', display: 'block' }}
            />
            
            {/* Label with Slide-up Transition */}
            <div className="absolute bottom-6 left-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="bg-white text-[#4B164C] px-6 py-2 rounded-xl font-bold text-lg shadow-lg block border border-gray-100">
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
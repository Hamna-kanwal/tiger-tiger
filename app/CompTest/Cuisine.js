import React from 'react';

const RecipeSection = () => {
  const cuisines = [
    // hum yahan specialized classes use karein ge grid position ke liye
    { name: 'Japanese', image: '/japnese.png', gridClass: 'md:row-span-2' },
    { name: 'Chinese', image: '/chinese.png' },
    { name: 'Thai', image: '/thai.png' },
    { name: 'Korean', image: '/korean.png' },
    { name: 'Indian', image: '/indian.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#4B164C] mb-4">Explore Recipes</h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          We bring together the rich culinary traditions of Asia under one brand. Our product 
          range supports a variety of cuisines, including:
        </p>
      </div>

      {/* Grid Container Setup:
          - grid-flow-col: is se items vertically fill hoty hain column-by-column.
          - md:grid-cols-[1fr,1.3fr,1.3fr]: Custom columns. Pehla column (Japanese) chota hy, 
            baqi dono (Chinese+Thai aur Korean+Indian) 1.3 guna bary hain.
      */}
      <div className="grid grid-cols-1 md:grid-cols-[1.8fr,1.1fr,1.1fr] grid-rows-2 gap-4 grid-flow-col-dense">
        {cuisines.map((item) => (
          <div 
            key={item.name} 
            className={`relative overflow-hidden rounded-2xl group ${item.gridClass || ''} 
              ${item.name === 'Japanese' ? 'h-[400px] md:h-full' : 'h-[200px] md:h-full'} 
              min-h-[180px] shadow-sm`}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 z-0" />
            
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
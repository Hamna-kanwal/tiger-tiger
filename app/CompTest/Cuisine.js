"use client";

import React, { useState } from 'react';
import { ChefHat, Plus, Search, Target, Utensils, Award } from 'lucide-react';

const CuisineSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const brandPurple = "#4C3966"; 
  const brandGold = "#D2B57B";   
  
  const cuisines = [
    { title: "JAPANESE CUISINE INGREDIENTS", desc: "Sushi products including sushi, nori sheets, wasabi and ingredients.", icon: <ChefHat size={35} /> },
    { title: "THAI COOKING ESSENTIALS", desc: "Lime and chili, pepperoncini, products lime and chili.", icon: <Utensils size={35} /> },
    { title: "CHINESE FOOD INGREDIENTS", desc: "Chopsticks, chinese food products, chinese pasta and more.", icon: <Plus size={35} /> },
    { title: "KOREAN FLAVOURS AND SAUCES", desc: "Key products, chili paste and sauces.", icon: <Search size={35} /> },
    { title: "VIETNAMESE COOKING INGREDIENTS", desc: "Phở and namese cooking ingredients.", icon: <Award size={35} /> },
    { title: "ETHNIC SPICES AND FOODS", desc: "Spice jars and authentic spice foods.", icon: <Target size={35} /> },
  ];

  // Sirf pehle 3 ya saare dikhane ke liye logic
  const visibleCuisines = showAll ? cuisines : cuisines.slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 space-y-8 w-full max-w-4xl">
          <div className="space-y-4">
             <h2 className="eczar text-[22px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-black text-[#1A1A1A] leading-[1.1] tracking-tighter uppercase whitespace-nowrap text-center">
  Explore Authentic Asian Cuisines
</h2>
          </div>

          <div className="space-y-4 text-gray-700">
             <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                We bring together the rich culinary traditions of Asia under one brand. 
                Our product range supports a variety of cuisines, including:
             </p>
             <p className="font-black text-[14px] md:text-[16px] uppercase text-[#431A4F] tracking-[0.2em]">
                Popular Asian Cuisines We Cover
             </p>
          </div>
        </div>

        {/* --- Cuisine Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-all duration-500">
          {visibleCuisines.map((item, index) => (
            <div 
              key={index} 
              className="relative p-10 rounded-[2.5rem] text-white flex gap-6 items-start group shadow-xl transition-all duration-300 hover:-translate-y-2 bg-[#431A4F]"
            >
              {/* Icon Container */}
              <div style={{ color: brandGold }} className="flex-shrink-0 mt-1 transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex-grow space-y-3 relative z-10">
                <h3 className="text-xl font-bold uppercase tracking-wide leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer Action / Load More --- */}
        <div className="mt-16 text-center space-y-8 w-full max-w-3xl">
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)}
              style={{ border: `2px solid ${brandPurple}`, color: brandPurple }}
              className="inline-block px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#431A4F] hover:text-white transition-all shadow-md"
            >
              Load More Cuisines
            </button>
          ) : (
            <>
              <p className="text-gray-600 font-bold italic text-base md:text-lg leading-relaxed">
                "This variety allows chefs and businesses to expand their menus and offer diverse dishes."
              </p>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default CuisineSection;
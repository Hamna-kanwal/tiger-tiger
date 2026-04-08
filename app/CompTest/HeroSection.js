"use client";

import React, { useState } from 'react';
import { Star, Percent, ShieldCheck, Truck } from 'lucide-react';

export default function Herosection() {
  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";
  const charcoalBlack = "#333333";

  // State for button hovers
  const [hoverExplore, setHoverExplore] = useState(false);
  const [hoverCuisines, setHoverCuisines] = useState(false);

  return (
    <section className="relative bg-white py-12 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        {/* --- SEO CONTENT SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h4 
            style={{ color: charcoalBlack }}
            className="eczar text-[22px] sm:text-[26px] md:text-[32px] font-black tracking-tighter leading-tight mb-6 whitespace-nowrap"
          >
            Authentic Asian Ingredients for Restaurants, Retailers & Wholesalers
          </h4>

          <p style={{ color: charcoalBlack }} className="md:text-[16px] text-sm md:text-base leading-relaxed mb-6">
            Tiger Tiger is a trusted Asian food supplier in the UK, delivering high-quality ingredients inspired by authentic Asian cuisine. From sauces and noodles to frozen foods and spices, we provide everything businesses need to create bold, traditional flavours.
            Whether you run a restaurant, supermarket, or catering business, our wide product range helps you serve authentic dishes with consistency and quality.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <button 
              onMouseEnter={() => setHoverExplore(true)}
              onMouseLeave={() => setHoverExplore(false)}
              style={{ 
                backgroundColor: hoverExplore ? brandGold : brandPurple 
              }}
              className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-sm md:text-base 
                         shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Explore Products
            </button>

            <button 
              onMouseEnter={() => setHoverCuisines(true)}
              onMouseLeave={() => setHoverCuisines(false)}
              style={{ 
                borderColor: hoverCuisines ? brandGold : brandPurple, 
                color: hoverCuisines ? brandGold : brandPurple 
              }}
              className="w-full sm:w-auto px-10 py-4 rounded-full border-2 bg-transparent font-bold text-sm md:text-base 
                         transition-all duration-300 active:scale-95"
            >
              Discover Cuisines
            </button>
          </div>
        </div>

        {/* --- FEATURE BOX --- */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-[#4e1a51] border-2 border-[#4e1a51] rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden">
            
            {/* 1. 200+ Products */}
            <div className="flex-1 w-full py-12 flex flex-col items-center justify-center text-white md:border-r-4 border-white/20">
              <div className="mb-4 text-white scale-110">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-extrabold tracking-widest eczar text-center ">
                200+
              </h3>
              <p className="text-[12px] md:text-[14px] font-sans font-bold tracking-widest text-white/90 text-center px-4 leading-tight mb-4">
                PRODUCTS
              </p>
              <div className="flex gap-1.5 mb-3 text-[#d2bf7f] scale-110">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* 2. Competitive Prices */}
            <div className="flex-1 w-full py-12 flex flex-col items-center justify-center text-white md:border-r-4 border-white/20">
              <div className="mb-4 text-white scale-110">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-extrabold tracking-widest eczar text-center">
                 COMPETITIVE
              </h3>
              <p className="text-[12px] md:text-[14px] font-sans font-bold tracking-widest text-white/90 text-center px-4 leading-tight mb-4">
                PRICES
              </p>
              <div className="flex gap-1.5 mb-3 text-[#d2bf7f] scale-110">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* 3. 1000+ UK F&B Businesses */}
            <div className="flex-1 w-full py-12 flex flex-col items-center justify-center text-white md:border-r-4 border-white/20">
              <div className="mb-4 text-white scale-110">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-extrabold tracking-widest uppercase eczar text-center">
                1000+
              </h3>
              <p className="text-[10px] md:text-[14px] font-sans font-bold tracking-widest text-white/90 uppercase text-center px-4 leading-tight mb-4">
                UK F&B BUSINESSES SERVED
              </p>
              <div className="flex gap-1.5 mb-3 text-[#d2bf7f] scale-110">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* 4. Bulk Orders */}
            <div className="flex-1 w-full py-12 flex flex-col items-center justify-center text-white">
              <div className="mb-4 text-white scale-110">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-extrabold tracking-widest uppercase eczar text-center">
                BULK 
              </h3>
              <p className="text-[12px] md:text-[14px] font-sans font-bold tracking-widest text-white/90 uppercase text-center px-4 leading-tight mb-4">
                ORDERS
              </p>
              <div className="flex gap-1.5 mb-3 text-[#d2bf7f] scale-110">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
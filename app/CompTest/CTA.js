"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const DiscoverSection = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";
  
  const [isBtn1Hovered, setIsBtn1Hovered] = useState(false);
  const [isBtn2Hovered, setIsBtn2Hovered] = useState(false);

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      {/* Main Container: Back to Max-width 6xl for a cleaner, centered look */}
      <div 
        style={{ backgroundColor: brandPurple }}
        className="max-w-7xl mx-auto rounded-[2rem] md:rounded-[1rem] overflow-hidden shadow-2xl relative min-h-[450px] lg:min-h-[500px] flex items-center"
      >
        
        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-400/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center relative z-10">
          
          {/* --- Left Side: Content (Col-7) --- */}
          <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 space-y-6 text-left">
            <h2 className="eczar text-3xl md:text-[45px] font-bold text-white leading-[1.1] uppercase tracking-tight">
              Discover the Taste of <br /> Authentic Asian Cuisine
            </h2>
            
            <div className="space-y-3">
              <p className="text-white text-base md:text-xl font-bold opacity-95">
                Bring authentic Asian flavours to your kitchen with Tiger Tiger
              </p>
              <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed font-light">
                Explore our full product range and find the ingredients you need to create exceptional dishes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onMouseEnter={() => setIsBtn1Hovered(true)}
                onMouseLeave={() => setIsBtn1Hovered(false)}
                style={{ 
                  backgroundColor: isBtn1Hovered ? brandGold : 'white',
                  color: brandPurple 
                }}
                className="px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] md:text-[12px] transition-all duration-300 flex items-center gap-2 shadow-lg active:scale-95"
              >
                View Products <ArrowRight size={16} />
              </button>
              
              <button 
                onMouseEnter={() => setIsBtn2Hovered(true)}
                onMouseLeave={() => setIsBtn2Hovered(false)}
                style={{ 
                  borderColor: isBtn2Hovered ? brandGold : 'white',
                  color: isBtn2Hovered ? brandGold : 'white' 
                }}
                className="bg-transparent border-[1.5px] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] md:text-[12px] transition-all duration-300 active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* --- Right Side: Product Images (Col-5) --- */}
          <div className="lg:col-span-5 relative h-full min-h-[300px] lg:min-h-[500px] flex items-end justify-center lg:pr-10">
            
            {/* Image Stack logic */}
            <div className="relative flex items-end -space-x-6 md:-space-x-10 mb-[-5px] z-20">
              
              {/* Product 1: Left Juice Bottle */}
              <img 
                src="/CTA1.png" 
                alt="Mango Juice"
                className="w-20 md:w-32 h-36 md:h-56 object-cover rounded-t-2xl shadow-xl border-2 border-white/10 -rotate-6"
              />
              
              {/* Product 2: Center (Main) Bottle */}
              <img 
                src="/CTA2.png" 
                alt="Asian Drink"
                className="w-24 md:w-40 h-full md:h-full relative z-10"
              />

            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
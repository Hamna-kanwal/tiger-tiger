"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const DiscoverSection = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";
  
  const [isBtn1Hovered, setIsBtn1Hovered] = useState(false);
  const [isBtn2Hovered, setIsBtn2Hovered] = useState(false);

  return (
    <section className="py-12 md:py-24 px-4 bg-white overflow-hidden">
      <div 
        style={{ backgroundColor: brandPurple }}
        className="max-w-7xl mx-auto rounded-2xl relative min-h-[400px] lg:min-h-[480px] flex items-stretch shadow-2xl overflow-visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full relative z-10">
          
          {/* --- Left Side: Content --- */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 space-y-6 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h2 className="eczar text-3xl md:text-[36px] font-bold text-white leading-[1.1] uppercase tracking-tight">
              Discover the Taste of Authentic Asian Cuisine
            </h2>
            
            <div className="space-y-3">
              <p className="text-white text-base md:text-xl font-bold opacity-95">
                Bring authentic Asian flavours to your kitchen with Tiger Tiger
              </p>
              <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed font-light mx-auto lg:mx-0">
                Explore our full product range and find the ingredients you need to create exceptional dishes.
              </p>
            </div>

            {/* Buttons Container*/}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              {/* Contact Us Button - Invert Effect */}
<button 
  onMouseEnter={() => setIsBtn2Hovered(true)}
  onMouseLeave={() => setIsBtn2Hovered(false)}
  style={{ 
    borderColor: 'white', 
    // Hover par background white ho jayega aur text purple/black
    backgroundColor: isBtn2Hovered ? 'white' : 'transparent', 
    color: isBtn2Hovered ? brandPurple : 'white' 
  }}
  className="bg-transparent border-[1.5px] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] md:text-[12px] transition-all duration-300"
>
  Contact Us
</button>

{/* View Products Button - Invert Effect */}
<button 
  onMouseEnter={() => setIsBtn1Hovered(true)}
  onMouseLeave={() => setIsBtn1Hovered(false)}
  style={{ 
    // Hover par background purple ho jayega aur text white
    backgroundColor: isBtn1Hovered ? brandPurple : 'white', 
    color: isBtn1Hovered ? 'white' : brandPurple,
    border: `1.5px solid ${isBtn1Hovered ? brandPurple : 'white'}`
  }}
  className="px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] md:text-[12px] transition-all duration-300 flex items-center gap-2 shadow-lg"
>
  View Products <ArrowRight size={16} />
</button>
              
             
            </div>
          </div>

          {/* --- Right Side: Pop-out Images --- */}
          <div className="lg:col-span-6 relative h-full flex items-end justify-center lg:justify-end overflow-visible pr-0">
            <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
  
              {/* 1. BACKGROUND IMAGE (CTA1 - Sticks Box) - FRONT */}
                {/* 1. STICKS BOX (CTA1) - Front Layer */}
              <div className="absolute z-30 bottom-0 left-[10%] lg:left-0">
                <Image 
                  src="/CTA1.webp" 
                  alt="Sticks Background"
                  width={350} // Desktop size
                  height={450} 
                  className="w-[180px] md:w-[280px] lg:w-[350px] h-auto object-contain"
                />
              </div>

              {/* 2. MAIN CANS (CTA2) - Behind Layer */}
              <div className="relative z-10 mb-[-20px] mr-[-20px] lg:mr-[-40px]">
                <Image
                  src="/CTA2.webp" 
                  alt="Pulp Cans Main"
                  width={850} // High resolution width
                  height={600}
                  className="w-[300px] md:w-[600px] lg:w-[850px] h-auto object-contain lg:scale-110"
                />
              </div>


            </div>
          </div>

          <div className="absolute top-0 right-[-10%] lg:right-[-10%] w-[400px] h-[400px] bg-yellow-400/10 blur-[100px] rounded-full z-0"></div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

            {/* Buttons Container - Ab ye Mobile par center aur Desktop par left-aligned hain */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
               <button 
                onMouseEnter={() => setIsBtn2Hovered(true)}
                onMouseLeave={() => setIsBtn2Hovered(false)}
                style={{ borderColor: isBtn2Hovered ? brandGold : 'white', color: isBtn2Hovered ? brandGold : 'white' }}
                className="bg-transparent border-[1.5px] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] md:text-[12px] transition-all duration-300"
              >
                Contact Us
              </button>
              <button 
                onMouseEnter={() => setIsBtn1Hovered(true)}
                onMouseLeave={() => setIsBtn1Hovered(false)}
                style={{ backgroundColor: isBtn1Hovered ? brandGold : 'white', color: brandPurple }}
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
              <img 
                src="/CTA1.png" 
                alt="Sticks Background"
                className="absolute h-[65%] w-auto object-contain z-30 right-50 bottom-0 "
              />

              {/* 2. FOREGROUND IMAGE (CTA2) - BEHIND */}
              {/* Width ko 2000px se kam kar ke optimized kiya hai taake scroll na aaye */}
              <img 
                src="/CTA2.png" 
                alt="Pulp Cans Main"
                className="relative h-[90%] w-[600px] md:w-[850px] object-contain z-10 
                           right-[-10%] lg:right-[-10%] 
                           lg:scale-120
                           block"
              />

            </div>
          </div>

          <div className="absolute top-0 right-[-10%] lg:right-[-10%] w-[400px] h-[400px] bg-yellow-400/10 blur-[100px] rounded-full z-0"></div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
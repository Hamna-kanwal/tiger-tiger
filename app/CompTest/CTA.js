"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const DiscoverSection = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";
  
  // States for button hover effects
  const [isBtn1Hovered, setIsBtn1Hovered] = useState(false);
  const [isBtn2Hovered, setIsBtn2Hovered] = useState(false);

  return (
    <section className="py-20 md:py-16 px-4 bg-white">
      {/* --- The Main Card Container --- */}
      <div 
        style={{ backgroundColor: brandPurple }}
        className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 shadow-sm border border-orange-100/50 relative overflow-hidden"
      >
        
        {/* Subtle Decorative Accent */}
        <div 
          style={{ backgroundColor: `${brandGold}1a` }} 
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32"
        ></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* H2 Heading */}
          <h2 className="eczar text-[32px] sm:text-[42px] md:text-[52px] font-black text-white leading-[1.1] tracking-tighter uppercase text-center max-w-4xl mx-auto">
            Discover the Taste of Authentic Asian Cuisine
          </h2>

          {/* Description Section */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center opacity-90">
              Bring authentic Asian flavours to your kitchen with Tiger Tiger
            </p>
            
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mx-auto italic font-medium opacity-80">
              Explore our full product range and find the ingredients you need to create exceptional dishes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            
            {/* Primary Button: White to Gold Hover */}
            <button 
              onMouseEnter={() => setIsBtn1Hovered(true)}
              onMouseLeave={() => setIsBtn1Hovered(false)}
              style={{ 
                backgroundColor: isBtn1Hovered ? brandGold : 'white',
                color: brandPurple 
              }}
              className="px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              View Products <ArrowRight size={18} />
            </button>
            
            {/* Secondary Button: Transparent to Gold Hover */}
            <button 
              onMouseEnter={() => setIsBtn2Hovered(true)}
              onMouseLeave={() => setIsBtn2Hovered(false)}
              style={{ 
                borderColor: isBtn2Hovered ? brandGold : 'white',
                color: isBtn2Hovered ? brandGold : 'white' 
              }}
              className="bg-transparent border-2 px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-sm active:scale-95"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
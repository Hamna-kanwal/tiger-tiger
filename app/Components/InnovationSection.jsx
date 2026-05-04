"use client";

import { UtensilsCrossed } from "lucide-react";

const InnovationSection = () => {
  const brandPurple = "#4e1a51";
  const brandGold = "#eed697";

  return (
    <section className="bg-white relative overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute left-[10%] top-[20%] hidden lg:block">
          <img src="/fresh spicy.png" alt="chilli" className="w-16 h-auto rotate-12" />
        </div>

        <div className="absolute -right-4 top-[10%] hidden md:block">
          <img src="/pngwing.png" alt="food" className="w-48 lg:w-64 h-auto" />
        </div>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <UtensilsCrossed size={38} strokeWidth={1.2} className="text-[#4e1a51]" />
          </div>
          <h2 className="eczar text-[26px] md:text-[38px] font-bold text-[#4e1a51] tracking-tight leading-tight uppercase">
            INNOVATION IN ASIAN FOOD DEVELOPMENT
          </h2>
        </div>

        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <p className="outfit text-gray-500 text-base md:text-xl font-light italic">
            "We continuously adapt to changing food trends and customer needs."
          </p>
          <p className="outfit text-[#4e1a51] text-[14px] md:text-[17px] leading-relaxed max-w-2xl mx-auto font-medium mb-10">
            By combining traditional recipes with modern innovation, we develop products that help businesses stay competitive in the growing Asian food market.
          </p>
        </div>
      </div>

      <div 
        className="w-full py-10 md:py-16 text-center relative"
        style={{ backgroundColor: brandPurple }}
      >
        <div className="absolute left-0 -bottom-10 z-40">
          <img src="/bao bun.png" alt="bao bun" className="w-32 md:w-52 h-auto drop-shadow-xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-8">
          <h3 className="eczar text-[20px] md:text-[36px] text-white font-medium leading-snug">
            "Our goal is to provide ready-to-use ingredients that <br className="hidden md:block" />
            <span style={{ color: brandGold }}>simplify cooking</span> without sacrificing taste."
          </h3>
          
          <button 
            className="px-8 py-3 rounded-md font-bold uppercase tracking-widest text-[12px] md:text-[14px] transition-all hover:scale-105 active:scale-95 shadow-md"
            style={{ backgroundColor: brandGold, color: brandPurple }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
"use client";

import { UtensilsCrossed } from "lucide-react";

const InnovationSection = () => {
  const brandPurple = "#4e1a51";
  const brandGold = "#eed697";

  return (
    <section className="bg-white pt-16 md:pt-20 overflow-hidden">
      {/* 1. TOP Content (Centered) */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <UtensilsCrossed size={42} strokeWidth={1.5} className="text-[#4e1a51]" />
          </div>
          <h2 className="eczar text-[28px] md:text-[45px] font-bold text-[#4e1a51] tracking-tight leading-tight uppercase">
            INNOVATION IN ASIAN FOOD DEVELOPMENT
          </h2>
        </div>

        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <p className="outfit text-gray-400 text-lg md:text-2xl font-light italic opacity-80">
            "We continuously adapt to changing food trends and customer needs."
          </p>
          <p className="outfit text-[#4e1a51] text-[15px] md:text-[19px] leading-relaxed max-w-3xl mx-auto font-semibold">
            By combining traditional recipes with modern innovation, we develop products that help businesses stay competitive in the growing Asian food market.
          </p>
        </div>
      </div>

      {/* 2. BOTTOM: Full Width Purple Section */}
      <div 
        className="w-full py-12 md:py-20 text-center shadow-inner"
        style={{ backgroundColor: brandPurple }}
      >
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h3 className="eczar text-[22px] md:text-[40px] text-white font-medium leading-tight">
            "Our goal is to provide ready-to-use ingredients that <br className="hidden md:block" />
            <span style={{ color: brandGold }}>simplify cooking</span> without sacrificing taste."
          </h3>
          
          <button 
            className="px-10 py-3.5 rounded-xl font-bold uppercase tracking-[0.1em] text-[13px] md:text-[15px] transition-all hover:brightness-110 active:scale-95 shadow-lg"
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
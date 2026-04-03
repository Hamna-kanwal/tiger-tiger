import React from 'react';

const AboutSection = () => {
  return (
    /* 1. Added md:px-12 for better horizontal breathing space on larger screens */
     <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto bg-[#431A4F] rounded-[3rem] p-8 md:p-16 shadow-sm border border-orange-50/50">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          {/* 2. Added 'eczar' font and tracking-tight for premium look */}
          <h2 className="eczar text-[36px] md:text-[54px] font-bold text-white mb-4 tracking-tighter leading-tight">
            About Tiger Tiger Foods
          </h2>
         
         
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-left">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Tiger Tiger is a premium Asian food brand developed by{" "}
              JK Foods UK Ltd, 
              one of the UK’s leading importers and distributors of authentic Asian
              ingredients.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light border-l-2 border-[#d2bf7f]/30 pl-6">
              With decades of experience in sourcing and supplying high-quality
              Asian food products, we have built a strong reputation for
              delivering consistency and taste across the globe.
            </p>
          </div>

          {/* Quote / Mission Box */}
          {/* 4. Swapped colors: White background with Purple text and Gold hover border */}
          <div className="bg-white p-10 md:p-12 rounded-[2rem] text-[#431A4F] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.03] hover:shadow-gold-subtle group relative">
          
            
            <p className="italic text-xl md:text-2xl font-medium leading-snug relative z-10">
              Our mission is to make authentic Asian ingredients accessible to
              every kitchen, from professional chefs to home cooks.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
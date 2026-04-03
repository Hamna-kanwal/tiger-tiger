import React from 'react';
import { ArrowRight } from 'lucide-react';

const DiscoverSection = () => {
  return (
    <section className="py-20 md:py-16 px-4 bg-white">
      {/* --- The Main Card Container --- */}
      <div className="max-w-6xl mx-auto bg-[#431A4F] rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 shadow-sm border border-orange-100/50 relative overflow-hidden">
        
        {/* Subtle Decorative Accent (Optional) */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#EED697]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* H2 Heading - One Line on Desktop */}
      <h2 className="eczar text-[32px] sm:text-[42px] md:text-[52px] lg:text-[32px] font-black text-white leading-[1.1] tracking-tighter uppercase text-center max-w-4xl mx-auto">
  Discover the Taste of Authentic Asian Cuisine
</h2>

          {/* Description Section */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Tagline - One Line on Desktop */}
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white whitespace-normal md:whitespace-nowrap text-center opacity-90">
              Bring authentic Asian flavours to your kitchen with Tiger Tiger
            </p>
            
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mx-auto italic font-medium">
              Explore our full product range and find the ingredients you need to create exceptional dishes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <button className="bg-white text-[#431A4F] px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:shadow-xl hover:shadow-[#431A4F]/20 transition-all duration-300 flex items-center justify-center gap-2">
              View Products <ArrowRight size={20} />
            </button>
            
            <button className="bg-white text-[#431A4F] border-2 border-[#431A4F] px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#431A4F] transition-all duration-300 shadow-sm">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
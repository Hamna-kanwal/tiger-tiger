import React from 'react';

const AboutSection = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B"; 

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div 
        style={{ backgroundColor: brandPurple }}
        className="max-w-7xl mx-auto rounded-[3rem] p-8 md:p-16 shadow-sm border border-orange-50/50"
      >
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
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
              <span className="font-semibold text-white">JK Foods UK Ltd</span>, 
              one of the UK’s leading importers and distributors of authentic Asian
              ingredients.
            </p>
            
            {/* Updated border-l to 5px for the refined 'less thick' bar look */}
            <p 
              style={{ borderColor: brandGold }}
              className="text-lg md:text-xl text-white/90 leading-relaxed font-light border-l-[5px] pl-7"
            >
              With decades of experience in sourcing and supplying high-quality
              Asian food products, we have built a strong reputation for
              delivering consistency and taste across the globe.
            </p>
          </div>

          {/* Quote / Mission Box */}
          <div 
            style={{ backgroundColor: brandGold }}
            className="p-10 md:p-12 rounded-[2rem] text-[#431A4F] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.03] group relative"
          >
            <p className="italic text-xl md:text-2xl font-bold leading-snug relative z-10">
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
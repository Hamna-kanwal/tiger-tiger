"use client";

import React from "react";

const GlobalSourcing = () => {
  const brandGold = "#D2B57B";
  const brandPurple = "#431A4F";

  const points = [
    "High-quality raw ingredients",
    "Authentic flavour profiles",
    "Reliable supply chain",
    "Ethical & sustainable sourcing",
  ];

  const locations = [
    { name: "Korea", code: "kr", style: "top-[15%] right-[5%] w-8 md:w-12" },
    { name: "China", code: "cn", style: "top-[38%] right-[22%] w-12 md:w-12" },
    { name: "Japan", code: "jp", style: "top-[52%] right-[2%] w-10 md:w-12" },
    { name: "Thailand", code: "th", style: "bottom-[30%] right-[32%] w-8 md:w-10" },
    { name: "Vietnam", code: "vn", style: "bottom-[20%] right-[10%] w-8 md:w-10" },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div 
        className="max-w-7xl mx-auto rounded-[20px] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center min-h-[500px]"
        style={{ backgroundColor: brandPurple }}
      >
        
        {/* --- Left Content Column --- */}
        <div className="w-full md:w-1/2 z-10 text-left">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-white mb-2 tracking-wide uppercase leading-tight">
            GLOBAL SOURCING FOR <br />
            <span style={{ color: brandGold }}>AUTHENTIC TASTE</span>
          </h2>
          
          <p className="text-white/90 text-sm md:text-base lg:text-lg font-light mb-8 max-w-md">
            Tiger Tiger sources ingredients directly from Asia, working with trusted producers and partners across the region.
          </p>

          <div className="space-y-4 mb-8">
            {points.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div 
                  className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: brandGold }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={brandGold} strokeWidth="4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white text-sm md:text-base font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Column: Image with Flag Overlays --- */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center h-full">
          <div className="relative w-full lg:scale-110 transition-transform">
            <img 
              src="/Group.png" 
              alt="World Map" 
              className="w-full h-auto object-contain" 
            />

            {/* Flag Overlays */}
            {locations.map((loc, index) => (
              <div 
                key={index} 
                className={`absolute transition-transform hover:scale-110 pointer-events-none ${loc.style}`}
              >
                <img 
                  src={`https://flagcdn.com/w80/${loc.code}.png`} 
                  alt={`${loc.name} flag`}
                  className="rounded-sm shadow-lg border border-white/20"
                />
                <span className="block text-[8px] md:text-[10px] text-white text-center mt-1 font-bold uppercase">
                    {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalSourcing;
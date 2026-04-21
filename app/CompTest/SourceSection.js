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
    { name: "Korea", style: "top-[15%] right-[5%] text-xs md:text-sm" },
    { name: "China", style: "top-[40%] right-[22%] text-2xl md:text-4xl font-bold opacity-90" },
    { name: "Japan", style: "top-[52%] right-[2%] text-sm md:text-lg font-semibold" },
    { name: "Thailand", style: "bottom-[30%] right-[32%] text-xs md:text-sm" },
    { name: "Thai", style: "bottom-[15%] right-[38%] text-[10px] md:text-xs" },
    { name: "Vietnam", style: "bottom-[20%] right-[10%] text-xs md:text-sm" },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div 
        className="max-w-6xl mx-auto rounded-[20px] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center min-h-[500px]"
        style={{ backgroundColor: brandPurple }}
      >
        
        {/* --- Left Content Column --- */}
        <div className="w-full md:w-1/2 z-10 text-left">
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-2 tracking-wide uppercase leading-tight">
            GLOBAL SOURCING FOR <br />
            <span style={{ color: brandGold }}>AUTHENTIC TASTE</span>
          </h2>
          
          <p className="text-white/90 text-sm md:text-base font-light mb-8 max-w-md">
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
                <span className="text-white text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-white/70 text-xs md:text-sm font-light italic max-w-sm">
            This allows us to deliver products that meet the expectations of both chefs and businesses.
          </p>
        </div>

        {/* --- Right Column: Image with Location Tags --- */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center h-full">
          <div className="relative w-full">
            {/* The Main Map Image */}
            <img 
              src="/group.png" 
              alt="World Map" 
              className="w-full h-auto object-contain md:opacity-100" 
            />

            {/* Location Overlays */}
            {locations.map((loc, index) => (
              <div 
                key={index} 
                className={`absolute text-white pointer-events-none select-none tracking-wider ${loc.style}`}
                style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.4)" }}
              >
                {loc.name}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Dotted Lines section has been removed from here */}

      </div>
    </section>
  );
};

export default GlobalSourcing;
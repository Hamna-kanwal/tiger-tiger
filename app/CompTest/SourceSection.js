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

  return (
    <section className="bg-white py-10 px-4">
      {/* Outer Rounded Container */}
      <div 
        className="max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center shadow-xl relative overflow-hidden"
        style={{ backgroundColor: brandPurple }}
      >
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="eczar text-[32px] font-bold text-white mb-6 tracking-wide uppercase">
            Global Sourcing for <span style={{ color: brandGold }}>Authentic Taste</span>
          </h2>
          <p className="outfit text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Tiger Tiger sources ingredients directly from Asia, working with trusted producers and partners across the region.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {points.map((text, i) => (
            <div 
              key={i} 
              className="border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/5 group"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            >
              {/* Gold Check Circle */}
              <div 
                className="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: brandGold }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={brandGold} strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="outfit text-white text-sm font-medium leading-tight">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* --- Footer Text --- */}
        <div className="max-w-2xl mx-auto">
          <p className="outfit text-white/70 text-xs md:text-sm italic font-light">
            This allows us to deliver products that meet the expectations of both chefs and businesses.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GlobalSourcing;
"use client";

import React from 'react';

export default function Herosection() {
  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";

  const features = [
    { title: "High Quality", value: "Premium" },
    { title: "Competitive Prices", value: "Best Value" },
    { title: "1000+ UK F&B Served", value: "Trusted" },
    { title: "Bulk Orders", value: "Wholesale" },
  ];

  return (
    <section className="relative bg-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              suppressHydrationWarning
              style={{ 
                backgroundColor: brandPurple,
                backgroundImage: 'none' 
              }}
              className="p-10 flex flex-col items-center justify-center text-center 
                         rounded-[2rem] shadow-xl transition-all border-0
                         duration-500 hover:shadow-2xl transform hover:-translate-y-2 group"
            >
              {/* Value Text - Less Bold */}
              <span className="text-white text-2xl font-bold mb-2 uppercase tracking-[0.15em] eczar">
                {feature.value}
              </span>
              
              {/* Stars - Gold */}
              <div 
                className="text-[18px] mb-5 tracking-[0.3em] text-[#d2bf7f]"
              >
                ★ ★ ★ ★ ★
              </div>
              
              {/* Sub-title - Less Bold */}
              <h3 className="text-white text-[11px] font-medium uppercase tracking-[0.25em] opacity-80">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
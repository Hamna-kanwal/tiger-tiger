"use client";

import Link from "next/link";

export default function B2BSection() {
  const supplyData = [
    { name: "Restaurants and takeaways" },
    { name: "Supermarkets and grocery stores" },
    { name: "Food distributors" },
    { name: "Catering services" },
  ];

  return (
    <section className="py-20 bg-[#431A4F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Supporting Restaurants, Retailers & Food Businesses
        </h2>

        {/* Sub-heading */}
        <div className="mb-8">
          <p className="text-lg md:text-xl text-purple-50/90 leading-relaxed">
            Tiger Tiger is designed to support professional kitchens and food businesses.
          </p>
          <p className="mt-8 font-bold text-white text-lg uppercase tracking-widest">
            We proudly supply:
          </p>
        </div>

        {/* 4 Small Pretty Cards - Translucent White & Centered Text */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {supplyData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md hover:bg-white/20 transition-all duration-300 shadow-lg min-h-[100px]"
            >
              <h3 className="text-sm md:text-base font-semibold leading-tight text-white">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl">
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-medium border-l-4 border-white/30 pl-6">
            Our products help businesses improve efficiency, maintain quality, and deliver authentic dishes consistently.
          </p>
        </div>

      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { Search, Users, Settings, Globe } from 'lucide-react';

const ProcessSection = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";

  const steps = [
    {
      title: "Market Demand",
      desc: "Studying traditional recipes and current market trends to identify what modern kitchens need.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Collaboration",
      desc: "Working closely with professional chefs and food experts to refine authentic flavours.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Authenticity",
      desc: "Ensuring every product stays true to its cultural origins and traditional taste profile.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Quality Sourcing",
      desc: "Partnering with trusted global suppliers to source the finest natural ingredients.",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  return (
    <section className="px-6 md:px-5">
<div className="py-20 w-full bg-gray-50/50 rounded-[3rem] px-8 mb-20 max-w-7xl mx-auto shadow-sm">        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="eczar text-[32px] md:text-[45px] font-black text-[#431A4F] tracking-tighter mb-4 leading-tight uppercase">
            How We Develop Authentic Asian Food Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Our process is built on research, sourcing, and collaboration. <br className="hidden md:block" />
            We begin by studying traditional recipes and market demand, then work closely with 
            experts to ensure every product meets modern requirements.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              
              {/* Icon Container with Concentrated Halo Glow */}
              <div className="relative mb-8 flex-shrink-0">
                
                {/* 1. The Light Bloom (Radial Gradient Halo) */}
                <div 
                  style={{
                    background: `radial-gradient(circle, ${brandGold}B3 0%, ${brandGold}1A 60%, transparent 80%)`,
                  }}
                  className="absolute inset-[-30%] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-125 pointer-events-none"
                />

                {/* 2. The Main Icon Box */}
                <div 
                  style={{ backgroundColor: brandPurple }}
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-[#D2B57B] group-hover:border-[#D2B57B] group-hover:shadow-[0_0_25px_rgba(210,181,123,0.4)]"
                >
                  <div 
                    style={{ color: brandGold }}
                    className="transition-colors duration-500 group-hover:text-white"
                  >
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h4 
                className="text-lg font-black text-[#431A4F] mb-3 uppercase tracking-tight transition-colors duration-300 group-hover:text-[#D2B57B]"
              >
                {step.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
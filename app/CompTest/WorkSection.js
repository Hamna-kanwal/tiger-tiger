"use client";

import React from 'react';
import { Search, Users, Settings, Globe } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Market Demand",
      desc: "Studying traditional recipes and current market trends to identify what modern kitchens need.",
      icon: <Search className="w-6 h-6" />,
      num: "01"
    },
    {
      title: "Collaboration",
      desc: "Working closely with professional chefs and food experts to refine authentic flavours.",
      icon: <Users className="w-6 h-6" />,
      num: "02"
    },
    {
      title: "Authenticity",
      desc: "Ensuring every product stays true to its cultural origins and traditional taste profile.",
      icon: <Settings className="w-6 h-6" />,
      num: "03"
    },
    {
      title: "Quality Sourcing",
      desc: "Partnering with trusted global suppliers to source the finest natural ingredients.",
      icon: <Globe className="w-6 h-6" />,
      num: "04"
    },
  ];

  return (
    <section className="px-6 md:px-5">
      <div className="py-20 w-full bg-gray-50/50 rounded-[3rem] px-8 mb-20 max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[45px] font-black text-[#431A4F] tracking-tighter mb-4 leading-tight">
            How We Develop Authentic Asian Food Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Our process is built on research, sourcing, and collaboration. <br className="hidden md:block" />
            We begin by studying traditional recipes and market demand, then work closely with 
            experts to ensure every product meets modern requirements.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
               
                
              {/* Icon Box - Tilt (rotate) effect removed */}
<div className="relative z-10 w-16 h-16 bg-[#431A4F] text-[#EED697] rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
  {step.icon}
</div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-bold text-[#431A4F] mb-3 uppercase tracking-tight">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
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
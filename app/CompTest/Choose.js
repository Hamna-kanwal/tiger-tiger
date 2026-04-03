"use client";

import React from 'react';
import { Star, Flame, BadgePercent, LayoutGrid } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { 
      title: "Premium Quality Ingredients", 
      desc: "We source our ingredients from trusted suppliers across Asia to ensure authentic taste, consistency, and high standards.", 
      icon: <Star className="w-8 h-8 text-[#EED697]" /> 
    },
    { 
      title: "Authentic Flavours", 
      desc: "Our products are inspired by traditional recipes and culinary techniques, helping businesses deliver genuine Asian flavours.", 
      icon: <Flame className="w-8 h-8 text-[#EED697]" /> 
    },
    { 
      title: "Competitive Wholesale Pricing", 
      desc: "We offer affordable pricing without compromising on quality, making us a reliable partner for restaurants and food businesses.", 
      icon: <BadgePercent className="w-8 h-8 text-[#EED697]" /> 
    },
    { 
      title: "Wide Product Range", 
      desc: "From everyday essentials to specialty ingredients, we provide everything needed for Asian cooking.", 
      icon: <LayoutGrid className="w-8 h-8 text-[#EED697]" /> 
    }
  ];

  return (
    <section className=" px-6 md:px-2 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[45px] font-black text-[#431A4F] tracking-tighter leading-tight">
            Why Choose Tiger Tiger Foods UK
          </h2>
       
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2.5rem] bg-[#431A4F] text-white hover:bg-[#532163] transition-all duration-500 shadow-xl hover:-translate-y-3 text-center flex flex-col items-center"
            >
              {/* Icon Container with Glassy Effect */}
              <div className="mb-6 bg-white/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-extrabold mb-4 uppercase tracking-tight leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
"use client";

import React from 'react';
import { Award, Flame, HandCoins, Boxes } from 'lucide-react';

const WhyChooseUs = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";

  const features = [
    { 
      title: "Premium Quality Ingredients", 
      desc: "We source our ingredients from trusted suppliers across Asia to ensure authentic taste, consistency, and high standards.", 
      icon: <Award className="w-8 h-8" /> 
    },
    { 
      title: "Authentic Flavours", 
      desc: "Our products are inspired by traditional recipes and culinary techniques, helping businesses deliver genuine Asian flavours.", 
      icon: <Flame className="w-8 h-8" /> 
    },
    { 
      title: "Competitive Wholesale Pricing", 
      desc: "We offer affordable pricing without compromising on quality, making us a reliable partner for restaurants and food businesses.", 
      icon: <HandCoins className="w-8 h-8" /> 
    },
    { 
      title: "Wide Product Range", 
      desc: "From everyday essentials to specialty ingredients, we provide everything needed for Asian cooking.", 
      icon: <Boxes className="w-8 h-8" /> 
    }
  ];

  return (
    <section className="py-24 px-6 md:px-2 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <h2 className="eczar text-[32px] md:text-[45px] font-black text-[#431A4F] tracking-tighter leading-tight uppercase">
            Why Choose Tiger Tiger 
          </h2>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: brandPurple }}
              className="group relative p-10 rounded-[2.5rem] text-white flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-2xl border border-white/5 overflow-hidden"
            >
              {/* Icon Container with Concentrated Halo Glow */}
              <div className="relative mb-8 flex-shrink-0">
                
                {/* 1. The Light Bloom (Radial Gradient Halo) */}
                <div 
                  style={{
                    background: `radial-gradient(circle, ${brandGold}B3 0%, ${brandGold}1A 60%, transparent 80%)`,
                  }}
                  className="absolute inset-[-20%] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-125"
                />

                {/* 2. The Main Icon Box */}
                <div 
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-500 group-hover:bg-[#4d205c]"
                >
                  <div 
                    style={{ color: brandGold }}
                    className="transition-colors duration-500 group-hover:text-white"
                  >
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-bold uppercase tracking-wide leading-tight group-hover:text-[#D2B57B] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
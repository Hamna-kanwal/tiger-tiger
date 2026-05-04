"use client";

import React from 'react';
import { Award, Flame, HandCoins, Boxes } from 'lucide-react';

const WhyChooseUs = () => {
  const brandPurple = "#431A4F";
  const brandBeige = "#F8F1E5"; 
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 
            style={{ color: brandPurple }}
            className="eczar text-[32px] md:text-[42px] font-bold tracking-tight uppercase"
          >
            Why Choose Us 
          </h2>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            // Logic for alternating colors
            const isEven = idx % 2 === 0;
            const bgColor = isEven ? brandPurple : brandBeige;
            const textColor = isEven ? "text-white" : "text-[#431A4F]";
            const subTextColor = isEven ? "text-white/70" : "text-[#431A4F]/80";
            const iconBoxBg = isEven ? "bg-white/10" : "bg-[#431A4F]/5";
            const iconColor = isEven ? brandGold : brandPurple;

            return (
              <div 
                key={idx} 
                style={{ backgroundColor: bgColor }}
                className={`p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-2 duration-300`}
              >
                {/* Icon Container */}
                <div className={`${iconBoxBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-black/5`}>
                  <div style={{ color: iconColor }}>
                    {feature.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-bold uppercase tracking-tight leading-tight ${textColor}`}>
                    {feature.title}
                  </h3>

                  <p className={`text-[13px] font-medium leading-relaxed ${subTextColor}`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
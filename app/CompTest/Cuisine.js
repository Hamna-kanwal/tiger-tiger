"use client";

import React, { useState } from "react";
import {
  Fish,
  Soup,
  Utensils,
  Flame,
  Salad,
  Leaf,
} from "lucide-react";

const CuisineSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";

  const cuisines = [
    {
      title: "JAPANESE CUISINE INGREDIENTS",
      desc: "Sushi products including sushi, nori sheets, wasabi and ingredients.",
      icon: <Fish size={32} color={brandGold} />,
    },
    {
      title: "KOREAN FLAVOURS AND SAUCES",
      desc: "Key products, chili paste and sauces.",
      icon: <Soup size={32} color={brandGold} />,
    },
    {
      title: "CHINESE FOOD INGREDIENTS",
      desc: "Chopsticks, Chinese food products, Chinese pasta and more.",
      icon: <Utensils size={32} color={brandGold} />,
    },
    {
      title: "THAI COOKING ESSENTIALS",
      desc: "Lime and chili, pepperoncini, products lime and chili.",
      icon: <Flame size={32} color={brandGold} />,
    },
    {
      title: "VIETNAMESE COOKING INGREDIENTS",
      desc: "Phở and Vietnamese cooking ingredients.",
      icon: <Salad size={32} color={brandGold} />,
    },
    {
      title: "ETHNIC SPICES AND FOODS",
      desc: "Spice jars and authentic spice foods.",
      icon: <Leaf size={32} color={brandGold} />,
    },
  ];

  const visibleCuisines = showAll ? cuisines : cuisines.slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-8 w-full max-w-4xl">
          <h2
            style={{ color: brandPurple }}
            className="eczar text-[22px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-black tracking-tighter uppercase"
          >
            Explore Authentic Asian Cuisines
          </h2>

          <div className="space-y-4 text-gray-700">
            <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We bring together the rich culinary traditions of Asia under one brand.
              Our product range supports a variety of cuisines, including:
            </p>

            <p
              style={{ color: brandPurple }}
              className="font-black text-[14px] md:text-[16px] uppercase tracking-[0.2em]"
            >
              Popular Asian Cuisines We Cover
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {visibleCuisines.map((item, index) => (
            <div
              key={index}
              className="relative p-10 rounded-[2.5rem] text-white flex gap-6 items-start group shadow-xl transition-all duration-300 hover:-translate-y-2 bg-[#431A4F]"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 p-3 rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(210,191,127,0.5)]">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-grow space-y-3 relative z-10">
                <h3 className="text-xl font-bold uppercase tracking-wide leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center w-full">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              style={{
                borderColor: isBtnHovered ? brandGold : brandPurple,
                color: isBtnHovered ? brandGold : brandPurple,
              }}
              className="inline-block px-12 py-4 rounded-full border-2 bg-transparent font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-md"
            >
              Load More Cuisines
            </button>
          ) : (
            <p className="text-gray-600 font-bold italic text-base md:text-lg">
              "Providing everything needed for an authentic Asian culinary experience."
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
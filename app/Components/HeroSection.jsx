"use client";

import React, { useState } from 'react';
import { Star, HandCoins, ShieldCheck, Truck } from 'lucide-react'; 

const Herosection = () => {
  const brandPurple = "#4e1a51";
  const charcoalBlack = "#333333";

  const [hoverExplore, setHoverExplore] = useState(false);
  const [hoverCuisines, setHoverCuisines] = useState(false);

  const features = [
    {
      icon: <Star className="w-6 h-6 fill-current" />,
      title: "200+",
      sub: "PRODUCTS",
      hasBorder: true
    },
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "COMPETITIVE",
      sub: "PRICES",
      hasBorder: true
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "1000+",
      sub: "UK F&B BUSINESSES SERVED",
      hasBorder: true
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "BULK",
      sub: "ORDERS",
      hasBorder: false
    }
  ];

  return (
    <section className="relative bg-white py-12 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 
            style={{ color: charcoalBlack }}
            className="eczar text-[22px] sm:text-[26px] md:text-[32px] font-black tracking-tighter leading-tight mb-6"
          >
            Authentic Pan-Asian Ingredients for Restaurants, Retailers & Wholesalers
          </h2>

          <p style={{ color: charcoalBlack }} className="text-sm md:text-base leading-relaxed mb-6 opacity-90">
            Tiger Tiger is a trusted pan-Asian food supplier in the UK, delivering high-quality ingredients inspired by authentic Asian cuisine. From sauces and noodles to frozen foods and spices, we provide everything businesses need to create bold, traditional flavours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <button 
              onMouseEnter={() => setHoverExplore(true)}
              onMouseLeave={() => setHoverExplore(false)}
              style={{ 
                backgroundColor: hoverExplore ? brandPurple : "transparent",
                borderColor: brandPurple,
                color: hoverExplore ? "white" : brandPurple 
              }}
              className="w-fit min-w-[180px] sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full border-2 font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Explore Products
            </button>

            <button 
              onMouseEnter={() => setHoverCuisines(true)}
              onMouseLeave={() => setHoverCuisines(false)}
              style={{ 
                backgroundColor: hoverCuisines ? brandPurple : "transparent",
                borderColor: brandPurple,
                color: hoverCuisines ? "white" : brandPurple 
              }}
              className="w-fit min-w-[180px] sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full border-2 font-bold text-sm md:text-base transition-all duration-300 active:scale-95"
            >
              Discover Cuisines
            </button>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto ">
          <div className="bg-[#4e1a51] rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {features.map((feature, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex-1 w-full py-8 md:py-12 flex flex-col items-center justify-center text-white ${feature.hasBorder ? 'md:border-r border-white/10' : ''}`}>
                  <div className="mb-3 md:mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-serif font-extrabold tracking-widest eczar text-center uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] md:text-[13px] font-sans font-bold tracking-widest text-white/90 text-center px-4 leading-tight mb-3 md:mb-4 uppercase">
                    {feature.sub}
                  </p>
                  <div className="flex gap-1.5 text-[#d5be8b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 md:w-3.5 h-3 md:h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {idx !== features.length - 1 && (
                  <div className="flex md:hidden items-center w-[85%] mx-auto opacity-30">
                    <div className="flex-grow h-[1px] bg-[#d5be8b]"></div>
                    <Star className="w-2.5 h-2.5 mx-3 text-[#d5be8b] fill-current" />
                    <div className="flex-grow h-[1px] bg-[#d5be8b]"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herosection;
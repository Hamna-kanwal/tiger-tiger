"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image"; // Added for potential banners
import "swiper/css";

export default function CrammidSlider() {
  const crammidData = [
    { name: "MIXED SEED AND PEANUT BAR", images: "/1.jpg" },
    { name: "PUMPKIN SEED AND PEANUT BAR", images: "/2.jpg" },
    { name: "SESAMED AND PEANUT BAR", images: "/3.jpg" },
    { name: "CHICK PEAS SRIRACHA FLAVOUR", images: "/5.jpg" },
    { name: "CHICK PEAS BBQ FLAVOUR", images: "/6.jpg" },
    { name: "CHICK PEAS SWEET CHILLI FLAVOUR", images: "/8.jpg" },
    { name: "MIXED SEED AND PEANUT BAR", images: "/1.jpg" },
    { name: "PUMPKIN SEED AND PEANUT BAR", images: "/2.jpg" },
  ];

  return (
    /* 1. BALANCED VERTICAL SPACE: Using py-16 md:py-24 for equal top and bottom gaps */
    <div className="w-full bg-[#f3f4f6] py-16 md:py-24 px-4 overflow-visible">
      <div className="max-w-5xl mx-auto overflow-visible">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          /* 2. CROP FIX: 
             !pb-10 adds space inside the slider box so shadows aren't cut.
             -mb-10 pulls the bottom of the section back up to keep the spacing equal. 
          */
          className="overflow-visible !pb-10 -mb-10"
        >
          {crammidData.map((p, i) => (
            <SwiperSlide key={i} className="h-full py-2">
              {/* Professional Card Styling */}
              <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                
                {/* Image Container - Square Aspect Ratio */}
                <div className="bg-[#fcfcfc] flex items-center justify-center p-6 aspect-square">
                  <img
                    src={p.images}
                    alt={p.name}
                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product Text Footer */}
                <div className="bg-white p-4 flex items-center justify-center min-h-[80px]">
                  <p className="text-center text-[12px] md:text-[13px] font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                    {p.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
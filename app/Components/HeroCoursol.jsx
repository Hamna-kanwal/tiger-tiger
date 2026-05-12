"use client";

import React from "react";
import Image from "next/image";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { 
    id: 1, 
    src: "/pulp-hero-section.webp", 
    alt: "Product 1", 
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 2, 
    src: "/japanese-hero.webp", 
    alt: "Product 2", 
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 3, 
    src: "/koreannnnnn-updated (1).webp", 
    alt: "Product 3", 
    className: "scale-[1.0] md:scale-105 md:translate-y-12 translate-y-3" 
  },
];

const HeroCarousel = () => {
  const brandPurple = "#4B2452";

  return (
    <div className="w-full  md:mt-0 flex justify-center items-end mt-0 overflow-hidden">
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[550px] lg:h-[500px] bg-transparent">
        
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // Agar aapko sliding animation chahiye to niche wali line delete kar dein
          // effect={"fade"} 
          className="h-full w-full pb-14"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="100vw"
                  // Aapki purani classes yahan inject ho rahi hain
                  className={`object-contain object-bottom origin-bottom transition-transform duration-700 ${slide.className}`}
                  quality={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles for Pagination (Same as Featured Products) */}
        <style jsx global>{`
          .swiper-pagination-bullet-active {
            background: ${brandPurple} !important;
            width: 24px !important;
            border-radius: 5px !important;
          }
          .swiper-pagination-bullet {
            background: ${brandPurple};
            opacity: 0.3;
          }
          .swiper-pagination {
            bottom: 40px !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroCarousel;
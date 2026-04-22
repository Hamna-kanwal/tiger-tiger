"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedProducts = () => {
  const brandPurple = "#4e1a51";

  const products = [
    { id: 1, src: "/feature-banner-1.jpg", alt: "Lychee Pulp" },
    { id: 2, src: "/feature-banner-2.jpg", alt: "Coconut Water" },
    { id: 3, src: "/feature-banner-3.jpg", alt: "Guava Juice" },
   
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      {/* Container width aur padding ko consistent rakha gaya hai 
          taake alignment page ke baaki sections se match kare.
      */}
      <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12 w-full">
        
        <div className="text-center mb-4">
          <h2 
            style={{ color: brandPurple }}
            className="eczar font-bold text-[32px] md:text-[52px] leading-tight"
          >
            Tiger Tiger Feature Products
          </h2>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-14"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                {/* Rounded corners aur subtle border shadow design 
                    elements ko modern aesthetics ke mutabiq rakha gaya hai.
                */}
                <div className="relative overflow-hidden  mt-6 bg-white w-full h-auto">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    width={1920} 
                    height={800}
                    className="w-full h-auto object-contain" 
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #4e1a51 !important;
          width: 12px;
          border-radius: 5px;
        }
        .swiper-pagination-bullet {
          background: #4e1a51;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
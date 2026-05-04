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
    { id: 3, src: "/feature-products-popping.jpg.jpeg", alt: "Guava Juice" },
  ];

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        <div className="text-center mb-6">
          <h2 
            style={{ color: brandPurple }}
            className="eczar font-bold text-[32px] md:text-[52px] leading-tight"
          >
            Featured Products
          </h2>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-14"
            touchReleaseOnEdges={true}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div 
                  className="relative mt-2 w-full aspect-[21/9] md:aspect-[25/10] rounded-[40px] overflow-hidden isolate shadow-none"
                  style={{ maskImage: "webkit-radial-gradient(white, black)" }} 
                >
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className="object-cover rounded-[40px]"
                    priority
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper {
            border-radius: 40px !important;
            overflow: hidden !important;
        }

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
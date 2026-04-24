"use client";

import Image from "next/image";
// Swiper components aur modules import karein
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const BrandsSlider = () => {
  const brands = [
    { src: "/brands/cococho.png", alt: "Coco Choo" },
    { src: "/brands/wowchow.png", alt: "Wow Chow" },
    { src: "/brands/pulp.png", alt: "PULP+" },
    { src: "/brands/taste_japan.png", alt: "Taste Japan 1" },
    { src: "/brands/cococho.png", alt: "Coco Choo" },
    { src: "/brands/wowchow.png", alt: "Wow Chow" },
    { src: "/brands/pulp.png", alt: "PULP+" },
    { src: "/brands/taste_japan.png", alt: "Taste Japan 1" },
  ];

  return (
    <section className="bg-[#4e1a51] py-3 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={2} // Mobile par default
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // 768px se upar (Tablets)
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // 1024px se upar (Desktop)
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="w-full flex items-center"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="relative w-[150px] h-[60px]">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandsSlider;
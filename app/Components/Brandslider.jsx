"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
    <section className="bg-[#4e1a51] w-full flex justify-center items-center py-4">
      {/* mx-auto se slider screen ke center me rhega */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4, 
              spaceBetween: 50,
            },
          }}
          className="w-full"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center py-1">
                <div className="relative w-[180px] h-[80px] md:w-[120px] md:h-[40px]"> 
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 180px, 120px"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandsSlider;
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
    <section className="bg-[#4e1a51] py-3 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Tablets
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // Desktop
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="w-full"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              {/* Width aur Height yahan Image component mein di gayi hai */}
              <div className="flex justify-center items-center py-2">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={150}   // Aapki requirement ke mutabiq width
                  height={60}   // Aapki requirement ke mutabiq height
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: 'auto', height: 'auto' }} // Aspect ratio barkarar rakhne ke liye
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
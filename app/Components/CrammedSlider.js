"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CrammidSlider() {
  const crammidData = [
    { name: "MIXED SEED AND PEANUT BAR", images: "/1.jpg" },
    { name: "PUMPKIN SEED AND PEANUT BAR", images: "/2.jpg"  },
    { name: "SESAMED AND PEANUT BAR", images: "/3.jpg" },
    { name: "CHICK PEAS SRIRACHA FLAVOUR", images: "/5.jpg" },
    { name: "CHICK PEAS BBQ FLAVOUR", images: "/6.jpg"},
    { name: "CHICK PEAS SWEET CHILLI FLAVOUR", images: "/8.jpg" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="!overflow-hidden"
        >
          {crammidData.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col items-center group">
                {/* Image Container */}
                <div className="w-[200px] h-[250px] md:w-[300px] md:h-[300px] flex items-end justify-center">
                  <img
                    src={p.images}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <span className="mt-4 text-[12px] uppercase tracking-widest text-gray-400 font-bold">
                  {p.title}
                </span>

                {/* Product Name */}
                <p className="mt-1 text-center text-[14px] md:text-[16px] eczar font-semibold text-[#405305] max-w-[200px] line-clamp-2">
                  {p.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- Slider ke Neeche Wali Image --- */}
      <div className="w-full mt-8">
        <img 
          src="/wow_chow_bg.webp" // Apni image ka path yahan likhein
          alt="Banner Description"
          className="w-full h-auto block"
        />
      </div>
    </>
  );
}
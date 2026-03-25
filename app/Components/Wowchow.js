"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WowchowSlider() {
  const wowchowData = [
    { name: "BANGKOK HOT & SOUR TOM YUM", images: "/wowchow1.jpeg" },
    { name: "KOREAN SPICY BEEF", images: "/wowchow2.jpeg"  },
    { name: "SZECHAUN FIERY PEPPER & SPICE", images: "/wowchow3.jpeg" },
    { name: "VITETNAMESE AROMATIC CHICKEN PHO", images: "/wowchow4.jpeg" },
    { name: "BANGKOK HOT & SOUR TOM YUM", images: "/wowchow1.jpeg" },
    { name: "KOREAN SPICY BEEF", images: "/wowchow2.jpeg"  },
    { name: "SZECHAUN FIERY PEPPER & SPICE", images: "/wowchow3.jpeg" },
    { name: "VITETNAMESE AROMATIC CHICKEN PHO", images: "/wowchow4.jpeg" },
   
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
          {wowchowData.map((p, i) => (
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

   
    </>
  );
}
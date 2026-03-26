"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image"; 
import "swiper/css";

export default function WowchowSlider() {
  const wowchowData = [
    { name: "VITETNAMESE AROMATIC CHICKEN PHO", images: "/wowchow4.jpeg" },
    { name: "BANGKOK HOT & SOUR TOM YUM", images: "/wowchow1.jpeg" },
    { name: "KOREAN SPICY BEEF", images: "/wowchow2.jpeg" },
    { name: "SZECHAUN FIERY PEPPER & SPICE", images: "/wowchow3.jpeg" },
    { name: "VITETNAMESE AROMATIC CHICKEN PHO", images: "/wowchow4.jpeg" },
    { name: "BANGKOK HOT & SOUR TOM YUM", images: "/wowchow1.jpeg" },
  ];

  return (
    <div className="w-full bg-[#f3f4f6]">
      
      {/* --- WOW CHOW TOP BANNER --- */}
      <section className="w-full overflow-hidden leading-[0] block">
        <Image
          src="/wow_chow_bg.webp" 
          alt="Wow Chow Banner"
          width={1920}
          height={600}
          className="w-full h-auto block" 
          priority
          unoptimized
        />
      </section>

      {/* --- SLIDER SECTION --- */}
      {/* Keeping your py-16 md:py-24 for that perfect spacing */}
      <div className="py-16 md:py-24 px-4 overflow-visible"> 
        <div className="max-w-5xl mx-auto overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            /* FIX: !pb-10 adds internal space so the shadow isn't cut.
               FIX: -mb-10 pulls the bottom of the section back up so your 'purrfect' spacing stays equal.
            */
            className="overflow-visible !pb-10 -mb-10" 
          >
            {wowchowData.map((p, i) => (
              <SwiperSlide key={i} className="py-2"> {/* py-2 prevents top/bottom edge clipping */}
                <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full border border-gray-100 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  
                  <div className="bg-[#fcfcfc] flex items-center justify-center p-6 aspect-square">
                    <img
                      src={p.images}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="bg-white p-4 flex items-center justify-center min-h-[80px]">
                    <p className="text-center text-[11px] md:text-[13px] font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                      {p.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
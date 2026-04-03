"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image"; 
import { Star } from "lucide-react"; 
import "swiper/css";

export default function CrammidSection() {
  const crammidData = [
    { name: "MIXED SEED AND PEANUT BAR", images: "/1.jpg" },
    { name: "PUMPKIN SEED AND PEANUT BAR", images: "/2.jpg" },
    { name: "SESAMED AND PEANUT BAR", images: "/3.jpg" },
    { name: "CHICK PEAS SRIRACHA FLAVOUR", images: "/5.jpg" },
    { name: "CHICK PEAS BBQ FLAVOUR", images: "/6.jpg" },
    { name: "CHICK PEAS SWEET CHILLI FLAVOUR", images: "/8.jpg" },
  ];

  return (
    <div className="w-full bg-[#f3f4f6]">
      
      {/* --- 1. TOP BANNER --- */}
      <section className="w-full overflow-hidden leading-[0] block">
        <Image
          src="/cramid.webp" 
          alt="Crammid Banner"
          width={1920}
          height={600}
          className="w-full h-auto block" 
          priority
          unoptimized
        />
      </section>

      {/* --- 2. BOTTOM STRIP (Ab Banner ke bilkul sath hai) --- */}
      <section className="w-full overflow-hidden leading-[0] block">
        <Image
          src="/cramid-footer.png" 
          alt="Crammid Footer Strip"
          width={1920}
          height={200}
          className="w-full h-auto block" 
        />
      </section>

      {/* --- 3. SLIDER SECTION (Ab neche move kar diya hai) --- */}
      <div className="py-16 md:py-24 px-4 overflow-visible"> 
        <div className="max-w-5xl mx-auto overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="overflow-visible !pb-10 -mb-10" 
          >
            {crammidData.map((p, i) => (
              <SwiperSlide key={i} className="py-2">
                <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                  
                  <div className="bg-[#fcfcfc] flex items-center justify-center p-6 aspect-square">
                    <img
                      src={p.images}
                      alt={p.name}
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="bg-white p-5 flex flex-col items-center justify-center min-h-[100px]">
                    <p className="text-center text-[11px] md:text-[13px] font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight mb-3">
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
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function ProductRangeSlider() {
  const products = [
    { image: "/lychee.png", title: "Pulp+" },
    { image: "/wow chow.jpeg", title: "Wow Chow" },
    { image: "/crammed.png", title: "Cramm'd" },
  ];

  return (
    // Outer wrapper mein thori extra padding di hai taaki visible overflow page se bahar na jaye
    <div className="max-w-7xl mx-auto ">
      <Swiper
        loop
        grabCursor
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        /* CRITICAL FIX: 
           1. !overflow-visible: Taaki hover effects boundary se bahar nazar ayein.
           2. pt-12: Taaki upar se card lift hone ki jagah ho.
        */
        className="range-swiper !overflow-visible"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i} className="px-2">
            <Link href="#">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -15, // Ab aap zyada lift bhi kar sakti hain, ye nahi katega
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="cursor-pointer relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
               
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-5 left-0 right-0 px-3">
                  <div className="w-full bg-[#FCE7A2] rounded-xl py-2 text-center shadow-md">
                    <p className="eczar text-[20px] md:text-[24px] font-semibold text-black mb-0">
                      {p.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
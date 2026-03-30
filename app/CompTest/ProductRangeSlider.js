"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function ProductRangeSlider() { // Fixed typo: Ranger -> Range
  const products = [
    { image: "/lychee.png", title: "Pulp+" },
    { image: "/wow chow.jpeg", title: "Wow Chow" },
    { image: "/crammed.png", title: "Cramm'd" },
  ];

  return (
    // Added overflow-hidden to the parent to stop the whole page from shaking
    <div className="max-w-7xl mx-auto px-4 overflow-hidden">
      <Swiper
        loop
        grabCursor
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // Added pt-10 to give space for the hover scale effect
        className="range-swiper pb-10 pt-10"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i} className="px-2">
            <Link href="#">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="cursor-pointer relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
                style={{
                  cursor:
                    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer',
                }}
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

      {/* Removed the global overflow:visible styles as they were causing the issue */}
    </div>
  );
}
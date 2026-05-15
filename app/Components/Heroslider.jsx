"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slidesData = [
  { 
    id: 1, 
    src: "/pulp-hero-section.webp", 
    alt: "Pulp", 
    title: "Double Champions",
    mainHeading: "Celebrating Back to Back Success ",
    subText: "2025: Pulp+ Mango | 2026: Pulp+ Lychee",
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 2, 
    src: "/japanese-hero.webp", 
    alt: "Japanese", 
    title: "Nature’s Best in Every Sip",
    mainHeading: "Leading Pan Asian Food Brand in the UK",
    subText: "Your Thirst’s New Weakness.",
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 3, 
    src: "/koreannnnnn-updated (1).webp", 
    alt: "Korean", 
    title: "Nature’s Best in Every Sip",
    mainHeading: "Leading Pan Asian Food Brand in the UK",
    subText: "Your Thirst’s New Weakness.",
    className: "scale-[1.0] md:scale-105 md:translate-y-12 translate-y-3" 
  },
 { 
  id: 4, 
  src: "/TT-hero-main.png", 
  alt: "Tiger Tiger", 
  title: "Double Champions",
  mainHeading: "Celebrating Back to Back Success ",
  subText: "2025: Pulp+ Mango | 2026: Pulp+ Lychee",
  // Maine scale 1.0 se barha kar 1.25 (Mobile) aur 1.40 (Desktop) kar diya hai
  className: "scale-[1.25] md:scale-140 md:translate-y-12 translate-y-3" 
},
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverApp, setHoverApp] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  const brandPurple = "#4e1a51";
  const charcoalBlack = "#333333";

  return (
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden">
      {/* Header Spacing Section */}
      <div className="w-full pt-[80px] md:pt-[20px] lg:pt-[60px]" />

      {/* --- TEXT SECTION (Dynamic) --- */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl h-[250px] md:h-[200px]">
        {/* Chota Title */}
        <p
          style={{ color: charcoalBlack }}
          className="text-base lg:text-lg font-outfit mt-4 lg:mt-2 font-semibold mb-1 transition-all duration-500"
        >
          {slidesData[activeIndex].title}
        </p>

        {/* Main Heading */}
        <h1
          className="eczar text-[30px] md:text-[45px] lg:text-[50px] m-0 p-0 font-bold leading-tight transition-all duration-500"
          style={{ color: brandPurple }}
        >
          {slidesData[activeIndex].mainHeading}
        </h1>

        {/* Subtext */}
        <p
          style={{ color: brandPurple }}
          className="text-sm md:text-lg font-outfit font-medium mt-1 transition-all duration-500"
        >
          <span style={{ color: charcoalBlack }}>Your Thirst’s</span>{" "}
          <span className="font-bold eczar text-lg md:text-2xl">
            {slidesData[activeIndex].subText.split(" ").slice(-2).join(" ")}
          </span>.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 w-full px-4 sm:px-0">
          <Link
            href="/tt-app"
            onMouseEnter={() => setHoverApp(true)}
            onMouseLeave={() => setHoverApp(false)}
            style={{
              backgroundColor: hoverApp ? brandPurple : "transparent",
              borderColor: brandPurple,
              color: hoverApp ? "white" : brandPurple,
            }}
            className="border-2 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full font-bold transition-all duration-300 text-sm md:text-base shadow-sm text-center active:scale-95 w-fit sm:w-auto min-w-[160px]"
          >
            View Our App
          </Link>

          <Link
            href="/products"
            onMouseEnter={() => setHoverProducts(true)}
            onMouseLeave={() => setHoverProducts(false)}
            style={{
              backgroundColor: hoverProducts ? "transparent" : brandPurple,
              borderColor: brandPurple,
              color: hoverProducts ? brandPurple : "white",
            }}
            className="border-2 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full font-bold transition-all duration-300 text-sm md:text-base shadow-sm text-center active:scale-95 w-fit sm:w-auto min-w-[160px]"
          >
            Discover all products
          </Link>
        </div>
      </div>

      {/* --- CAROUSEL SECTION --- */}
      <div className="w-full flex justify-center items-end mt-10 overflow-hidden">
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[550px] lg:h-[500px] bg-transparent">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full w-full pb-14"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="relative overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority
                    sizes="100vw"
                    className={`object-contain object-bottom origin-bottom transition-transform duration-700 ${slide.className}`}
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-pagination-bullet-active {
              background: ${brandPurple} !important;
              width: 24px !important;
              border-radius: 5px !important;
            }
            .swiper-pagination-bullet {
              background: ${brandPurple};
              opacity: 0.3;
            }
            .swiper-pagination {
              bottom: 40px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    src: "/TT-hero-main.png",
    alt: "Tiger Tiger",
    title: "Back-to-Back Winners",
    mainHeading: " Pulp+ UK Soft Drinks Awards Champion, 2025 & 2026",
    subText: "Real fruit. Real pulp. Real refreshment.",
    isVideo: false,
  },
  {
    id: 2,
    src: "/japanese-hero.webp",
    alt: "Japanese",
    title: "Made for Every Kitchen & Shelf",
    mainHeading: "Leading Pan-Asian Food Brand in the UK",
    subText: "Authentic Pan-Asian sauces and mayo to lift every dish you serve",
    isVideo: false,
  },
  {
    id: 3,
    src: "/koreann-wow.png",
    alt: "Korean",
    title: "Four Bold Flavours. Ready in 4 minutes",
    mainHeading: "Where Authentic Taste Meets Exceptional Quality",
    subText: " Add Wow to your Chow",
    isVideo: false,
  },
  {
    id: 4,
    src: "/testing.mp4",
    alt: "Brand Video",
    title: "Straight from Freezer",
    mainHeading: "Your Trusted Name in Frozen Pan-Asian Food",
    subText: "From pan to bamboo: taste the tradition",
    isVideo: true,
  },
];

const HeroSlider = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverApp, setHoverApp] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  useEffect(() => {
    router.prefetch("/tt-app");
    router.prefetch("/products");
  }, [router]);

  const brandPurple = "#4e1a51";
  const charcoalBlack = "#333333";

  return (
    <section className="relative w-full bg-transparent flex flex-col items-center overflow-hidden">
      {/* Header Spacing */}
      <div className="w-full pt-[80px] md:pt-[20px] lg:pt-[60px]" />

      {/* TEXT SECTION */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl w-full min-h-[220px] md:min-h-[200px]">
        <p
          style={{ color: charcoalBlack }}
          className="text-base lg:text-lg font-outfit mt-4 lg:mt-2 font-semibold mb-1 transition-all duration-500"
        >
          {slidesData[activeIndex]?.title}
        </p>

        <h1
          className="eczar text-[32px] md:text-[40px] lg:text-[50px] m-0 p-0 font-bold leading-tight transition-all duration-500"
          style={{ color: brandPurple }}
        >
          {slidesData[activeIndex]?.mainHeading}
        </h1>

        <p
          style={{ color: brandPurple }}
          className="text-sm md:text-lg font-outfit font-medium mt-1 transition-all duration-500"
        >
          <span style={{ color: charcoalBlack }}>Your Thirst's</span>{" "}
          <span className="font-bold eczar text-lg md:text-2xl">
            {slidesData[activeIndex]?.subText
              ? slidesData[activeIndex].subText.split(" ").slice(-2).join(" ")
              : ""}
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6 w-full px-4 sm:px-0">
          <Link
            href="/tt-app"
            prefetch={true}
            onMouseEnter={() => {
              setHoverApp(true);
              router.prefetch("/tt-app");
            }}
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
            href="/categories"
            prefetch={true}
            onMouseEnter={() => {
              setHoverProducts(true);
              router.prefetch("/categories");
            }}
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

      {/* CAROUSEL SECTION - Height Controlled */}
      <div className="w-full mt-6 overflow-hidden">
        <div className="relative w-full h-[420px] sm:h-[500px] md:h-[580px] lg:h-[560px] xl:h-[600px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full root-hero-swiper"
          >
            {slidesData.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="relative w-full h-full overflow-hidden"
              >
                {slide.isVideo ? (
                  <video
                    src={slide.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "bottom",
                      borderRadius: 0,
                    }}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CSS Overrides */}
        <style jsx global>{`
          .root-hero-swiper,
          .root-hero-swiper * {
            border-radius: 0px !important;
          }

          .root-hero-swiper .swiper-pagination-bullet-active {
            background: ${brandPurple} !important;
            width: 24px !important;
            height: 8px !important;
            border-radius: 0px !important;
          }

          .root-hero-swiper .swiper-pagination-bullet {
            background: ${brandPurple} !important;
            opacity: 0.3;
            width: 8px !important;
            height: 8px !important;
            border-radius: 0px !important;
          }

          .root-hero-swiper .swiper-pagination {
            bottom: 20px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSlider;

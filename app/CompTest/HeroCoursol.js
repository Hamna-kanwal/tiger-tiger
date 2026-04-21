"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, src: "/pulp-banner-updated.png", alt: "Product 1", className: "object-bottom translate-y-8" },
  { id: 2, src: "/test.jpeg", alt: "Product 2", className: "object-center translate-y-8" }, 
  { id: 3, src: "/korean-range.jpeg", alt: "Product 3", className: "object-center translate-y-20" },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Preload images for smooth transition
  useEffect(() => {
    const preloaded = slides.map((slide) => {
      const img = new window.Image();
      img.src = slide.src;
      return img;
    });

    return () => {
      preloaded.forEach((img) => {
        img.src = "";
      });
    };
  }, []);

  const variants = {
    enter: {
      x: "100%", // Right se aayegi
      opacity: 1,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: "-100%", // Left se nikal jayegi
      opacity: 1,
    },
  };

  return (
    <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10">
<div className="relative w-full h-[250px] md:h-[550px] lg:h-[700px] overflow-hidden">
        
        {/* mode="popLayout" ensures images move together without gaps */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.8, ease: "easeInOut" },
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              className={`object-contain scale-125 md:scale-115 lg:scale-120 origin-bottom ${slides[currentIndex].className}`}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCarousel;
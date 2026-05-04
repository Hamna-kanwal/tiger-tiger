"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { 
    id: 1, 
    src: "/pulp-hero-section.png", 
    alt: "Product 1", 
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 2, 
    src: "/japanese-hero.png", 
    alt: "Product 2", 
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 3, 
    src: "/koreannnnnn-updated (1).png", 
    alt: "Product 3", 
    className: "scale-[1.0] md:scale-105 md:translate-y-12 translate-y-3" 
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-end mt-0">
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden md:-mt-40 -mt-15">
        
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? "0%" : index > currentIndex ? "100%" : "-100%",
                zIndex: isActive ? 10 : 0
              }}
              transition={{
                x: { type: "tween", duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.6 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className={`object-contain object-bottom origin-bottom transition-all duration-500 ${slide.className}`}
                priority={index === 0}
                sizes="100vw"
                unoptimized
              />
            </motion.div>
          );
        })}
        
      </div>
    </div>
  );
};

export default HeroCarousel;
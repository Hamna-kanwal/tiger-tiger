"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: 1, src: "/pulp-hero-section.png", alt: "Product 1", className: "object-bottom translate-y-8" },
  { id: 2, src: "/japanese-hero.png", alt: "Product 2", className: "object-center translate-y-8" }, 
  { id: 3, src: "/koreannnnnn.png", alt: "Product 3", className: "object-center translate-y-20 px-2" },
  { id: 4, src: "/pulp-hero-section.png", alt: "Product 4", className: "object-bottom translate-y-8" },
  { id: 5, src: "/japanese-hero.png", alt: "Product 5", className: "object-center translate-y-8" }, 
  { id: 6, src: "/koreannnnnn.png", alt: "Product 6", className: "object-center translate-y-20 px-2" },
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
    <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10">
      <div className="relative w-full h-[300px] md:h-[550px] lg:h-[750px] overflow-hidden">
        
        {/* Mapping all slides at once to keep them in memory */}
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : index > currentIndex ? "100%" : "-100%",
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
                className={`object-contain scale-110 origin-bottom ${slide.className}`}
                priority={index === 0} // Pehli image ko fast load karein
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
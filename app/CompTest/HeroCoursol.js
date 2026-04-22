"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: 1, src: "/pulp-hero-section.png", alt: "Product 1", className: "translate-y-0 md:translate-y-8 scale-[1.35] md:scale-140" },
  { id: 2, src: "/japanese-hero.png", alt: "Product 2", className: "translate-y-0 md:translate-y-8 scale-[1.35] md:scale-140" }, 
  // Koreannnnnn wali slide ka scale thora kam kar diya taake ye kate nahi
  { id: 3, src: "/koreannnnnn.png", alt: "Product 3", className: "translate-y-0 md:translate-y-12 scale-[1.15] md:scale-105" },
  { id: 4, src: "/pulp-hero-section.png", alt: "Product 4", className: "translate-y-0 md:translate-y-8 scale-[1.35] md:scale-140" },
  { id: 5, src: "/japanese-hero.png", alt: "Product 5", className: "translate-y-0 md:translate-y-8 scale-[1.35] md:scale-140" }, 
  { id: 6, src: "/koreannnnnn.png", alt: "Product 6", className: "translate-y-0 md:translate-y-12 scale-[1.15] md:scale-105" },
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
    // mt-0 mobile ke liye taake koi faltu space na ho
    <div className="relative w-full flex justify-center items-end mt-0 md:-mt-10 z-10">
      
      {/* Mobile height h-[300px] rakhi hai jo tight fit ke liye best hai */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden">
        
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
                // object-contain aur origin-bottom tight fit ke liye
                className={`object-contain object-bottom origin-bottom transition-transform duration-500 ${slide.className}`}
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
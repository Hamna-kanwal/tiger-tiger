"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { 
    id: 1, 
    src: "/pulp-hero-section.webp", 
    alt: "Product 1", 
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 2, 
    src: "/japanese-hero.webp", 
    alt: "Product 2", 
    className: "scale-[1.5] md:scale-140 translate-y-0 md:translate-y-8" 
  },
  { 
    id: 3, 
    src: "/koreannnnnn-updated (1).webp", 
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
      {/* Aspect Ratio dena CLS fix karne ke liye zaroori hai */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden md:-mt-40 -mt-15 bg-transparent">
        
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                // x animation CLS barha sakti hai, koshish karein sirf opacity use karein agar zaroori na ho
                x: isActive ? "0%" : index > currentIndex ? "100%" : "-100%",
              }}
              transition={{
                x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
              style={{ zIndex: isActive ? 10 : 0 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                // 1. "unoptimized" hata dein, Next.js ko apna kaam karne dein
                // 2. "priority" sirf un images par jo pehle 2 slides mein hain
                priority
                fill 
                // 3. "sizes" prop ko screen ke mutabiq sahi karein
                sizes="(max-width: 768px) 100vw, 1200px"
                className={`object-contain object-bottom origin-bottom ${slide.className}`}
                // 4. Quality thori kam karein file size chota karne ke liye
                quality={85}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCarousel;
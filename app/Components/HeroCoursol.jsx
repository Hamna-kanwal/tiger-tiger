"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Animation variants taaki code saaf rahay aur CLS control mein rahay
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const HeroCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = Math.abs(page % slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="w-full flex justify-center items-end mt-0 overflow-hidden">
      {/* Container height fix rakhein taaki layout shift na ho */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden bg-transparent">
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, 1200px"
              className={`object-contain object-bottom origin-bottom ${slides[currentIndex].className}`}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Optional: Dots for navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#4B2452] w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
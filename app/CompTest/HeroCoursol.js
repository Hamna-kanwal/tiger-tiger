"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const variants = {
    enter: {
      x: "100%", // Side se slide hokar aayega
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: "-20%", // Exit hote waqt thoda sa peeche move hoga
      opacity: 0,
      transition: { opacity: { duration: 0.3 } } // Fast exit taake gap na dikhe
    },
  };

  return (
    <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10">
      {/* Container height fix aur background transparent ki jagah theme color rakhein agar white flash aa raha ho */}
      <div className="relative w-full h-[300px] md:h-[550px] lg:h-[750px] overflow-hidden">
        
        {/* 'mode' ko remove kar dein taake exit aur enter ek saath hon (overlap) */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.8, ease: [0.4, 0, 0.2, 1] }, // Custom bezier for premium feel
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              className={`object-contain scale-110 origin-bottom ${slides[currentIndex].className}`}
              priority
              unoptimized
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCarousel;
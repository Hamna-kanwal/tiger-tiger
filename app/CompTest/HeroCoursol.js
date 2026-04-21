"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, src: "/pulp-TIger-banner.png", alt: "Product 1", className: "object-bottom translate-y-8" },
  { id: 2, src: "/japanese-hero.png", alt: "Product 2", className: "object-center translate-y-8" }, 
  { id: 3, src: "/koreannnnnn.png", alt: "Product 3", className: "object-center translate-y-20 px-2" },
  { id: 4, src: "/pulp-TIger-banner.png", alt: "Product 4", className: "object-bottom translate-y-8" },
  { id: 5, src: "/japanese-hero.png", alt: "Product 5", className: "object-center translate-y-8" }, 
  { id: 6, src: "/koreannnnnn.png", alt: "Product 6", className: "object-center translate-y-20 px-2" },
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

  const variants = {
    enter: {
      x: "100%", 
      opacity: 0, // Opacity zero se start karein taake white jhatka na lage
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: "-100%", 
      opacity: 0, // Exit hote waqt halka sa fade out
    },
  };

  return (
    <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10">
      {/* Background container color helps prevent white flashes */}
      <div className="relative w-full h-[250px] md:h-[550px] lg:h-[750px] overflow-hidden bg-transparent">
        
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex} // Unique key ensures smooth transition
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.8, ease: "easeInOut" },
              opacity: { duration: 0.4 }
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              className={`object-contain scale-125 md:scale-115 lg:scale-120 origin-bottom ${slides[currentIndex].className}`}
              priority // High priority loading
              unoptimized={true} // Vercel optimization delay se bachne ke liye
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCarousel;
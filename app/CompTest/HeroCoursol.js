"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, src: "/Hero_Bg.png", alt: "Product 1", className: "object-bottom" },
  { id: 2, src: "/test.jpeg", alt: "Product 2", className: "object-center translate-y-8" }, 
  { id: 3, src: "/korean-range.jpeg", alt: "Product 3", className: "object-center translate-y-20" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Timer thora kam kiya hai (4s) taake fast lagay

    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", // Poori width se enter hogi
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%", // Sath hi exit hogi
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10 px-4">
      <div className="relative w-full max-w-[1500px] h-[350px] md:h-[550px] lg:h-[650px] overflow-hidden">
        {/* 'mode' ko remove kar diya hai taake blank screen na aaye */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 }, // Snappy movement
              opacity: { duration: 0.2 }
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
}
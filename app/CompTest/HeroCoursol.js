"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  /* ID 1 (Purani image) - Ye apni jagah sahi hai */
  { 
    id: 1, 
    src: "/Hero_Bg.png", 
    alt: "Product 1",
    /* Change 1: Added individual class for object position */
    className: "object-bottom" 
  },
  
  /* ID 2 - Isay niche karne ke liye object-center aur translation use karenge */
  { 
    id: 2, 
    src: "/test.jpeg", 
    alt: "Product 2", 
    /* Change 2: "object-center" removes default bottom alignment, 
       "translate-y-16" shifts it down. Adjust "16" as needed. */
    className: "object-center translate-y-8" 
  }, 
  
  /* ID 3 - Isay bhi thoda niche karenge */
  { 
    id: 3, 
    src: "/korean-range.jpeg", 
    alt: "Product 3",
    /* Change 3: Similar adjust to shift down */
    className: "object-center translate-y-20" 
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const brandPurple = "#4e1a51";

  useEffect(() => {
    const timer = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const moveSlide = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10 px-4 group">
      
      {/* Left Arrow (Wohi purana code) */}
    

      {/* Image Container */}
      <div className="relative w-full max-w-[1500px] h-[350px] md:h-[550px] lg:h-[650px] flex justify-center items-end overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              /* Change 4: Combined base styles with the individual class from the array */
              className={`object-contain scale-125 md:scale-115 lg:scale-120 origin-bottom transition-transform duration-300 ${slides[currentIndex].className}`}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

  
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [hoverApp, setHoverApp] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";
  const charcoalBlack = "#333333";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden">
      {/* Dynamic spacing for header height */}
      <div className="w-full pt-[80px] md:pt-[100px] lg:pt-[120px]" />

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl">
        <p
          style={{ color: charcoalBlack }}
          className="text-base lg:text-lg font-outfit mt-4 lg:mt-2 font-semibold mb-1"
        >
          Nature’s Best in Every Sip
        </p>

        <h1 
          className="eczar text-[30px] md:text-[45px] lg:text-[55px] m-0 p-0 font-bold leading-tight" 
          style={{ color: brandPurple }}
        >
          Leading Asian Food Brand in the UK
        </h1>

        <p
          style={{ color: brandPurple }}
          className="text-sm md:text-lg font-outfit font-medium mt-1"
        >
          <span style={{ color: charcoalBlack }}>Your Thirst’s</span>{" "}
          <span className="font-bold eczar text-lg md:text-2xl">
            New Weakness
          </span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8 w-full px-4 sm:px-0">
          <Link
            href="/tt-app"
            onMouseEnter={() => setHoverApp(true)}
            onMouseLeave={() => setHoverApp(false)}
            style={{ 
              backgroundColor: hoverApp ? brandPurple : "transparent",
              borderColor: brandPurple, 
              color: hoverApp ? "white" : brandPurple 
            }}
            className="border-2 px-10 py-3.5 rounded-full font-bold transition-all duration-300 text-sm md:text-base shadow-sm text-center active:scale-95"
          >
            View Our App
          </Link>

          <Link
            href="/products"
            onMouseEnter={() => setHoverProducts(true)}
            onMouseLeave={() => setHoverProducts(false)}
            style={{ 
              backgroundColor: hoverProducts ? "transparent" : brandPurple,
              borderColor: brandPurple,
              color: hoverProducts ? brandPurple : "white"
            }}
            className="px-10 py-3.5 rounded-full font-bold border-2 transition-all duration-300 shadow-md text-sm md:text-base text-center active:scale-95"
          >
            Discover all products
          </Link>
        </div>
      </div>

      <div className="w-full mt-6 md:mt-8">
        {/* Carousel Component will go here */}
      </div>
    </section>
  );
};

export default HeroSlider;
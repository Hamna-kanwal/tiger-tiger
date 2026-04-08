"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  // Hover states for the buttons
  const [hoverApp, setHoverApp] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";
  const charcoalBlack = "#333333"; // New charcoal shade

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden min-h-screen">

      {/* 1. TOP SPACING BUFFER */}
      <div className="w-full pt-[100px] md:pt-[140px] lg:pt-[160px]" />

      {/* 3. TEXT CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl">
        <p
          style={{ color: charcoalBlack }} // Applied charcoal black here
          className="text-base lg:text-lg font-outfit mt-4 lg:mt-2 font-semibold mb-1"
        >
          Nature’s Best in Every Sip
        </p>

        <h1 className="eczar text-[30px] md:text-[50px] lg:text-[50px] m-0 p-0" style={{ color: brandPurple }}>
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

        {/* Mobile-optimized button container */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8 w-full px-4 sm:px-0">
          <Link
            href="/tt-app"
            suppressHydrationWarning
            onMouseEnter={() => setHoverApp(true)}
            onMouseLeave={() => setHoverApp(false)}
            style={{ 
              borderColor: hoverApp ? brandGold : brandPurple, 
              color: hoverApp ? brandGold : brandPurple 
            }}
            className="border-2 px-8 py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base bg-white shadow-sm text-center"
          >
            View Our App
          </Link>

          <Link
            href="/products"
            suppressHydrationWarning
            onMouseEnter={() => setHoverProducts(true)}
            onMouseLeave={() => setHoverProducts(false)}
            style={{ 
              backgroundColor: hoverProducts ? brandGold : brandPurple,
              borderColor: hoverProducts ? brandGold : "transparent"
            }}
            className="text-white px-8 py-3 rounded-full font-bold border-2 transition-all duration-300 shadow-md text-sm md:text-base text-center"
          >
            Discover all products
          </Link>
        </div>
      </div>

      {/* 4. PRODUCT IMAGE */}
      <div className="relative w-full flex justify-center items-end mt-10 md:-mt-36 lg:-mt-48 z-10 px-4">
        <div className="relative w-full max-w-[1500px] h-[300px] md:h-[550px] lg:h-[650px]">
          <Image
            src="/Hero_Bg.png"
            alt="Pulp Family"
            fill
            className="object-contain object-bottom scale-125 md:scale-115 lg:scale-120 origin-bottom"
            priority
          />
        </div>
      </div>

    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [hoverApp, setHoverApp] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";
  const charcoalBlack = "#333333";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    /* Change 1: Removed min-h-screen to prevent forced empty space at the bottom */
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden">

      {/* 1. TOP SPACING BUFFER */}
      <div className="w-full pt-[80px] md:pt-[100px] lg:pt-[120px]" />

      {/* 2. TEXT CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl">
        <p
          style={{ color: charcoalBlack }}
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

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8 w-full px-4 sm:px-0">
          <Link
            href="/tt-app"
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

      {/* 3. CAROUSEL COMPONENT */}
      {/* Change 2: Margin bottom negative ko kam ya khatam kar sakte hain agar space phir bhi zyada lage */}
      <div className="w-full mt-6 md:mt-8">
    
      </div>

    </section>
  );
}
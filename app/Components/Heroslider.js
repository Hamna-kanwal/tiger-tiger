"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const brandPurple = "#4e1a51";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden min-h-screen">
      
      {/* 1. TOP SPACING BUFFER */}
      {/* Increased mobile padding to ensure header doesn't overlap text */}
      <div className="w-full pt-[100px] md:pt-[140px] lg:pt-[160px]" />

      {/* 2. SCATTERED PULPS */}
      {/* Added pointer-events-none so these don't block button clicks on small screens */}
      <div className="absolute top-[12%] left-[5%] w-16 h-16 md:w-32 md:h-32 z-10 opacity-90 animate-float pointer-events-none">
         <Image src="/red.png" alt="Red Pulp" width={120} height={120} className="object-contain" />
      </div>
      
      <div className="absolute top-[40%] right-[2%] w-16 h-16 md:w-32 md:h-32 z-10 opacity-90 animate-float [animation-delay:4s] pointer-events-none">
         <Image src="/yello.png" alt="Yellow Pulp" width={120} height={120} className="object-contain -rotate-45" />
      </div>

      <div className="absolute bottom-[30%] left-[10%] w-12 h-12 md:w-24 md:h-24 z-10 opacity-80 animate-float [animation-delay:5.5s] pointer-events-none">
         <Image src="/white.png" alt="White Pulp" width={90} height={90} className="object-contain rotate-[110deg]" />
      </div>

      {/* 3. TEXT CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl">
        <p 
          style={{ color: brandPurple }} 
          className="text-[10px] md:text-xs font-outfit font-semibold tracking-[0.2em] uppercase mb-1"
        >
          Nature’s Best in Every Sip
        </p>
        
        <h1 className="eczar text-[32px] md:text-[54px] lg:text-[74px] font-black tracking-tighter leading-[1.1] text-[#1a1a1a]">
          The Champion of <span style={{ color: brandPurple }}>Pulp</span>
        </h1>
        
        <p 
          style={{ color: brandPurple }} 
          className="text-sm md:text-lg font-outfit font-medium mt-1"
        >
          Your Thirst’s <span className="font-bold eczar text-lg md:text-2xl">New Weakness</span>.
        </p>

        {/* Mobile-optimized button container */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8 w-full px-4 sm:px-0">
          <Link 
            href="/tt-app" 
            suppressHydrationWarning // FIX: Hydration error
            style={{ borderColor: brandPurple, color: brandPurple }}
            className="border-2 px-8 py-3 rounded-full font-bold transition-all text-sm md:text-base bg-white shadow-sm hover:bg-opacity-90 text-center"
          >
            View Our App
          </Link>

          <Link 
            href="/products" 
            suppressHydrationWarning // FIX: Hydration error
            style={{ backgroundColor: brandPurple }}
            className="text-white px-8 py-3 rounded-full font-bold border-2 border-transparent transition-all shadow-md text-sm md:text-base hover:opacity-90 text-center"
          >
            Discover all products
          </Link>
        </div>
      </div>

      {/* 4. PRODUCT IMAGE */}
      {/* Reduced negative margin on mobile (-mt-8) to prevent image 
          from overlapping/blocking the buttons 
      */}
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
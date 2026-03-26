"use client";

import Link from "next/link";

export default function Product() {
  // Exact brand colors
  const brandPurple = "#4e1a51";

  return (
    <section className="py-12 md:py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* 1. Heading: Brand Purple */}
            <h2 
              style={{ color: brandPurple }}
              className="eczar font-bold text-[36px] md:text-[60px] tracking-tight leading-none"
            >
              Fan-Favourite Flavours
            </h2>
            
            {/* 2. Sub-header: Switched to BLACK */}
            <p 
              className="text-black text-[16px] md:text-[18px] font-medium mt-4 tracking-wide"
            >
              The Line-Up Everyone Loves
            </p>
          </div>

          {/* 3. Button: Brand Purple Background with White Text (No Border) */}
          <Link
            href="/"
            suppressHydrationWarning
            style={{ backgroundColor: brandPurple }}
            className="text-white inline-block self-center md:self-auto px-12 py-5 rounded-[20px] text-[20px] md:text-[24px] eczar font-bold hover:brightness-125 transition-all duration-300 shadow-lg"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
}
"use client";

import Link from "next/link";

export default function Product() {
  // Exact brand colors
  const brandPurple = "#4e1a51";

  return (
    <section className="py-4 md:py-8 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Parent Container: flex-row aur items-center for vertical middle alignment */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-6">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* 1. Heading: Brand Purple */}
            <h2 
              style={{ color: brandPurple }}
              className="eczar font-bold text-[36px] md:text-[60px] tracking-tight leading-[1.1]"
            >
              Fan-Favourite Flavours
            </h2>
            
            {/* 2. Sub-header: 12px Top Margin as requested */}
            <p 
              className="text-black text-[16px] md:text-[18px] font-medium mt-[12px] tracking-wide subHeading"
            >
              The Line-Up Everyone Loves
            </p>
          </div>

          {/* Right Side: Button Container (Self Centered Vertically) */}
          <div className="flex items-center">
            <Link
              href="/"
              suppressHydrationWarning
              style={{ backgroundColor: brandPurple }}
              className="text-white inline-flex items-center justify-center px-12 py-5 rounded-[20px] text-[20px] md:text-[24px] eczar font-bold hover:brightness-125  transition-all duration-300 shadow-lg leading-none"
            >
              View All
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeatureProductPageClient({ sections = [] }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="grow max-w-[1440px] mx-auto w-full px-6 py-12">
        {sections.map((section, idx) => (
          <div id={section.id} key={idx} className="py-16 border-b border-gray-100 last:border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4e1a51] mb-10 uppercase tracking-tight">
              {section.title}
            </h2>

            {/* Layout: Grid 12 cols - Left side 4, Right side 8 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT SIDE: Feature Slider */}
              <div className="lg:col-span-4">
                <FeatureSlider features={section.features || []} />
              </div>

              {/* RIGHT SIDE: Product List/Slider */}
              <div className="lg:col-span-8">
                <ProductSlider listings={section.listings || []} />
              </div>

            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

// Left side ka slider (Link hata diya gaya hai)
function FeatureSlider({ features }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (features.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="relative rounded-[2rem] overflow-hidden shadow-xl h-[350px] md:h-[460px]">
      {features.map((item, i) => (
        // Link ki jagah div use kiya, taake click hone par kahi na jaye
        <div 
          key={item.id} 
          className={`absolute inset-0 transition-opacity duration-1000 ${current === i ? "opacity-100" : "opacity-0"}`}
        >
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-full h-full object-cover" 
          />
        </div>
      ))}
    </div>
  );
}

// Right side ka slider for products
function ProductSlider({ listings }) {
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => setStartIndex((prev) => (prev + 1) % listings.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 1 + listings.length) % listings.length);
  
  const visibleListings = [0, 1, 2].map(i => listings[(startIndex + i) % listings.length]);

  return (
    <div className="relative flex items-center mt-15">
      <button onClick={handlePrev} className="absolute -left-4 z-30 p-3 bg-[#4e1a51] text-white rounded-full shadow-lg hover:bg-black transition-colors"><ChevronLeft size={40} /></button>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
        {visibleListings.map((item, i) => (
          <Link key={i} href={item.href} className="flex flex-col items-center group">
             <div className="relative w-full aspect-[3/4] bg-white shadow-md rounded-[2rem] flex items-center justify-center p-6 border border-gray-100 group-hover:shadow-2xl transition-all">
                <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                {item.isComingSoon && <div className="absolute inset-0 bg-black/5 flex items-center justify-center font-black text-sm">SOON</div>}
             </div>
             <h3 className="mt-4 text-xs font-black uppercase text-[#431A4F] text-center">{item.name}</h3>
          </Link>
        ))}
      </div>

      <button onClick={handleNext} className="absolute -right-4 z-50 p-3 bg-[#4e1a51] text-white rounded-full shadow-lg hover:bg-black transition-colors"><ChevronRight size={40} /></button>
    </div>
  );
}
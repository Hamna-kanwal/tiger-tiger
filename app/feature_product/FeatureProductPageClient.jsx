"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeatureProductPageClient({ sections }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="grow max-w-[1440px] mx-auto">
        {sections.map((section, idx) => (
          <div key={idx} className="py-16 border-b border-gray-100 last:border-0 last:pb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4e1a51] mb-10 uppercase">{section.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {section.features.map((item) => (
                <Link key={item.id} href={item.href} className="block relative group">
                  <div className="overflow-hidden rounded-[30px] shadow-lg">
                    <img src={item.img} alt={item.name} className="w-full hover:scale-105 transition-transform duration-700" />
                  </div>
                  {item.isComingSoon && (
                    <div className="absolute top-4 right-4 bg-[#4e1a51] text-white px-4 py-1 rounded-full text-xs font-bold">COMING SOON</div>
                  )}
                </Link>
              ))}
            </div>

            <ProductSlider listings={section.listings} />
          </div>
        ))}
      </main>
    </div>
  );
}

function ProductSlider({ listings }) {
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => setStartIndex((prev) => (prev + 1) % listings.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 1 + listings.length) % listings.length);
  
  const visibleListings = [0, 1, 2].map(i => listings[(startIndex + i) % listings.length]);

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden px-4 space-y-10">
        {listings.map((item) => (
          <Link key={item.id} href={item.href} className="flex flex-col items-center">
             <div className="relative w-full aspect-[3/4] bg-white shadow-2xl rounded-[2.5rem] flex items-center justify-center">
                <img src={item.img} alt={item.name} className="max-h-full p-6 object-contain" />
                {item.isComingSoon && <div className="absolute inset-0 bg-black/10 flex items-center justify-center font-black">SOON</div>}
             </div>
             <h3 className="mt-4 font-black uppercase text-[#431A4F]">{item.name}</h3>
          </Link>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex relative items-center px-20 pt-4">
        <button onClick={handlePrev} className="absolute left-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full"><ChevronLeft /></button>
        <div className="grid grid-cols-3 gap-10 w-full">
          {visibleListings.map((item, i) => (
            <Link key={i} href={item.href} className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] bg-white shadow-2xl rounded-[2.5rem] flex items-center justify-center">
                    <img src={item.img} alt={item.name} className="max-h-full p-6 object-contain" />
                    {item.isComingSoon && <div className="absolute inset-0 bg-black/10 flex items-center justify-center font-black">SOON</div>}
                </div>
                <h3 className="mt-4 font-black uppercase text-[#431A4F]">{item.name}</h3>
            </Link>
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full"><ChevronRight /></button>
      </div>
    </>
  );
}
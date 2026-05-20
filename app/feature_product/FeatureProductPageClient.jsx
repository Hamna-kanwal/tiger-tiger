"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductRange from "../Components/ProductRange";

export default function FeatureProductPageClient({ sections }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const getVisibleListings = (listings) => {
    if (!listings || listings.length === 0) return [];
    return listings.slice(0, 3).map((item) => item);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="grow pt-20 pb-16 px-4 md:px-12">
        <div className="mt-20">
          <ProductRange />
        </div>

        <div className="max-w-[1440px] mx-auto">
          {sections.map((section, idx) => {
            const visibleListings = getVisibleListings(section.listings);
            return (
              <div key={idx} className="mb-64 mt-22 pb-20 border-b border-gray-50 last:border-0 last:mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4e1a51] mb-10 uppercase tracking-tight">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                  {section.features.map((item) => {
                    const content = (
                      <div className="overflow-hidden rounded-[30px] md:rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500 block">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-auto block transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    );

                    return item.href ? (
                      <Link key={item.id} href={item.href} className="block">
                        {content}
                      </Link>
                    ) : (
                      <div key={item.id}>{content}</div>
                    );
                  })}
                </div>

                <div className="relative flex items-center px-4 md:px-20">
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 md:left-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
                  >
                    <ChevronLeft size={30} strokeWidth={2.5} />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
                    {visibleListings.map((item, i) => {
                      const card = (
                        <div className="flex flex-col items-center group/card">
                          <div className="relative w-full aspect-[3/4] overflow-hidden flex items-center justify-center mb-4 transition-all duration-500 group-hover/card:drop-shadow-3xl shadow-2xl rounded-[2.5rem] bg-white">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover/card:scale-110"
                            />
                          </div>
                          <div className="mt-4 text-center w-full px-4 min-h-[30px] flex items-center justify-center">
                            <h3 className="text-[14px] md:text-[18px] font-black uppercase text-[#431A4F] tracking-tighter group-hover/card:text-black transition-colors leading-tight text-center">
                              {item.name}
                            </h3>
                          </div>
                        </div>
                      );

                      return item.href ? (
                        <Link key={`${item.id}-${i}`} href={item.href} className="flex flex-col items-center group/card cursor-pointer">
                          {card}
                        </Link>
                      ) : (
                        <div key={`${item.id}-${i}`}>{card}</div>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleNext}
                    className="absolute right-0 md:right-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
                  >
                    <ChevronRight size={30} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

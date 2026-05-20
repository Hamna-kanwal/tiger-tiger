"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductRange from "../Components/ProductRange";

export default function FeatureProductPageClient({ sections }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="grow">
        <div className="mt-10">
          <ProductRange />
        </div>

        <div className="max-w-[1440px] mx-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="py-16 border-b border-gray-100 last:border-0 last:pb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4e1a51] mb-10 uppercase tracking-tight">
                {section.title}
              </h2>

              {/* Top Banner Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                {section.features.map((item) => {
                  const content = (
                    <div className="overflow-hidden rounded-[30px] md:rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500 block">
                      <img
                        src={item.img}
                        alt={item.name || "Feature"}
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

              {/* Slider / Mobile Grid Component */}
              <ProductSlider listings={section.listings} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function ProductSlider({ listings }) {
  const [startIndex, setStartIndex] = useState(0);

  if (!listings || listings.length === 0) return null;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % listings.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + listings.length) % listings.length);
  };

  // Desktop Slider (Cyclic Infinite Loop Logic)
  const getVisibleListings = () => {
    let items = [];
    for (let i = 0; i < 3; i++) {
      items.push(listings[(startIndex + i) % listings.length]);
    }
    return items;
  };

  const visibleListings = getVisibleListings();

  // Helper template taaki mobile aur desktop dono layouts me card designs bilkul clean rahein
  const renderCard = (item, uniqueKey) => {
    const cardContent = (
      <div className="flex flex-col items-center group/card w-full">
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
      <Link key={uniqueKey} href={item.href} className="flex flex-col items-center group/card cursor-pointer w-full">
        {cardContent}
      </Link>
    ) : (
      <div key={uniqueKey} className="w-full">{cardContent}</div>
    );
  };

  return (
    <>
      {/* 📱 MOBILE VIEW: No arrows, saare products grid/list layout me ek sath show honge */}
      <div className="block md:hidden px-4">
        <div className="grid grid-cols-1 gap-10 w-full">
          {listings.map((item, i) => renderCard(item, `mobile-${item.id}-${i}`))}
        </div>
      </div>

      {/* 💻 DESKTOP VIEW: Purana cyclic functional infinite slider (Bilkul un-touched) */}
      <div className="hidden md:flex relative items-center px-20 pt-4">
        <button
          onClick={handlePrev}
          className="absolute left-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
        >
          <ChevronLeft size={30} strokeWidth={2.5} />
        </button>

        <div className="grid grid-cols-3 gap-10 w-full">
          {visibleListings.map((item, i) => renderCard(item, `desktop-${item.id}-${i}`))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
        >
          <ChevronRight size={30} strokeWidth={2.5} />
        </button>
      </div>
    </>
  );
}
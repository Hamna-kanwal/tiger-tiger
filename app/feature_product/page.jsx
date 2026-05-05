"use client";
import { useState } from "react";
import ProductRange from "../Components/ProductRange";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "Pulp Plus",
      features: [
        { id: 1, img: "/pulp-feature_1.png" },
        { id: 2, img: "/pulpfeature_2.jpeg" },
        { id: 3, img: "/pulpfeature_3.jpeg" },
      ],
      listings: [
        { id: 4, name: "PULP+ LYCHEE JUICE", img: "/feature_guava.jpg" },
        { id: 5, name: "PULP+ MANGO JUICE", img: "/featured_guava.jpg" },
        { id: 6, name: "PULP+ PINK GUAVA JUICE", img: "/featured_mango.jpg" },
        { id: 7, name: "PULP+ COCONUT WATER", img: "/featured_coconut.jpg" },
      ],
    },
    {
      title: "Popping Candy",
      features: [
        { id: 8, img: "/popping feature 1.jpeg" },
        { id: 9, img: "/popping feature 2.jpeg" },
        { id: 10, img: "/popping feature 3.jpeg" },
      ],
      listings: [
        { id: 11, name: "POPPING CANDY BISCUITS STICK MILK TEA", img: "/feature_product.jpg" },
        { id: 12, name: "POPPING CANDY BISCUITS STICK BANANA", img: "/banana.jpg" },
        { id: 13, name: "POPPING CANDY BISCUITS STICK CAPPUCCINO", img: "/coffee.jpg" },
        { id: 14, name: "POPPING CANDY BISCUITS STICK COOKIES", img: "/biscuit.jpg" },
      ],
    },
    {
      title: "COCO CHOO",
      features: [
        { id: 15, img: "/cocochoo-feature-1.png" },
        { id: 16, img: "/coco choo 2.jpeg" },
        { id: 17, img: "/coco choo 3.jpeg" },
      ],
      listings: [
        { id: 18, name: "COCO CHOO CLASSIC", img: "/chow1.jpeg" },
        { id: 19, name: "COCO CHOO HAZELNUT", img: "/chow2.jpeg" },
        { id: 20, name: "COCO CHOO DARK", img: "/chow3.jpeg" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-20 pb-16 px-4 md:px-12">
        <div className="mt-20">
          <ProductRange />
        </div>

        <div className="max-w-[1440px] mx-auto">
          {sections.map((section, idx) => (
            // mb-64 aur pb-20 add kiya hai har section ke end par extra spacing ke liye
            <div key={idx} className="mb-64 mt-22 pb-20 border-b border-gray-50 last:border-0 last:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4e1a51] mb-10 uppercase tracking-tight">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                {section.features.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-[30px] md:rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src={item.img}
                      alt="Feature"
                      className="w-full h-auto block transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Slider Component */}
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

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % listings.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + listings.length) % listings.length);
  };

  const getVisibleListings = () => {
    let items = [];
    if (!listings || listings.length === 0) return items;
    for (let i = 0; i < 3; i++) {
      items.push(listings[(startIndex + i) % listings.length]);
    }
    return items;
  };

  const visibleListings = getVisibleListings();

  return (
    <div className="relative flex items-center px-4 md:px-20">
      <button
        onClick={handlePrev}
        className="absolute left-0 md:left-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
      >
        <ChevronLeft size={30} strokeWidth={2.5} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
        {visibleListings.map((item, i) => (
          <div key={`${item.id}-${i}`} className="flex flex-col items-center group/card">
            <div className="relative w-full aspect-[3/4] overflow-hidden flex items-center justify-center p-6 mb-4 transition-all duration-500 group-hover/card:drop-shadow-3xl shadow-2xl rounded-[2.5rem] bg-white">
              <img
                src={item.img}
                alt={item.name}
                className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover/card:scale-110"
              />
            </div>
            <div className="mt-4 text-center w-full px-4 min-h-[60px] flex items-center justify-center">
              <h3 className="text-[14px] md:text-[18px] font-black uppercase text-[#431A4F] tracking-tighter group-hover/card:text-black transition-colors leading-tight text-center">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 md:right-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
      >
        <ChevronRight size={30} strokeWidth={2.5} />
      </button>
    </div>
  );
}
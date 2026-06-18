"use client";
import { useState } from "react";
import ProductRange from "../../Components/ProductRange";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Home() {
  const pathname = usePathname();
  const parts = pathname ? pathname.split("/").filter(Boolean) : [];
  const currentProductSlug = parts[1] || parts[0] || "feature_product";

  const sections = [
    {
      title: "Pulp Plus",
      features: [
        { id: 1, img: "/pulp-feature_1.webp" },
        { id: 2, img: "/pulpfeature_2.webp" },
        { id: 3, img: "/pulpfeature_3.webp" },
      ],
      listings: [
        { id: 4, name: "PULP+ LYCHEE JUICE", img: "/feature_guava.webp" },
        { id: 5, name: "PULP+ MANGO JUICE", img: "/featured_guava.webp" },
        { id: 6, name: "PULP+ PINK GUAVA JUICE", img: "/featured_mango.webp" },
        { id: 7, name: "PULP+ COCONUT WATER", img: "/featured_coconut.webp" },
      ],
    },
    {
      title: "Popping Candy",
      features: [
        { id: 8, img: "/popping feature 1.webp" },
        { id: 9, img: "/popping feature 2.webp" },
     
      ],
      listings: [
        { id: 11, name: "POPPING CANDY BISCUITS STICK MILK TEA", img: "/feature_product.webp" },
        { id: 12, name: "POPPING CANDY BISCUITS STICK BANANA", img: "/banana.webp" },
        { id: 13, name: "POPPING CANDY BISCUITS STICK CAPPUCCINO", img: "/coffee.webp" },
        { id: 14, name: "POPPING CANDY BISCUITS STICK COOKIES", img: "/biscuit.webp" },
      ],
    },
    {
      title: "COCO CHOO",
      features: [
        { id: 15, img: "/cocochoo-feature-1.webp" },
        { id: 16, img: "/coco choo 2.webp" },
        { id: 17, img: "/coco choo 3.webp" },
      ],
      listings: [
        { id: 18, name: "COCO CHOO CLASSIC", img: "/chow1.webp" },
        { id: 19, name: "COCO CHOO HAZELNUT", img: "/chow2.webp" },
        { id: 20, name: "COCO CHOO DARK", img: "/chow3.webp" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pb-16 px-4 md:px-12">
        <div className="mt-20">
          <ProductRange />
        </div>

        <div className="max-w-[1700px] mx-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="py-16 border-b border-gray-100 last:border-0 last:pb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4e1a51] mb-10 uppercase tracking-tight">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                {section.features.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-[30px] md:rounded-[0px] shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src={item.img}
                      alt="Feature"
                      className="w-full h-auto block transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Slider Component */}
              <ProductSlider listings={section.listings} productSlug={currentProductSlug} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function ProductSlider({ listings, productSlug }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    // Array ke safe range ke mutabik index ko rotate karega
    setStartIndex((prev) => (prev + 1) % listings.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + listings.length) % listings.length);
  };

  // FIXED: Array logic jo dynamic slice bana kar active 3 items generate karega
  const getVisibleListings = () => {
    let items = [];
    if (!listings || listings.length === 0) return items;
    
    // Agar items 3 ya 3 se kam hain, toh slide ki zaroorat nahi seedha render karein
    if (listings.length <= 3) return listings;

    for (let i = 0; i < 3; i++) {
      items.push(listings[(startIndex + i) % listings.length]);
    }
    return items;
  };

  const visibleListings = getVisibleListings();

  return (
    <div className="relative flex items-center px-4 md:px-20 pt-4">
      {/* Buttons tabhi show honge jab listings 3 se zyada hain */}
      {listings.length > 3 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
        >
          <ChevronLeft size={30} strokeWidth={2.5} />
        </button>
      )}

      {/* Grid container responsive widths ke sath elements update karega */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
          {visibleListings.map((item, i) => {
            const sku = slugify(item.name || item.id);
            return (
              <Link
                key={`${item.id}-${i}`}
                href={`/feature_product/${productSlug}/${sku}`}
                className="flex flex-col items-center group/card animate-fadeIn"
              >
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
              </Link>
            );
          })}
        </div>
      </div>

      {listings.length > 3 && (
        <button
          onClick={handleNext}
          className="absolute right-0 md:right-4 z-30 p-4 bg-[#4e1a51] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95"
        >
          <ChevronRight size={30} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
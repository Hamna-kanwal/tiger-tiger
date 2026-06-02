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
        { id: 10, img: "/popping feature 3.webp" },
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow pb-20">
        <div className="mt-10">
          <ProductRange />
        </div>

        <div className="max-w-[1300px] mx-auto px-6">
          {sections.map((section, idx) => (
            <div key={idx} className="py-16 border-b border-gray-200 last:border-0">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 uppercase tracking-tighter">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {section.features.map((item) => (
                  <div key={item.id} className="group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <img
                      src={item.img}
                      alt="Feature"
                      className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

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

  const handleNext = () => setStartIndex((prev) => (prev + 1) % listings.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 1 + listings.length) % listings.length);

  const getVisibleListings = () => {
    if (!listings || listings.length === 0) return [];
    if (listings.length <= 3) return listings;
    return [0, 1, 2].map((i) => listings[(startIndex + i) % listings.length]);
  };

  const visibleListings = getVisibleListings();

  return (
    <div className="relative flex items-center">
      {listings.length > 3 && (
        <button
          onClick={handlePrev}
          className="absolute -left-4 md:-left-12 z-20 p-3 bg-white border border-gray-200 text-slate-700 rounded-full shadow-lg hover:bg-slate-900 hover:text-white transition-all"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {visibleListings.map((item, i) => {
          const sku = slugify(item.name || item.id);
          return (
            <Link
              key={`${item.id}-${i}`}
              href={`/feature_product/${productSlug}/${sku}`}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] flex items-center justify-center p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-sm md:text-base font-bold text-slate-800 uppercase tracking-wide group-hover:text-purple-700 transition-colors">
                {item.name}
              </h3>
            </Link>
          );
        })}
      </div>

      {listings.length > 3 && (
        <button
          onClick={handleNext}
          className="absolute -right-4 md:-right-12 z-20 p-3 bg-white border border-gray-200 text-slate-700 rounded-full shadow-lg hover:bg-slate-900 hover:text-white transition-all"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
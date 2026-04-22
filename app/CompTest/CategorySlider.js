"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

const CategoryMarquee = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const categories = useMemo(() => [
    { name: "NOODLES", slug: "noodles", image: "/Noodles.jpg" },
    { name: "Nuts & Seeds", slug: "nuts-seeds", image: "/nuts and seeds.jpg" },
    { name: "Rice", slug: "rice", image: "/rice.jpg" },
    { name: "Canned", slug: "canned", image: "/Canned.jpg" },
    { name: "Snacks", slug: "snacks", image: "/snacks.jpg" },
    { name: "Spices & Seasonings", slug: "spices", image: "/Spices_and_seasonings.png" },
    { name: "Drinks", slug: "drinks", image: "/Drinks.png" },
    { name: "Frozen", slug: "frozen", image: "/frozen cat.jpg" },
    { name: "Taste of Asia", slug: "japan", image: "/taste of asia.jpg" },
    { name: "Sauces", slug: "sauces", image: "/Sauces.png" },
  ], []);

  const repeated = [...categories, ...categories];
  const brandPurple = "#4e1a51";
  const brandGold = "#d2bf7f";

  return (
    <section className="py-4 w-full bg-white overflow-x-hidden">
      
      {/* Header Section: Mobile par flex-row aur justify-between rakha hai */}
      <div className="flex flex-row justify-between items-center mb-10 gap-2 max-w-7xl mx-auto px-6">
        <h2 
          style={{ color: brandPurple }} 
          className="text-xl sm:text-2xl md:text-5xl font-serif font-bold eczar whitespace-nowrap"
        >
          Our Categories
        </h2>
        
        <button 
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          style={{ 
            backgroundColor: isBtnHovered ? brandGold : brandPurple 
          }}
          className="text-white font-bold py-2 px-4 md:py-4 md:px-10 rounded-xl md:rounded-2xl transition-all duration-300 text-xs sm:text-sm md:text-xl shadow-md eczar whitespace-nowrap"
        >
          All Categories
        </button>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden pt-4 pb-8">
        <div className="flex w-max animate-marquee-infinite hover:pause-marquee">
          {repeated.map((item, i) => (
            <Link
              href={`/categories/${item.slug}`}
              key={`${item.slug}-${i}`}
              className="flex flex-col items-center shrink-0 px-3 md:px-6"
            >
              <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105 hover:border-[#d2bf7f] bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 112px, 160px"
                  className="object-cover"
                />
              </div>
              
              <p 
                style={{ color: brandPurple }}
                className="mt-4 text-center text-xs md:text-sm font-bold uppercase tracking-wider"
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee-infinite {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .hover\:pause-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CategoryMarquee;
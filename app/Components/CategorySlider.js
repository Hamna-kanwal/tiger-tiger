"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategoryMarquee() {
  const categories = [
    { name: "NOODLES", slug: "noodles", image: "/noodles.png" },
    { name: "Nuts & Seeds", slug: "nuts-seeds", image: "/Nuts_and_Seeds.png" },
    { name: "Rice", slug: "rice", image: "/rice.png" },
    { name: "Canned", slug: "canned", image: "/canned.png" },
    { name: "Snacks", slug: "snacks", image: "/snacks.png" },
    { name: "Spices & Seasonings", slug: "spices", image: "/Spices_and_seasonings.png" },
    { name: "Drinks", slug: "drinks", image: "/drinks.png" },
    { name: "Frozen", slug: "frozen", image: "/frozen.png" },
    { name: "Taste japan", slug: "japan", image: "/Japanese.png" },
    { name: "Sauces", slug: "sauces", image: "/Sauces.png" },
  ];

  // Exactly two sets for a perfect loop
  const repeated = [...categories, ...categories];

  return (
    <section className="py-12 w-full bg-white overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-2 text-[#30523E]">
            Flavours for Every Craving
          </h2>
          <p className="text-gray-600 font-medium">
            Drinks? Noodles? Frozen? If It's Delicious, It's in Our Range.
          </p>
        </div>
        <button className="bg-[#E9D68F] hover:bg-[#dec66b] text-[#30523E] font-bold py-3 px-8 rounded-2xl transition-all text-lg">
          All Categories
        </button>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex">
          {repeated.map((item, i) => (
            <Link
              href={`/categories/${item.slug}`}
              key={i}
              // Reduced padding from px-4 to px-2 to bring circles closer
              className="flex flex-col items-center flex-shrink-0 px-2 md:px-3"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-white shadow-md transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-[10px] md:text-xs font-black uppercase tracking-tight text-[#2F5D27]">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content; /* Critical for seamless loop */
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
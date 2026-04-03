"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategoryMarquee() {
  const categories = [
    { name: "NOODLES", slug: "noodles", image: "/Noodles.png" },
    { name: "Nuts & Seeds", slug: "nuts-seeds", image: "/Nuts_and_Seeds.png" },
    { name: "Rice", slug: "rice", image: "/Rice.png" },
    { name: "Canned", slug: "canned", image: "/Canned.png" },
    { name: "Snacks", slug: "snacks", image: "/Snacks.png" },
    { name: "Spices & Seasonings", slug: "spices", image: "/Spices_and_seasonings.png" },
    { name: "Drinks", slug: "drinks", image: "/Drinks.png" },
    { name: "Frozen", slug: "frozen", image: "/Frozen.png" },
    { name: "Taste japan", slug: "japan", image: "/Japanese.png" },
    { name: "Sauces", slug: "sauces", image: "/Sauces.png" },
  ];

  const brandPurple = "#4e1a51";
  
  // Duplication handle karne ka behtar tareeqa
  const repeated = Array(4).fill(categories).flat();

  return (
    <section className="py-4 w-full bg-white overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 max-w-7xl mx-auto px-6">
        <div>
          <h2 style={{ color: brandPurple }} className="text-4xl md:text-5xl font-serif font-bold mb-2 eczar">
            Our Product Categories
          </h2>
        </div>
        
        <button 
          suppressHydrationWarning
          style={{ backgroundColor: brandPurple }}
          className="text-white hover:brightness-125 font-bold py-4 px-10 rounded-2xl transition-all text-xl shadow-md eczar"
        >
          All Categories
        </button>
      </div>

      {/* Marquee Wrapper - White Gradients Removed */}
      <div className="relative w-full overflow-hidden pt-4 pb-8">
        {/* Gradients divs (absolute) ko delete kar diya hai */}

        <div className="animate-marquee flex items-center">
          {repeated.map((item, i) => (
            <Link
              href={`/categories/${item.slug}`}
              key={i}
              // Gap ko px-2/px-4 kar diya hai space kam karne ke liye
              className="flex flex-col items-center shrink-0 px-2 md:px-4"
            >
              <div className="relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden border-[4px] border-white shadow-xl transition-all duration-500 hover:scale-110 hover:border-[#d2bf7f] bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <p 
                style={{ color: brandPurple }}
                className="mt-5 text-center text-[12px] md:text-sm font-semibold  uppercase "
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
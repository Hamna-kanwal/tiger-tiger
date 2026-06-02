"use client";
import { useState } from "react";
import ProductRange from "../../Components/ProductRange";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Home() {
  const pathname = usePathname();
  const parts = pathname ? pathname.split("/").filter(Boolean) : [];
  const currentProductSlug = parts[1] || parts[0] || "feature_product";

  const sections = [
    {
      title: "Pulp Plus",
      features: [{ id: 1, img: "/pulp-feature_1.webp" }, { id: 2, img: "/pulpfeature_2.webp" }, { id: 3, img: "/pulpfeature_3.webp" }],
      listings: [
        { id: 4, name: "PULP+ LYCHEE JUICE", img: "/feature_guava.webp" },
        { id: 5, name: "PULP+ MANGO JUICE", img: "/featured_guava.webp" },
        { id: 6, name: "PULP+ PINK GUAVA JUICE", img: "/featured_mango.webp" },
        { id: 7, name: "PULP+ COCONUT WATER", img: "/featured_coconut.webp" },
      ],
    },
    {
      title: "Popping Candy",
      features: [{ id: 8, img: "/popping feature 1.webp" }, { id: 9, img: "/popping feature 2.webp" }, { id: 10, img: "/popping feature 3.webp" }],
      listings: [
        { id: 11, name: "POPPING CANDY BISCUITS STICK MILK TEA", img: "/feature_product.webp" },
        { id: 12, name: "POPPING CANDY BISCUITS STICK BANANA", img: "/banana.webp" },
        { id: 13, name: "POPPING CANDY BISCUITS STICK CAPPUCCINO", img: "/coffee.webp" },
        { id: 14, name: "POPPING CANDY BISCUITS STICK COOKIES", img: "/biscuit.webp" },
      ],
    },
    {
      title: "COCO CHOO",
      features: [{ id: 15, img: "/cocochoo-feature-1.webp" }, { id: 16, img: "/coco choo 2.webp" }, { id: 17, img: "/coco choo 3.webp" }],
      listings: [
        { id: 18, name: "COCO CHOO CLASSIC", img: "/chow1.webp" },
        { id: 19, name: "COCO CHOO HAZELNUT", img: "/chow2.webp" },
        { id: 20, name: "COCO CHOO DARK", img: "/chow3.webp" },
      ],
    },
  ];

  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <ProductRange />
        {sections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-bold text-[#4e1a51] mb-6">{section.title}</h2>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {section.listings.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/feature_product/${currentProductSlug}/${slugify(item.name)}`}
                  className="flex-shrink-0 w-64 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img src={item.img} alt={item.name} className="w-full h-48 object-contain mb-4" />
                  <p className="text-center font-semibold text-gray-800 text-sm">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RelatedProductsSlider({ initialProducts = [] }) {
  const [mounted, setMounted] = useState(false);
  const themeColor = "#431A4F";
  const count = initialProducts?.length || 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: count > 4,
    slides: { perView: 4, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 15 } },
      "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
    },
  });

  if (!mounted || count === 0) return null;

  return (
    <div className="w-full py-10">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-[32px] font-black uppercase italic" style={{ color: themeColor, fontFamily: 'serif' }}>
          Related Products
        </h2>
      </div>

      <div ref={sliderRef} key={count} className="keen-slider !overflow-visible px-2">
        {initialProducts.map((product, index) => (
          <div key={product?.id ?? index} className="keen-slider__slide group pb-10">
            {/* 
               Ye Link tag image_e33a68.png wali shadow create karega. 
               Maine shadow-black hata kar custom soft shadow lagai hai.
            */}
           <Link 
  // Brackets hata kar variables use karein
  href={`/categories/${product.categoryslug}/${product.slug}/${product.SKU}`} 
  prefetch={false}
  className="block bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-50 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-1"
>
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.images || "/placeholder.png"}
                  alt={product.name || "Product"}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                />
              </div>
              <span 
                className="text-center block font-bold text-sm uppercase tracking-tight line-clamp-2 min-h-[40px]" 
                style={{ color: themeColor }}
              >
                {product.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
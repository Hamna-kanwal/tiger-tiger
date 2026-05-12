"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Ab humein SWR ki zaroorat nahi kyunki data initialData props mein aa raha hai
export default function CategoryProductsClient({ slug, initialData }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);
    
    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hydration error se bachne ke liye
  if (!mounted) return null;

  // Data ab initialData se aayega jo Server Action ne fetch kiya hai
  const products = initialData?.success ? initialData.data : [];
  const shouldOffset = pathname !== "/";

  const getFullImageUrl = (imgField) => {
    if (!imgField || imgField === "null") return "/placeholder.png";
    const path = Array.isArray(imgField) ? imgField[0] : imgField;
    if (!path) return "/placeholder.png";
    if (path.startsWith('http')) return path;
    return `https://backend.tigertigerfoods.com${path.startsWith('/') ? '' : '/'}${path}`;
  };

  const displayTitle = slug ? slug.replace(/-/g, ' ') : "Products";

  return (
    <section 
      style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      className="min-h-screen pt-32 pb-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter text-[#431A4F]">
          {displayTitle} Collection
        </h1>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 font-bold text-xl">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {products.map((product, i) => (
              <Link 
                href={slug && product.slug ? `/categories/${slug}/${product.slug}/${product.SKU}` : "#"} 
                key={product._id || i} 
                className="group block"
              >
                <div className="relative aspect-square flex items-center justify-center bg-transparent">
                  <div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-110 bg-transparent">
                    <Image
                      src={getFullImageUrl(product.images || product.image)}
                      alt={product.name || "Product image"}
                      fill
                      className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] transition-all duration-500"
                      priority={i < 4}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="font-black text-lg uppercase text-[#431A4F] tracking-tight group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
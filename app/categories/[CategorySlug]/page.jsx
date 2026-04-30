"use client";

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const allProducts = [
  { id: '1', name: 'PULP+ LYCHEE JUICE', image: '/pulpCan.png', category: 'drinks' },
  { id: '2', name: 'PULP+ MANGO JUICE', image: '/pulpCan2.png', category: 'drinks' },
  { id: '3', name: 'PULP+ PINK GUAVA JUICE', image: '/pulpCan3.png', category: 'drinks' },

];

export default function CategoryProductsPage() {
  const params = useParams();
  const categoryName = params?.CategorySlug || "";

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  const displayTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    // Pura page background #F2F2F2
    <section className="bg-[#F2F2F2] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-[40px] font-extrabold text-black tracking-tight">
            Products in <span className="capitalize">{displayTitle || "Category"}</span>
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                
                {/* Image Container - Background removed (transparent) */}
               <div className="bg-white relative w-full h-[300px] p-6 transform transition-transform duration-500 group-hover:scale-105">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-contain" 
    priority
  />
</div>

                {/* Product Name Label */}
                <div className="mt-6 text-center">
                  <h3 className="text-base md:text-lg font-bold text-black uppercase tracking-tight group-hover:text-[#431A4F] transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 text-xl font-semibold">No products found in "{categoryName}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
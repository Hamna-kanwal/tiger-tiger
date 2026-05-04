"use client";

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const allProducts = [
  { id: '1', slug: 'lychee-juice', name: 'PULP+ LYCHEE JUICE', image: '/pulpCan.png', category: 'drinks' },
  { id: '2', slug: 'mango-juice', name: 'PULP+ MANGO JUICE', image: '/pulpCan2.png', category: 'drinks' },
  { id: '3', slug: 'pink-guava-juice', name: 'PULP+ PINK GUAVA JUICE', image: '/pulpCan3.png', category: 'drinks' },
  { id: '4', slug: 'lychee-juice-2', name: 'PULP+ LYCHEE JUICE', image: '/pulpCan.png', category: 'drinks' },
  { id: '5', slug: 'mango-juice-2', name: 'PULP+ MANGO JUICE', image: '/pulpCan2.png', category: 'drinks' },
  { id: '6', slug: 'pink-guava-juice-2', name: 'PULP+ PINK GUAVA JUICE', image: '/pulpCan3.png', category: 'drinks' },
];

const CategoryProductsPage = () => {
  const params = useParams();
  const categorySlug = params?.CategorySlug || "";

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categorySlug.toString().toLowerCase()
  );

  const displayTitle = categorySlug.toString().charAt(0).toUpperCase() + categorySlug.toString().slice(1);

  return (
    <section className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter text-[#431A4F]">
          {displayTitle} Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/categories/${categorySlug}/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-square flex items-center justify-center">
                <div className="bg-white shadow-2xl relative w-full h-full transform transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_35px_45px_rgba(0,0,0,0.3)]"
                    priority
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
      </div>
    </section>
  );
};

export default CategoryProductsPage;
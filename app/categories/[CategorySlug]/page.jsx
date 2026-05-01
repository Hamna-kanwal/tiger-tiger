"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// YE HISSA ADD KAREIN (Missing Data)
const allProducts = [
  { id: '1', slug: 'lychee-juice', name: 'PULP+ LYCHEE JUICE', image: '/pulpCan.png', category: 'drinks' },
  { id: '2', slug: 'mango-juice', name: 'PULP+ MANGO JUICE', image: '/pulpCan2.png', category: 'drinks' },
  { id: '3', slug: 'pink-guava-juice', name: 'PULP+ PINK GUAVA JUICE', image: '/pulpCan3.png', category: 'drinks' },
  { id: '4', slug: 'lychee-juice-2', name: 'PULP+ LYCHEE JUICE', image: '/pulpCan.png', category: 'drinks' },
  { id: '5', slug: 'mango-juice-2', name: 'PULP+ MANGO JUICE', image: '/pulpCan2.png', category: 'drinks' },
  { id: '6', slug: 'pink-guava-juice-2', name: 'PULP+ PINK GUAVA JUICE', image: '/pulpCan3.png', category: 'drinks' },
];

export default function CategoryProductsPage() {
  const params = useParams();
  const categorySlug = params?.CategorySlug || "";

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categorySlug.toLowerCase()
  );

  const displayTitle = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  return (
    <section className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 uppercase tracking-tighter">
          {displayTitle} Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${categorySlug}/${product.slug}`}
              className="group block"
            >
              <div className="bg-[#F9F9F9] relative rounded-2xl aspect-square p-8 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg uppercase text-black">{product.name}</h3>
                <p className="text-gray-500 text-sm">View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
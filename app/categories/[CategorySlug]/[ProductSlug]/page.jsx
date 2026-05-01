"use client";
import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

// YE HISSA YAHAN BHI ADD KAREIN
const allProducts = [
  { id: '1', slug: 'lychee-juice', name: 'PULP+ LYCHEE JUICE', image: '/pulpCan.png', category: 'drinks' },
  { id: '2', slug: 'mango-juice', name: 'PULP+ MANGO JUICE', image: '/pulpCan2.png', category: 'drinks' },
  { id: '3', slug: 'pink-guava-juice', name: 'PULP+ PINK GUAVA JUICE', image: '/pulpCan3.png', category: 'drinks' },
  // ... baki products bhi yahan likhein taake page empty na ho
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { ProductSlug } = params;

  const product = allProducts.find((p) => p.slug === ProductSlug);

  if (!product) {
    return <div className="pt-40 text-center text-black">Product Not Found</div>;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#F2F2F2]">
       {/* Baki ka UI code wahi rahega jo aapne pehle likha tha */}
       <div className="max-w-6xl mx-auto px-4">
          <button onClick={() => router.back()} className="mb-6 font-bold text-black text-sm hover:opacity-70">
             ← BACK TO {product.category.toUpperCase()}
          </button>
          {/* ... baki details */}
       </div>
    </div>
  );
}
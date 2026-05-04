"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

const allProducts = [
  { 
    id: '1', 
    slug: 'lychee-juice', 
    name: 'PULP+ LYCHEE JUICE', 
    image: '/pulpCan.png', 
    category: 'drinks',
    size: '12x320ml',
    sku: '800769',
    jkCode: 'CO46',
    palletQty: '208',
    brand: 'TIGER TIGER'
  },
];

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [unit, setUnit] = useState('Case');

  const slug = params?.ProductSlug;
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return <div className="pt-40 text-center">Product Not Found</div>;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="mb-8 text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-2"
        >
          ← BACK TO {product.category.toUpperCase()}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Image with Rounded Box */}
          <div className="bg-white shadow-2xl rounded-[40px] p-12 flex items-center justify-center aspect-square">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#431A4F] mb-2 uppercase">
              {product.name}
            </h1>
            <p className="text-gray-500 text-lg mb-8">{product.size}</p>

            <h2 className="text-xl font-bold text-[#431A4F] mb-4">Details</h2>
            
            <div className="border-t border-[#431A4F] mb-10">
              <DetailRow label="SKU" value={product.sku} />
              <DetailRow label="JK CODE" value={product.jkCode} />
              <DetailRow label="PALLET QUANTITY" value={product.palletQty} />
              <DetailRow label="CASE BARCODE" value="---" />
              <DetailRow label="SINGLE BARCODE" value="---" />
              <DetailRow label="BRAND" value={product.brand} />
            </div>

            {/* Selection Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button 
                onClick={() => setUnit('Case')}
                className={`px-8 py-2 rounded-xl border-2 font-bold transition-all ${
                  unit === 'Case' 
                  ? 'border-[#431A4F] text-[#431A4F]' 
                  : 'border-gray-300 text-gray-400'
                }`}
              >
                Case
              </button>
              <button 
                onClick={() => setUnit('Pallet')}
                className={`px-8 py-2 rounded-xl border-2 font-bold transition-all ${
                  unit === 'Pallet' 
                  ? 'border-[#431A4F] text-[#431A4F]' 
                  : 'border-gray-300 text-gray-400'
                }`}
              >
                Pallet
              </button>

              <button className="flex-1 md:flex-none bg-gray-200 text-gray-600 px-10 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors">
                Add to Inquiry 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Row Component
const DetailRow = ({ label, value }) => {
  return (
    <div className="flex justify-between py-3 border-b border-gray-100 text-sm font-bold">
      <span className="text-[#431A4F] uppercase opacity-80">{label}</span>
      <span className="text-gray-600 uppercase">{value}</span>
    </div>
  );
};

export default ProductDetailPage;
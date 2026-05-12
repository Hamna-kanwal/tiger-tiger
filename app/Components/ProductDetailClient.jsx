"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RelatedProductsSlider from "../Components/RelatedProductsSlider"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetailClient = ({ product, categorySlug }) => {
  const router = useRouter();
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);
  }, []);

  const handleAddToCart = () => {
    console.log("Trying to add product:", product?.name);
    
    if (!isMounted) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first!");
      setTimeout(() => router.push("/login"), 2000);
      return;
    }

    if (!selectedUnit) {
      toast.warn("Please select Case or Pallet!");
      return;
    }

    const cart = JSON.parse(sessionStorage.getItem("inquiry_cart") || "[]");
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.unit === selectedUnit
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        product_id: product.id,
        name: product.name,
        unit: selectedUnit,
        quantity: 1,
        sku: product.SKU,
        images: product.images,
      });
    }

    sessionStorage.setItem("inquiry_cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    toast.success("Added to Inquiry!");
  };

  if (!product) return null;

  return (
    <div className="min-h-screen pb-20 bg-white" style={{ marginTop: `${headerHeight}px` }}>
      <ToastContainer position="top-right" />
      <div className="max-w-6xl mx-auto px-4 pt-12 relative z-10">
         {/* ... rest of your UI ... */}
         <div className="flex gap-4 mt-8">
            <div className="flex bg-gray-100 p-1 rounded-2xl">
              <button 
                onClick={() => setSelectedUnit('case')} 
                className={`px-6 py-3 rounded-xl font-bold transition-all ${selectedUnit === 'case' ? 'bg-[#431A4F] text-white shadow-md' : 'text-gray-400'}`}
              >CASE</button>
              <button 
                onClick={() => setSelectedUnit('palette')} 
                className={`px-6 py-3 rounded-xl font-bold transition-all ${selectedUnit === 'palette' ? 'bg-[#431A4F] text-white shadow-md' : 'text-gray-400'}`}
              >PALLET</button>
            </div>
            <button 
  onClick={handleAddToCart}
  className="relative z-30 flex-1 bg-[#431A4F] text-white rounded-2xl font-black active:scale-95"
  style={{ cursor: 'pointer', pointerEvents: 'auto' }} // Force enable click
>
  ADD TO INQUIRY 🛒
</button>
         </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
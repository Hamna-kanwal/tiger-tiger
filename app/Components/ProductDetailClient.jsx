"use client";

import { useEffect, useState } from "react";
import RelatedProductsSlider from "./RelatedProduct";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail({ slug, sku }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };

  const handleAddToCart = () => {
    // ✅ Check login first
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first to add products to inquiry.", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      return;
    }

    if (!selectedUnit) {
      alert("Please select either Case or Palette before adding to inquiry.");
      return;
    }
    // Store in sessionStorage
    const cart = JSON.parse(sessionStorage.getItem("inquiry_cart") || "[]");
    const newQuantity = selectedUnit === "palette" ? 1 : 1;
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.unit === selectedUnit
    );
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += newQuantity;
    } else {
      const item = {
        id: product.id,
        product_id: product.id,
        name: product.name,
        unit: selectedUnit,
        quantity: newQuantity,
        product_quantity: product.quantity,
        sku: product.SKU,
        images: product.images,
      };
      cart.push(item);
    }
    sessionStorage.setItem("inquiry_cart", JSON.stringify(cart));

    // 🔥 Fire custom event
    window.dispatchEvent(new Event("cartUpdated"));
    // 👇 show success toast instead of alert
    toast.success(`Product added to enquiry!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    if (!slug) return;

    fetch(`https://backend.tigertigerfoods.com/api/get-products`)
      .then((res) => res.json())
      .then((res) => {
        const found = res.data.find(
          (p) =>
            p.slug?.trim().toLowerCase() === slug?.trim().toLowerCase() &&
            String(p.SKU)?.trim() === String(sku)?.trim()
        );

        if (!found) throw new Error("Product not found");

        return fetch(
          `https://backend.tigertigerfoods.com/api/get-product-detail/${found.id}/${found.SKU}`
        );
      })
      .then((res) => res.json())
      .then((detailRes) => {
        setProduct(detailRes.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });

    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, [slug, sku]);

  const shouldOffset = pathname !== "/";

  return (
    <section className="py-12 px-6 md:px-0">
      <div style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}>
        <ToastContainer />

        {loading ? (
          <div className="p-6 text-center">Loading...</div>
        ) : !product ? (
          <div className="p-6 text-red-500 text-center">Product not found</div>
        ) : (
          <>
            <div className="max-w-7xl mx-auto mb-6 mt-10 md:mt-16 px-4 md:px-0">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* LEFT: Image Section */}
                <div className="flex flex-col items-start">
                  <div className="flex justify-center w-full">
                    <Image
                      src={product.images}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="rounded-3xl object-cover w-full h-[500px] max-w-[500px]"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-[#B0C426] text-[#fff] text-sm font-medium px-4 py-1 rounded-full">
                      {product.categories}
                    </span>
                  </div>
                </div>

                {/* RIGHT: Info Section */}
                <div>
                  <h1 className="text-[#556D08] text-[32px] font-bold mb-2 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-base md:text-lg text-[#556D08]/80 mb-8">
                    {product.quantity}
                  </p>

                  <div className="mb-8">
                    <h2 className="text-[#556D08] text-xl font-semibold mb-4">Details</h2>
                    <div className="divide-y divide-[#556D08] text-[#556D08]/90">
                      {[
                        ["SKU", product.SKU],
                        ["JK CODE", product.jk_code],
                        ["PALLET QUANTITY", product.palette_quantity],
                        ["BRAND", product.brand],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between py-2 text-sm">
                          <span className="font-medium">{label}</span>
                          <span>{value || ""}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 flex-wrap">
                    <button
                      onClick={() => handleSelectUnit("case")}
                      className={`px-6 py-2.5 rounded-xl font-semibold border transition-all ${
                        selectedUnit === "case"
                          ? "bg-[#556D08] text-white border-[#556D08]"
                          : "bg-transparent text-[#556D08] border-[#556D08] hover:bg-[#556D08] hover:text-white"
                      }`}
                    >
                      Case
                    </button>

                    <button
                      onClick={() => handleSelectUnit("palette")}
                      className={`px-6 py-2.5 rounded-xl font-semibold border transition-all ${
                        selectedUnit === "palette"
                          ? "bg-[#556D08] text-white border-[#556D08]"
                          : "bg-transparent text-[#556D08] border-[#556D08] hover:bg-[#556D08] hover:text-white"
                      }`}
                    >
                      Pallet
                    </button>

                  <button
  onClick={handleAddToCart}
  className={`px-8 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 active:scale-95 
    ${!selectedUnit 
      ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
      : "bg-[#556D08] text-white hover:bg-[#435707] cursor-pointer shadow-md hover:shadow-lg"
    }`}
>
  Add to Inquiry 🛒
</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="max-w-7xl mx-auto px-4 md:px-0 mt-12 mb-12 border-t pt-8">
                <h2 className="text-[#556D08] text-[32px] font-bold mb-4">Product Description</h2>
                <p className="text-[#444] leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Slider */}
            <section className="max-w-7xl mx-auto py-12 px-4 md:px-0">
              <RelatedProductsSlider product_id={product.id} />
            </section>
          </>
        )}
      </div>
    </section>
  );
}
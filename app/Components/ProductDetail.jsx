"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Navigation ke liye
import { toast, ToastContainer } from "react-toastify"; // Success message ke liye
import "react-toastify/dist/ReactToastify.css";
import RelatedProducts from "../Components/RelatedProducts"; 

export default function ProductDetailClient({ product, relatedProducts }) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const router = useRouter();
  const themeColor = "#431A4F";

const handleAddToCart = () => {
    if (typeof window === "undefined") return;

    // 1. Check Login
    const token = localStorage.getItem("token");
    if (!token) {
      // Yahan humne toast message aur redirect path dono badal diye hain
      toast.info("Please register a trade account to send an inquiry.");
      
      setTimeout(() => {
        router.push("/trade-register"); // Login ki jagah Trade Register par redirect
      }, 2000);
      return;
    }

    // 2. Check Selection (Case or Pallet)
    if (!selectedUnit) {
      toast.warning("Please select Case or Pallet first.");
      return;
    }

    try {
      // 3. Cart Logic
      const cart = JSON.parse(sessionStorage.getItem("inquiry_cart") || "[]");
      
      const existingItemIndex = cart.findIndex(
        (item) => item.id === product.id && item.unit === selectedUnit
      );

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        const item = {
          id: product.id,
          product_id: product.id,
          name: product.name,
          unit: selectedUnit,
          quantity: 1,
          product_quantity: product.quantity,
          sku: product.SKU,
          images: product.images,
        };
        cart.push(item);
      }

      // 4. Save & Event Fire
      sessionStorage.setItem("inquiry_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      
      toast.success(`${product.name} added to inquiry!`);

      // 5. Success hone par Enquiry page par le jayein
      setTimeout(() => {
        router.push("/enquiry");
      }, 800);

    } catch (error) {
      console.error("Cart Error:", error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 font-sans mt-30" style={{ color: themeColor }}>
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Product Image */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-[20px] p-12 flex justify-center border border-gray-100 shadow-lg">
            <img 
              src={product.images || "/placeholder.png"} 
              alt={product.name}
              className="max-h-[550px] w-auto object-contain"
            />
          </div>
          <div className="flex justify-start">
            <span className="text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: themeColor }}>
              {product.categories || "Drinks"}
            </span>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-black uppercase mb-2 tracking-tight leading-none italic" style={{ fontFamily: 'serif' }}>
            {product.name}
          </h1>
          <p className="text-xl font-medium text-gray-500 mb-6">
            {product.quantity || "12x320ml"}
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderBottomColor: `${themeColor}20` }}>Details</h2>
            <div className="space-y-0 text-[15px]">
              {[
                ["SKU", product.SKU],
                ["JK CODE", product.jk_code],
                ["PALLET QUANTITY", product.palette_quantity],
                ["CASE BARCODE", product.case_barcode],
                ["SINGLE BARCODE", product.single_unit_barcode],
                ["BRAND", product.brand || "TIGER TIGER"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-3 border-b border-gray-100 uppercase font-bold">
                  <span style={{ color: `${themeColor}CC` }}>{label}</span>
                  <span>{value || "---"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedUnit('case')}
              className="px-8 py-2.5 rounded-xl font-bold border-2 transition-all active:scale-95"
              style={{ 
                backgroundColor: selectedUnit === 'case' ? themeColor : 'transparent',
                color: selectedUnit === 'case' ? 'white' : themeColor,
                borderColor: themeColor
              }}
            >
              Case
            </button>
            <button 
              onClick={() => setSelectedUnit('palette')}
              className="px-8 py-2.5 rounded-xl font-bold border-2 transition-all active:scale-95"
              style={{ 
                backgroundColor: selectedUnit === 'palette' ? themeColor : 'transparent',
                color: selectedUnit === 'palette' ? 'white' : themeColor,
                borderColor: themeColor
              }}
            >
              Pallet
            </button>
            
            <button 
              onClick={handleAddToCart} // Click handler yahan add kiya
              disabled={!selectedUnit}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all shadow-md active:scale-95"
              style={{ 
                backgroundColor: !selectedUnit ? '#c5ced4' : themeColor,
                cursor: !selectedUnit ? 'not-allowed' : 'pointer'
              }}
            >
              Add to Inquiry 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Slider Section */}
      <div className="mt-10 pt-10">
        <RelatedProducts initialProducts={relatedProducts} />
      </div>
    </div>
  );
}
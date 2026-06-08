"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Navigation ke liye
import { toast, ToastContainer } from "react-toastify"; // Success message ke liye
import "react-toastify/dist/ReactToastify.css";
import RelatedProducts from "../../../Components/RelatedProducts"; 

export default function ProductDetailClient({ product, relatedProducts }) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const router = useRouter();
  const themeColor = "#431A4F";
  const resolveImageUrl = (product) => {
    if (!product) return "/product_image.png";
    // 1) images as array
    if (Array.isArray(product.images) && product.images.length) {
      const first = product.images[0];
      if (typeof first === "string" && first.trim()) return first;
      if (first && typeof first === "object") return first.url || first.src || first.path || first.image || "/product_image.png";
    }
    // 2) images field as string
    if (typeof product.images === "string" && product.images.trim()) return product.images;
    // 3) single image field
    if (typeof product.image === "string" && product.image.trim()) return product.image;
    if (product.image && typeof product.image === "object") return product.image.url || product.image.src || product.image.path || "/product_image.png";
    // 4) media array fallback
    if (Array.isArray(product.media) && product.media.length) {
      const m = product.media[0];
      if (typeof m === "string" && m.trim()) return m;
      if (m && typeof m === "object") return m.url || m.src || m.path || "/product_image.png";
    }
    return "/product_image.png";
  };

  const normalizeProduct = (p) => {
    if (!p) return p;
    const get = (keys) => {
      for (const k of keys) {
        if (p[k] !== undefined && p[k] !== null && p[k] !== "") return p[k];
      }
      return undefined;
    };

    const SKU = get(["SKU", "sku", "Sku", "sku_code"]);
    const jk_code = get(["jk_code", "jkCode", "jk"]);
    const palette_quantity = get(["palette_quantity", "pallet_quantity", "pallet_qty", "palette_qty", "paletteQuantity"]);
    const case_barcode = get(["case_barcode", "caseBarcode", "case_barcode_value"]);
    const single_unit_barcode = get(["single_unit_barcode", "single_barcode", "singleUnitBarcode", "barcode"]);
    const brand = get(["brand", "Brand", "manufacturer", "brand_name"]);
    const quantity = get(["quantity", "qty", "product_quantity"]);
    const categories = get(["categories", "category", "category_name", "categories_name"]);

    let images = p.images ?? p.image ?? p.media ?? undefined;

    return {
      ...p,
      SKU: SKU || "",
      jk_code: jk_code || "---",
      palette_quantity: palette_quantity || "---",
      case_barcode: case_barcode || "---",
      single_unit_barcode: single_unit_barcode || "---",
      brand: brand || p.brand || "TIGER TIGER",
      quantity: quantity || p.quantity || "12x320ml",
      categories: categories || p.categories || "Drinks",
      images,
    };
  };

  const normalized = normalizeProduct(product);
  const imageUrl = resolveImageUrl(normalized);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 text-center text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p>Please check the link or try another product.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (typeof window === "undefined") return;

    // 1. Check Login
    const token = localStorage.getItem("token");
    if (!token) {
      // Yahan humne toast message aur redirect path dono badal diye hain
      toast.info("Please register a trade account to send an Wishlist.");
      
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
          images: imageUrl,
        };
        cart.push(item);

      }

      // 4. Save & Event Fire
      sessionStorage.setItem("inquiry_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      
      toast.success(`${product.name} added to Wishlist!`);

      
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
              src={imageUrl}
              alt={normalized?.name || product?.name}
              onError={(e) => {
                try {
                  e.currentTarget.src = "/product_image.png";
                } catch (err) {}
              }}
              className="w-auto object-contain"
              style={{ maxHeight: 550 }}
            />
          </div>
          <div className="flex justify-start">
            <span className="text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: themeColor }}>
              {normalized.categories || "Drinks"}
            </span>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-black uppercase mb-2 tracking-tight leading-none italic" style={{ fontFamily: 'serif' }}>
            {normalized.name || product.name}
          </h1>
          <p className="text-xl font-medium text-gray-500 mb-6">
            {normalized.quantity || "12x320ml"}
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderBottomColor: `${themeColor}20` }}>Details</h2>
            <div className="space-y-0 text-[15px]">
              {[
                ["SKU", normalized.SKU],
                ["JK CODE", normalized.jk_code],
                ["PALLET QUANTITY", normalized.palette_quantity],
                ["CASE BARCODE", normalized.case_barcode],
                ["SINGLE BARCODE", normalized.single_unit_barcode],
                ["BRAND", normalized.brand || "TIGER TIGER"],
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
              Add to Wishlist
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
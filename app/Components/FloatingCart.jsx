"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom"; // 👈 Zaroori import
import { FiShoppingCart } from "react-icons/fi";

export default function FloatingCart() {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);
  const [mounted, setMounted] = useState(false); // SSR error se bachne ke liye

  const [count, setCount] = useState(0); 
  const [latestItem, setLatestItem] = useState(null); 

  const toggleCart = () => setOpen(!open);

  useEffect(() => {
    setMounted(true); // Component ab browser par aa chuka hai
    
    function updateCart() {
      if (typeof window !== "undefined") {
        const cart = JSON.parse(sessionStorage.getItem("inquiry_cart")) || [];
        setCount(cart.length);
        setLatestItem(cart.length > 0 ? cart[cart.length - 1] : null);
      }
    }

    updateCart(); 
    window.addEventListener("cartUpdated", updateCart); 
    window.addEventListener("storage", updateCart); 

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Agar Next.js abhi server par chal raha ho toh render na karein
  if (!mounted) return null;

  // PORTAL: Ab browser pure page ke containers se azaad kar ke isko direct body par set karega
  return createPortal(
    <>
      {/* Floating Cart Button - Exact Senior Style Small Rounded Circle */}
      <button
        onClick={toggleCart}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999] w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:shadow-lg transition-all hover:scale-105"
        aria-label="Cart"
        style={{ right: "24px", top: "50%", transform: "translateY(-50%)", position: "fixed" }}
      >
        <FiShoppingCart className="text-[#40023F] text-xl" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#40023F] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </button>

      {/* Floating Cart Preview Box - Senior ka blur style aur side position */}
      {open && (
        <div
          ref={cartRef}
          className="fixed right-[80px] top-1/2 -translate-y-1/2 w-[320px] bg-white/70 backdrop-blur-[16px] rounded-xl z-[9998] border-[2px] border-[#40023F] shadow-2xl font-sans p-2"
          style={{ right: "80px", top: "50%", transform: "translateY(-50%)", position: "fixed" }}
        >
          {latestItem ? (
            <>
              <div className="flex items-center p-4 border-b border-[#40023F]/20">
                <img
                  src={latestItem.images || "/placeholder.png"}
                  alt={latestItem.name}
                  className="w-16 h-16 object-cover rounded-md mr-4 bg-white/50"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#40023F] line-clamp-2 text-sm leading-tight">
                    {latestItem.name}
                  </div>
                  <div className="text-xs text-gray-700 mt-1 font-medium">
                    {latestItem.product_quantity || latestItem.quantity} ({latestItem.unit})
                  </div>
                </div>
              </div>

              {/* View Enquiry link */}
              <div className="mt-3 mb-2 text-center">
                <Link
                  href="/enquiry"
                  className="text-sm text-[#220016] underline font-semibold hover:text-[#40023F]"
                >
                  View Enquiry
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="p-5 text-center text-gray-600 text-sm font-medium">Cart is empty</div>
              <div className="mb-2 text-center">
                <Link
                  href="/enquiry"
                  className="text-sm text-[#220016] underline font-semibold hover:text-[#40023F]"
                >
                  View Enquiry
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>,
    document.body // 👈 Yeh sab se aakhir mein inject kar dega pure HTML ko browser body par
  );
}
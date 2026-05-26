"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function FloatingCart() {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [latestItem, setLatestItem] = useState(null);

  const toggleCart = () => setOpen(!open);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) return null;

  return createPortal(
    <>
      <button
        onClick={toggleCart}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[99999] isolation-isolate w-20 h-20 flex items-center justify-center rounded-full bg-[#40023F] shadow-[0_8px_30px_rgba(64,2,63,0.3)] transition-all duration-300 hover:scale-110 border-4 border-white"
        aria-label="Cart"
        style={{ 
          right: "24px", 
          top: "50%", 
          transform: "translateY(-50%)", 
          position: "fixed",
          zIndex: 99999 
        }}
      >
        <img 
          src="/cart.png" 
          alt="Cart Icon" 
          className="w-10 h-10 object-contain invert brightness-0" 
        />

        {count > 0 && (
          <span
            className="absolute bg-white text-[#40023F] text-[12px] font-black w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-[#40023F]"
            style={{ left: "5px", top: "5px", position: "absolute" }}
          >
            {count}
          </span>
        )}
      </button>

      {open && (
        <div
          ref={cartRef}
          className="fixed right-[80px] top-1/2 -translate-y-1/2 w-[320px] bg-white/70 backdrop-blur-[16px] rounded-xl z-[99999] border-[2px] border-[#40023F] shadow-2xl font-sans p-2"
          style={{ right: "80px", top: "50%", transform: "translateY(-50%)", position: "fixed", zIndex: 99999 }}
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
    document.body
  );
}
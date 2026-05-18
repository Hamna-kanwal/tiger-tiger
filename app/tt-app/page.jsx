"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function FloatingCart() {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const [count, setCount] = useState(0); 
  const [latestItem, setLatestItem] = useState(null); 

  const toggleCart = () => setOpen(!open);

  useEffect(() => {
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

  return (
    <>
      {/* Floating Cart Button - Isko direct separate fixed rakha hai bina kisi wrapper ke taake ghaib na ho */}
      <button
        onClick={toggleCart}
        className="fixed right-6 !right-6 top-1/2 -translate-y-1/2 z-[99999] w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow"
        aria-label="Cart"
        style={{ right: '24px' }} // Inline style safety check taake koi CSS isko override na kare
      >
        <FiShoppingCart className="text-[#40023F] text-xl" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#40023F] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </button>

      {/* Floating Cart Preview Box - Senior ka blur style, right position strict ki hai */}
      {open && (
        <div
          ref={cartRef}
          className="fixed right-[80px] !right-[80px] top-1/2 -translate-y-1/2 w-[320px] bg-white/70 backdrop-blur-[16px] rounded-xl z-[99998] border-[2px] border-[#40023F] shadow-xl font-sans"
          style={{ right: '80px' }} // Box ko bhi button ke bilkul sath left par lock kiya hai
        >
          {latestItem ? (
            <>
              <div className="flex items-center p-4 border-b border-[#40023F]/20">
                <img
                  src={latestItem.images || "/placeholder.png"}
                  alt={latestItem.name}
                  className="w-20 h-20 object-cover rounded-md mr-4 bg-white/50"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#40023F] line-clamp-2 text-sm leading-tight">
                    {latestItem.name}
                  </div>
                  <div className="text-sm text-gray-700 mt-1 font-medium">
                    {latestItem.product_quantity || latestItem.quantity} ({latestItem.unit})
                  </div>
                </div>
              </div>

              {/* View Enquiry link */}
              <div className="mt-3 mb-3 text-center">
                <Link
                  href="/enquiry"
                  className="text-sm text-[#220016] underline font-semibold"
                >
                  View Enquiry
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="p-5 text-center text-gray-600 text-sm font-medium">Cart is empty</div>
              <div className="mb-4 text-center">
                <Link
                  href="/enquiry"
                  className="text-sm text-[#220016] underline font-semibold"
                >
                  View Enquiry
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
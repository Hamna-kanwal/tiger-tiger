"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function EnquiryPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [cart, setCart] = useState([]); // initially empty
  const [mounted, setMounted] = useState(false); // 👈 prevents SSR mismatch

  // Handle header offset
  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load cart from sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart =
        JSON.parse(sessionStorage.getItem("inquiry_cart")) || [];
      setCart(storedCart);
      setMounted(true);
    }
  }, []);

  // Update sessionStorage whenever cart changes
  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem("inquiry_cart", JSON.stringify(cart));
      // 🔔 Notify FloatingCart
      window.dispatchEvent(new Event("cartUpdated"));
    }
  }, [cart, mounted]);

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Change quantity manually
  const changeQty = (id, value) => {
    const qty = Math.max(1, Number(value) || 1);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const shouldOffset = pathname !== "/";

  if (!mounted) {
    return null; // 👈 Prevents SSR mismatch flash
  }

  return (
    <section className="py-12">
      <div
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        <div className="max-w-6xl mx-auto ">
          {/* Heading */}
          <h2 className="eczar font-semibold text-[32px] text-[#220016] mb-6">
            Your Enquiry
          </h2>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl shadow-inner">
              <Image
                src="/empty-cart.png"
                alt="Empty Cart"
                width={150}
                height={150}
                className="mb-6"
              />
              <p className="text-gray-600 text-lg">No products found</p>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-2xl p-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 border-b border-gray-200 py-4 last:border-none"
                >
                  {/* Product Image */}
                  <Image
                    src={item.images || "/placeholder.png"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-xl object-cover"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name} ({item.unit })</h3>

                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity || 1}
                        onChange={(e) => changeQty(item.id, e.target.value)}
                        className="w-16 text-center border-t border-b border-gray-300"
                      />
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5">
            <Link
              href="/checkout"
              className="w-full md:w-auto px-6 py-3   bg-[#40023F] text-white font-semibold rounded-2xl shadow-md hover:from-pink-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

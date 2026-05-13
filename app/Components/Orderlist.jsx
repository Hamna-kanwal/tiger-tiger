"use client";

import { useEffect, useState } from "react";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Session expired. Please login again.");
          setLoading(false);
          return;
        }

        const res = await fetch("https://backend.tigertigerfoods.com/api/get-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const data = await res.json();

        if (data.success) {
          setOrders(data.data);
        } else {
          setError(data.message || "Failed to load orders.");
        }
      } catch (err) {
        console.error("Error fetching orders", err);
        setError("Something went wrong while fetching orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Image URL fix karne ka helper
  const getSafeImageUrl = (imgPath) => {
    if (!imgPath || imgPath === "NULL") return "https://via.placeholder.com/150?text=No+Image";
    return imgPath.startsWith('http') ? imgPath : `https://backend.tigertigerfoods.com${imgPath}`;
  };

  // Loading State
  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-32 bg-gray-100 rounded-xl border border-gray-200" />
        ))}
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="p-6 text-center bg-red-50 rounded-xl border border-red-100 text-red-600">
        <p className="font-medium">{error}</p>
      </div>
    );
  }

  // Empty State
  if (!orders.length) {
    return (
      <div className="p-10 text-center border-2 border-dashed rounded-2xl">
        <p className="text-gray-500 font-medium">No orders found in your history.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {orders.map((order) => {
        // Items parsing logic
        const items = Array.isArray(order.cart_items)
          ? order.cart_items
          : JSON.parse(order.cart_items || "[]");

        return (
          <div
            key={order.id}
            className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            {/* Order Header */}
            <div className="bg-gray-50 px-6 py-4 border-b flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Order Number</p>
                <h3 className="font-bold text-[#4e1a51]">#{order.order_number}</h3>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                  {order.status || "Completed"}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6 divide-y divide-gray-100">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center gap-6 py-4 first:pt-0 last:pb-0"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 shrink-0 bg-white rounded-xl overflow-hidden border border-gray-100 p-1">
                    <img
                      src={getSafeImageUrl(item.images)}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Error"; }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-bold text-gray-900 text-md leading-tight mb-1">
                      {item.name}
                    </h4>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-gray-500">
                      <p><span className="font-semibold text-gray-700">SKU:</span> {item.sku}</p>
                      <p><span className="font-semibold text-gray-700">Unit:</span> {item.unit}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-3">
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">
                        Qty: {item.quantity}
                      </span>
                      <span className="text-xs text-gray-400">
                        Pack size: {item.product_quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
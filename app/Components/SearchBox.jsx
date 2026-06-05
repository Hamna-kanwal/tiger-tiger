"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { searchProducts } from "../action"; 

export default function SearchBox() {
  const [allProducts, setAllProducts] = useState([]); // Yahan saara data save hoga
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

  // 1. Page load hote hi saare products ek baar fetch kar lo
  useEffect(() => {
    async function loadAllProducts() {
      try {
        // Yahan 'null' ya empty string bhejen taake server saari list return kare
        const data = await searchProducts(new FormData()); 
        setAllProducts(data || []);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }
    loadAllProducts();
  }, []);

  // 2. Typing ke sath-sath instant filter (No delay)
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, allProducts]);

  // Click bahar karne par results hide karna
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full lg:w-[280px]">
      <div className="flex items-center rounded-full px-5 py-2.5 bg-[#4e1a51] shadow-md border border-white/10 transition-all focus-within:ring-2 focus-within:ring-white/20">
        <Search size={18} className="text-white shrink-0" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none ml-2 w-full text-white placeholder:text-white/70 text-sm font-medium"
        />
      </div>

      {/* Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute top-full right-0 mt-3 w-[300px] md:w-[350px] bg-white rounded-2xl shadow-2xl z-[100] border p-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4e1a51]">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.type === 'blog' ? `/blogs/${item.slug}` : `/products/${item.slug}/${item.SKU}`}
              onClick={() => { setResults([]); setSearchTerm(""); }}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl text-[#4e1a51] transition-all"
            >
              <div className="w-12 h-12 shrink-0 bg-white rounded-lg overflow-hidden border border-gray-100">
                <img
                  src={item.images ? (item.images.startsWith('http') ? item.images : `https://backend.tigertigerfoods.com${item.images}`) : "https://via.placeholder.com/80"}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold truncate">{item.name}</span>
                <span className="text-[10px] text-gray-400 mt-0.5">
                  {item.type === 'blog' ? 'Blog Article' : `SKU: ${item.SKU || ''}`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
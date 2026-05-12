"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { searchProducts } from "../action";

export default function SearchBox() {
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleEvents = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
      }
    };

    window.addEventListener("scroll", handleEvents);
    window.addEventListener("mousedown", handleEvents);
    
    return () => {
      window.removeEventListener("scroll", handleEvents);
      window.removeEventListener("mousedown", handleEvents);
    };
  }, []);

  async function handleSearch(e) {
    const term = e.target.value;
    if (term.length > 2) {
      setIsSearching(true);
      const formData = new FormData();
      formData.append("search", term);
      
      try {
        const data = await searchProducts(formData);
        setResults(data || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    } else {
      setResults([]);
    }
  }

  return (
    /* md:px-6 hata diya taake right side par gap na aaye */
    <div ref={searchRef} className="relative w-full lg:w-[280px]"> 
      <div className="flex items-center rounded-full px-5 py-2.5 bg-[#4e1a51] shadow-md border border-white/10 transition-all focus-within:ring-2 focus-within:ring-white/20">
        <Search size={18} className="text-white shrink-0" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder={isSearching ? "..." : "Search..."}
          onChange={handleSearch}
          className="bg-transparent outline-none ml-2 w-full text-white placeholder:text-white/70 text-sm font-medium"
        />
      </div>

      {/* SEARCH RESULTS DROPDOWN - Isay right-0 kiya hai taake ye end se align ho */}
      {results.length > 0 && (
        <div className="
          absolute top-full right-0 mt-3 w-[300px] md:w-[350px] bg-white rounded-2xl shadow-2xl z-[100] border p-2
          max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4e1a51]
        ">
          {results.map((item) => (
            <Link 
              key={item.id} 
              href={`/products/${item.slug}`}
              onClick={() => setResults([])} 
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl text-[#4e1a51] transition-all"
            >
              <div className="w-12 h-12 shrink-0 bg-white rounded-lg overflow-hidden border border-gray-100">
                <img
                  src={
                    item.images && item.images !== "NULL" && item.images.length > 0
                      ? (item.images.startsWith('http') ? item.images : `https://backend.tigertigerfoods.com${item.images}`)
                      : item.featured_image && item.featured_image !== "NULL"
                        ? (item.featured_image.startsWith('http') ? item.featured_image : `https://backend.tigertigerfoods.com${item.featured_image}`)
                        : "https://via.placeholder.com/80?text=No+Image"
                  }
                  alt={item.name}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=Error"; }}
                />
              </div>
              <span className="text-xs font-bold truncate leading-tight">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
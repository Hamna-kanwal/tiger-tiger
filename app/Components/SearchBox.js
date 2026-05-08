// components/SearchBox.jsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { searchProducts } from "../action"; // 👈 Server Action ko import kiya

export default function SearchBox() {
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Ye function ab client par fetch nahi karega, server action ko trigger karega
  async function handleSearch(e) {
    const term = e.target.value;
    if (term.length > 2) {
      setIsSearching(true);
      
      // FormData ka istemal (Standard Server Way)
      const formData = new FormData();
      formData.append("search", term);
      
      const data = await searchProducts(formData); // 🟢 Server ko call kiya
      setResults(data);
      setIsSearching(false);
    } else {
      setResults([]);
    }
  }

  return (
    <div className="relative w-full lg:w-[250px]">
      <div className="flex items-center rounded-full px-4 py-2 bg-[#4e1a51]">
        <Search size={18} className="text-white shrink-0" />
        <input
          type="text"
          name="search"
          placeholder={isSearching ? "Searching..." : "Search..."}
          onChange={handleSearch}
          className="bg-transparent outline-none ml-2 w-full text-white placeholder:text-white/70 text-sm"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl z-[100] border p-2">
          {results.map((item) => (
            <Link 
              key={item.id} 
              href={`/products/${item.slug}`}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg text-[#4e1a51]"
            >
             <img
  src={
    // Pehle check karo agar 'images' array hai aur khali nahi hai
    item.images && item.images !== "NULL" && item.images.length > 0
      ? (item.images.startsWith('http') ? item.images : `https://backend.tigertigerfoods.com${item.images}`)
      // Agar 'images' nahi hai to 'featured_image' check karo
      : item.featured_image && item.featured_image !== "NULL"
        ? (item.featured_image.startsWith('http') ? item.featured_image : `https://backend.tigertigerfoods.com${item.featured_image}`)
        // Agar dono nahi hain to placeholder
        : "https://via.placeholder.com/80?text=No+Image"
  }
  alt={item.name}
  className="w-12 h-12 object-contain rounded bg-gray-50 mr-3"
  // Safety ke liye onError handle zaroor rakhen
  onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=Error"; }}
/>
              <span className="text-xs font-medium truncate">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
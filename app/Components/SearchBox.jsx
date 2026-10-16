"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const BACKEND = "https://backend.tigertigerfoods.com";
const SEARCH_API = `${BACKEND}/api/get-products`;

// Get the original image URL from the item data
function getOriginalSrc(item) {
  const raw =
    item.images && item.images !== "NULL" && item.images.length > 0
      ? item.images
      : item.featured_image && item.featured_image !== "NULL"
      ? item.featured_image
      : null;

  if (!raw) return null;
  return raw.startsWith("http") ? raw : `${BACKEND}${raw}`;
}

// Build a tiny 96x96 webp thumbnail URL through the resize CDN
function getThumbSrc(item) {
  const original = getOriginalSrc(item);
  if (!original) return null;
  return `https://wsrv.nl/?url=${encodeURIComponent(
    original
  )}&w=96&h=96&fit=contain&output=webp&q=60`;
}

// Thumbnail: tiny CDN image first, then original, then placeholder
function Thumb({ item }) {
  const thumb = getThumbSrc(item);
  const original = getOriginalSrc(item);

  const [stage, setStage] = useState(0); // 0 = thumb, 1 = original, 2 = placeholder
  const [loaded, setLoaded] = useState(false);

  const sources = [thumb, original, "/placeholder.png"];
  const src = sources[stage] || "/placeholder.png";

  return (
    <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-100 relative">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={item.name || "Product thumbnail"}
        width={48}
        height={48}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (stage < 2) setStage(stage + 1);
          else setLoaded(true);
        }}
        className={`w-full h-full object-contain transition-opacity duration-200 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const cacheRef = useRef(new Map()); // in-memory cache for repeated queries

  // Close dropdown on outside click or scroll
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

  // Debounced search: direct fetch, cancels old requests, uses cache
  useEffect(() => {
    const q = query.trim();

    if (q.length <= 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    // Instant result if this query was already searched
    if (cacheRef.current.has(q)) {
      setResults(cacheRef.current.get(q));
      setIsSearching(false);
      return;
    }

    const controller = new AbortController();
    setIsSearching(true);

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${SEARCH_API}?search=${encodeURIComponent(q)}`, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Search request failed");

        const json = await res.json();
        const list = json?.success && Array.isArray(json.data) ? json.data : [];
        const limited = list.slice(0, 10);

        // Start downloading the small thumbnails before the dropdown renders
        limited.forEach((item) => {
          const url = getThumbSrc(item);
          if (url) {
            const img = new window.Image();
            img.src = url;
          }
        });

        cacheRef.current.set(q, limited);
        setResults(limited);
      } catch (error) {
        if (error.name === "AbortError") return; // ignore cancelled requests
        console.error("Search error:", error);
        setResults([]);
      } finally {
        if (!controller.signal.aborted) setIsSearching(false);
      }
    }, 250);

    // Cleanup: cancel timer and any in-flight request
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div ref={searchRef} className="relative w-full lg:w-[280px]">
      <div className="flex items-center rounded-full px-5 py-2.5 bg-[#4e1a51] shadow-md border border-white/10 transition-all focus-within:ring-2 focus-within:ring-white/20">
        <Search size={18} className="text-white shrink-0" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          value={query}
          placeholder={isSearching ? "Searching..." : "Search..."}
          onChange={handleSearch}
          className="bg-transparent outline-none ml-2 w-full text-white placeholder:text-white/70 text-sm font-medium"
        />
      </div>

      {/* Search results dropdown, aligned to the right edge */}
      {results.length > 0 && (
        <div
          className="
            absolute top-full right-0 mt-3 w-[300px] md:w-[350px] bg-white rounded-2xl shadow-2xl z-[100] border p-2
            max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4e1a51]
          "
        >
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={
                item.type === "blog"
                  ? `/blogs/${item.slug}`
                  : `/products/${item.slug}/${item.SKU}`
              }
              onClick={() => setResults([])}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl text-[#4e1a51] transition-all"
            >
              <Thumb item={item} />
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold truncate leading-tight">
                  {item.name}
                </span>
                {/* Small sub-text to show whether it is a product or a blog */}
                <span className="text-[10px] text-gray-400 mt-0.5">
                  {item.type === "blog" ? "Blog Article" : `SKU: ${item.SKU || ""}`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
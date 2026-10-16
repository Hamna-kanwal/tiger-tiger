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

// Build the detail page URL for a result item (returns null if data is missing)
function getItemHref(item) {
  if (item.type === "blog") {
    return item.slug ? `/blogs/${item.slug}` : null;
  }
  if (!item.slug || !item.SKU) return null;
  return `/products/${item.slug}/${item.SKU}`;
}

// Fetch one search request and return a clean array
async function fetchList(q, signal) {
  const res = await fetch(`${SEARCH_API}?search=${encodeURIComponent(q)}`, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!res.ok) throw new Error("Search request failed");

  const json = await res.json();
  return json?.success && Array.isArray(json.data) ? json.data : [];
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
  const [noResults, setNoResults] = useState(false);
  const [open, setOpen] = useState(false); // dropdown visibility is separate from the results data
  const searchRef = useRef(null);
  const cacheRef = useRef(new Map()); // in-memory cache for repeated queries
  const navigatingRef = useRef(false); // prevents double navigation (pointerdown + click)

  // Close dropdown only on outside click or Escape (NOT on scroll)
  useEffect(() => {
    const handleOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", handleOutside);
    window.addEventListener("touchstart", handleOutside);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("touchstart", handleOutside);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Debounced search: direct fetch, cancels old requests, uses cache
  useEffect(() => {
    const q = query.trim();

    if (q.length <= 2) {
      setResults([]);
      setNoResults(false);
      setIsSearching(false);
      return;
    }

    // Instant result if this query was already searched
    if (cacheRef.current.has(q)) {
      const cached = cacheRef.current.get(q);
      setResults(cached);
      setNoResults(cached.length === 0);
      setOpen(true);
      setIsSearching(false);
      return;
    }

    const controller = new AbortController();
    setIsSearching(true);

    const timer = setTimeout(async () => {
      try {
        let list = await fetchList(q, controller.signal);

        // Fallback: the full phrase found nothing, so search each word and rank by matches
        if (list.length === 0) {
          const words = q
            .toLowerCase()
            .split(/\s+/)
            .filter((w) => w.length > 2);

          if (words.length > 1) {
            const lists = await Promise.all(
              words.map((w) => fetchList(w, controller.signal).catch(() => []))
            );

            const merged = new Map();
            lists.flat().forEach((item) => {
              merged.set(`${item.type}-${item.id}`, item);
            });

            list = Array.from(merged.values())
              .map((item) => {
                const name = (item.name || "").toLowerCase();
                const score = words.filter((w) => name.includes(w)).length;
                return { item, score };
              })
              .sort((a, b) => b.score - a.score)
              .map((entry) => entry.item);
          }
        }

        // Keep only items that have enough data to build a valid detail URL
        const limited = list.filter((item) => getItemHref(item)).slice(0, 10);

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
        setNoResults(limited.length === 0);
        setOpen(true);
      } catch (error) {
        if (error.name === "AbortError") return; // ignore cancelled requests
        console.error("Search error:", error);
        setResults([]);
        setNoResults(true);
        setOpen(true);
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
    setOpen(true);
  }

  // Reopen the dropdown when the input is focused again
  function handleFocus() {
    if (results.length > 0 || noResults) setOpen(true);
  }

  // Hard navigation so the detail page always loads fresh and cannot be interrupted
  function goTo(href) {
    if (navigatingRef.current) return;
    navigatingRef.current = true;
    console.log("Search result navigation:", href);
    setOpen(false);
    window.location.assign(href);
  }

  // Mouse: navigate on pointer down, before anything can unmount the dropdown
  function handlePointerDown(e, href) {
    if (e.pointerType !== "mouse") return; // touch is handled by onClick
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return; // keep new-tab clicks working
    e.preventDefault();
    goTo(href);
  }

  // Touch and keyboard (Enter): navigate on click
  function handleClick(e, href) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    goTo(href);
  }

  const showDropdown = open && (results.length > 0 || noResults);

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
          onFocus={handleFocus}
          className="bg-transparent outline-none ml-2 w-full text-white placeholder:text-white/70 text-sm font-medium"
        />
      </div>

      {/* Search results dropdown, aligned to the right edge */}
      {showDropdown && (
        <div
          className="
            absolute top-full right-0 mt-3 w-[300px] md:w-[350px] bg-white rounded-2xl shadow-2xl z-[100] border p-2
            max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4e1a51]
          "
        >
          {results.length === 0 ? (
            <div className="p-4 text-center text-xs text-gray-500">
              No results found for &quot;{query.trim()}&quot;
            </div>
          ) : (
            results.map((item) => {
              const href = getItemHref(item);
              return (
                <Link
                  key={`${item.type}-${item.id}`}
                  href={href}
                  onPointerDown={(e) => handlePointerDown(e, href)}
                  onClick={(e) => handleClick(e, href)}
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
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
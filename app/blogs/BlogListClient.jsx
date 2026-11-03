"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const brandPurple = "#431A4F";
const PAGE_SIZE = 15;

// Optimized HTML stripper
const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>?/gm, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
};

export default function BlogListClient({ blogs }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + PAGE_SIZE);
  };

  return (
    <>
      {/* Without JavaScript, show every card and hide the Load More button */}
      <noscript>
        <style>{`.blog-card-hidden{display:flex !important;} .blog-load-more{display:none !important;}`}</style>
      </noscript>

      {/* All cards are rendered in the server HTML. Cards beyond the visible count are only hidden with CSS. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <article
            key={blog._id || blog.slug || index}
            className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 ${
              index >= visibleCount ? 'blog-card-hidden' : ''
            }`}
            style={index >= visibleCount ? { display: 'none' } : undefined}
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={blog.image || "/fallback.png"}
                alt={blog.title || "Blog post image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-[#431A4F]/70 flex flex-col items-center justify-center p-6 text-center transition-all group-hover:bg-[#431A4F]/85">
                <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-2 line-clamp-3">
                  {blog.title}
                </h3>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow text-center items-center">
              <h4 className="font-extrabold text-[#431A4F] text-lg mb-3 uppercase tracking-tight line-clamp-2">
                {blog.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {stripHtml(blog.description || blog.desc) || "Explore our latest culinary insights."}
              </p>
              <Link
                href={`/blogs/${blog.slug.replace(/^\/+/, '')}`}
                className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:gap-4 hover:text-[#D2B57B]"
                style={{ color: brandPurple }}
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {visibleCount < blogs.length && (
        <div className="blog-load-more mt-16 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-12 py-4 rounded-full font-black uppercase tracking-widest text-sm border-2 border-[#431A4F] bg-[#431A4F] text-white transition-all duration-300 hover:bg-transparent hover:text-[#431A4F] active:scale-95"
          >
            Load More
          </button>
        </div>
      )}

      {blogs.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No blogs available at this time.
        </div>
      )}
    </>
  );
}
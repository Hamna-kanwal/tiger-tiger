"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogsAction } from '../action';

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(15);
  const brandPurple = "#431A4F";

  // Optimized HTML Stripper
  const stripHtml = (html) => {
    if (!html) return "";
    return html
      .replace(/<[^>]*>?/gm, '') 
      .replace(/&nbsp;/g, ' ')
      .trim();
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const result = await getBlogsAction();
        if (result.success) {
          setBlogs(result.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 15);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <Loader2 className="animate-spin text-[#431A4F]" size={40} />
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 mt-8">
          <h2 className="text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
            Latest Blog
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#431A4F] mb-6 opacity-90">
            Read news, blogs and latest articles from Tiger Tiger Foods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((blog, index) => (
            <article 
              key={blog._id || blog.slug || index} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500"
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
                  href={`/blogs/${blog.slug}`}
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
          <div className="mt-16 flex justify-center">
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
      </div>
    </section>
  );
};

export default LatestBlog;
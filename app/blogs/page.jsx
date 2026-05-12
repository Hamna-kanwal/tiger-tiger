"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const brandPurple = "#431A4F";

  // ✅ Function to clean HTML and Encoded Tags completely
  const stripHtml = (html) => {
    if (!html) return "";

    // 1. Pehle encoded characters ko decode karein (e.g. &lt; to <)
    const decodedHtml = html
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ');

    // 2. Phir saare HTML tags ko remove karein
    const cleanText = decodedHtml.replace(/<\/?[^>]+(>|$)/g, "");

    // 3. Extra white spaces ko khatam karein
    return cleanText.trim();
  };

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await fetch("https://backend.tigertigerfoods.com/api/get-blogs");
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);

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
        
        {/* Header Section */}
        <div className="mb-8 mt-8">
          <h2 className="text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
            Latest Blog
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#431A4F] mb-6 opacity-90">
            Read news, blogs and latest articles from Tiger Tiger Foods
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog._id || blog.slug} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500"
            >
              
              {/* Image Section with Overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={blog.image || "/fallback.png"} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={blog.image?.startsWith('http')} 
                />
                <div className="absolute inset-0 bg-[#431A4F]/70 flex flex-col items-center justify-center p-6 text-center opacity-100 group-hover:bg-[#431A4F]/85 transition-all">
                  <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-2 line-clamp-3">
                    {blog.title}
                  </h3>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="p-8 flex flex-col flex-grow text-center items-center">
                <h4 className="font-extrabold text-[#431A4F] text-lg mb-3 uppercase tracking-tight line-clamp-2">
                  {blog.title}
                </h4>
                
                {/* Description with HTML Stripping */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {stripHtml(blog.description || blog.desc) || "Explore our latest culinary insights and updates."}
                </p>
                
                {/* Navigation Link */}
                <Link 
                  href={`/blogs/${blog.slug}`}
                  style={{ color: brandPurple }}
                  className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:gap-4 hover:text-[#D2B57B]"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
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
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getSingleBlogAction, getLatestSidebarBlogsAction } from '../../action';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const blogResult = await getSingleBlogAction(slug);
        
        if (blogResult.success) {
          setBlog(blogResult.data);
          const sidebarResult = await getLatestSidebarBlogsAction(slug);
          if (sidebarResult.success) {
            setRelatedBlogs(sidebarResult.data);
          }
        }
      } catch (error) {
        console.error("❌ Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-[#431A4F]" size={40} />
      </div>
    );
  }

  if (!blog) return <div className="text-center py-20 font-bold">Blog not found.</div>;

  return (
    <article className="min-h-screen bg-white mt-20">
      {/* Header Banner */}
      <div className="pt-20 pb-40 px-6 text-center bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-[#431A4F] uppercase leading-tight tracking-tighter">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
  <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/20 bg-white">
    {/* 
      1. width aur height yahan placeholder hain, Next.js inki ratio maintain rakhta hai.
      2. 'w-full h-auto' se image container ki width le legi aur height automatically set hogi.
    */}
    <Image 
      src={blog.image || "/fallback.png"} 
      alt={blog.title} 
      width={1200} // Aapki standard width
      height={800} // Aapki standard height (jo image ko bada dikhaye)
      priority 
      className="w-full h-auto block object-contain" 
      // object-contain se image ka koi kona nahi katega
    />
  </div>
</div>

      {/* Main Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div 
            className="blog-rich-text prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description || blog.desc }} 
          />
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-8 mb-10">
            <h2 className="text-[#431A4F] font-black text-2xl uppercase tracking-tighter border-b-4  inline-block mb-2">
              Latest Reads
            </h2>

            <div className="space-y-10">
              {relatedBlogs.map((item, index) => (
                <Link 
                  key={item._id || index} 
                  href={`/blogs/${item.slug}`}
                  className="group block overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                  <div 
                    className="p-6 rounded-[1.5rem] flex flex-col h-full shadow-md border border-white/10"
                    style={{ backgroundColor: '#431A4F' }} 
                  >
                    <div className="relative w-full h-48 mb-6 rounded-[1rem] overflow-hidden bg-[#35153f]">
                      <Image 
                        src={item.image || "/fallback.png"} 
                        alt={item.title} 
                        fill 
                        sizes="(max-w-768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized={item.image?.startsWith('http')}
                      />
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h3 className="text-white font-black text-lg leading-tight uppercase tracking-tighter mb-8 line-clamp-3">
                        {item.title}
                      </h3>
                      <div className="mt-auto">
                        <span className="text-white font-black text-xs uppercase tracking-widest border-b-2 border-[#D2B57B] pb-1">
                          READ MORE
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .blog-rich-text h2 { color: #431A4F; font-weight: 900; margin-top: 3rem; font-size: 2rem; text-transform: uppercase; border-bottom: 2px solid #f3f4f6; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
        .blog-rich-text p { margin-bottom: 1.5rem; font-size: 1.125rem; color: #374151; }
        .blog-rich-text strong { color: #431A4F; font-weight: 800; }
        .blog-rich-text img { border-radius: 2rem; margin: 3rem 0; max-width: 100%; height: auto; }
      `}</style>
    </article>
  );
};

export default BlogDetail;
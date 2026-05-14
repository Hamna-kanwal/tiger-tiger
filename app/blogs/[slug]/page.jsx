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
        // Fetching in parallel for speed
        const [blogResult, sidebarResult] = await Promise.all([
          getSingleBlogAction(slug),
          getLatestSidebarBlogsAction(slug)
        ]);
        
        if (blogResult?.success) {
          setBlog(blogResult.data);
        }
        if (sidebarResult?.success) {
          setRelatedBlogs(sidebarResult.data);
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

  if (!blog) {
    return (
      <div className="text-center py-40">
        <h2 className="text-2xl font-bold text-[#431A4F]">Blog not found.</h2>
        <Link href="/blogs" className="mt-4 text-blue-600 underline block">Return to Blogs</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="pt-32 pb-44 px-6 text-center bg-gray-50">
        <div className="max-w-5xl mx-auto">
      
          <h1 className="text-3xl md:text-5xl font-black text-[#431A4F] uppercase leading-tight tracking-tighter">
            {blog.title}
          </h1>
        </div>
      </div>

   <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
  <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white"> 
    <Image 
      src={blog.image || "/fallback.png"} 
      alt={blog.title} 
      width={1200} // Approximate width
      height={800} // Approximate height (16:9)
      priority
      layout="responsive" // Isse image container ki width ke hisab se scale hogi
      className="w-full h-auto" 
    />
  </div>
</div>

      {/* Main Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Blog Content */}
        <div className="lg:col-span-8">
          <div 
            className="blog-rich-text prose prose-lg prose-purple max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description || blog.desc }} 
          />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8 mb-10">
            <h2 className="text-[#431A4F] font-black text-2xl uppercase tracking-tighter border-b-4 border-[#431A4F] inline-block mb-6">
              Latest Reads
            </h2>

            <div className="space-y-6">
              {relatedBlogs.map((item) => (
                <Link 
                  key={item._id || item.slug} 
                  href={`/blogs/${item.slug}`}
                  className="group flex flex-col bg-[#431A4F] rounded-[1.5rem] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative w-full h-40 overflow-hidden bg-[#35153f]">
                    <Image 
                      src={item.image || "/fallback.png"} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-base leading-tight uppercase tracking-tight line-clamp-2 mb-4">
                      {item.title}
                    </h3>
                    <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#D2B57B] pb-1">
                      READ MORE
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Scoped Styles for Rich Text */}
      <style jsx global>{`
        .blog-rich-text h2 { color: #431A4F; font-weight: 900; margin-top: 2.5rem; font-size: 1.75rem; text-transform: uppercase; margin-bottom: 1rem; }
        .blog-rich-text h3 { color: #431A4F; font-weight: 800; margin-top: 2rem; font-size: 1.5rem; }
        .blog-rich-text p { margin-bottom: 1.25rem; font-size: 1.1rem; color: #374151; line-height: 1.8; }
        .blog-rich-text strong { color: #431A4F; font-weight: 800; }
        .blog-rich-text img { border-radius: 1.5rem; margin: 2rem 0; width: 100%; height: auto; }
        .blog-rich-text ul, .blog-rich-text ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
        .blog-rich-text li { margin-bottom: 0.5rem; list-style-position: outside; }
      `}</style>
    </article>
  );
};

export default BlogDetail;
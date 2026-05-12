"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Loader2, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // 1. Fetch current blog detail
        const res = await fetch(`https://backend.tigertigerfoods.com/api/get-blog/${slug}`);
        const json = await res.json();

        // 2. Fetch all blogs for the sidebar
        const allRes = await fetch("https://backend.tigertigerfoods.com/api/get-blogs");
        const allData = await allRes.json();

        if (json.success) {
          setBlog(json.data);
          // Sidebar mein current blog ko nikaal kar baqi dikhaein
          if (allData.success) {
            const filtered = allData.data.filter(b => b.slug !== slug).slice(0, 5);
            setRelatedBlogs(filtered);
          }
        }
      } catch (error) {
        console.error("❌ Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogData();
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
    <article className="min-h-screen bg-white">
   {/* --- HEADER BANNER SECTION --- */}
      <div className=" pt-30 pb-40 px-6 text-center">
        <div className="max-w-5xl mx-auto">
        

            {/* Title on the Colored Background */}
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black text-[#431A4F] uppercase leading-tight tracking-tighter">
                {blog.title}
            </h1>
        </div>
      </div>

      {/* --- FEATURED IMAGE CARD --- */}
   {/* --- FEATURED IMAGE CARD --- */}
      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/20 bg-white">
          <img 
              src={blog.image || "/fallback.png"} 
              alt={blog.title} 
              className="w-full h-auto block" // Is se image poori ayegi aur height khud adjust hogi
          />
        </div>
      </div>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Blog Content */}
        <div className="lg:col-span-8">
          <div 
            className="blog-rich-text prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description || blog.desc }} 
          />
        </div>

      {/* Right Column: Sidebar (More Blogs) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-12">
            
           {/* Sidebar Blogs List */}
<div className="space-y-10">
  {relatedBlogs.map((item, index) => {
    return (
      <Link 
        key={item._id || index} 
        href={`/blogs/${item.slug}`}
        className="group block overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      >
        <div 
          className="p-6 rounded-[1.5rem] flex flex-col h-full shadow-md border border-white/10"
          style={{ backgroundColor: '#431A4F' }} // ✅ Sirf yahi color apply hoga
        >
          {/* Blog Thumbnail Image */}
          <div className="relative w-full h-48 mb-6 rounded-[1rem] overflow-hidden">
            <Image 
              src={item.image || "/fallback.png"} 
              alt={item.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized={item.image?.startsWith('http')}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            {/* ✅ Text color white kar diya hai taake dark background par nazar aaye */}
            <h3 className="text-white font-black text-lg md:text-xl leading-tight uppercase tracking-tighter mb-8 line-clamp-3 group-hover:text-[#D2B57B] transition-colors">
              {item.title}
            </h3>
            
            {/* Read More Text (Bottom aligned) */}
            <div className="mt-auto">
              <span className="text-white font-black text-xs uppercase tracking-widest border-b-2 border-[#D2B57B] pb-1 group-hover:text-[#D2B57B] transition-colors">
                READ MORE
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  })}
</div>

        
          </div>
        </aside>
      </div>

      {/* --- STYLES --- */}
      <style jsx global>{`
        .blog-rich-text h2 { color: #431A4F; font-weight: 900; margin-top: 3rem; font-size: 2rem; text-transform: uppercase; border-bottom: 2px solid #f3f4f6; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
        .blog-rich-text p { margin-bottom: 1.5rem; font-size: 1.125rem; color: #374151; }
        .blog-rich-text ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 2rem; }
        .blog-rich-text li { margin-bottom: 0.5rem; }
        .blog-rich-text strong { color: #431A4F; font-weight: 800; }
        .blog-rich-text img { border-radius: 2rem; margin: 3rem 0; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }
      `}</style>
    </article>
  );
};

export default BlogDetail;
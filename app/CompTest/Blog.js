"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestBlog = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#EED697";

  const blogs = [
    {
      title: "Authentic Sourcing: Behind the Scenes",
      desc: "How we ensure every spice meets our high standards.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800",
    },
    {
      title: "The Art of Traditional Asian Cooking",
      desc: "Expert tips for using our premium ingredients in your kitchen.",
      image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800",
    },
    {
      title: "Wholesale Trends for 2026",
      desc: "Stay ahead of the market with our latest industry insights.",
      image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?q=80&w=800",
    }
  ];

  return (
    <section className="py-20- px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="eczar text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
            Latest Blog
          </h2>
        
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col">
              
              {/* Image Container with Purple Overlay (As per your reference) */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image Overlay: Purple with transparency */}
                <div className="absolute inset-0 bg-[#431A4F]/70 flex flex-col items-center justify-center p-6 text-center opacity-100 group-hover:bg-[#431A4F]/80 transition-all">
                  <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-2">
                    {blog.title}
                  </h3>
             
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow text-center">
                <h4 className="font-extrabold text-[#431A4F] text-lg mb-3 uppercase tracking-tight line-clamp-1">
                  {blog.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.desc}
                </p>
                
                {/* Read More Button */}
                <button className="flex items-center justify-center gap-2 text-[#431A4F] font-black text-sm uppercase tracking-widest group-hover:text-[#EED697] transition-colors">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Action Button --- */}
        <div className="text-center mt-16">
          <button className="bg-[#431A4F] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#5a246a] hover:shadow-2xl hover:shadow-[#431A4F]/30 transition-all duration-300">
            View All Blogs
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;
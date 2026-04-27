"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const LatestBlog = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";
  const [isMainBtnHovered, setIsMainBtnHovered] = useState(false);

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
    },
    // --- Doosri Line (Row) ka data yahan se start hai ---
    {
      title: "Sustainable Packaging Solutions",
      desc: "Our commitment to eco-friendly practices in food logistics.",
      image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?q=80&w=800",
    },
    {
      title: "Mastering Asian Sauces",
      desc: "A deep dive into the perfect balance of sweet and savory.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800",
    },
    {
      title: "Spice Health Benefits",
      desc: "Exploring the nutritional power of turmeric and ginger.",
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800",
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="mb-8 mt-8">
          <h2 className="text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
            Latest Blog
          </h2>
        
            <p className="text-sm md:text-base leading-relaxed text-[#431A4F]  mb-6 opacity-90">
          Read news, blogs and latest articles from Tiger Tiger Foods
          </p>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#431A4F]/70 flex flex-col items-center justify-center p-6 text-center opacity-100 group-hover:bg-[#431A4F]/85 transition-all">
                  <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-2">
                    {blog.title}
                  </h3>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow text-center items-center">
                <h4 className="font-extrabold text-[#431A4F] text-lg mb-3 uppercase tracking-tight">
                  {blog.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.desc}
                </p>
                
                {/* Read More Link Styling */}
                <button 
                  style={{ color: brandPurple }}
                  className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.3em] group-hover:text-[#D2B57B]"
                >
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;
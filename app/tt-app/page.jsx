"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppLandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative w-full h-full">
   <div className="w-full overflow-hidden">
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <Image
            src="/mobile image.webp"
            alt="bg"
            fill
            className="object-cover"
          />

          {/* Content Box */}
          <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-lg mx-4">
            <h2 className="text-2xl font-semibold mb-3">
            Your Shortcut to Great Food Choices
            </h2>


            <p className="text-gray-600 text-sm mb-5">
                Explore the full Tiger Tiger range in one place. Simple to use, easy to navigate, and always within reach.

            </p>

  <div className="flex gap-4">
             <Link 
  href="#" 
  className="flex items-center gap-3 bg-white text-[#4e1a51] border border-gray-300 px-10 py-4 rounded-xl font-bold
             hover:bg-[#4e1a51] hover:text-[white]"
>
  Download the App
</Link>
            <Link 
  href="#" 
  className="flex items-center gap-3 bg-[#4e1a51] text-white border border-gray-300 px-10 py-4 rounded-xl font-bold 
             hover:bg-[white] hover:text-[#4e1a51] hover:border-[#4e1a51] "
>
Browse Products
</Link>
          </div>
          </div>

          {/* Mobile Image */}
          <div className="absolute mt-20 right-50 -bottom-[140px] hidden z-40 md:block">
            <Image
              src="/mobile_image.webp"
              alt="phone"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </section>
      </div>


      {/* ================= SECTION 2: INTRO & SEARCH ================= */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need, All in One App</h2>
             <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Tiger Tiger app brings our entire product range together in a way that feels straightforward and easy to use. Whether you are looking for everyday essentials or something new to try, you can find it quickly without any unnecessary steps.
Built for convenience, the app helps you explore, select, and stay connected without switching between platforms.
             </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative flex justify-center">
              <Image
                src="/mobile_phone.webp"
                alt="Easy Searching"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Designed to Make Things Easier</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Easy Browsing</h4>
                  <p className="text-gray-600">Move through categories without confusion. Everything is clearly organised so you can find what you need without wasting time.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Wide Product Range</h4>
                  <p className="text-gray-600">From sauces and spices to speciality ingredients, the app gives you access to a broad selection suited for both home cooking and business use.</p>
                </div>
                   <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Quick Access</h4>
                  <p className="text-gray-600">Your frequently viewed and preferred products are always within reach, making repeat selections simple.</p>
                </div>
                 <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Direct Communication</h4>
                  <p className="text-gray-600">Have a question or need support? The app keeps everything in one place so you can reach out without delay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FEATURES GRID ================= */}
      {/* <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#C1D72E] min-h-[250px] rounded-2xl p-8 shadow-sm flex flex-col justify-center text-center hover:shadow-md transition-all">
              <h4 className="text-xl font-bold mb-2">Quick Access</h4>
              <p className="text-sm">Your frequently viewed and preferred products are always within reach.</p>
            </div>
            <div className="bg-[#8EE9E6] min-h-[250px] rounded-2xl p-8 shadow-sm flex flex-col justify-center text-center hover:shadow-md transition-all">
              <h4 className="text-xl font-bold mb-2">Direct Support</h4>
              <p className="text-sm">Have a question? Reach out through the app without any delay.</p>
            </div>
            <div className="bg-[#FF5A5F] min-h-[250px] rounded-2xl p-8 shadow-sm flex flex-col justify-center text-center hover:shadow-md transition-all text-white">
              <h4 className="text-xl font-bold mb-2">Explore More</h4>
              <p className="text-sm">Instead of searching endlessly, discover products naturally through categories.</p>
            </div>
            <div className="bg-[#FFD700] min-h-[250px] rounded-2xl p-8 shadow-sm flex flex-col justify-center text-center hover:shadow-md transition-all">
              <h4 className="text-xl font-bold mb-2">Reliable Performance</h4>
              <p className="text-sm">Built for everyday use without distractions or unnecessary features.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= SECTION 4: SHOWCASE ================= */}
  <section className="w-full bg-white py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Heading & Content */}
    <div className="mb-16 space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Explore More, <span className="text-[#4e1a51]">Search Less</span>
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          The app is built for people who want a smooth experience. Instead of searching endlessly, 
          you can move through well-structured categories and discover products naturally.
        </p>
        <p className="text-[#4e1a51] font-semibold text-base md:text-lg italic opacity-90">
          Whether you already know what you need or you are just browsing, the process feels effortless from start to finish.
        </p>
      </div>
    </div>

    {/* Showcase Grid - Adjusted for Visual Flow */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
      <div className="relative flex justify-center hover:scale-105 transition-transform duration-500">
        <Image 
          src="/iPhone 15 Pro Mockup1.webp" 
          alt="Explore Categories" 
          width={280} 
          height={560} 
          className="mx-auto drop-shadow-xl" 
        />
      </div>

      <div className="relative flex justify-center z-10">
        <div className="hover:scale-110 transition-transform duration-500">
          <Image 
            src="/iPhone 15 Pro Mockup2.webp" 
            alt="Seamless Experience" 
            width={320} 
            height={640} 
            className="mx-auto scale-110 drop-shadow-[0_35px_35px_rgba(78,26,81,0.25)]" 
          />
        </div>
      </div>

      <div className="relative flex justify-center hover:scale-105 transition-transform duration-500">
        <Image 
          src="/iPhone 15 Pro Mockup3.webp" 
          alt="Effortless Browsing" 
          width={280} 
          height={560} 
          className="mx-auto drop-shadow-xl" 
        />
      </div>

      <div className="relative flex justify-center hover:scale-105 transition-transform duration-500">
        <Image 
          src="/iPhone 15 Pro Mockup4.webp" 
          alt="Smooth Process" 
          width={280} 
          height={560} 
          className="mx-auto drop-shadow-xl" 
        />
      </div>
    </div>
  </div>
</section>
{/* ================= SECTION: WHY THE APP (Built Around Everyday Use) ================= */}
<section className="w-full bg-[#F9FAFB] py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Built Around <span className="text-[#4e1a51]">Everyday Use</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        This app isn’t overloaded with features you won’t use. It focuses on what matters — 
        making your experience simple, reliable, and consistent.
      </p>
    </div>

    {/* Feature Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Feature 1: No Distractions */}
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow group text-center">
        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4e1a51] transition-colors">
          <svg className="w-8 h-8 text-[#4e1a51] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">No Distractions</h3>
        <p className="text-gray-600">
          Check products and manage your tasks in one place without unnecessary clutter or complex steps.
        </p>
      </div>

      {/* Feature 2: Reliability */}
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow group text-center">
        <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD700] transition-colors">
          <svg className="w-8 h-8 text-yellow-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Simple & Reliable</h3>
        <p className="text-gray-600">
          A consistent experience that works exactly the way you expect it to, every single time.
        </p>
      </div>

      {/* Feature 3: Stay Updated */}
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow group text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
          <svg className="w-8 h-8 text-blue-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h3>
        <p className="text-gray-600">
          Get real-time updates on products and trends within the Tiger Tiger range effortlessly.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ================= SECTION 5: TRUST & RELIABILITY ================= */}
<section className="w-full bg-white py-24 border-t border-gray-50">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-[#4e1a51]/5 rounded-full scale-110 blur-2xl"></div>
        <Image 
          src="/image1.webp" 
          alt="Reliable Experience" 
          width={500} 
          height={500} 
          className="relative z-10 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
    
    {/* Left Side: Content */}
    <div className="w-full md:w-1/2 space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Reliable & Functional
      </div>
      
      <h2 className="text-4xl font-bold text-gray-900 leading-tight">
        Simple, Practical, <span className="text-[#4e1a51]">Reliable</span>
      </h2>
      
      <div className="space-y-4">
        <p className="text-gray-600 text-lg leading-relaxed">
          We’ve kept things clear and functional. No clutter, no confusion — just a straightforward way to explore and access the Tiger Tiger range.
        </p>
        <p className="text-gray-900 font-semibold text-lg flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#4e1a51]"></span>
          It works the way you expect it to, every time.
        </p>
      </div>
    </div>

    {/* Right Side: Simple Product/App Visual */}
  

  </div>
</section>
{/* ================= SECTION 6: FINAL CTA ================= */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto bg-[#4e1a51] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
    
    {/* Background Decorative Elements for Visual Interest */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full -ml-10 -mb-10"></div>
    
    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
      {/* Content */}
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        Get Started Today
      </h2>
      <p className="text-purple-100 text-lg md:text-xl opacity-90">
        Download the Tiger Tiger app and make browsing and ordering easier than ever.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <Link 
          href="#" 
          className="bg-white text-[#4e1a51] px-10 py-4 rounded-2xl font-black text-lg hover:bg-[#C1D72E] hover:text-black transition-all shadow-xl active:scale-95"
        >
          Download Now
        </Link>
        <Link 
          href="#" 
          className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-[#4e1a51] transition-all active:scale-95"
        >
          Get the App
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* ================= SECTION 5: FINAL CTA ================= */}
      {/* <section className="bg-[#e5e7eb] py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image src="/image1.webp" alt="Final App Preview" width={600} height={600} className="drop-shadow-2xl mx-auto lg:mx-0" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Simple, Practical, Reliable</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              No clutter, no confusion — just a straightforward way to explore and access the Tiger Tiger range. Download the app today and make ordering easier than ever.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="#" className="bg-white text-[#4e1a51] px-8 py-4 rounded-xl font-bold shadow-md hover:bg-[#4e1a51] hover:text-white transition-all">
                Download Now
              </Link>
              <Link href="#" className="bg-[#4e1a51] text-white px-8 py-4 rounded-xl font-bold shadow-md hover:bg-white hover:text-[#4e1a51] transition-all">
                Get the App
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      
    </main>
  );
}
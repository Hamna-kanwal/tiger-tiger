"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Icon import kiya

export default function AppLandingPage() {
  
  return (
    <main className="relative w-full h-full">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full bg-[#4e1a51] min-h-[550px] flex items-centeroverflow-hidden ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT CONTENT --- */}
          {/* --- LEFT CONTENT (Updated with Padding/Alignment) --- */}
<div className="z-10 text-white max-w-2xl pl-4 md:pl-36 lg:pl-36">
  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight eczar">
    Your Shortcut to Great Food Choices
  </h2>

  <div className="space-y-4 mb-10">
    <h3 className="text-xl md:text-2xl font-semibold opacity-90">
      Explore the full Tiger Tiger range in one place.
    </h3>
    
    <ul className="space-y-3">
      <li className="flex items-center gap-3 text-lg opacity-85">
        <FaCheckCircle className="text-white/40" /> Simple to use,
      </li>
      <li className="flex items-center gap-3 text-lg opacity-85">
        <FaCheckCircle className="text-white/40" /> Easy to navigate,
      </li>
      <li className="flex items-center gap-3 text-lg opacity-85">
        <FaCheckCircle className="text-white/40" /> and always within reach.
      </li>
    </ul>
  </div>

  {/* Buttons Container - Shifted right */}
  <div className="flex flex-wrap gap-4 items-center">
    {/* Google Play Button */}
    <a 
      href="/download" 
      className="flex items-center gap-3 bg-white border border-gray-400 text-black px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
    >
      {/* SVG remains same */}
      <div className="flex flex-col text-left">
        <span className="text-[9px] uppercase font-bold tracking-wider leading-none text-gray-500">GET IT ON</span>
        <span className="text-base font-semibold leading-tight -mt-0.5">Google Play</span>
      </div>
    </a>

    {/* App Store Button */}
    <a 
      href="/download" 
      className="flex items-center gap-3 bg-white border border-gray-400 text-black px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
    >
      {/* SVG remains same */}
      <div className="flex flex-col text-left">
        <span className="text-[9px] font-medium tracking-tight leading-none text-gray-500">Download on the</span>
        <span className="text-base font-semibold leading-tight">App Store</span>
      </div>
    </a>
  </div>
</div>

       {/* --- RIGHT IMAGES (Phones) --- */}
<div className="relative h-[500px] md:h-[700px] w-full flex justify-center lg:justify-end">
  <div className="relative w-full max-w-[600px] h-full flex justify-end lg:-mr-8">
    <Image
      src="/Frame 11 1.png"
      alt="Tiger Tiger App Interface"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-contain object-right pr-0"
      priority
      loading="eager"
    />
  </div>
</div>
        </div>

        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#6a256e] rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      </section>

      {/* ================= SECTION 2: INTRO & SEARCH ================= */}
<section className="relative w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-[420px] border-4 border-[#A8967D] rounded-2xl overflow-hidden">
            <Image
              src="/mobile_phone.webp"
              alt="Easy Searching"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Designed to Make Things Easier</h3>
            {[{t: "Easy Browsing", d: "Move through categories without confusion."}, {t: "Wide Product Range", d: "Broad selection for home and business."}, {t: "Quick Access", d: "Frequently viewed products within reach."}].map((item, i) => (
              <div key={i}>
                <h4 className="font-bold text-[#4e1a51] text-xl">{item.t}</h4>
                <p className="text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SHOWCASE ================= */}
      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore More, <span className="text-[#4e1a51]">Search Less</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The app is built for people who want a smooth experience. Discover products naturally through well-structured categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
          <Image 
  src="/iPhone 15 Pro Mockup1.webp" 
  alt="M1" 
  width={280} 
  height={560} 
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-contain w-full h-auto" // w-full aur h-auto lagana behtar hai
  priority={false} // Baqi images ke liye lazy loading rehne dein
/>
            <Image src="/iPhone 15 Pro Mockup2.webp" alt="M2" width={320} height={640} loading="lazy" className="mx-auto scale-110 drop-shadow-2xl z-10 hover:scale-125 transition-transform" />
            <Image src="/iPhone 15 Pro Mockup3.webp" alt="M3" width={280} height={560} loading="lazy" className="mx-auto drop-shadow-xl hover:scale-105 transition-transform" />
            <Image src="/iPhone 15 Pro Mockup4.webp" alt="M4" width={280} height={560} loading="lazy" className="mx-auto drop-shadow-xl hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* ================= SECTION: WHY THE APP ================= */}
     {/* ================= SECTION: WHY THE APP ================= */}
      <section className="w-full bg-[#F9FAFB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Built Around <span className="text-[#4e1a51]">Everyday Use</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">No Distractions</h3>
              <p className="text-gray-600">Check products and manage tasks without unnecessary clutter.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Simple & Reliable</h3>
              <p className="text-gray-600">A consistent experience that works exactly the way you expect.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-600">Get real-time updates on products and trends effortlessly.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= SECTION 5: TRUST ================= */}
    <section className="w-full bg-white border-t border-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Purple Background Backdrop Box */}
        <div className="w-full md:w-1/2 flex items-start justify-start">
          
          {/* Main Container - Relative, with z-0 stack to hold children properly */}
          <div className="relative bg-[#5B2956] rounded-[60px] w-full max-w-[420px] aspect-[4/5] flex items-center overflow-hidden shadow-xl z-0">
            
            {/* Decorative Vector Accents (Kept in background safely) */}
            <div className="absolute top-10 right-12 text-white/20 text-3xl font-bold rotate-12 pointer-events-none select-none z-0">ツ</div>
            <div className="absolute top-1/3 left-10 text-[#E2C799]/30 text-4xl pointer-events-none select-none z-0">✦</div>

            {/* Phone & Shadow Wrapper - Layered perfectly on top of purple background */}
      <div className="relative z-10 flex flex-col items-start pt-8">
  <div className="relative transform  drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]">
    <Image 
      src="/image1.webp" 
      alt="Reliable" 
      width={500} 
      height={500} 
      className="object-contain block" 
      loading="lazy"
    />
  </div>
  
  <div className="w-[250px] h-4 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-[100%] blur-md mt-4 opacity-90" />
</div>

          </div>
        </div>

        {/* Right Side: Typography Content Area */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 tracking-tight leading-tight">
            Simple, Practical, Reliable
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
            We’ve kept things clear and functional. Just a straightforward way to access Tiger Tiger.
          </p>
        </div>

      </div>
    </section>

      {/* ================= SECTION 6: FINAL CTA ================= */}
<section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 overflow-hidden">
      {/* Side Blue Frame Line from design */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#1E90FF] pointer-events-none md:block hidden" />

      {/* Left Side: Phone Mockup with Solid Circle Background */}
   {/* Left Side: Phone Mockup Container with Solid Circle Background */}
<div className="relative flex-shrink-0 z-10 flex items-center justify-center  h-[360px] sm:w-[360px] sm:h-[420px]">
 
  
  {/* Phone Wrapper - Layered on top of the circle using z-10 */}
  <div className="relative z-10 transform hover:rotate-0 transition-transform duration-500 ease-out  max-w-[500px] sm:max-w-[280px] drop-shadow-2xl">
    <img 
      src="/mobile_image.webp" 
      alt="Tiger Tiger App Mockup" 
      className="w-full h-full"
    />
  </div>
</div>

      {/* Right Side: Content Area */}
      <div className="flex flex-col items-start max-w-xl text-left z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B2956] mb-4 tracking-tight">
          Download Our New App
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed font-medium">
          Download the Tiger Tiger app and make browsing and ordering easier than ever.
        </p>

        {/* Custom App Store Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          
          {/* Google Play Button */}
          <a 
            href="/download" 
            className="flex items-center gap-3 bg-white border border-gray-400 text-black px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.22998 2.05005C3.07998 2.21005 3 2.46005 3 2.77005V21.2301C3 21.5401 3.07998 21.7901 3.22998 21.9501L3.30998 22.0201L13.51 11.8201V11.5901L3.30998 1.39005L3.22998 2.05005Z" fill="#EA4335"/>
              <path d="M16.91 15.2201L13.51 11.8101V11.5901L16.91 8.18005L17.01 8.24005L21.03 10.5201C22.18 11.1701 22.18 12.2301 21.03 12.8901L17.01 15.1701L16.91 15.2201Z" fill="#FBBC05"/>
              <path d="M13.61 11.7L3.22998 21.9501C3.42998 22.1501 3.75998 22.1701 4.12998 21.9601L16.91 14.7L13.61 11.7Z" fill="#4285F4"/>
              <path d="M13.61 11.7L16.91 8.70005L4.12998 1.44005C3.75998 1.23005 3.42998 1.25005 3.22998 1.45005L13.61 11.7Z" fill="#34A853"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase font-bold tracking-wider leading-none text-gray-500">GET IT ON</span>
              <span className="text-base font-semibold leading-tight -mt-0.5">Google Play</span>
            </div>
          </a>

          {/* App Store Button */}
          <a 
            href="/download" 
            className="flex items-center gap-3 bg-white border border-gray-400 text-black px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.48C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.14 6.9 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5ZM15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C16 1.04 14.9 1.6 14.24 2.38C13.68 3.04 13.19 4.14 13.34 5.39C14.39 5.47 15.4 4.88 15.97 4.17Z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-medium tracking-tight leading-none text-gray-500">Download on the</span>
              <span className="text-base font-semibold leading-tight">App Store</span>
            </div>
          </a>

        </div>
      </div>
    </section>
    </main>
  );
}
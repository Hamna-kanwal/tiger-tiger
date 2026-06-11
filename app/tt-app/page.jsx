"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
 

export default function AppLandingPage() {
  return (
    <main className="relative w-full h-full">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full bg-[#4e1a51] min-h-[550px] flex items-center overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <div className="z-10 text-white max-w-2xl pl-4 md:pl-6 lg:pl-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight eczar">
              Effortless Access to Authentic <br /> Pan Asian Products for Your Business
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
                  <FaCheckCircle className="text-white/40" />Always within reach.
                </li>
              </ul>
            </div>

{/* Buttons Container */}
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

          {/* --- RIGHT IMAGES --- */}
          <div className="relative h-[500px] md:h-[700px] w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] h-full flex justify-end lg:-mr-8">
              <Image src="/app-hero-image.png" alt="App Interface" fill sizes="50vw" className="object-contain object-right" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: INTRO ================= */}
    <section className="relative w-full bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-center">
    {/* Image Container */}
    <div className="relative aspect-square w-full max-w-[550px] border-4 border-[#A8967D] rounded-2xl overflow-hidden">
      <Image src="/mobile_phone.webp" alt="Easy Searching" fill className="object-cover" />
    </div>

    {/* Content Container */}
    <div className="space-y-2">
      <h3 className="text-3xl font-bold text-gray-900 mb-2">Designed to Make Things Easier</h3>
      {[{t: "Easy Browsing", d: "Move through categories without confusion. Everything is clearly organised so you can find what you need without wasting time."}, {t: "Wide Product Range", d: "Your frequently viewed and preferred products are always within reach, making repeat selections simple."}, {t: "Quick Access", d: "Have a question or need support? The app keeps everything in one place so you can reach out without delay."},
        {t: "Direct Communication", d: "Have a question or need support? The app keeps everything in one place so you can reach out without delay."}
      ].map((item, i) => (
        <div key={i}>
          <h4 className="font-bold text-[#4e1a51] text-lg">{item.t}</h4>
          <p className="text-gray-600 text-sm">{item.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= SECTION 4: SHOWCASE ================= */}
      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Explore More, Search Less</h2>
         
          <p  className="text-sm text-[#333333] md:text-base leading-relaxed mb-6 opacity-90 text-center" >The app is built for people who want a smooth experience. Instead of searching <br/> endlessly, you can move through well-structured categories and discover products <br/> naturally.<br/><span className="text-[#5B2956] md:text-base leading-relaxed">
Whether you already know what you need or you are just browsing, the process feels effortless <br/> from start to finish.</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
            <Image src="/iPhone 15 Pro Mockup1.webp" alt="M1" width={280} height={560} className="object-contain w-full h-auto" />
            <Image src="/iPhone 15 Pro Mockup2.webp" alt="M2" width={320} height={640} className="mx-auto scale-110" />
            <Image src="/iPhone 15 Pro Mockup3.webp" alt="M3" width={280} height={560} className="mx-auto" />
            <Image src="/iPhone 15 Pro Mockup4.webp" alt="M4" width={280} height={560} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: TRUST ================= */}
   <section className="w-full bg-white border-t border-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* Left Side - Image Box */}
    <div className="w-full md:w-1/2 flex justify-start">
      <div className="relative bg-[#5B2956] rounded-[40px] w-full max-w-[550px] aspect-[4/5] flex items-start shadow-lg">
        <div className="relative z-10 w-full ">
          <Image 
            src="/image1.webp" 
            alt="Reliable" 
            width={400} 
            height={400} 
            className="object-contain w-full h-auto" 
          />
        </div>
      </div>
    </div>

    {/* Right Side - Content */}
    <div className="w-full md:w-1/2 space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Simple, Practical, Reliable
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
      We’ve kept things clear and functional. No clutter, no confusion just a straightforward way to explore and access the Tiger Tiger range.
It works the way you expect it to, every time.
      </p>
    </div>

  </div>
</section>

      {/* ================= SECTION 6: FINAL CTA ================= */}
      <section className="relative w-full bg-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#1E90FF] hidden md:block" />
        <div className="relative z-10 max-w-[450px] w-full drop-shadow-2xl">
          <img src="/mobile_image.webp" alt="Tiger Tiger App" className="w-full h-auto object-contain" />
        </div>
        <div className="flex flex-col items-start max-w-xl z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#5B2956] mb-4">Download Our New App</h2>
          <p className="text-gray-600 mb-8">Download the Tiger Tiger app and make ordering easier.</p>
          {/* Buttons Container */}
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
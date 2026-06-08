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
                  <FaCheckCircle className="text-white/40" /> and always within reach.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Buttons yahan... */}
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
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
    {/* Image Container */}
    <div className="relative aspect-square w-full max-w-[400px] border-4 border-[#A8967D] rounded-2xl overflow-hidden">
      <Image src="/mobile_phone.webp" alt="Easy Searching" fill className="object-cover" />
    </div>

    {/* Content Container */}
    <div className="space-y-4">
      <h3 className="text-3xl font-bold text-gray-900 mb-2">Designed to Make Things Easier</h3>
      {[{t: "Easy Browsing", d: "Move through categories without confusion."}, {t: "Wide Product Range", d: "Broad selection for home and business."}, {t: "Quick Access", d: "Frequently viewed products within reach."}].map((item, i) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Explore More, Search Less</h2>
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
      <div className="relative bg-[#5B2956] rounded-[40px] w-full max-w-[360px] aspect-[4/5] flex items-center shadow-lg">
        <div className="relative z-10 w-full px-4">
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
        We’ve kept things clear and functional.
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
        </div>
      </section>

    </main>
  );
}
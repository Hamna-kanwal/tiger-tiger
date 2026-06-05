"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function AppLandingPage() {
  return (
    <main className="relative w-full h-full overflow-x-hidden">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full bg-[#4e1a51] min-h-[550px] flex items-center overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-12">
          
          <div className="z-10 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight eczar">
              Your Shortcut to Great Food Choices
            </h2>

            <div className="space-y-4 mb-10">
              <h3 className="text-xl md:text-2xl font-semibold opacity-90">
                Explore the full Tiger Tiger range in one place.
              </h3>
              <ul className="space-y-3">
                {["Simple to use", "Easy to navigate", "Always within reach"].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-lg opacity-85">
                    <FaCheckCircle className="text-white/40" /> {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* App Buttons (Static) */}
              <button className="flex items-center gap-3 bg-white border border-gray-400 text-black px-4 py-1.5 rounded-md shadow-sm transition-all hover:scale-105">
                <span className="text-base font-semibold">Get it on Google Play</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - Optimized with priority */}
          <div className="relative h-[400px] md:h-[600px] w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-full">
              <Image
                src="/Frame 11 1.png"
                alt="Tiger Tiger App Interface"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: INTRO ================= */}
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

      {/* ================= SECTION 4: SHOWCASE (Lazy Loaded) ================= */}
      <section className="w-full bg-white py-20 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Explore More, <span className="text-[#4e1a51]">Search Less</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {["/iPhone 15 Pro Mockup1.webp", "/iPhone 15 Pro Mockup2.webp", "/iPhone 15 Pro Mockup3.webp", "/iPhone 15 Pro Mockup4.webp"].map((src, i) => (
              <div key={i} className="relative aspect-[9/19] w-full">
                <Image src={src} alt={`Mockup ${i}`} fill className="object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}